<script>
	const COS_URL = 'https://firewood-1256887306.cos.accelerate.myqcloud.com/normal/';
	const topics = [
		{ label: '技术', href: '/topic/tech/1', cover: 'tech' },
		{ label: '社会', href: '/topic/society/1', cover: 'society' },
		{ label: '文化', href: '/topic/culture/1', cover: 'culture' },
		{ label: '旅行', href: '/topic/travel/1', cover: 'travel' },
		{ label: '生活情感', href: '/topic/emotion/1', cover: 'emotion' },
		{ label: '历史', href: '/topic/history/1', cover: 'history' },
		{ label: '游戏', href: '/topic/game/1', cover: 'game' },
		{ label: '时事', href: '/topic/politics/1', cover: 'politics' },
		{ label: '国际', href: '/topic/international/1', cover: 'international' },
		{ label: '体育', href: '/topic/sports/1', cover: 'sports' },
		{ label: '综合', href: '/topic/others/1', cover: 'others' },
		{ label: '财经', href: '/topic/finance/1', cover: 'finance' }
	];
</script>

<section class="py-8 border-b border-zinc-200 dark:border-zinc-700/40">
	<h2 class="text-2xl font-bold text-zinc-800 dark:text-zinc-100">分类</h2>
	<div class="grid gap-4 grid-cols-2 mt-8 md:grid-cols-3 lg:grid-cols-4">
		{#each topics as topic}
			<a href={topic.href}>
				<div class="bg-gray-200 relative overflow-hidden rounded-md group">
          <div class="absolute inset-0 flex items-center justify-center z-10">
						<p class="text-white font-bold text-lg">{topic.label}</p>
					</div>
					<picture class="w-full h-full">
						<source srcset={`${COS_URL}${topic.cover}.avif`} type="image/avif" />
						<source srcset={`${COS_URL}${topic.cover}.webp`} type="image/webp" />
						<img class="aspect-[5/2] object-cover rounded-md group-hover:blur-sm transition-all duration-300 group-hover:scale-105 group-hover:brightness-75" src={`${COS_URL}${topic.cover}.jpg`} alt={topic.label} />
					</picture>
				</div>
			</a>
		{/each}
	</div>
</section>
