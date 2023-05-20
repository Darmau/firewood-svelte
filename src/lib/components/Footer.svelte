<script>
	const thisYear = new Date().getFullYear();

	const catelogList = [
		{ label: '科技', href: '/topic/tech' },
		{ label: '社会', href: '/topic/society' },
		{ label: '文化', href: '/topic/culture' },
		{ label: '旅游', href: '/topic/travel' }
	];

	const articleList = [
		{ label: '推荐', href: '/' },
		{ label: '热门', href: '/' },
		{ label: '发布时间', href: '/' }
	];

	const aboutList = [
		{ label: '本站', href: '/about' },
		{ label: '提交博客', href: 'mailto:submit@darmau.design' }
	];
</script>

<footer class="bg-white" aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			<div class="space-y-8">
				<img
					class="h-7"
					src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
					alt="Company name"
				/>
				<p class="text-sm leading-6 text-gray-600">
					在这个时代依然相信文字的力量，和自由思考的价值
				</p>
				<div class="flex space-x-6">
					<a href="https://darmau.design" class="text-gray-400 hover:text-gray-500" target="_blank">
						<span class="sr-only">可可托海没有海</span>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
							/>
						</svg>
					</a>
					<a
						href="https://twitter.com/home"
						class="text-gray-400 hover:text-gray-500"
						target="_blank"
					>
						<span class="sr-only">Twitter</span>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
							/>
						</svg>
					</a>
					<a
						href="https://github.com/Darmau"
						class="text-gray-400 hover:text-gray-500"
						target="_blank"
					>
						<span class="sr-only">GitHub</span>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
								clip-rule="evenodd"
							/>
						</svg>
					</a>
				</div>
			</div>
			<div class="">
				<div class="grid grid-cols-2 md:grid-cols-3 md:gap-8">
					<div class="mt-10 md:mt-0">
						<h3 class="text-sm font-semibold leading-6 text-gray-900">文章分类</h3>
						<ul class="mt-6 space-y-4">
							{#each catelogList as item}
								<li>
									<a href={item.href} class="text-sm leading-6 text-gray-600 hover:text-gray-900"
										>{item.label}</a
									>
								</li>
							{/each}
						</ul>
					</div>
					<div class="mt-10 md:mt-0">
						<h3 class="text-sm font-semibold leading-6 text-gray-900">全部文章</h3>
						<ul class="mt-6 space-y-4">
							{#each articleList as item}
								<li>
									<a href={item.href} class="text-sm leading-6 text-gray-600 hover:text-gray-900"
										>{item.label}</a
									>
								</li>
							{/each}
						</ul>
					</div>
					<div class="mt-10 md:mt-0">
						<h3 class="text-sm font-semibold leading-6 text-gray-900">关于</h3>
						<ul class="mt-6 space-y-4">
							{#each aboutList as item}
								<li>
									<a href={item.href} class="text-sm leading-6 text-gray-600 hover:text-gray-900"
										>{item.label}</a
									>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
			<p class="text-xs leading-5 text-gray-500">
				&copy; {thisYear} Design and Develop by 李大毛没有猫. All rights reserved.
			</p>
		</div>
	</div>
</footer>
