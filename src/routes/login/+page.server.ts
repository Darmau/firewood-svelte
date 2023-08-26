import { loginUser, verifyUser } from '$lib/functions/user.module';
import type { PageServerLoad, Actions } from '../$types';
import { fail, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ cookies }) => {
	const access_token = cookies.get('access_token');

	if (access_token) {
		const response = await verifyUser(access_token);
		if (response) {
			throw redirect(302, '/admin');
		}
	}
};

export const actions: Actions = {
	default: async (event) => {
		const formData = Object.fromEntries(await event.request.formData());

		if (!formData.username || !formData.password) {
			return fail(400, {
				error: '请输入用户名和密码'
			});
		}

		const { username, password } = formData as { username: string; password: string };

		const response = await loginUser(username, password);

		if (!response) {
			return fail(401, {
				error: '用户名或密码错误'
			});
		}

		event.cookies.set('access_token', `${response}`, {
			httpOnly: true,
			path: '/',
			secure: true,
			sameSite: 'strict',
			maxAge: 60 * 60 * 24 * 14
		});

		throw redirect(302, '/admin');
	}
} satisfies Actions;
