<script lang="ts">
	import CoverArticle from '$lib/components/CoverArticle.svelte';
	import Pagination from '$lib/components/Pagination.svelte';

	export let data;
</script>

<main class="mx-auto max-w-4xl px-6 py-8 md:py-12">
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
