<script lang="ts">
	import generateDate from '$lib/functions/generateDate';
	import type { Website } from '$lib/types/website.type.svelte';

	export let website: Website;
</script>

<div
	class="bg-white dark:bg-zinc-900 border dark:border-gray-700 rounded-md p-6 gap-4 hover:shadow-md transition-all duration-200 grid"
>
	<a href={website.url} class="flex gap-2 items-center" target="_blank">
		{#if website.cover}
			<img src={website.cover} alt={website.name} class="w-5 h-5 dark:bg-white" width="20" height="20" />
		{/if}
		<h2
			class="text-zinc-800 dark:text-zinc-100 text-lg font-bold hover:text-teal-600 dark:hover:text-teal-400"
		>
			{website.name}
		</h2>
	</a>
	<p class="text-zinc-600 dark:text-zinc-400">{website.description}</p>
	<div class="flex gap-6 my-2">
		<div class="flex flex-col gap-1">
			<h3 class="text-sm text-zinc-400 dark:text-zinc-500">文章收录</h3>
			<p class="text-zinc-800 dark:text-zinc-100">{website.article_count}</p>
		</div>
		<div class="flex flex-col gap-1">
			<h3 class="text-sm text-zinc-400 dark:text-zinc-500">本站访问量</h3>
			<p class="text-zinc-800 dark:text-zinc-100">{website.page_view}</p>
		</div>
		<div class="flex flex-col gap-1">
			<h3 class="text-sm text-zinc-400 dark:text-zinc-500">上次更新</h3>
			<p class="text-zinc-800 dark:text-zinc-100">{generateDate(website.last_publish)}</p>
		</div>
	</div>
	{#if website.latest}
		<div class="space-y-3">
			<h3 class="text-sm text-zinc-400 dark:text-zinc-500">最新文章</h3>
			<ol class="space-y-3">
				{#each website.latest as article}
					<li class="text-zinc-800 hover:text-teal-600 dark:text-zinc-100 dark:hover:text-teal-400">
						<a href={article.url} target="_blank">
							{article.title}
						</a>
					</li>
				{/each}
			</ol>
		</div>
	{/if}
</div>
