import { API_URL } from '$env/static/private';
import type { RequestHandler } from './$types';

export const GET = (async ({ url }) => {
  const page = url.searchParams.get('page');

  const response = await fetch(`${API_URL}/website/latest?page=${page}&limit=3`,)

  return new Response(JSON.stringify(await response.json()));
}) satisfies RequestHandler;