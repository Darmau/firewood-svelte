import type { Handle } from '@sveltejs/kit';
import { redis } from '$lib/redis'

// CachedResponse为redis中的数据，可能不存在
interface CachedResponse {
  body: string;
  [key: string]: string;
}

export const handle: Handle = async ({ event, resolve }): Promise<Response> => {
  const { url } = event;
  // 访问admin的路由，不做任何处理
  if (url.pathname === '/admin') {
    return resolve(event);
  }

  // 检测accept接收的是html还是json
  let keyPrefix: string = ''
  const accept = event.request.headers.get('accept')
  if (accept?.includes('html')) {
    keyPrefix = 'html'
  } else {
    keyPrefix = 'json'
  }

  const key: string = `${keyPrefix}: ${url.pathname}`;

  let cached: { [key: string]: string } = await redis.hGetAll(key);

  if (!cached.body) {
    const response: Response = await resolve(event);
    // 转换为可缓存格式
    cached = Object.fromEntries(response.headers.entries());
    cached.body = await response.text() || "";

    if (response.status === 200) {
      redis.hSet(key, cached)
      redis.expire(key, 7200)
    } else {
      return response
    }
  }

  const { body, ...headers }: CachedResponse = cached;
  return new Response(
    body,
    { headers: new Headers(headers) }
  )
}