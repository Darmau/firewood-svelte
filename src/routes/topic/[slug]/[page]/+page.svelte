<script lang="ts">
	import CoverArticle from '$lib/components/CoverArticle.svelte';
	import NormalArticle from '$lib/components/NormalArticle.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import topicTranslate from '$lib/functions/topicTranslate.js';

	export let data;
</script>

<svelte:head>
	<title>{topicTranslate(data.slug)}专题 - 积薪</title>
	<meta name="description" content={`关于${topicTranslate(data.slug)}话题的文章`} />
	<meta property="og:url" content={`https://firewood.news/topic/${data.slug}/1`}>
  <meta property="og:type" content="website">
  <meta property="og:title" content={`${topicTranslate(data.slug)}话题文章 - 积薪`}>
  <meta property="og:description" content={`关于${topicTranslate(data.slug)}话题的文章 自动整理`}>
  <meta property="og:image" content="https://firewood-1256887306.cos.accelerate.myqcloud.com/opengraph/topic.jpg">
	<meta name="twitter:card" content="summary_large_image">
  <meta property="twitter:domain" content="firewood.news">
  <meta property="twitter:url" content={`https://firewood.news/topic/${data.slug}/1`}>
  <meta name="twitter:title" content={`${topicTranslate(data.slug)}专题 - 积薪`}>
  <meta name="twitter:description" content={`关于${topicTranslate(data.slug)}话题的文章`}>
  <meta name="twitter:image" content="https://firewood-1256887306.cos.accelerate.myqcloud.com/opengraph/topic.jpg">
</svelte:head>

<main class="mx-auto max-w-4xl px-6 py-8 md:py-12">
	<div class="border-b border-gray-200 dark:border-gray-700 pb-5 mb-8">
		<h1 class="text-base font-semibold leading-6 text-zinc-800 dark:text-zinc-100">
			{topicTranslate(data.slug)}
		</h1>
	</div>
	<div class="flex flex-col gap-12 md:gap-16">
		{#each data.articles as article}
			{#if article.isFeatured}
				<CoverArticle {article} />
			{:else}
				<NormalArticle {article} />
			{/if}
		{/each}
		{#if data.articles.length === 0}
			<div class="text-center py-16">
				<p class="text-base font-semibold text-teal-600 dark:text-teal-300">尴尬了</p>
				<h1 class="mt-4 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
					该分类下暂时还没有文章
				</h1>
				<p class="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
					要不先看看其他分类吧
				</p>
				<div class="mt-10 flex items-center justify-center gap-x-6">
					<a
						href="/"
						class="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
						>返回首页</a
					>
				</div>
			</div>
		{/if}
	</div>
	<Pagination
		bind:currentPage={data.page}
		totalArticles={data.count}
		itemPerPage={15}
		path={`/topic/${data.slug}`}
	/>
</main>
