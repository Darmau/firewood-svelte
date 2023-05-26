<script lang="ts">
	import addPageView from '$lib/functions/addPageView';
	import generateDate from '$lib/functions/generateDate';
	import getImgUrl from '$lib/functions/getImgUrl';
	import type { Article } from '$lib/types/article.type.svelte';
	import Tags from './Tags.svelte';
	export let article: Article;
</script>

<article class="w-full col-span-1 md:col-span-2 py-8 lg:py-12">
	<a
		class="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-8 group"
		href={article.url}
		target="_blank"
		on:click={() => addPageView(article._id)}
	>
		{#if article.cover}
			<picture class="col-span-1 aspect-[4/3] rounded overflow-hidden">
				<source srcset={getImgUrl(article.cover.avif)} type="image/avif" />
				<source srcset={getImgUrl(article.cover.webp)} type="image/webp" />
				<img
					src={getImgUrl(article.cover.jpg)}
					alt={article.title}
					class="object-cover w-full h-full transition-all duration-300 group-hover:scale-105"
					loading="lazy"
					width="408"
				/>
			</picture>
			<div class="col-span-1 space-y-6 md:space-y-8">
				<h3 class="text-4xl font-bold leading-tight text-zinc-800 dark:text-zinc-100 group-hover:text-teal-600 dark:hover:text-teal-400">
					{article.title}
				</h3>
				<p class="text-zinc-600 leading-7 line-clamp-3 text-ellipsis dark:text-zinc-400 group-hover:text-zinc-500">
					{article.description}
				</p>
				{#if article.abstract}
					<div class="border-l border-teal-600 pl-2">
						<p class="text-zinc-600 p-2 rounded leading-7 dark:text-zinc-400">
							{article.abstract}
						</p>
					</div>
				{/if}
				{#if article.tags}
					<div class="flex flex-wrap gap-2">
						{#each article.tags as tag}
							<Tags {tag} />
						{/each}
					</div>
				{/if}
				<div class="flex gap-2 text-sm items-center">
					<h4 class="font-bold text-zinc-800 dark:text-zinc-100 hover:text-teal-600 dark:hover:text-teal-400">
						<a href={article.website} target="_blank">{article.author}</a>
					</h4>
					<span>·</span>
					<time
						datetime={article.publish_date}
						class="inline-block text-zinc-400 dark:text-zinc-500"
					>
						{generateDate(article.publish_date)}
					</time>
					<span>·</span>
					<p class="text-zinc-400 dark:text-zinc-500">
						{article.page_view}次浏览
					</p>
				</div>
			</div>
		{:else}
			<!-- 如果没有封面图 -->
			<div class="space-y-8 col-span-2">
				<h3 class="text-5xl font-bold leading-snug text-zinc-800 dark:text-zinc-100 group-hover:text-teal-600 dark:hover:text-teal-400">
					{article.title}
				</h3>
				<p class="text-zinc-600 leading-7 line-clamp-3 text-ellipsis dark:text-zinc-400 group-hover:text-zinc-500">
					{article.description}
				</p>
				{#if article.abstract}
					<div class="border-l border-teal-600 pl-2">
						<p class="text-zinc-600 p-2 rounded leading-7 dark:text-zinc-400">
							{article.abstract}
						</p>
					</div>
				{/if}
				{#if article.tags}
					<div class="flex flex-wrap gap-2">
						{#each article.tags as tag}
							<Tags {tag} />
						{/each}
					</div>
				{/if}
				<div class="flex gap-2 text-sm">
					<h4 class="font-bold text-zinc-800 dark:text-zinc-100 hover:text-teal-600 dark:hover:text-teal-400">
						<a href={article.website} target="_blank">{article.author}</a>
					</h4>
					<span>·</span>
					<time
						datetime={article.publish_date}
						class="inline-block text-zinc-400 dark:text-zinc-500"
					>
						{generateDate(article.publish_date)}
					</time>
					<span>·</span>
					<p class="text-zinc-400 dark:text-zinc-500">
						{article.page_view}次浏览
					</p>
				</div>
			</div>
		{/if}
	</a>
</article>
