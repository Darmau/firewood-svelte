import { API_URL } from '$env/static/private';
import type { RequestHandler } from './$types';

export const PUT = (async ({ url }) => {
  const id = url.searchParams.get('id');

  const response = await fetch(`${API_URL}/article/view?id=${id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    });

  return response;
}) satisfies RequestHandler;