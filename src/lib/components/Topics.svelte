<script>
	const topicList = [
		{ label: '技术', href: '/topic/tech/1' },
		{ label: '社会', href: '/topic/society/1' },
		{ label: '文化', href: '/topic/culture/1' },
		{ label: '旅游', href: '/topic/travel/1' },
		{ label: '生活', href: '/topic/emotion/1' }
	];
</script>

<div
	class="flex justify-center p-4 w-full border-b dark:border-zinc-700 gap-x-8 text-sm leading-6 sm:w-auto sm:pl-6 sm:leading-7"
>
	{#each topicList as topic}
		<a
			href={topic.href}
			class="text-zinc-800 dark:text-zinc-100 transition-all duration-150 hover:text-teal-600 hover:font-medium dark:hover:text-teal-400"
			>{topic.label}</a
		>
	{/each}
</div>
