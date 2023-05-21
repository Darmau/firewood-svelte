<script>
	import { page } from '$app/stores';
</script>

<main class="flex justify-center items-center h-64 place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
	<div class="text-center">
		<p class="text-base font-semibold text-red-600">{$page.status}</p>
		{#if $page.error}
			<h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
				{$page.error.message}
			</h1>
		{/if}
		<a
			href="/"
			class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>返回首页</a
		>
	</div>
</main>
