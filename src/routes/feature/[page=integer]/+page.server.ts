import type { PageServerLoad } from './$types';
import { API_URL, CACHE_URL } from '$env/static/private';

// export const prerender = true;

// 负责获取最新的推荐
export const load = (async ({ params: { page }, setHeaders }) => {
	setHeaders({
		'Cache-Control': 'max-age=600'
	});
	const featuredArticles = await fetch(`${CACHE_URL}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			key: `/article/featured?page=${page}&limit=15`
		})
	})
	.then((res) => res.json());

	const hottestArticles = await fetch(`${CACHE_URL}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			key: '/article/hottest?limit=10'
		})
	})
	.then((res) => res.json());

	const count = await fetch(`${API_URL}/article/count`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			type: 'featured'
		})
	});
	const articleCount = await count.json();
	return {
		featuredArticles: featuredArticles,
		hottestArticles: hottestArticles,
		count: articleCount,
		page: Number(page)
	};
}) satisfies PageServerLoad;
