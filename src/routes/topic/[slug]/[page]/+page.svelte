<script lang="ts">
	import CoverArticle from '$lib/components/CoverArticle.svelte';
	import NormalArticle from '$lib/components/NormalArticle.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import topicTranslate from '$lib/functions/topicTranslate.js';

	export let data;
</script>

<svelte:head>
	<title>{topicTranslate(data.slug)} - 积薪</title>
	<meta name="description" content={`关于${topicTranslate(data.slug)}话题的文章`} />
</svelte:head>

<main class="mx-auto max-w-4xl px-6 py-8 md:py-12">
  <div class="border-b border-gray-200 dark:border-gray-700 pb-5 mb-8">
    <h1 class="text-base font-semibold leading-6 text-zinc-800 dark:text-zinc-100">{topicTranslate(data.slug)}</h1>
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
    path={`/topic/${data.slug}`}
  />
</main>