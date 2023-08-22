import type { PageServerLoad } from "./$types";
import { API_URL } from "$env/static/private";

function sortCategoryByValue(obj: object) {
  // 将对象转换为[key, value]数组
  const entries = Object.entries(obj);

  // 使用Array.sort()按照value从大到小排序
  entries.sort((a, b) => b[1] - a[1]);

  // 构建排序后的数组
  const result = entries.map(([key, value]) => ({ [key]: value }));

  return result;
}

export const load = (async ({ params: { blog, page }, setHeaders }) => {
	setHeaders({
		'Cache-Control': 'max-age=600'
	});
  const blogInfo = await fetch(`${API_URL}/website/blog?url=${blog}`)
														.then(res => res.json());
  const articles = await fetch(`${API_URL}/article?website=${blogInfo.url}&page=${page}&limit=15`).then(res => res.json());

	const articleCountLastYear = await fetch(`${API_URL}/website/last-year?id=${blogInfo._id}`).then(res => res.json());

	const categories = sortCategoryByValue(blogInfo.categories);

	return {
		blog: blogInfo,
    articles: articles,
		articleCountLastYear: articleCountLastYear,
		categories: categories,
		url: blog
	};
}) satisfies PageServerLoad;
