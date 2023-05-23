import type { Handle } from '@sveltejs/kit';
import { redis } from '$lib/redis'

interface CachedResponse {
  body: string;
  [key: string]: string;
}

export const handle: Handle = async ({ event, resolve }): Promise<Response> => {
  const { url }= event;
  if(url.pathname === '/') {
    return resolve(event);
  }
  const key: string = `rendered:${url.pathname}`;

  const cachedRaw: { [key: string]: string | null } = await redis.hGetAll(key);
  let cached: CachedResponse | null = null;
  
  if (cachedRaw.body) {
    cached = cachedRaw as CachedResponse;
  } else {
    const response: Response = await resolve(event);

    if (response.status === 200) {
      const headers = Object.fromEntries(response.headers.entries());
      const body = await response.text();
      cached = { body, ...headers };

      redis.hSet(key, cached);
      redis.expire(key, 1800);
    } else {
      return response;
    }
  }

  const { body, ...headers }: CachedResponse = cached;
  return new Response(body, { headers: new Headers(headers) });
}