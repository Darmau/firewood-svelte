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
  <meta property="og:image" content="https://firewood-1256887306.cos.accelerate.myqcloud.com/opengraph/homepage.jpg">
</svelte:head>

<Topics />
<main class="mx-auto max-w-7xl px-6 mb-8 md:mb-16">
	<TopicArticle title="推荐" articles={data.feature} link="/feature/1" />
	<LatestArticle articles={data.latest} link="/latest/1" />
	<TopicSection />
	<TopicArticle title="技术" articles={data.tech} link="/topic/tech/1" />
	<TopicArticle title="社会" articles={data.society} link="/topic/society/1" />
	<TopicArticle title="文化" articles={data.culture} link="/topic/culture/1" />
	<TopicArticle title="生活情感" articles={data.emotion} link="/topic/emotion/1" />
</main>
