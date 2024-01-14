import type { PageServerLoad } from './$types';
import { API_URL } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

// 负责获取最新的文章
export const load = (async ({ params: { page }, setHeaders }) => {
	setHeaders({
		'Cache-Control': 'max-age=600'
	});
	const articles = await fetch(`${API_URL}/article/latest?page=${page}&limit=15`).then((res) => res.json());

	// 如果没有文章数据，重定向至第一页
	if (articles.length === undefined || articles.length === 0) {
		throw redirect(308, `/latest/1`);
	}

	const count = await fetch(`${API_URL}/article/count`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			type: 'all'
		})
	});
	const articleCount = await count.json();
	return {
		articles: articles,
		count: articleCount,
		page: Number(page)
	};
}) satisfies PageServerLoad;
