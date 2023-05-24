import type { PageServerLoad } from './$types';

// export const prerender = true;

// 本文件负责fetch首页需要的数据
export const load = (async ({ fetch, setHeaders }) => {
  setHeaders({ 'Cache-Control': 'max-age=600' })
  const response = await fetch('/api/homepage')

  const data = await response.json()

  return {
    feature: data.featureArticles,
    latest: data.latestArticles,
    tech: data.techArticles,
    society: data.societyArticles,
    culture: data.cultureArticles,
    travel: data.travelArticles,
    emotion: data.emotionArticles
  }
}) satisfies PageServerLoad;