<script lang="ts">
	import generateDate from '$lib/functions/generateDate';
	import topicTranslate from '$lib/functions/topicTranslate';
	import type { Article } from '$lib/types/article.type.svelte';
	import addPageView from '$lib/functions/addPageView';
	export let articles: Article[];
	export let link: string;
</script>

<section class="py-16 border-b border-zinc-200 dark:border-zinc-700/40">
	<h2 class="text-2xl font-serif font-bold text-zinc-800 dark:text-zinc-100">最新文章</h2>
	<div class="grid gap-8 grid-cols-1 mt-8 md:grid-cols-2 lg:px-0 md:gap-12 lg:grid-cols-3">
		{#each articles as article}
			<article class="flex max-w-xl flex-col items-start justify-start">
				<div class="flex items-center gap-x-4 text-xs">
					<a
						href={`/topic/${article.topic}/1`}
						class="relative z-10 rounded-full bg-slate-50 dark:bg-slate-800 px-3 py-1.5 font-medium text-slate-600 dark:text-slate-300 hover:bg-zinc-100 dark:hover:bg-zinc-500"
						>{topicTranslate(article.topic)}</a
					>
					<time datetime="2020-03-16" class="text-zinc-400 dark:text-zinc-500"
						>{generateDate(article.publish_date)}</time
					>
				</div>
				<div class="group relative">
					<h3
						class="mt-3 text-xl font-serif font-bold leading-7 text-zinc-800 dark:text-zinc-100 group-hover:text-teal-600 dark:group-hover:text-teal-400"
					>
						<a href={article.url} target="_blank" on:click={() => addPageView(article._id)} data-umami-event="article">
							<span class="absolute inset-0" />
							{article.title}
						</a>
					</h3>
					{#if article.description}
						<p
							class="mt-5 line-clamp-3 break-words text-sm leading-6 text-zinc-600 dark:text-zinc-400 text-ellipsis group-hover:text-zinc-500"
						>
							{article.description}
						</p>
					{:else if article.abstract}
						<p
							class="mt-5 line-clamp-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400 text-ellipsis group-hover:text-zinc-500"
						>
							{article.abstract}
						</p>
					{:else}
						<p />
					{/if}
				</div>
				<div class="relative mt-4 flex items-center gap-x-4">
					<div class="text-sm leading-6">
						<p class="font-serif font-bold text-zinc-800 dark:text-zinc-100 hover:text-teal-600">
							<a href={article.website} data-umami-event="blog">
								<span class="absolute inset-0" />
								{article.author}
							</a>
						</p>
					</div>
				</div>
			</article>
		{/each}
	</div>
</section>
<div class="flex justify-end gap-1 py-4 text-zinc-700 cursor-pointer group dark:text-zinc-300">
	<a href={link} class="font-medium group-hover:text-teal-600 dark:hover:text-teal-400">More</a>
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
