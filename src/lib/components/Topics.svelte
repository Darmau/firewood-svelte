<script>
	const topicList = [
		{ label: '技术', href: '/topic/tech' },
		{ label: '社会', href: '/topic/society' },
		{ label: '文化', href: '/topic/culture' },
		{ label: '旅游', href: '/topic/travel' },
    { label: '生活', href: '/topic/emotion' },
	];
</script>

<div
	class="flex justify-center p-4 w-full border-b gap-x-8 text-sm leading-6 sm:w-auto sm:border-gray-200 sm:pl-6 sm:leading-7"
>
	{#each topicList as topic}
		<a href={topic.href} class="text-gray-800 transition-all duration-150 hover:text-red-600 hover:font-medium">{topic.label}</a>
	{/each}
</div>
