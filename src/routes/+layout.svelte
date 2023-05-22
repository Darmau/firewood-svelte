<script>
	import '../app.css';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';

	let showNavBar = true;
	let lastScrollTop = 0;

	onMount(() => {
		function handleScroll() {
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			showNavBar = scrollTop < lastScrollTop || scrollTop < 60;
			lastScrollTop = scrollTop;
		}

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<svelte:head>
	<title>积薪 - 独立博客导航站</title>
	<meta name="description" content="依然相信文字的力量" />
	<script
		async
		src="https://analytics.darmau.design/script.js"
		data-website-id="e8bdffeb-b9da-4541-afc3-4d0a8dc5664b"
	></script>
</svelte:head>

<NavBar show={showNavBar} />
<div class="mt-20">
	<slot />
</div>
<Footer />
