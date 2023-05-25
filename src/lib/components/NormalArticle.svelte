<script lang="ts">
	import addPageView from '$lib/functions/addPageView';
	import generateDate from '$lib/functions/generateDate';
	import getImgUrl from '$lib/functions/getImgUrl';
	import type { Article } from '$lib/types/article.type.svelte';
	export let article: Article;
</script>

<article class="col-span-1">
	<a
		href={article.url}
		target="_blank"
		class="flex flex-col gap-4 group lg:gap-6 lg:flex-row"
		on:click={() => addPageView(article._id)}
	>
		{#if article.cover}
			<picture
				class="aspect-video md:aspect=[4/3] rounded overflow-hidden bg-slate-100 lg:aspect-square lg:w-40 lg:h-40 dark:bg-slate-900"
			>
				<source srcset={getImgUrl(article.cover.avif)} type="image/avif" />
				<source srcset={getImgUrl(article.cover.webp)} type="image/webp" />
				<img
					src={getImgUrl(article.cover.jpg)}
					alt={article.title}
					class="object-cover object-center w-full h-full transition-all duration-300 group-hover:scale-105"
					loading="lazy"
					width="160"
					height="160"
				/>
			</picture>
			<div class="space-y-2 flex-1 md:space-y-4">
				<h3
					class="text-2xl font-serif font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-teal-600 dark:hover:text-teal-400"
				>
					{article.title}
				</h3>
				<p
					class="text-zinc-600 leading-7 line-clamp-2 text-ellipsis dark:text-zinc-400 group-hover:text-zinc-500"
				>
					{article.description}
				</p>
				<div class="flex gap-2 text-sm">
					<h4
						class="font-serif font-bold text-zinc-800 dark:text-zinc-100 hover:text-teal-600 dark:hover:text-teal-400"
					>
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
			<div class="space-y-2 md:space-y-4">
				<h3
					class="text-2xl font-serif font-bold text-zinc-800 dark:text-zinc-100 group-hover:text-teal-600 dark:hover:text-teal-400"
				>
					{article.title}
				</h3>
				<p
					class="text-zinc-600 leading-7 line-clamp-2 text-ellipsis group-hover:text-zinc-500 dark:text-zinc-400"
				>
					{article.description}
				</p>
				<div class="flex gap-2 text-sm">
					<h4 class="font-serif font-bold text-zinc-800 dark:text-zinc-100 hover:text-teal-600">
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
