<script lang = "ts">
  import CoverArticle from '$lib/components/CoverArticle.svelte';
  import Pagination from '$lib/components/Pagination.svelte';
  import addPageView from "$lib/functions/addPageView";
  import {onMount} from "svelte";
  import HottestArticle from "$lib/components/HottestArticle.svelte";

  export let data;
  let isMobile = false;
  onMount(() => {
    isMobile = window.innerWidth < 1024;
  })
</script>

<svelte:head>
  <title>推荐文章 - 积薪</title>
  <meta name = "description" content = "一些我觉得值得推荐的文章"/>
  <meta property = "og:url" content = "https://firewood.news/feature/1">
  <meta property = "og:type" content = "website">
  <meta property = "og:title" content = "推荐文章 - 积薪">
  <meta property = "og:description" content = "一些我觉得值得推荐的文章">
  <meta property = "og:image"
        content = "https://imagedelivery.net/VyUbUTLtvl82TWWarMVgPw/4763b0f6-c1f8-4738-3a8c-e57b7fcd7000/width=1200">
  <meta name = "twitter:card" content = "summary_large_image">
  <meta property = "twitter:domain" content = "firewood.news">
  <meta property = "twitter:url" content = "https://firewood.news/feature/1">
  <meta name = "twitter:title" content = "推荐文章 - 积薪">
  <meta name = "twitter:description" content = "一些我觉得值得推荐的文章">
  <meta name = "twitter:image"
        content = "https://imagedelivery.net/VyUbUTLtvl82TWWarMVgPw/4763b0f6-c1f8-4738-3a8c-e57b7fcd7000/width=1200">
</svelte:head>

<div class = "mx-auto max-w-7xl flex flex-col-reverse lg:grid lg:grid-cols-7">
  <main class = "px-6 py-8 md:py-12 lg:col-span-5">
    <div class = "border-b border-gray-200 dark:border-gray-700 pb-5">
      <h1 class = "text-base font-serif font-bold leading-6 text-zinc-800 dark:text-zinc-100">推荐文章</h1>
    </div>
    <div class = "flex flex-col gap-8 md:gap-12">
      {#each data.featuredArticles as article}
        <CoverArticle {article}/>
      {/each}
    </div>
    <Pagination
      bind:currentPage = {data.page}
      totalArticles = {data.count}
      itemPerPage = {15}
      path = {'/feature'}
    />
  </main>
  <aside class = "px-6 py-8 lg:py-12 lg:col-span-2">
    <div class = "border-b border-gray-200 dark:border-gray-700 pb-5">
      <h2 class = "text-base font-serif font-bold leading-6 text-zinc-800 dark:text-zinc-100">本周热门</h2>
    </div>
    <div class = "space-y-4 pt-8">
      <!--      检测屏幕宽度，小于1024时，只显示5篇-->
      <HottestArticle articles={data.hottestArticles.slice(0, isMobile ? 5 :
      undefined)}/>
    </div>
  </aside>
</div>
