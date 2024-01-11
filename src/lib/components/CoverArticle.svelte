<script lang="ts">
	import addPageView from '$lib/functions/addPageView';
	import type { Article } from '$lib/types/article.type.js';
	import Tags from './Tags.svelte';
	import getDomain from "$lib/functions/getDomain";
	import {convertDate} from "$lib/functions/convertDate";
	export let article: Article;
	export let location;
</script>

<article class="w-full col-span-1 md:col-span-2 py-8 lg:py-12">
	<a
		class="flex flex-col gap-6 md:grid md:grid-cols-5 md:gap-8 group"
		href={article.url}
		target="_blank"
		on:click={() => addPageView(article._id)}
	>
		{#if article.cover}
			<div class="col-span-2 aspect-[4/3] rounded overflow-hidden">
				<img
					src={`${article.cover}/width=1200`}
					alt={article.title}
					class="object-cover w-full h-full transition-all duration-300 group-hover:scale-105"
					width="408"
				/>
			</div>
			<div class="col-span-3 space-y-4 md:space-y-6">
				<h3
					class="text-2xl md:text-4xl font-serif font-bold leading-relaxed text-zinc-800 dark:text-zinc-100 group-hover:text-teal-600 dark:hover:text-teal-400"
				>
					{article.title}
				</h3>
				<p
					class="text-zinc-600 leading-7 line-clamp-3 text-ellipsis break-words dark:text-zinc-400 group-hover:text-zinc-500"
				>
					{article.description}
				</p>
				{#if article.abstract}
					<div class="border-l border-teal-600 pl-2">
						<p class="text-zinc-600 p-2 rounded leading-7 dark:text-zinc-400"
						  title={article.abstract}
						>
							{article.abstract}
						</p>
					</div>
				{/if}
				{#if article.tags}
					<div class="flex flex-wrap">
						{#each article.tags as tag}
							<Tags {tag} />
						{/each}
					</div>
				{/if}
				<div class="flex gap-2 text-sm items-center">
					<h4
						class="font-serif font-bold text-zinc-800 dark:text-zinc-100 hover:text-teal-600 dark:hover:text-teal-400"
					>
						<a href={`/blog/${getDomain(article.website)}/1`}
						>
							{article.author}
						</a>
					</h4>
					<span>·</span>
					<time
						datetime={article.publish_date}
						class="inline-block text-zinc-400 dark:text-zinc-500"
					>
						{convertDate(article.publish_date)}
					</time>
					<span>·</span>
					<p class="text-zinc-400 dark:text-zinc-500">
						{article.page_view}次浏览
					</p>
				</div>
			</div>
		{:else}
			<!-- 如果没有封面图 -->
			<div class="space-y-4 md:space-y-8 col-span-2 md:col-span-5">
				<h3
					class="text-3xl md:text-5xl font-serif font-bold leading-relaxed text-zinc-800 dark:text-zinc-100 group-hover:text-teal-600 dark:hover:text-teal-400"
				>
					{article.title}
				</h3>
				<p
					class="text-zinc-600 leading-7 line-clamp-3 text-ellipsis break-words dark:text-zinc-400 group-hover:text-zinc-500"
				>
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
					<div class="flex flex-wrap">
						{#each article.tags as tag}
							<Tags {tag} />
						{/each}
					</div>
				{/if}
				<div class="flex gap-2 text-sm">
					<h4
						class="font-serif font-bold text-zinc-800 dark:text-zinc-100 hover:text-teal-600 dark:hover:text-teal-400"
					>
						<a href={`/blog/${getDomain(article.website)}/1`}}
						>{article.author}</a>
					</h4>
					<span>·</span>
					<time
						datetime={article.publish_date}
						class="inline-block text-zinc-400 dark:text-zinc-500"
					>
						{convertDate(article.publish_date)}
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
