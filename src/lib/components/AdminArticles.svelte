<script lang="ts">
	import generateDate from '$lib/functions/generateDate';
	import topicTranslate from '$lib/functions/topicTranslate';
	import type Article from '$lib/types/article.type.svelte';

	// 获取最新文章
	let articles: Article[] = [];
	let page: number = 1;
	async function getArticles(newPage: number) {
		page = newPage;
		articles = (await fetch(`/api/articles?page=${page}`).then((res) => res.json())) || [];
	}
	getArticles(page);

	export let token: string;

	// 切换推荐状态
	async function toggleFeature(article: Article) {
		await fetch(`/api/article/feature?id=${article._id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`
			}
		});
		getArticles(page);
	}

	// 切换封禁状态
	async function toggleBlock(article: Article) {
		await fetch(`/api/article/block?id=${article._id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`
			}
		});
		getArticles(page);
	}
</script>

<div class="space-y-12 max-w-4xl mx-auto">
	{#each articles as article}
		<article class="border-b pb-12 flex gap-4 md:gap-12 justify-between">
			<div class="space-y-4">
				<h4 class="text-sm font-bold font-serif text-zinc-800">{article.author}</h4>
				<h3 class="text-2xl font-bold font-serif text-zinc-800">
					<a href={article.url} target="_blank">{article.title}</a>
				</h3>
				<p class="text-zinc-600 pb-4">{article.description}</p>
				<span class="p-1 bg-teal-700 text-white text-sm rounded mr-2"
					>{topicTranslate(article.topic)}</span
				>
				<time datetime={article.publish_date} class="text-sm text-zinc-400"
					>{generateDate(article.publish_date)}</time
				>

				{#if article.tags}
					{#each article.tags as tag}
						<p class="inline-block text-zinc-400 mr-2 text-sm">#{tag}</p>
					{/each}
				{/if}

				{#if article.abstract}
					<p class="text-zinc-700 border-l pl-4 border-teal-600">{article.abstract}</p>
				{/if}

				<!-- 推荐和封禁 -->
				<div class="flex gap-6">
					<div class="relative flex gap-x-3">
						<div class="flex h-6 items-center">
							<input
								id="isFeatured"
								name="isFeatured"
								type="checkbox"
								class="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-600"
								bind:checked={article.isFeatured}
								on:change={() => toggleFeature(article)}
							/>
						</div>
						<div class="text-sm leading-6">
							<label for="isFeatured" class="font-medium text-gray-900">推荐</label>
						</div>
					</div>
					<div class="relative flex gap-x-3">
						<div class="flex h-6 items-center">
							<input
								id="isBlocked"
								name="isBlocked"
								type="checkbox"
								class="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-600"
								bind:checked={article.isBlocked}
								on:change={() => toggleBlock(article)}
							/>
						</div>
						<div class="text-sm leading-6">
							<label for="isBlocked" class="font-medium text-gray-900">封禁</label>
						</div>
					</div>
				</div>
			</div>
			{#if article.cover}
				<div class="flex-none aspect-square overflow-hidden w-20 h-20 md:w-40 lg:h-40">
					<img
						src={`${article.cover}/width=240`}
						alt={article.title}
						class="object-cover w-full h-full"
					/>
				</div>
			{/if}
		</article>
	{/each}

	<div class="flex justify-between py-8 w-full">
		<button
			on:click={() => getArticles(page - 1)}
			class={`border p-2 rounded text-zinc-800 hover:bg-zinc-100  ${
				page === 1 ? 'invisible pointer-events-none' : ''
			}}`}>上一页</button
		>
		<button
			on:click={() => getArticles(page + 1)}
			class="border p-2 rounded text-zinc-800 hover:bg-zinc-100">下一页</button
		>
	</div>
</div>
