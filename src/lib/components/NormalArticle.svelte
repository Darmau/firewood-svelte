<script lang="ts">
	import generateDate from '$lib/functions/generateDate';
	import getImgUrl from '$lib/functions/getImgUrl';
	import type { Article } from '$lib/types/article.type.svelte';
	export let article: Article;
</script>

<article class="col-span-1">
	<a href={article.url} target="_blank" class="flex gap-2 group lg:gap-4">
		{#if article.cover}
			<picture class="col-span-1 aspect-square w-40 h-40 rounded overflow-hidden bg-slate-100 dark:bg-slate-900">
				<source srcset={getImgUrl(article.cover.avif)} type="image/avif" />
				<source srcset={getImgUrl(article.cover.webp)} type="image/webp" />
				<img
					src={getImgUrl(article.cover.jpg)}
					alt={article.title}
					class="object-cover object-center w-full h-full transition-all duration-300 group-hover:scale-105"
				/>
			</picture>
			<div class="space-y-2 flex-1 md:space-y-4">
				<h3
					class="text-2xl font-medium text-slate-900 dark:text-slate-100 group-hover:text-red-600"
				>
					{article.title}
				</h3>
				<p class="text-slate-700 leading-7 line-clamp-2 text-ellipsis group-hover:text-slate-500 dark:text-slate-300 dark:group-hover:text-slate-500">
					{article.description}
				</p>
				<div class="flex gap-2 text-sm">
					<h4 class="font-medium text-slate-800 dark:text-slate-200 hover:text-red-600">
						<a href={article.website} target="_blank">{article.author}</a>
					</h4>
					<span>·</span>
					<time datetime={article.publish_date} class="inline-block text-gray-500">
						{generateDate(article.publish_date)}
					</time>
					<span>·</span>
					<p class="text-gray-500">
						{article.page_view}次浏览
					</p>
				</div>
			</div>
		{:else}
			<div class="space-y-2 md:space-y-4">
				<h3
					class="text-2xl font-medium text-slate-900 dark:text-slate-100 group-hover:text-red-600"
				>
					{article.title}
				</h3>
				<p class="text-slate-700 leading-7 line-clamp-2 text-ellipsis group-hover:text-slate-500 dark:text-slate-300 dark:group-hover:text-slate-500">
					{article.description}
				</p>
				<div class="flex gap-2 text-sm">
					<h4 class="font-medium text-slate-800 dark:text-slate-200 hover:text-red-600">
						<a href={article.website} target="_blank">{article.author}</a>
					</h4>
					<span>·</span>
					<time datetime={article.publish_date} class="inline-block text-gray-500">
						{generateDate(article.publish_date)}
					</time>
					<span>·</span>
					<p class="text-gray-500">
						{article.page_view}次浏览
					</p>
				</div>
			</div>
		{/if}
	</a>
</article>

