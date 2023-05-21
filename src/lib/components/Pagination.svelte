<script lang="ts">
	export let currentPage: number;
	export let totalArticles: number;
	export let itemPerPage: number;
	export let path: string;

	const totalPages = Math.ceil(totalArticles / itemPerPage);
	const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
	let pagesToRender: (number | string)[] = [];

	// 根据总页数生成一个数组，数组中的每一个元素将被渲染成一个页码，链接到对应页面。
	if (totalPages >= 2 && totalPages <= 7) {
		pagesToRender = pageNumbers;
	} else if (currentPage <= 3) {
		pagesToRender = [...pageNumbers.slice(0, 3), '...', ...pageNumbers.slice(-3)];
	} else if (currentPage > totalPages - 3) {
		pagesToRender = [...pageNumbers.slice(0, 3), '...', ...pageNumbers.slice(-3)];
	} else {
		pagesToRender = [1, currentPage - 1, currentPage, currentPage + 1, totalPages];
		if (currentPage > 4) {
			pagesToRender = [1, '...', ...pagesToRender.slice(1)];
		}
		if (currentPage < totalPages - 3) {
			pagesToRender = [...pagesToRender.slice(0, -1), '...', totalPages];
		}
	}
</script>

{#if totalPages > 1}
	<div
		class="flex items-center justify-between border-t dark:border-zinc-700 bg-white dark:bg-transparent mt-8 py-8 lg:mt-12 lg:py-12"
	>
		<!-- 移动端 -->
		<div class="flex flex-1 justify-between sm:hidden">
			<div class={`page-item ${currentPage === 1 ? 'invisible pointer-events-none' : ''}`}>
				<a
					class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
					href={`${path}/${currentPage - 1}`}
				>
					前一页
				</a>
			</div>
			<div class={`${currentPage === totalPages ? 'invisible pointer-events-none' : ''}`}>
				<a
					class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
					href={`${path}/${currentPage + 1}`}
				>
					下一页
				</a>
			</div>
		</div>

		<!-- 电脑端 -->
		<div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
			<div>
				<p class="text-sm text-slate-700 dark:text-slate-400">
					当前为 <span class="font-medium">{(currentPage - 1) * itemPerPage + 1}</span> 至
					<span class="font-medium">{Math.min(currentPage * itemPerPage, totalArticles)}</span>
					条，共计
					<span class="font-medium">{totalArticles}</span> 条
				</p>
			</div>

			<div>
				<nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
					<a
						href={`${path}/${currentPage - 1}`}
						class={currentPage === 1
							? `relative inline-flex items-center rounded-l-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-700 px-2 py-2 text-sm font-medium text-gray-300 pointer-events-none	`
							: `relative inline-flex items-center rounded-l-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-700 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-zinc-900 focus:z-20`}
					>
						<span class="sr-only">上一页</span>
						<svg
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
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
								class={`page-item ${
									pageNumber === currentPage
										? 'relative z-10 inline-flex items-center border border-zinc-500 bg-zinc-50 dark:bg-zinc-800 px-4 py-2 text-sm font-bold text-blue-600 focus:z-20'
										: 'relative inline-flex items-center border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-2 text-sm font-normal text-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-800 focus:z-20'
								} ${typeof pageNumber === 'string' ? 'disabled' : ''}`}
							>
								{pageNumber}
							</a>
						{:else}
							<div
								class="relative inline-flex items-center border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-2 text-sm font-medium text-gray-500"
							>
								...
							</div>
						{/if}
					{/each}

					<a
						href={`${path}/${currentPage + 1}`}
						class={currentPage === totalPages
							? `relative inline-flex items-center rounded-r-md border border-zinc-300 dark:border-zinc-700 bg-white  px-2 py-2 text-sm font-medium text-gray-300 pointer-events-none`
							: `relative inline-flex items-center rounded-r-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-700 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 dark:hover:bg-zinc-900`}
					>
						<span class="sr-only">下一页</span>
						<svg
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
						</svg>
					</a>
				</nav>
			</div>
		</div>
	</div>
{/if}
