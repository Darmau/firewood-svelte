<script lang="ts">
	import {onMount} from 'svelte';

	export let currentPage: number = 1;
	export let totalArticles: number = 1;
	export let itemPerPage: number = 15;
	export let path: string;

	const totalPages = Math.ceil(totalArticles / itemPerPage);

	onMount(() => {
		currentPage;
	});
</script>

{#if totalPages > 1}
	<div class="flex items-center justify-between mt-8 py-8">
		<div class="flex flex-1 justify-between">
			<div class={currentPage === 1 ? 'invisible pointer-events-none' : ''}>
				<a
					class="relative inline-flex items-center rounded-md border dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-zinc-900"
					href={`${path}/${+currentPage - 1}`}
					data-sveltekit-preload-data="hover"
				>
					上一页
				</a>
			</div>
			<div class={currentPage === totalPages ? 'invisible pointer-events-none' : ''}>
				<a
					class="relative ml-3 inline-flex items-center rounded-md border dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-zinc-900"
					href={`${path}/${+currentPage + 1}`}
					data-sveltekit-preload-data="hover"
				>
					下一页
				</a>
			</div>
		</div>
	</div>
{/if}
