<script lang="ts">
	import generateDate from '$lib/functions/generateDate';
	import getImgUrl from '$lib/functions/getImgUrl';
	import type { Article } from '$lib/types/article.type.svelte';
	export let article: Article;
</script>

<article class="w-full col-span-1 py-4 md:py-8 md:col-span-2 md:grid md:grid-cols-2 md:gap-4">
	{#if article.cover}
		<picture class="col-span-1">
			<source srcset={getImgUrl(article.cover.avif)} type="image/avif" />
			<source srcset={getImgUrl(article.cover.webp)} type="image/webp" />
			<img src={getImgUrl(article.cover.jpg)} alt={article.title} />
		</picture>
		<div class="col-span-1 space-y-4 md:space-y-8">
			<h3 class="text-4xl font-medium">{article.title}</h3>
			<p class="">{article.description}</p>
		</div>
	{:else}
		<div class="space-y-8 py-12 col-span-2">
			<h3 class="text-5xl font-medium">{article.title}</h3>
			<p>{article.description}</p>
      <time datetime={article.publish_date} class="inline-block text-gray-500 text-sm ">{generateDate(article.publish_date)}</time>
		</div>
	{/if}
</article>
