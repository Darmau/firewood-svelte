import type { PageServerLoad } from '../../[slug]/[page]/$types';
import { API_URL } from '$env/static/private';

// 获取指定话题的文章
export const load = (async ({ params: { slug, page } }) => {
  const articles = await fetch(`${API_URL}/article/topic?topic=${slug}&page=${page}&limit=15`)
  const data = await articles.json();
  const count = await fetch(`${API_URL}/article/count`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'topic',
        topic: slug
      }),
    }
  )
  const articleCount = await count.json();
  return {
    articles: data,
    count: articleCount,
    page: Number(page),
    slug: String(slug)
  };
}) satisfies PageServerLoad;