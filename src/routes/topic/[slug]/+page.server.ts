import { redirect } from '@sveltejs/kit';

export function load({ params: { slug } }: { params: { slug: string } }) {
	throw redirect(308, `/topic/${slug}/1`);
}
