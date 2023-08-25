<script lang="ts">
	import { onMount } from 'svelte';
	import TopArticleSection from '$lib/components/TopArticleSection.svelte';
	import TopicSection from '$lib/components/TopicSection.svelte';
	import Topics from '$lib/components/Topics.svelte';
	import type { PageServerData } from './$types';
	import HottestArticle from "$lib/components/HottestArticle.svelte";
	import NormalArticle from "$lib/components/NormalArticle.svelte";

	export let data: PageServerData;
	let loaded = false;
	let isMobile = false;

	onMount(async () => {
		isMobile = window.innerWidth < 1024;
		loaded = true;
	});
</script>

<svelte:head>
	<title>积薪 - 依然相信文字的力量</title>
	<meta name="description" content="找到值得关注的独立博客" />
	<meta property="og:url" content="https://firewood.news" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="积薪 - 依然相信文字的力量" />
	<meta property="og:description" content="找到值得关注的独立博客" />
	<meta
		property="og:image"
		content="https://imagedelivery.net/VyUbUTLtvl82TWWarMVgPw/4763b0f6-c1f8-4738-3a8c-e57b7fcd7000/width=1200"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="firewood.news" />
	<meta property="twitter:url" content="https://firewood.news" />
	<meta name="twitter:title" content="积薪 - 依然相信文字的力量" />
	<meta name="twitter:description" content="找到值得关注的独立博客" />
	<meta
		name="twitter:image"
		content="https://imagedelivery.net/VyUbUTLtvl82TWWarMVgPw/4763b0f6-c1f8-4738-3a8c-e57b7fcd7000/width=1200"
	/>
</svelte:head>

<Topics />
<div class =
			 "mx-auto max-w-7xl flex flex-col-reverse lg:grid lg:grid-cols-7 lg:gap-4">
	<main class="px-6 py-4 lg:col-span-5 flex flex-col gap-4">
		<TopArticleSection title="推荐" articles={data.feature} link="/feature/1" />
		<div class="lg:hidden">
			<h2
				class="text-2xl font-serif font-bold text-zinc-800 dark:text-zinc-100 mb-6">本周热门</h2>
			<HottestArticle articles={data.hottest.slice(0, 5)} />
		</div>
		{#if loaded}
			<section class="py-12">
				<h2
					class="text-2xl font-serif font-bold text-zinc-800 dark:text-zinc-100">最近发布</h2>
				<div class="flex flex-col py-8 gap-12">
				{#each data.random as article}
					<NormalArticle article={article} />
				{/each}
				</div>
			</section>
		{/if}
	</main>
	<aside class = "px-6 py-8 lg:py-12 lg:col-span-2 hidden lg:block">
		<div class = "border-b border-gray-200 dark:border-gray-700 pb-5">
			<h2 class = "text-base font-serif font-bold leading-6 text-zinc-800 dark:text-zinc-100">本周热门</h2>
		</div>
		<div class = "space-y-4 pt-8">
				<HottestArticle articles={data.hottest} />
			<TopicSection />
		</div>
	</aside>
</div>
