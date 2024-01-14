<script lang="ts">
	import type { Article } from '$lib/types/article.type.js';
	import CoverArticle from './CoverArticle.svelte';
	import NormalArticle from './NormalArticle.svelte';
	export let title: string;
	export let articles: Article[];
	export let link: string;
</script>

<section class="py-8 border-b border-zinc-200 dark:border-zinc-700/40">
	<h2 class="text-2xl font-medium text-zinc-800 dark:text-zinc-100">{title}</h2>
	<div class="flex flex-col gap-8 md:gap-12">
		{#each articles as article, index}
			{#if index === 0}
				<CoverArticle {article}  />
			{:else}
				<NormalArticle {article} />
			{/if}
		{/each}
	</div>
</section>
<div class="flex justify-end gap-1 py-4 text-slate-700 cursor-pointer group dark:text-slate-300">
	<a href={link}
		 class="font-medium group-hover:text-teal-600 dark:hover:text-teal-400" data-sveltekit-preload-data>More</a>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="w-6 h-6 group-hover:translate-x-1 transition-all duration-200"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
		/>
	</svg>
</div>
