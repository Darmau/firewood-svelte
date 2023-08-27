import { API_URL } from '$env/static/private';
import type { RequestHandler } from './$types';

// 获取博客列表
export const GET = (async ({ url }) => {
	const page = url.searchParams.get('page');

	const response = await fetch(`${API_URL}/website/all?page=${page}&limit=12`);

	return new Response(JSON.stringify(await response.json()));
}) satisfies RequestHandler;
