<script>
	let menuShown = false;
	const toogleMenu = () => {
		menuShown = !menuShown;
	};

	const navItems = [
		{ label: '首页', href: '/' },
		{ label: '推荐文章', href: '/feature/1' },
		{ label: '作者', href: '/author/1' },
		{ label: '关于本站', href: '/about' }
	];

	export let show = true;
</script>

<header
	class={`bg-white dark:bg-zinc-900 border-b dark:border-zinc-700 z-20 fixed top-0 w-full transition-all duration-300 ${
		show ? '' : 'transform -translate-y-full'
	}`}
>
	<nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
		<a href="/" class="-m-1.5 p-1.5 flex items-center gap-2">
			<img
				class="h-8 w-auto"
				src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
				alt=""
			/>
			<h1 class="text-lg font-medium">积薪</h1>
		</a>
		<div class="flex lg:hidden">
			<button
				type="button"
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700 dark:text-slate-100 cursor-pointer"
				on:click={toogleMenu}
			>
				<svg
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		</div>
		<div class="hidden lg:flex lg:gap-x-12">
			{#each navItems as nav}
				<a href={nav.href} class="text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100"
					>{nav.label}</a
				>
			{/each}
		</div>
	</nav>

	<!-- Mobile menu, show/hide based on menu open state. -->
	<div class={`${menuShown ? 'block' : 'hidden'} lg:hidden`} role="dialog" aria-modal="true">
		<!-- Background backdrop, show/hide based on slide-over state. -->
		<div class="fixed inset-0 z-10 bg-gray-500/30" on:click={toogleMenu} on:keydown={toogleMenu} />
		<div
			class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-zinc-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
		>
			<div class="flex items-center justify-between">
				<a href="/" class="-m-1.5 p-1.5">
					<span class="sr-only">可可托海没有海</span>
					<img
						class="h-8 w-auto"
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
						alt=""
					/>
				</a>
				<button
					type="button"
					class="-m-2.5 rounded-md p-2.5 text-slate-700 dark:text-slate-100"
					on:click={toogleMenu}
				>
					<span class="sr-only">Close menu</span>
					<svg
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div class="mt-6 flow-root">
				<div class="-my-6 divide-y divide-gray-500/10">
					<div class="space-y-2 py-6">
						{#each navItems as nav}
							<a
								href={nav.href}
								class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-zinc-50 dark:text-slate-50 dark:hover:bg-zinc-800"
								>{nav.label}</a
							>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
