import type { PageServerLoad } from './$types';
import {API_URL, CACHE_URL} from '$env/static/private';
import { redirect } from '@sveltejs/kit';

function sortCategoryByValue(obj: object) {
	if (!obj) return [];
	// 将对象转换为[key, value]数组
	const entries = Object.entries(obj);

	// 使用Array.sort()按照value从大到小排序
	entries.sort((a, b) => b[1] - a[1]);

	// 构建排序后的数组
	return entries.map(([key, value]) => ({ [key]: value }));
}

export const load = (async ({ params: { blog, page }, setHeaders }) => {
	setHeaders({
		'Cache-Control': 'max-age=600'
	});
	const blogInfo = await fetch(`${CACHE_URL}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			key: `/website/blog?url=${blog}`
		})
	})
	.then((res) => res.json());
	const articles = await fetch(
		`${CACHE_URL}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					key: `/article?website=${blogInfo.url}&page=${page}&limit=15`
				})
			}).then((res) => res.json());

	// 如果没有文章数据，重定向至第一页
	if (articles.length === undefined || articles.length === 0) {
		throw redirect(308, `/blog/${blog}/1`);
	}

	const articleCountLastYear = await fetch(`${API_URL}/website/last-year?id=${blogInfo._id}`).then(
		(res) => res.json()
	);

	const categories = sortCategoryByValue(blogInfo.categories);

	const articleCount = await fetch(`${API_URL}/article/article-count?id=${blogInfo._id}`).then(
		(res) => res.json()
	);

	return {
		blog: blogInfo,
		articles: articles,
		articleCountLastYear: articleCountLastYear,
		categories: categories,
		articleCount: articleCount,
		url: blog,
		page: Number(page)
	};
}) satisfies PageServerLoad;
