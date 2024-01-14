<!-- 全部博客 -->
<script lang="ts">
	import BlogCard from '$lib/components/BlogCard.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	export let data;
</script>

<svelte:head>
	<title>作者 - 积薪</title>
	<meta name="description" content="本站收录的所有博客" />
	<meta property="og:url" content="https://firewood.news/author/latest/1" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="作者 - 积薪" />
	<meta property="og:description" content="本站收录的所有博客" />
	<meta
		property="og:image"
		content="https://imagedelivery.net/VyUbUTLtvl82TWWarMVgPw/4763b0f6-c1f8-4738-3a8c-e57b7fcd7000/width=1200"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="firewood.news" />
	<meta property="twitter:url" content="https://firewood.news/latest/1" />
	<meta name="twitter:title" content="作者 - 积薪" />
	<meta name="twitter:description" content="本站收录的所有博客" />
	<meta
		name="twitter:image"
		content="https://imagedelivery.net/VyUbUTLtvl82TWWarMVgPw/4763b0f6-c1f8-4738-3a8c-e57b7fcd7000/width=1200"
	/>
</svelte:head>

<main class="mx-auto max-w-7xl px-6 py-8 md:py-12">
	<div class="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-5 mb-8">
		<h1 class="text-base font-medium leading-6 text-zinc-800 dark:text-zinc-100">作者</h1>
		<a href="/author/latest/1" class="text-sm text-teal-600 dark:text-teal-400 hover:font-medium"
			>按更新时间</a
		>
	</div>
	<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each data.websites as website}
			{#if website.article_count > 0}
				<BlogCard {website} type="most-view" />
			{/if}
		{/each}
	</div>
	<Pagination
		bind:currentPage={data.page}
		totalArticles={data.count}
		itemPerPage={12}
		path={'/author/most-view'}
	/>
</main>
