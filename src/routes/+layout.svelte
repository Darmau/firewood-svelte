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
	<link rel="manifest" href="/manifest.json" />
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png" />
	<link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png" />
	<link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png" />
	<link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png" />
	<link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png" />
	<link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png" />
	<link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<script
		async
		src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2439295902943960"
		crossorigin="anonymous"
	></script>
	<script async src="https://umami.darmau.dev/script.js" data-website-id="d40b64d9-426b-490e-bc93-f8cab4438c95"></script>
</svelte:head>

<NavBar show={showNavBar} />
<div class="mt-20">
	<slot />
</div>
<Footer />
