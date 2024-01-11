<script>
	const topicList = [
		{ label: '技术', href: '/topic/tech/1' },
		{ label: '日记', href: '/topic/diary/1' },
		{ label: '生活', href: '/topic/life/1' },
		{ label: '社会', href: '/topic/society/1' },
		{ label: '编程', href: '/topic/code/1' },
		{ label: '人文', href: '/topic/culture/1' },
	];
</script>

<div
	class="flex justify-center items-center w-full py-4 px-6 border-b dark:border-zinc-700 text-sm"
>
	<div class="flex items-center gap-6 overflow-x-auto md:gap-8">
		{#each topicList as topic}
			<a
				href={topic.href}
				class="whitespace-nowrap text-zinc-800 dark:text-zinc-100 transition-all duration-150 hover:text-teal-600 hover:font-medium dark:hover:text-teal-400"
				data-sveltekit-preload-data="hover"
				>{topic.label}</a
			>
		{/each}
	</div>
</div>
