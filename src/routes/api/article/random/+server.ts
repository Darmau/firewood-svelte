import { API_URL } from '$env/static/private';
import type { RequestHandler } from '@sveltejs/kit';

export const GET = (async () => {
	const response = await fetch(`${API_URL}/article/random`);
	const article = await response.json();
	return new Response(JSON.stringify(article));
}) satisfies RequestHandler;
