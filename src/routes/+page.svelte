<script lang="ts">
	import LatestArticle from '$lib/components/LatestArticleSection.svelte';
	import TopicArticle from '$lib/components/TopicArticleSection.svelte';
	import Topics from '$lib/components/Topics.svelte';
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<Topics />
<main class="mx-auto max-w-7xl px-6 mb-8 md:mb-16">
	<TopicArticle title="推荐" articles={data.feature} link="/feature/1" />
	<LatestArticle articles={data.latest} link="/latest/1" />
	<TopicArticle title="技术" articles={data.tech} link="/topic/tech/1" />
	<TopicArticle title="社会" articles={data.society} link="/topic/society/1" />
	<TopicArticle title="文化" articles={data.culture} link="/topic/culture/1" />
	<TopicArticle title="旅行" articles={data.travel} link="/topic/travel/1" />
	<TopicArticle title="生活情感" articles={data.emotion} link="/topic/emotion/1" />
</main>
