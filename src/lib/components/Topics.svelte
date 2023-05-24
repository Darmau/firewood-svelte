<script>
	const topicList = [
		{ label: '技术', href: '/topic/tech/1' },
		{ label: '社会', href: '/topic/society/1' },
		{ label: '文化', href: '/topic/culture/1' },
		{ label: '旅游', href: '/topic/travel/1' },
		{ label: '生活', href: '/topic/emotion/1' },
		{ label: '时事', href: '/topic/politics/1' },
		{ label: '游戏', href: '/topic/game/1' }
	];
</script>

<div
	class="flex justify-center w-full overflow-x-scroll p-4 border-b dark:border-zinc-700 text-sm leading-6 sm:pl-6 sm:leading-7"
>
	<div class="flex items-center gap-6 md:gap-8">
		{#each topicList as topic}
			<a
				href={topic.href}
				class="inline-block whitespace-nowrap text-zinc-800 dark:text-zinc-100 transition-all duration-150 hover:text-teal-600 hover:font-medium dark:hover:text-teal-400"
				>{topic.label}</a
			>
		{/each}
	</div>
</div>
