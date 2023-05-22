<script lang="ts">
	import CoverArticle from '$lib/components/CoverArticle.svelte';
	import NormalArticle from '$lib/components/NormalArticle.svelte';
	import Pagination from '$lib/components/Pagination.svelte';

	export let data;
</script>

<svelte:head>
	<title>最新文章 - 积薪</title>
	<meta name="description" content="最新文章" />
</svelte:head>

<main class="mx-auto max-w-4xl px-6 py-8 md:py-12">
  <div class="border-b border-gray-200 dark:border-gray-700 pb-5 mb-8">
    <h1 class="text-base font-semibold leading-6 text-zinc-800 dark:text-zinc-100">最新文章</h1>
  </div>
  <div class="flex flex-col gap-12 md:gap-16">
    {#each data.articles as article}
      {#if article.isFeatured}
        <CoverArticle {article} />
      {:else}
        <NormalArticle {article} />
      {/if}
    {/each}
  </div>
  <Pagination 
    bind:currentPage={data.page}
    totalArticles={data.count}
    itemPerPage={15}
    path={'/latest'}
  />
</main>
