import { API_URL } from '$env/static/private';
import type { RequestHandler } from './../block/$types';

// 切换某篇文章的推荐状态
export const PUT = (async ({ url, request }) => {
	const id = url.searchParams.get('id');
	const token = request.headers.get('authorization');

	const response = await fetch(`${API_URL}/article/feature?id=${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: token !== null ? token : ''
		}
	});

	if (response.ok) {
		return new Response(JSON.stringify(response.json()));
	}

	return new Response(JSON.stringify(await response.json()));
}) satisfies RequestHandler;
