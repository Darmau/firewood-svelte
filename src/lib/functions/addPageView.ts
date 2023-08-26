export default async function addPageView(id: string): Promise<boolean> {
	const response = await fetch(`/api/pageview?id=${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		}
	});

	if (response.ok) {
		return true;
	} else {
		return false;
	}
}
