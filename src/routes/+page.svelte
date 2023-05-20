<script lang="ts">
	import LatestArticle from '$lib/components/LatestArticle.svelte';
	import TopicArticle from '$lib/components/TopicArticle.svelte';
	import Topics from '$lib/components/Topics.svelte';
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<Topics />
<main class="mx-auto max-w-7xl p-4">
	<TopicArticle title="推荐" articles={data.feature} />
	<LatestArticle articles={data.latest} />
	<TopicArticle title="技术" articles={data.tech} />
	<TopicArticle title="社会" articles={data.society} />
	<TopicArticle title="文化" articles={data.culture} />
	<TopicArticle title="旅行" articles={data.travel} />
	<TopicArticle title="生活情感" articles={data.emotion} />
</main>
