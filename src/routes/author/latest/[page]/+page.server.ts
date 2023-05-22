import type { PageServerLoad } from '../../../$types';
import { API_URL } from '$env/static/private';

// 获取博客
export const load = (async ({ params: { page } }) => {
  const articles = await fetch(`${API_URL}/website/latest?page=${page}&limit=24`)
  const data = await articles.json();
  const count = await fetch(`${API_URL}/website/count`,
    {
      method: 'Get',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  return {
    websites: data,
    count: count.json(),
    page: Number(page),
  };
}) satisfies PageServerLoad;