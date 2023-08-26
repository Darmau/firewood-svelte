import { API_URL } from '$env/static/private';
import type { RequestHandler } from './$types';

// 接收请求url中的id参数，以及请求头的authorization参数
export const PUT = (async ({ request }) => {
	const token = request.headers.get('authorization');
	const submitData = JSON.parse(await request.text());

	const response = await fetch(`${API_URL}/website?id=${submitData?.id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: token !== null ? token : ''
		},
		body: JSON.stringify(submitData)
	});

	if (response.ok) {
		return new Response(JSON.stringify(response.json()));
	}

	return new Response(JSON.stringify(response.json()), { status: response.status });
}) satisfies RequestHandler;

// 在body中包含name和url，向/website/add POST 新增网站
export const POST = (async ({ request }) => {
	const token = request.headers.get('authorization');
	const submitData = JSON.parse(await request.text());

	const response = await fetch(`${API_URL}/website/add`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: token !== null ? token : ''
		},
		body: JSON.stringify(submitData)
	});

	if (response.ok) {
		return new Response(JSON.stringify(response.json()));
	}

	return new Response(JSON.stringify(response.json()), { status: response.status });
}) satisfies RequestHandler;

// 删除某个网站
export const DELETE = (async ({ request }) => {
	const token = request.headers.get('authorization');
	const submitData = JSON.parse(await request.text());

	const response = await fetch(`${API_URL}/website?id=${submitData.id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			Authorization: token !== null ? token : ''
		}
	});

	if (response.ok) {
		return new Response(await response.text());
	}

	return new Response(JSON.stringify(response.json()), { status: response.status });
}) satisfies RequestHandler;
