<script lang="ts">
	import { onMount } from 'svelte';

	export let currentPage: number = 1;
	export let totalArticles: number = 1;
	export let itemPerPage: number = 15;
	export let path: string;

	const totalPages = Math.ceil(totalArticles / itemPerPage);
	let pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
	let pagesToRender: (number | string)[] = [];

	// 根据总页数生成一个数组，数组中的每一个元素将被渲染成一个页码，链接到对应页面。
	$: if (totalPages >= 2 && totalPages <= 7) {
		pagesToRender = pageNumbers;
	} else if (currentPage <= 3) {
		pagesToRender = [...pageNumbers.slice(0, 3), '...', ...pageNumbers.slice(-3)];
	} else if (currentPage > totalPages - 3) {
		pagesToRender = [...pageNumbers.slice(0, 3), '...', ...pageNumbers.slice(-3)];
	} else {
		pagesToRender = [1, currentPage - 1, +currentPage, +currentPage + 1, totalPages];
		if (currentPage > 4) {
			pagesToRender = [1, '...', ...pagesToRender.slice(1)];
		}
		if (currentPage < totalPages - 3) {
			pagesToRender = [...pagesToRender.slice(0, -1), '...', totalPages];
		}
	}

	onMount(() => {
		currentPage;
	});
</script>

{#if totalPages > 1}
	<div class="flex items-center justify-between border-t dark:border-zinc-800 mt-8 py-8">
		<div class="flex flex-1 justify-between sm:hidden">
			<div class={currentPage === 1 ? 'invisible pointer-events-none' : ''}>
				<a
					class="relative inline-flex items-center rounded-md border dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-zinc-900"
					href={`${path}/${+currentPage - 1}`}
				>
					前一页
				</a>
			</div>
			<div class={currentPage === totalPages ? 'invisible pointer-events-none' : ''}>
				<a
					class="relative ml-3 inline-flex items-center rounded-md border dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-zinc-900"
					href={`${path}/${+currentPage + 1}`}
				>
					下一页
				</a>
			</div>
		</div>

		<div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
			<div>
				<p class="text-sm text-slate-700 dark:text-slate-300">
					当前为 <span class="font-medium">{(currentPage - 1) * itemPerPage + 1}</span> 至
					<span class="font-medium">{Math.min(currentPage * itemPerPage, totalArticles)}</span>
					条，共计
					<span class="font-medium">{totalArticles}</span>条
				</p>
			</div>

			<div>
				<nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
					<a
						href={`${path}/${+currentPage - 1}`}
						class={`relative inline-flex items-center rounded-l-md border dark:border-zinc-600 bg-white dark:bg-teal-800/10 px-2 py-2 text-sm font-medium dark:hover:bg-zinc-700 ${
							currentPage === 1
								? `text-slate-300 pointer-events-none	`
								: `text-slate-500 hover:bg-gray-50 focus:z-20 dark:hover:text-slate-300`
						}`}
					>
						<svg
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-4 h-4"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15.75 19.5L8.25 12l7.5-7.5"
							/>
						</svg>
					</a>

					{#each pagesToRender as pageNumber}
						{#if typeof pageNumber === 'number'}
							<a
								href={`${path}/${pageNumber}`}
								class={`relative inline-flex items-center border px-4 py-2 text-sm font-medium focus:z-20 dark:hover:bg-teal-700 ${
									pageNumber === currentPage
										? 'z-10 border-teal-500 bg-teal-50 text-teal-800 dark:bg-teal-900 dark:text-zinc-100'
										: 'dark:border-gray-600 bg-white dark:bg-teal-800/10 text-zinc-500 dark:text-slate-300 hover:bg-gray-50 dark:hover:text-slate-300'
								} ${typeof pageNumber === 'string' ? 'disabled' : ''}`}
							>
								{pageNumber}
							</a>
						{:else}
							<div
								class="relative inline-flex items-center border dark:border-zinc-600 bg-white dark:bg-zinc-800 px-4 py-2 text-sm font-medium text-gray-500"
							>
								...
							</div>
						{/if}
					{/each}

					<a
						href={`${path}/${+currentPage + 1}`}
						class={`relative inline-flex items-center rounded-r-md border dark:border-zinc-600 bg-white dark:bg-teal-800/10 px-2 py-2 text-sm font-medium dark:hover:bg-zinc-700 ${
							currentPage === totalPages
								? `text-slate-300 pointer-events-none`
								: `text-slate-500 hover:bg-gray-50 focus:z-20 dark:hover:text-slate-300`
						}`}
					>
						<svg
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-4 h-4"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
						</svg>
					</a>
				</nav>
			</div>
		</div>
	</div>
{/if}
