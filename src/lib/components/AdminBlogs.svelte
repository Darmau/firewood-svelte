<script lang="ts">
	import generateDate from '$lib/functions/generateDate';

	let blogs: any[] = [];
	let page: number = 1;
	// let selectBlogId: number;
	async function getBlogs(newPage: number) {
		page = newPage;
		blogs = await fetch(`/api/blogs?page=${page}`).then((res) => res.json());
	}

	getBlogs(page);
	// export let token: string;
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
	{#each blogs as blog}
		<div class="border rounded p-4 space-y-4">
			<h3 class="font-serif text-lg font-bold text-zinc-800">{blog.name}</h3>
			<p class="text-zinc-600">{blog.description}</p>
			<p class="font-mono text-sm text-teal-600">{blog.url}</p>
			<p class="font-mono text-sm text-teal-600">{blog.rss}</p>
			<div class="flex justify-between">
				<div>
					<h4 class="text-sm text-zinc-400">文章数量</h4>
					<p class="text-zinc-600 font-mono">{blog.article_count}</p>
				</div>
				<div>
					<h4 class="text-sm text-zinc-400">总浏览量</h4>
					<p class="text-zinc-600 font-mono">{blog.page_view}</p>
				</div>
				<div>
					<h4 class="text-sm text-zinc-400">抓取错误</h4>
					<p class="text-zinc-600 font-mono">{blog.crawl_error}</p>
				</div>
			</div>
			<div class="flex justify-between">
				<div>
					<h4 class="text-sm text-zinc-400">上次发布时间</h4>
					<p class="text-zinc-600">{generateDate(blog.last_publish)}</p>
				</div>
				<div>
					<h4 class="text-sm text-zinc-400">上次抓取时间</h4>
					<p class="text-zinc-600">{generateDate(blog.last_crawl)}</p>
				</div>
			</div>
		</div>
	{/each}
</div>

<div class="flex justify-between py-8 w-full">
	<button
		on:click={() => getBlogs(page - 1)}
		class={`border p-2 rounded text-zinc-800 hover:bg-zinc-100  ${
			page === 1 ? 'invisible pointer-events-none' : ''
		}}`}>上一页</button
	>
	<button
		on:click={() => getBlogs(page + 1)}
		class="border p-2 rounded text-zinc-800 hover:bg-zinc-100">下一页</button
	>
</div>
