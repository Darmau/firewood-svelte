<script lang="ts">
	import type { Website } from '$lib/types/website.type.svelte';
	export let closeEdit: () => void;
	export let blog: Website;
	export let token: string;

	async function submitForm(event: Event) {
		event.preventDefault();
		const formData = new FormData(event.target as HTMLFormElement);
		const blogData = Object.fromEntries(formData.entries());

		const res = await fetch(`/api/blog`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify(blogData)
		});
		if (res.ok) {
			closeEdit();
		} else {
			console.error(res);
		}
	}

	async function deleteBlog(event: Event) {
		event.preventDefault();
		const formElement = document.getElementById("blog") as HTMLFormElement;
		const formData = new FormData(formElement)
		const blogData = Object.fromEntries(formData.entries());

		const res = await fetch(`/api/blog`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify(blogData)
		});
		if (res.ok) {
			closeEdit();
		} else {
			console.error(res);
		}
	}
</script>

<form
	method="POST"
	on:submit={submitForm}
	id="blog"
	class="bg-white p-4 space-y-6 lg:p-8 rounded-lg w-11/12 lg:w-1/2"
>
	<div class="w-full">
		<label for="name" class="block text-sm font-medium leading-6 text-gray-900">博客</label>
		<div class="mt-2">
			<div
				class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-teal-600"
			>
				<!-- 存储blog的id -->
				<input type="hidden" name="id" value={blog._id} />
				<input
					type="text"
					name="name"
					id="name"
					class="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
					placeholder={blog.name}
				/>
			</div>
		</div>
	</div>
	<div class="w-full">
		<label for="description" class="block text-sm font-medium leading-6 text-gray-900">简介</label>
		<div class="mt-2">
			<div
				class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-teal-600"
			>
				<input
					type="text"
					name="description"
					id="description"
					class="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
					placeholder={blog.description}
				/>
			</div>
		</div>
	</div>
	<div class="w-full">
		<label for="url" class="block text-sm font-medium leading-6 text-gray-900">网址</label>
		<div class="mt-2">
			<div
				class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-teal-600"
			>
				<input
					type="text"
					name="url"
					id="url"
					class="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
					placeholder={blog.url}
				/>
			</div>
		</div>
	</div>
	<div class="w-full">
		<label for="rss" class="block text-sm font-medium leading-6 text-gray-900">RSS</label>
		<div class="mt-2">
			<div
				class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-teal-600"
			>
				<input
					type="text"
					name="rss"
					id="rss"
					class="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
					placeholder={blog.rss}
				/>
			</div>
		</div>
	</div>
	<div class="flex justify-between">
		<div>
			<button type="submit" class="border py-2 px-4 rounded bg-teal-600 text-white mr-2">
				保存
			</button>
			<button on:click={closeEdit} class="border py-2 px-4 rounded bg-zinc-100"> 取消 </button>
		</div>
		<button on:click={deleteBlog} class="border py-2 px-4 rounded bg-zinc-100 text-red-700">
			删除</button
		>
	</div>
</form>
