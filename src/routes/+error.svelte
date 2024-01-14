<script>
	import { page } from '$app/stores';
</script>

<main class="flex justify-center items-center place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
	<div class="text-center">
		<p class="text-base font-medium text-red-600">{$page.status}</p>
		{#if $page.error}
			<h1 class="my-8 text-3xl font-medium tracking-tight text-gray-900 sm:text-5xl">
				{$page.error.message}
			</h1>
		{/if}
		<a
			href="/"
			class="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
			>返回首页</a
		>
	</div>
</main>
