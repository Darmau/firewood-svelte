<script lang="ts">
	import LatestArticle from '$lib/components/LatestArticleSection.svelte';
	import TopicArticle from '$lib/components/TopicArticleSection.svelte';
	import TopicSection from '$lib/components/TopicSection.svelte';
	import Topics from '$lib/components/Topics.svelte';
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<svelte:head>
	<title>积薪 - 依然相信文字的力量</title>
	<meta name="description" content="找到值得关注的独立博客" />
	<meta property="og:url" content="https://firewood.news">
  <meta property="og:type" content="website">
  <meta property="og:title" content="积薪 - 依然相信文字的力量">
  <meta property="og:description" content="找到值得关注的独立博客">
  <meta property="og:image" content="https://imagedelivery.net/VyUbUTLtvl82TWWarMVgPw/4763b0f6-c1f8-4738-3a8c-e57b7fcd7000/width=1200">
	<meta name="twitter:card" content="summary_large_image">
  <meta property="twitter:domain" content="firewood.news">
  <meta property="twitter:url" content="https://firewood.news">
  <meta name="twitter:title" content="积薪 - 依然相信文字的力量">
  <meta name="twitter:description" content="找到值得关注的独立博客">
  <meta name="twitter:image" content="https://imagedelivery.net/VyUbUTLtvl82TWWarMVgPw/4763b0f6-c1f8-4738-3a8c-e57b7fcd7000/width=1200">
</svelte:head>

<Topics />
<main class="mx-auto max-w-7xl px-6 mb-8 md:mb-16">
	<section class="p-8 text-center text-lg text-red-500 font-bold font-serif">本站目前还在开发中。但你可以保存为书签</section>
	<TopicArticle title="推荐" articles={data.feature} link="/feature/1" />
	<LatestArticle articles={data.latest} link="/latest/1" />
	<TopicSection />
	<TopicArticle title="技术" articles={data.tech} link="/topic/tech/1" />
	<TopicArticle title="社会" articles={data.society} link="/topic/society/1" />
	<TopicArticle title="文化" articles={data.culture} link="/topic/culture/1" />
	<TopicArticle title="生活情感" articles={data.emotion} link="/topic/emotion/1" />
</main>
