<script>
	const rules = [
		{ title: '独立博客', content: '只要内容够好，有没有独立的域名、服务器不重要。因此托管于GitHub Pages的博客可以收录，但Medium、简书之类的平台上的博客不予收录。因为这些博客已经有官方流量了。' },
		{ title: '更新频率', content: '没有硬性限制。但一般来说，上线时间越久的博客，对更新频率的要求越低。最近一年上线的博客一般要求至少有10篇文章' },
		{ title: 'RSS', content: '本站的抓取来源是各博客的RSS文件，因此没有提供RSS链接的博客无法收录' },
		{ title: '原创', content: '显然，博客的内容必须以原创为主，译文可以算原创' },
		{ title: '中文', content: '文章内容必须以中文为主，可以是繁体中文' },
		{ title: '设计和体验', content: '对于界面设计优秀、加载速度快的博客，其他要求都可以放宽' }
	];
	export let data;
</script>

<svelte:head>
	<title>关于本站 - 积薪</title>
	<meta name="description" content="积薪是什么意思 本站的介绍 收录独立博客的标准 如何提交博客" />
</svelte:head>

<main>
	<div class="relative -z-10 isolate overflow-hidden bg-gradient-to-b from-teal-100/20 pt-14">
		<div
			class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white dark:bg-black shadow-xl shadow-teal-600/10 ring-1 ring-teal-50 dark:ring-teal-800 sm:-mr-80 lg:-mr-96"
			aria-hidden="true"
		/>
		<div class="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
			<div
				class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8"
			>
				<h1
					class="max-w-2xl text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-6xl lg:col-span-2 xl:col-auto"
				>
					致敬那些还在写博客的人
				</h1>
				<div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
					<p class="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
						写作从来都不是大多数人具有的能力。在如今这个《1984》和《美丽新世界》完美共存的国家，愿意产出优秀的内容，并且向全世界共享的人是值得尊敬的。
					</p>
				</div>
				<picture class="mt-10 aspect-[4/3] w-full max-w-lg rounded-2xl sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36 overflow-hidden">
					<source srcset="https://firewood-1256887306.cos.accelerate.myqcloud.com/normal/about.avif" type="image/avif" />
					<source srcset="https://firewood-1256887306.cos.accelerate.myqcloud.com/normal/about.webp" type="image/webp" />
					<img
						src="https://firewood-1256887306.cos.accelerate.myqcloud.com/normal/about.jpg"
						alt="打字机"
						class="object-cover h-full"
						loading="lazy"
					/>
				</picture>
			</div>
		</div>
		<div class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white dark:from-black sm:h-32" />
	</div>

	<div class="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
		<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
			<h2 class="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">关于本站</h2>
			<div class="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
				<div class="lg:w-full lg:max-w-2xl lg:flex-auto">
					<p class="text-xl leading-8 text-zinc-600 dark:text-zinc-400">
						作为一个经历过那个共享、开放的互联网的遗老，我拥护开放和自由。可惜如今的中国互联网在本就是一个巨大的监狱内，建立起一个个小监狱。这些小监狱禁止搜索引擎，禁止外链，管控评论。而数据的所有权实际上并不在创作者手里。
					</p>
					<p class="text-xl leading-8 text-zinc-600 dark:text-zinc-400 mt-8">
						因此在这个环境下仍然坚持输出原创的内容并且开放的人显得尤为不容易。我希望有个地方能让这些内容被更多人看到。所以我开发了这个网站。尽管在抓取的时候已经将正文内容存入数据库用作备份，本站并不会将用户强行留在这里，而是将流量导入原博客。
					</p>
					<p class="text-xl leading-8 text-zinc-600 dark:text-zinc-400 mt-8">
						积薪就是积聚的木柴。在敦煌的汉长城遗址附近，有很多一堆一堆的土堆。这就是当年储存的木柴经过两千年的风化，已经变成了化石。我希望这些文字也能像这些木柴一样，能穿越时空，被更多的人看到。
					</p>
					<div class="mt-10 max-w-xl text-base leading-7 text-zinc-700 dark:text-zinc-300">
						<p>
							这也是我学习Node的练手项目。本站后端使用<a class="border-b-2 hover:border-teal-500" href="https://nestjs.com/" target="_blank">Nest.js</a>，负责管理博客的信息。并定时根据RSS内的链接抓取文章信息，转换OpenGraph的图片存入OSS，并将相关数据存入MongoDB。以及提供各类CRUD接口。
						</p>
						<p class="mt-10">
							前端上我放弃了熟悉的React和Next，采用了SvelteKit进行开发。除了生态不如React，很多功能都要自己实现以外，其他方面倒还不错。
						</p>
					</div>
				</div>
				<div class="lg:flex lg:flex-auto lg:justify-center">
					<dl class="w-64 space-y-8 xl:w-80">
						<div class="flex flex-col-reverse gap-y-4">
							<dt class="text-base leading-7 text-zinc-600 dark:text-zinc-400">收录文章</dt>
							<dd class="text-5xl font-semibold tracking-tight text-teal-600 dark:text-teal-300">{data.article}篇</dd>
						</div>
						<div class="flex flex-col-reverse gap-y-4">
							<dt class="text-base leading-7 text-zinc-600 dark:text-zinc-400">收录博客</dt>
							<dd class="text-5xl font-semibold tracking-tight text-teal-600 dark:text-teal-300">{data.website}个</dd>
						</div>
					</dl>
				</div>
			</div>
		</div>
	</div>

	<div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
		<div class="mx-auto max-w-2xl lg:mx-0">
			<h2 class="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">收录标准</h2>
			<p class="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
				收不收录站长说了算。然而还是能总结出一些收录标准的：
			</p>
		</div>
		<dl
			class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			{#each rules as rule}
				<div>
					<dt class="font-semibold text-teal-600 dark:text-teal-300">{rule.title}</dt>
					<dd class="mt-1 text-zinc-600 dark:text-zinc-400">
						{rule.content}
					</dd>
				</div>
			{/each}
		</dl>
	</div>

	<!-- 提交博客 -->
	<div class="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold text-zinc-800 dark:text-zinc-100 sm:text-4xl">
				如果你有值得推荐的博客<br />请通过下方邮件提交
			</h2>
			<p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
				不保证提交就能收录
			</p>
			<div class="mt-10 flex items-center justify-center gap-x-6">
				<a
					href="mailto:submit@darmau.design"
					target="_blank"
					class="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
					>发邮件</a
				>
			</div>
		</div>
	</div>
</main>
