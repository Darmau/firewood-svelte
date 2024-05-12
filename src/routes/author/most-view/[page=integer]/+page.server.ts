import {API_URL} from '$env/static/private';
import type {PageServerLoad} from './$types';
import {redirect} from '@sveltejs/kit';

// 获取博客
export const load = (async ({params: {page}, setHeaders}) => {
  setHeaders({
    'Cache-Control': 'max-age=600'
  });
  const websites = await fetch(`${API_URL}/website/most-view?page=${page}&limit=21`).then((res) => res.json());

  // 如果没有网站数据，重定向至第一页
  if (websites.length === undefined || websites.length === 0) {
    throw redirect(308, `/author/latest/1`);
  }

  const count = await fetch(`${API_URL}/website/count`, {
    method: 'Get',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => res.json());
  return {
    websites: websites,
    count: count,
    page: Number(page)
  };
}) satisfies PageServerLoad;
