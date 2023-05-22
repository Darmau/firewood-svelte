<!-- 全部博客 -->
<script lang="ts">
	import BlogCard from '$lib/components/BlogCard.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	export let data;
</script>

<main class="mx-auto max-w-7xl px-6 py-8 md:py-12">
	<div class="border-b border-gray-200 dark:border-gray-700 pb-5 mb-8">
		<h1 class="text-base font-semibold leading-6 text-zinc-800 dark:text-zinc-100">作者</h1>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each data.websites as website}
			<BlogCard {website} />
		{/each}
	</div>
	<Pagination
		bind:currentPage={data.page}
		totalArticles={data.count}
		itemPerPage={12}
		path={'/author/latest'}
	/>
</main>
