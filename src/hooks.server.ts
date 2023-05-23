import type { Handle } from '@sveltejs/kit';
import { redis } from '$lib/redis'

interface CachedResponse {
  body: string;
  [key: string]: string;
}

export const handle: Handle = async ({ event, resolve }): Promise<Response> => {
  const { url } = event;
  if (url.pathname === '/') {
    return resolve(event);
  }
  const key: string = `rendered:${url.pathname}`;

  let cached: CachedResponse = await redis.hGetAll(key);
  if (!cached.body) {
    // if it wasn't cached, we render the pages
    const response: Response = await resolve(event)

    // then convert it into a cachable object
    cached = Object.fromEntries(response.headers.entries());
    cached.body = await response.text();

    if (response.status === 200) {
      redis.hSet(key, cached)
      redis.expire(key, 1800)
    } else {
      return response;
    }
  }

  const { body, ...headers }: CachedResponse = cached;
  return new Response(body, { headers: new Headers(headers) });
}