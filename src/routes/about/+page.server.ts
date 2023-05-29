import type { PageServerLoad } from './$types';
import { API_URL } from '$env/static/private';

export const load = (async () => {
  const articleCount = await fetch(`${API_URL}/article/count`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      type: 'all'
    })
  }).then(res => res.json());

  const websiteCount = await fetch(`${API_URL}/website/count`).then(res => res.json());

  return {
    article: articleCount,
    website: websiteCount
  }
}) satisfies PageServerLoad;