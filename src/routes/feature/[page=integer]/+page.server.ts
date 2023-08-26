import type { PageServerLoad } from './$types';
import { API_URL } from '$env/static/private';
import {redirect} from "@sveltejs/kit";

// export const prerender = true;

// 负责获取最新的推荐
export const load = (async ({ params: { page }, setHeaders }) => {
  setHeaders({
    'Cache-Control': 'max-age=600'
  })
  const featuredArticles = await fetch(`${API_URL}/article/featured?page=${page}&limit=15`)
  const hottestArticles = await fetch(`${API_URL}/article/hottest?limit=10`)
  const featuredArticleData = await featuredArticles.json();

  // 如果没有文章数据，重定向至第一页
  if (featuredArticleData.length === undefined || featuredArticleData.length === 0) {
    throw redirect(308, `/feature/1`)
  }

  const hottestArticleData = await hottestArticles.json();
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
    featuredArticles: featuredArticleData,
    hottestArticles: hottestArticleData,
    count: articleCount,
    page: Number(page)
  };
}) satisfies PageServerLoad;
