<script lang="ts">
	import addPageView from '$lib/functions/addPageView';
	import Tags from './Tags.svelte';
	import topicTranslate from '$lib/functions/topicTranslate';
	import type { Article } from '$lib/types/article.type.js';
  import getDomain from "$lib/functions/getDomain";
	import {convertDate} from "$lib/functions/convertDate";

	export let article: Article;
	export let topic: boolean = false;
</script>

<article class="col-span-1">
	<a
		href={article.url}
		target="_blank"
		class="flex flex-col gap-4"
		on:click={() => addPageView(article._id)}
		data-umami-event="article"
		data-umami-event-source = "normal"
		title={article.abstract || article.description}
	>
		{#if article.cover}
			<div class="flex flex-col gap-4 group lg:gap-6 lg:flex-row-reverse">
				<div
					class="aspect-video md:aspect=[4/3] rounded overflow-hidden bg-slate-100 lg:aspect-square lg:w-40 lg:h-40 dark:bg-slate-900"
				>
					<img
						src={`${article.cover}/width=320`}
						alt={article.title}
						class="object-cover object-center w-full h-full transition-all duration-300 group-hover:scale-105"
						loading="lazy"
						width="160"
						height="160"
					/>
				</div>
				<div class="space-y-2 flex-1 md:space-y-4">
					{#if topic}
						<a
							href={`/topic/${article.topic}/1`}
							class="self-start text-xs relative z-10 rounded-full bg-slate-50 dark:bg-slate-800 px-3 py-1.5 font-medium text-slate-600 dark:text-slate-300 hover:bg-zinc-100 dark:hover:bg-zinc-500"
							>{topicTranslate(article.topic)}</a
						>
					{/if}
					<h3
						class="text-2xl font-serif font-bold break-words text-zinc-900 dark:text-zinc-100 group-hover:text-teal-600 dark:hover:text-teal-400"
					>
						{article.title}
					</h3>
					<p
						class="text-zinc-600 leading-7 line-clamp-3 text-ellipsis break-words dark:text-zinc-400 group-hover:text-zinc-500"
					>
						{#if article.abstract}
							{article.abstract}
						{:else}
							{article.description}
						{/if}
					</p>
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
							<a href={`/blog/${getDomain(article.website)}/1`}>{article.author}</a>
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
			</div>
		{:else}
			<div class="space-y-2 md:space-y-4 group">
				{#if topic}
					<a
						href={`/topic/${article.topic}/1`}
						class="text-xs relative z-10 rounded-full bg-slate-50 dark:bg-slate-800 px-3 py-1.5 font-medium text-slate-600 dark:text-slate-300 hover:bg-zinc-100 dark:hover:bg-zinc-500"
						>{topicTranslate(article.topic)}</a
					>
				{/if}
				<h3
					class="text-2xl font-serif font-bold break-words text-zinc-800 dark:text-zinc-100 group-hover:text-teal-600 dark:hover:text-teal-400"
				>
					{article.title}
				</h3>
				<p
					class="text-zinc-600 leading-7 line-clamp-3 break-words text-ellipsis group-hover:text-zinc-500 dark:text-zinc-400"
					title={article.abstract || article.description}
				>
					{#if article.abstract}
						{article.abstract}
					{:else}
						{article.description}
					{/if}
				</p>
				{#if article.tags}
					<div class="flex flex-wrap">
						{#each article.tags as tag}
							<Tags {tag} />
						{/each}
					</div>
				{/if}
				<div class="flex gap-2 text-sm">
					<h4 class="font-serif font-bold text-zinc-800 dark:text-zinc-100 hover:text-teal-600">
						<a
							href={`/blog/${getDomain(article.website)}/1`}
							data-umami-event = "blog"
							data-umami-event-source = "normal-article"
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
