<script lang = "ts">
  import CoverArticle from '$lib/components/CoverArticle.svelte';
  import Pagination from '$lib/components/Pagination.svelte';
  import RandomArticle from "$lib/components/RandomArticle.svelte";

  export let data;
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
    <div class =
           "border-b border-gray-200 dark:border-gray-700 pb-5 flex justify-between items-center">
      <h1 class = "text-base font-serif font-bold leading-6 text-zinc-800 dark:text-zinc-100">推荐文章</h1>
      <a
        href = "/rss.xml"
        target = "_blank"
        data-umami-event = "rss"
        data-umami-event-source = "feature"
        class =
          "text-teal-600 hover:text-teal-400 dark:text-teal-400 dark:hover:text-teal-600 cursor-pointer"
      >
        <svg xmlns = "http://www.w3.org/2000/svg" viewBox = "0 0 20 20"
             fill = "currentColor" class = "w-5 h-5">
          <path
            d = "M3.75 3a.75.75 0 00-.75.75v.5c0 .414.336.75.75.75H4c6.075 0 11 4.925 11 11v.25c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75V16C17 8.82 11.18 3 4 3h-.25z"/>
          <path
            d = "M3 8.75A.75.75 0 013.75 8H4a8 8 0 018 8v.25a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75V16a6 6 0 00-6-6h-.25A.75.75 0 013 9.25v-.5zM7 15a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      </a>
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
      <h2
        class = "text-base font-serif font-bold leading-6 text-zinc-800 dark:text-zinc-100">
        随机传送</h2>
    </div>
    <div class = "space-y-4 mt-4">
      <RandomArticle/>
    </div>
  </aside>
</div>
