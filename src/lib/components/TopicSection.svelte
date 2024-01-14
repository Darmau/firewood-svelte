<script>
	const CF_URL = 'https://imagedelivery.net/VyUbUTLtvl82TWWarMVgPw/';
	const topics = [
		{ label: '技术', href: '/topic/tech/1', cover: '1a101745-c956-4363-fbf2-f7c2a4d49300' },
		{ label: '编程', href: '/topic/code/1', cover: '8d3919c0-d428-4dc5-0d98-5aae9b38f600' },
		{ label: '社会', href: '/topic/society/1', cover: 'c0bee2a5-d178-474d-aa51-a093abc41c00' },
		{ label: '日记', href: '/topic/diary/1', cover: '6a0c09bb-7c98-4845-dca4-8f6686cd1500' },
		{ label: '生活', href: '/topic/life/1', cover: 'ff272716-ebae-44cb-b2dc-019b5af85400' },
		{ label: '政治', href: '/topic/politics/1', cover: '2c3a97d3-65ce-482b-51f6-bf1cb187ee00' },
		{ label: '职场', href: '/topic/career/1', cover: '7c68281c-b2fb-423a-11dd-32ac101ca800' },
		{ label: '旅行', href: '/topic/travel/1', cover: '07c6f29d-a8d9-4d91-2a11-7fc2d1997700' },
		{ label: '人文', href: '/topic/culture/1', cover: '9fb3140a-a8fb-4827-7ae4-f20835481b00' },
		{ label: '学习', href: '/topic/education/1', cover: '16c935f8-f4ed-45f9-3d7a-9371b6be4600' },
		{ label: '情感', href: '/topic/emotion/1', cover: '6773ac82-d3b2-4ea6-c49e-bf4a4e401c00' },
		{ label: '综合', href: '/topic/others/1', cover: 'e515c66d-bcc4-4c13-e3c8-fb09067f6500' },
	];
</script>

<section
	class="hidden lg:block py-8">
	<div class = "border-b border-gray-200 dark:border-gray-700 pb-5">
		<h2 class =
					"text-base font-medium leading-6 text-zinc-800 dark:text-zinc-100">分类</h2>
	</div>
	<div class="grid gap-4 grid-cols-2 mt-8">
		{#each topics as topic}
			<a href={topic.href} data-sveltekit-preload-data>
				<div class="bg-gray-200 relative overflow-hidden rounded-md group">
          <div class="absolute inset-0 flex items-center justify-center z-10">
						<p class="text-white font-medium">{topic.label}</p>
					</div>
					<div class="w-full h-full">
						<img class="aspect-[5/2] object-cover rounded-md group-hover:blur-sm transition-all duration-300 group-hover:scale-105 group-hover:brightness-75" src={`${CF_URL}${topic.cover}/topics`} alt={topic.label} loading="lazy" />
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>
