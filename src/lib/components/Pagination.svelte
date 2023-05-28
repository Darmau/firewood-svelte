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
		<div class="flex flex-1 justify-between">
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
	</div>
{/if}
