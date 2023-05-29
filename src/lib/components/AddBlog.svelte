<script lang="ts">
	export let closeAdd: () => void;
	export let token: string;

	async function submitForm(event: Event) {
		event.preventDefault();
		const formData = new FormData(event.target as HTMLFormElement);
		const blogData = Object.fromEntries(formData.entries());

		const res = await fetch(`/api/blog`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify(blogData)
		});
		if (res.ok) {
			closeAdd();
		} else {
			console.error(res);
		}
	}
</script>
<form
	method="POST"
	on:submit={submitForm}
	class="bg-white p-4 space-y-6 lg:p-8 rounded-lg w-11/12 lg:w-1/2"
>
	<div class="sm:col-span-4">
		<label for="username" class="block text-sm font-medium leading-6 text-gray-900">博客</label>
		<div class="mt-2">
			<div
				class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-teal-600 sm:max-w-md"
			>
				<input
					type="text"
					name="name"
					id="name"
					class="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
					placeholder="输入博客名称"
				/>
			</div>
		</div>
	</div>
	<div class="sm:col-span-4">
		<label for="username" class="block text-sm font-medium leading-6 text-gray-900">网址</label>
		<div class="mt-2">
			<div
				class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-teal-600 sm:max-w-md"
			>
				<input
					type="text"
					name="url"
					id="url"
					class="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
					placeholder="输入博客网址"
				/>
			</div>
		</div>
	</div>
	<button type="submit" class="border py-2 px-4 rounded bg-teal-600 text-white mr-2"> 保存 </button>
	<button on:click={closeAdd} class="border py-2 px-4 rounded bg-zinc-100"> 取消 </button>
</form>