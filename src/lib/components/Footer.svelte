<script>
	const thisYear = new Date().getFullYear();

	const catelogList = [
		{ label: '技术', href: '/topic/tech/1' },
		{ label: '编程', href: '/topic/code/1' },
		{ label: '社会', href: '/topic/society/1' },
		{ label: '日记', href: '/topic/diary/1' },
		{ label: '生活', href: '/topic/life/1' },
		{ label: '政治', href: '/topic/politics/1' },
		{ label: '职场', href: '/topic/career/1' },
		{ label: '旅行', href: '/topic/travel/1' },
		{ label: '人文', href: '/topic/culture/1' },
		{ label: '学习', href: '/topic/education/1' },
		{ label: '情感', href: '/topic/emotion/1' },
		{ label: '综合', href: '/topic/others/1' },
	];

	const articleList = [
		{ label: '推荐', href: '/feature/1' },
		{ label: '最新', href: '/latest/1' }
	];

	const aboutList = [
		{ label: '本站', href: '/about' },
		{
			label: '提交博客',
			href: 'mailto:submit@firewood.news?subject=%E6%8E%A8%E8%8D%90%E5%8D%9A%E5%AE%A2%20-%20%E7%A7%AF%E8%96%AA&body=%E5%8D%9A%E5%AE%A2%E5%90%8D%EF%BC%9A%0D%0A%E9%93%BE%E6%8E%A5%EF%BC%9A%0D%0ARSS%EF%BC%9A'
		}
	];
</script>

<footer class="border-t border-zinc-200 dark:border-zinc-700/40" aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
		<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
			<div class="space-y-8 col-span-1">
				<a href="/" class="text-black hover:text-teal-500 dark:text-white" title="回到首页">
					<svg class="w-20" fill="currentColor" viewBox="0 0 166 80" aria-hidden="true">
						<path
							d="M49.7987 59.0369C50.9764 60.293 53.5437 61.0625 55.0671 61.519L55.0673 61.5191C55.3221 61.5955 55.5478 61.6631 55.7328 61.7228C53.9553 59.5244 51.6447 57.0652 49.1894 54.4521L49.1893 54.452C41.8084 46.5965 33.1207 37.3503 33.6831 29.6165C34.169 22.9364 38.4928 17.6235 41.3037 15C37.8682 15.8745 32.6278 18.7478 30.9972 29.9288C29.8194 38.0051 46.1808 55.2273 49.4071 58.6233L49.4081 58.6244C49.5749 58.8 49.7066 58.9385 49.7987 59.0369ZM43.7397 41.9843L40.5541 37.9242C43.0526 34.9259 44.4268 32.24 43.9271 27.6177C47.6749 31.4904 46.613 38.6113 43.7397 41.9843ZM30.8708 56.8414C26.9799 51.5568 21.7696 44.4803 21.003 40.8599C20.1912 37.0268 21.6901 31.8027 24.8133 29.2417C23.8971 30.9699 23.2153 36.8303 26.125 41.4221C28.6081 45.3408 33.0191 50.2475 36.2595 53.852L36.2596 53.852C38.236 56.0506 39.777 57.7647 40.1793 58.4747C40.8547 59.6666 35.8677 64.2885 34.8699 62.5348C34.2142 61.3824 32.6863 59.3072 30.8713 56.8421L30.8712 56.842L30.8711 56.8418L30.871 56.8416L30.8709 56.8415L30.8708 56.8414L30.8708 56.8414ZM27.3743 53.9148L29.0608 56.1011C27.2077 58.4747 23.1369 62.936 21.5651 61.9727C20.2747 61.1817 22.3688 59.1146 24.5195 56.9917C25.596 55.9291 26.6867 54.8525 27.3743 53.9148ZM24.8133 50.167L22.6895 47.0438C20.7211 48.6288 17.9472 50.4229 15.3395 52.1095L15.3395 52.1095L15.3395 52.1096C11.5755 54.5441 8.15816 56.7544 8.01056 57.7876C7.76071 59.5365 12.0082 64.545 13.8197 63.7216C16.0184 62.7222 22.0649 54.2688 24.8133 50.167ZM25.7502 51.6661L26.5622 52.6031C24.8133 55.4764 21.702 58.7315 20.191 59.7864C17.8526 61.4189 20.033 58.7507 22.6159 55.59L22.616 55.5898L22.6161 55.5898L22.6164 55.5894L22.6165 55.5892C23.6902 54.2754 24.8333 52.8765 25.7502 51.6661ZM29.4981 27.9924C27.9365 29.7414 25.4847 34.2261 26.7497 38.3614C28.3737 43.6708 46.2383 62.972 47.7999 63.7216C49.3615 64.4712 50.7357 63.5967 50.3609 62.4099C50.2299 61.9949 47.9106 59.2417 44.88 55.6441L44.88 55.644L44.88 55.644C39.5991 49.375 32.1585 40.5422 30.3725 37.0496C28.6158 33.6141 28.3737 31.5528 29.4981 27.9924ZM38.6177 20.6217C37.077 22.2666 34.5102 26.1185 34.6825 31.6778C34.897 38.5941 49.8075 53.8401 55.6732 59.8378C56.6413 60.8277 57.363 61.5656 57.7316 61.9726C60.7299 65.2832 64.5401 57.4375 62.4788 55.6638C61.8699 55.1398 60.2966 54.2567 58.2194 53.0905C51.9586 49.5759 41.1195 43.491 38.3054 36.9247C35.1126 29.4749 37.4025 23.6911 38.5958 20.677L38.6177 20.6217Z"
						/>
						<path
							d="M110.572 27.61H100.639V44.767H110.572V27.61ZM100.639 45.971V47.734C100.639 48.078 99.177 48.981 96.769 48.981H95.952V24.385L101.112 26.406H110.4L112.765 23.654L117.194 27.18C116.893 27.524 116.463 27.825 115.474 27.997V46.917C115.474 47.218 113.883 48.164 111.432 48.164H110.572V45.971H100.639ZM88.556 36.984V39.65C98.618 43.262 94.361 50.572 90.663 47.261C90.534 45.154 89.588 42.789 88.556 40.897V61.451C88.513 61.752 86.922 62.827 84.514 62.827H83.611V47.132C81.848 49.626 79.741 51.819 77.376 53.797L76.903 53.324C79.913 48.895 81.977 42.746 83.138 36.984H77.72L77.376 35.737H83.611V29.244C81.504 29.545 79.354 29.803 77.29 29.975L77.161 29.459C81.547 27.739 86.922 24.643 89.545 22.45L95.221 27.18C94.662 27.653 93.759 27.739 92.383 27.309C91.265 27.653 89.975 27.997 88.556 28.298V35.737H89.201L91.394 32.641C91.394 32.641 93.845 34.791 95.307 36.296C95.221 36.769 94.791 36.984 94.189 36.984H88.556ZM91.437 62.741L91.007 62.311C94.232 59.387 97.629 54.27 99.65 48.809L105.67 52.206C105.412 52.679 104.767 52.937 103.821 52.722C100.553 57.495 96.21 60.763 91.437 62.741ZM107.261 49.411L107.734 49.153C122.096 54.786 117.495 65.837 112.335 61.451C111.948 57.409 109.626 52.679 107.261 49.411ZM131.9 28.47H120.505L120.204 27.223H131.9V22.536L138.049 23.095C138.006 23.654 137.662 24.084 136.544 24.213V27.223H144.026V22.536L150.304 23.052C150.261 23.654 149.874 24.084 148.799 24.213V27.223H153.873L156.367 24.084C156.367 24.084 159.162 26.234 160.753 27.782C160.667 28.255 160.237 28.47 159.635 28.47H148.799V30.964C148.799 31.308 146.993 31.953 144.8 31.996H144.026V28.47H136.544V31.136C136.544 31.566 134.738 32.211 132.674 32.211H131.9V28.47ZM128.245 57.409V53.023C128.03 53.023 127.772 53.066 127.428 53.023C126.654 54.571 125.536 56.291 124.203 57.925C124.934 58.011 126.912 58.14 127.514 58.14C128.116 58.14 128.245 57.839 128.245 57.409ZM132.975 51.561L133.319 51.346C143.811 53.066 139.683 60.892 135.641 57.753C135.512 55.603 134.265 53.152 132.975 51.647V57.495C132.975 60.548 132.287 62.354 127.342 62.741C127.299 61.494 127.17 60.462 126.74 59.86C126.267 59.258 125.622 58.742 123.945 58.484V58.269C122.999 59.387 122.01 60.419 120.849 61.279L120.419 60.806C122.139 57.753 123.257 53.066 123.644 49.97L128.245 52.034V49.669H121.064L120.72 48.422H128.245V44.595H120.591L120.247 43.348H131.556C131.943 41.499 132.287 39.177 132.502 37.371H121.451L121.107 36.124H129.363C128.976 35.995 128.589 35.737 128.202 35.393C128.288 33.802 127.643 32.082 126.998 31.05L127.342 30.835C134.136 31.781 133.577 35.264 131.384 36.124H134.48L136.802 33.157C136.802 33.157 139.468 35.221 141.059 36.683C140.93 37.156 140.5 37.371 139.898 37.371H133.104L138.393 38.532C138.264 39.091 137.791 39.478 136.845 39.478C135.856 40.596 134.437 42.058 133.061 43.348H135.641L137.705 40.854C137.705 40.854 140.113 42.617 141.575 43.907C141.489 44.38 141.059 44.595 140.457 44.595H132.975V48.422H135.297L137.318 45.756C137.318 45.756 139.683 47.648 141.102 48.981C140.973 49.454 140.543 49.669 139.941 49.669H132.975V51.561ZM123.515 37.672L123.945 37.457C132.545 39.478 128.159 45.455 124.977 42.574C124.977 40.854 124.246 38.876 123.515 37.672ZM154.346 42.531L156.754 39.306C156.754 39.306 159.463 41.542 161.054 43.09C160.925 43.563 160.495 43.778 159.893 43.778H155.851V61.709C155.808 61.967 154.346 62.87 151.895 62.87H151.035V43.778H147.122V44.896C147.122 50.787 146.391 58.183 137.748 62.827L137.275 62.311C141.833 57.237 142.306 50.873 142.306 44.81V33.501L147.122 35.221C150.218 33.802 153.486 31.953 155.335 30.577L160.495 35.436C159.979 35.866 158.99 35.909 157.7 35.436C154.991 35.952 150.949 36.425 147.122 36.64V42.531H154.346Z"
						/>
					</svg>
				</a>
				<p class="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
					在这个时代依然相信文字的力量，和自由思考的价值
				</p>
				<div class="flex space-x-6">
					<a
						href="/rss.xml"
						class="text-zinc-400 hover:text-teal-500"
						target="_blank"
						title="推荐文章订阅"
						data-umami-event = "rss"
						data-umami-event-type = "footer"
					>
						<span class="sr-only">推荐文章RSS</span>
						<svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
							<path fill-rule="evenodd" d="M3.75 4.5a.75.75 0 01.75-.75h.75c8.284 0 15 6.716 15 15v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75C18 11.708 12.292 6 5.25 6H4.5a.75.75 0 01-.75-.75V4.5zm0 6.75a.75.75 0 01.75-.75h.75a8.25 8.25 0 018.25 8.25v.75a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75v-.75a6 6 0 00-6-6H4.5a.75.75 0 01-.75-.75v-.75zm0 7.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clip-rule="evenodd" />
						</svg>
					</a>
					<a
						href="https://darmau.design"
						class="text-zinc-400 hover:text-teal-500"
						target="_blank"
						title="站长的博客"
						data-umami-event = "darmau-design"
					>
						<span class="sr-only">可可托海没有海</span>
						<svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
							<path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
							<path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
						</svg>
					</a>
					<a
						href="https://twitter.com/darmaulee"
						class="text-zinc-400 hover:text-teal-500"
						target="_blank"
						title="站长的推特"
						data-umami-event = "twitter"
					>
						<span class="sr-only">Twitter</span>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
							/>
						</svg>
					</a>
					<a
						href="https://github.com/Darmau/firewood-svelte"
						class="text-zinc-400 hover:text-teal-500"
						target="_blank"
						title="本站前端代码"
						data-umami-event = "github"
					>
						<span class="sr-only">本站前端代码</span>
						<svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
							<path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM8.547 4.505a8.25 8.25 0 1011.672 8.214l-.46-.46a2.252 2.252 0 01-.422-.586l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 01-1.384-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.279-2.132z" clip-rule="evenodd" />
						</svg>
					</a>
					<a
						href="https://github.com/Darmau/firewood-nest"
						class="text-zinc-400 hover:text-teal-500"
						target="_blank"
						title="本站后端代码"
						data-umami-event = "github"
					>
						<span class="sr-only">本站后端代码</span>
						<svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
							<path fill-rule="evenodd" d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clip-rule="evenodd" />
						</svg>

					</a>
				</div>
			</div>
			<div
				class="grid grid-cols-1 md:col-span-2 md:flex md:justify-between md:gap-8">
					<div class="mt-10 md:mt-0">
						<h3 class="font-medium leading-6 text-zinc-800 dark:text-zinc-100">
							文章分类
						</h3>
						<ul class="mt-6 grid grid-cols-3 gap-4 md:gap-6">
							{#each catelogList as item}
								<li class="md:pr-8">
									<a
										href={item.href}
										class="text-sm leading-6 text-zinc-600 dark:text-zinc-400 hover:text-teal-600 dark:hover:text-teal-400"
										>{item.label}</a
									>
								</li>
							{/each}
						</ul>
					</div>
					<div class="mt-10 md:mt-0">
						<h3 class="font-medium leading-6 text-zinc-800 dark:text-zinc-100">
							全部文章
						</h3>
						<ul class="mt-6 grid grid-cols-2 md:gap-6 md:grid-cols-1">
							{#each articleList as item}
								<li>
									<a
										href={item.href}
										class="text-sm leading-6 text-zinc-600 dark:text-zinc-400 hover:text-teal-600 dark:hover:text-teal-400"
										>{item.label}</a
									>
								</li>
							{/each}
						</ul>
					</div>
					<div class="mt-10 md:mt-0">
						<h3 class="font-medium leading-6 text-zinc-800 dark:text-zinc-100">
							关于
						</h3>
						<ul class="mt-6 grid grid-cols-2 md:gap-6 md:grid-cols-1">
							{#each aboutList as item}
								<li>
									<a
										href={item.href}
										class="text-sm leading-6 text-zinc-600 dark:text-zinc-400 hover:text-teal-600 dark:hover:text-teal-400"
										>{item.label}</a
									>
								</li>
							{/each}
						</ul>
					</div>
				</div>
		</div>
		<div class="mt-16 border-t border-gray-900/10 dark:border-gray-50/10 pt-8 sm:mt-20 lg:mt-24">
			<p class="text-xs leading-5 text-zinc-400 dark:text-zinc-500">
				&copy; {thisYear} Design and Develop by 李大毛没有猫. All rights reserved.
			</p>
		</div>
	</div>
</footer>
