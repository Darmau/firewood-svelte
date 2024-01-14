import type {PageServerLoad} from './$types';
import {API_URL} from '$env/static/private';

// 本文件负责fetch首页需要的数据
export const load = (async ({fetch, setHeaders}) => {
  setHeaders({'Cache-Control': 'max-age=600'});

  const featureArticles = await fetch(`${API_URL}/article/featured?page=1&limit=5`).then((res) =>
      res.json()
  );
  const hottestArticles = await fetch(`${API_URL}/article/hottest?limit=10`).then((res) =>
      res.json()
  );
  const randomArticles = await fetch(`${API_URL}/article/random-many`)
  .then((res) => res.json());

  const articleCount = await fetch(`${API_URL}/article/count`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      type: 'all'
    })
  }).then((res) => res.json());

  const websiteCount = await fetch(`${API_URL}/website/count`).then((res) => res.json());

  return {
    feature: featureArticles,
    hottest: hottestArticles,
    random: randomArticles,
    count: {
      article: articleCount,
      website: websiteCount
    }
  };
}) satisfies PageServerLoad;
