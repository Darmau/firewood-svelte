<script lang="ts">
	import CoverArticle from '$lib/components/CoverArticle.svelte';
	import Pagination from '$lib/components/Pagination.svelte';

	export let data;
</script>

<main class="mx-auto max-w-4xl px-6 py-8 md:py-12">
	<div class="border-b border-gray-200 dark:border-gray-700 pb-5">
    <h1 class="text-base font-semibold leading-6 text-zinc-800 dark:text-zinc-100">推荐文章</h1>
  </div>
	<div class="flex flex-col gap-12 md:gap-16">
		{#each data.articles as article}
			<CoverArticle {article} />
		{/each}
	</div>
	<Pagination 
    bind:currentPage={data.page}
    totalArticles={data.count}
    itemPerPage={15}
    path={'/feature'}
  />
</main>
