<script>
	const CF_URL = 'https://imagedelivery.net/VyUbUTLtvl82TWWarMVgPw/';
	const topics = [
		{ label: '技术', href: '/topic/tech/1', cover: '1a101745-c956-4363-fbf2-f7c2a4d49300' },
		{ label: '社会', href: '/topic/society/1', cover: 'c0bee2a5-d178-474d-aa51-a093abc41c00' },
		{ label: '文化', href: '/topic/culture/1', cover: '9fb3140a-a8fb-4827-7ae4-f20835481b00' },
		{ label: '旅行', href: '/topic/travel/1', cover: '07c6f29d-a8d9-4d91-2a11-7fc2d1997700' },
		{ label: '生活情感', href: '/topic/emotion/1', cover: '6773ac82-d3b2-4ea6-c49e-bf4a4e401c00' },
		{ label: '历史', href: '/topic/history/1', cover: 'ff272716-ebae-44cb-b2dc-019b5af85400' },
		{ label: '游戏', href: '/topic/game/1', cover: 'c739c0ff-b713-4563-e0e4-7ff5261e7100' },
		{ label: '时事', href: '/topic/politics/1', cover: '2c3a97d3-65ce-482b-51f6-bf1cb187ee00' },
		{ label: '国际', href: '/topic/international/1', cover: '46d98a2a-12ea-48cf-5c6d-d0c6cec68800' },
		{ label: '体育', href: '/topic/sports/1', cover: '69fb60f4-eb91-4e7e-ef45-067f2d4d7600' },
		{ label: '综合', href: '/topic/others/1', cover: 'e515c66d-bcc4-4c13-e3c8-fb09067f6500' },
		{ label: '财经', href: '/topic/finance/1', cover: 'df507b9f-1ea1-4b7d-b438-d9b37c0d4800' }
	];
</script>

<section class="py-8 border-b border-zinc-200 dark:border-zinc-700/40">
	<h2 class="text-2xl font-serif font-bold text-zinc-800 dark:text-zinc-100">分类</h2>
	<div class="grid gap-4 grid-cols-2 mt-8 md:grid-cols-3 lg:grid-cols-4">
		{#each topics as topic}
			<a href={topic.href}>
				<div class="bg-gray-200 relative overflow-hidden rounded-md group">
          <div class="absolute inset-0 flex items-center justify-center z-10">
						<p class="text-white font-bold text-lg">{topic.label}</p>
					</div>
					<div class="w-full h-full">
						<img class="aspect-[5/2] object-cover rounded-md group-hover:blur-sm transition-all duration-300 group-hover:scale-105 group-hover:brightness-75" src={`${CF_URL}${topic.cover}/topics`} alt={topic.label} loading="lazy" />
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>
