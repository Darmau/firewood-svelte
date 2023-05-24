import type { PageServerLoad } from '../$types';
import { API_URL } from '$env/static/private';

// export const prerender = true;

// 负责获取最新的推荐
export const load = (async ({ params: { page }, setHeaders }) => {
  setHeaders({
    'Cache-Control': 'max-age=600'
  })
  const articles = await fetch(`${API_URL}/article/featured?page=${page}&limit=15`)
  const data = await articles.json();
  const count = await fetch(`${API_URL}/article/count`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'featured'
      }),
    }
  )
  const articleCount = await count.json();
  return {
    articles: data,
    count: articleCount,
    page: page
  };
}) satisfies PageServerLoad;