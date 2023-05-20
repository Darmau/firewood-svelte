<script lang="ts">
	import generateDate from '$lib/functions/generateDate';
	import topicTranslate from '$lib/functions/topicTranslate';
	import type { Article } from '$lib/types/article.type.svelte';
	export let articles: Article[];
</script>

<section class="py-16 border-b pb-8 border-gray-200">
	<h2 class="text-2xl font-medium">最新文章</h2>
	<div
		class="grid gap-4 grid-cols-1 mt-8 px-4 md:grid-cols-2 lg:px-0 md:gap-12 lg:grid-cols-3"
	>
		{#each articles as article}
			<article class="flex max-w-xl flex-col items-start justify-start">
				<div class="flex items-center gap-x-4 text-xs">
					<a
						href={`/topic/${article.topic}`}
						class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
						>{topicTranslate(article.topic)}</a
					>
					<time datetime="2020-03-16" class="text-gray-500"
						>{generateDate(article.publish_date)}</time
					>
				</div>
				<div class="group relative">
					<h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
						<a href={article.url}>
							<span class="absolute inset-0" />
							{article.title}
						</a>
					</h3>
					{#if article.description}
						<p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 text-ellipsis">
							{article.description}
						</p>
					{:else if article.abstract}
						<p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 text-ellipsis">
							{article.abstract}
						</p>
					{:else}
						<p />
					{/if}
				</div>
				<div class="relative mt-4 flex items-center gap-x-4">
					<div class="text-sm leading-6">
						<p class="font-semibold text-gray-900">
							<a href={article.website}>
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
