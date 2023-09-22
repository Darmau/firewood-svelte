<script lang="ts">
	let currentTabPromise;
	let currentTab;
	let activeIndex = 0;

	async function switchTab(tabIndex: number) {
		activeIndex = tabIndex;
		switch (tabIndex) {
			case 0:
				currentTabPromise = import('$lib/components/AdminBlogs.svelte');
				break;
			case 1:
				currentTabPromise = import('$lib/components/AdminArticles.svelte');
				break;
			case 2:
				currentTabPromise = import('$lib/components/AdminError.svelte');
				break;
			default:
				currentTabPromise = import('$lib/components/AdminBlogs.svelte');
				break;
		}
		const module = await currentTabPromise;
		currentTab = module.default;
	}

	switchTab(0);

	const Tabs = [
		{ name: '博客管理', index: 0 },
		{ name: '文章管理', index: 1 },
		{ name: '抓取错误', index: 2 }
	];

	export let data;
</script>

<svelte:head>
	<title>管理后台</title>
	<meta name="description" content="管理收录网站和文章" />
</svelte:head>

<main class="mx-auto max-w-7xl px-6">
	<div
		class="flex justify-center items-center w-full py-4 px-6 border-b dark:border-zinc-700 text-sm"
	>
		<div class="flex items-center gap-6 overflow-x-auto md:gap-8">
			{#each Tabs as tab}
				<button
					on:click={() => switchTab(tab.index)}
					class={`${
						activeIndex === tab.index
							? 'text-teal-600 dark:bg-zinc-800 dark:text-teal-400 font-bold'
							: 'text-zinc-700 dark:text-zinc-300 hover:text-teal-600 hover:bg-zinc-50'
					} group flex gap-x-3 rounded-md p-2 text-sm leading-6`}
				>
					{tab.name}
				</button>
			{/each}
		</div>
	</div>

	<div class="w-full my-8">
		<svelte:component this={currentTab} token={data.token} />
	</div>
</main>
