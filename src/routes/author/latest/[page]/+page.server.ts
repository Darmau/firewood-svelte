import type { PageServerLoad } from '../../$types';
import { API_URL } from '$env/static/private';
import type { Website } from '$lib/types/website.type.svelte';

// export const prerender = true;

// 获取博客
export const load = (async ({ params: { page }, setHeaders }) => {
  setHeaders({
    'Cache-Control': 'max-age=600'
  })
  const websiteJson = await fetch(`${API_URL}/website/latest?page=${page}&limit=18`)
  const websites = await websiteJson.json();
  const mergedWebsite = await Promise.all(websites.map(async (website: Website) => {
    const articleJson = await fetch(`${API_URL}/article?website=${website.url}&page=1&limit=3`)
    const latest = await articleJson.json();
    return {
      ...website,
      latest,
    }
  }))
  const count = await fetch(`${API_URL}/website/count`,
    {
      method: 'Get',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  return {
    websites: mergedWebsite,
    count: count.json(),
    page: Number(page),
  };
}) satisfies PageServerLoad;