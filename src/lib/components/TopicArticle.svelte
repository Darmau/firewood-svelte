<script lang="ts">
	import type { Article } from '$lib/types/article.type.svelte';
	import CoverArticle from './CoverArticle.svelte';
	import NormalArticle from './NormalArticle.svelte';
	export let title: string;
	export let articles: Article[];
</script>

<section class="py-16 border-b pb-8 border-gray-200">
	<h2 class="text-2xl font-medium">{title}</h2>
	<div
		class="grid grid-cols-1 md:grid-cols-2"
	>
		{#each articles as article, index}
			{#if index === 0}
			  <CoverArticle {article} />
			{:else}
			  <NormalArticle {article} />
			{/if}
		{/each}
	</div>
</section>
