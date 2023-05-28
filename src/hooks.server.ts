import { verifyUser } from '$lib/functions/user.module';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  const { url } = event;
  if (url.pathname !== '/admin') {
    return resolve(event);
  }
  
  const token = await event.cookies.get('access_token');
  if(!token) {
    throw redirect(302, '/login')
  }
  const isValid = await verifyUser(token)
  if(!isValid) {
    // 如果cookie不正确，删除cookie，并重定向
    await event.cookies.delete('access_token')
    throw redirect(302, '/login')
  }
  event.locals.token = token;
  return await resolve(event);
}