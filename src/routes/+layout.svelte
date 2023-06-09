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
	<link rel="manifest" href="/manifest.json">
	<script
		async
		src="https://analytics.darmau.design/script.js"
		data-website-id="e8bdffeb-b9da-4541-afc3-4d0a8dc5664b"
	></script>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<NavBar show={showNavBar} />
<div class="mt-20">
	<slot />
</div>
<Footer />
