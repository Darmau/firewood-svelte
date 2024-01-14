<script lang = "ts">
  import NormalArticle from '$lib/components/NormalArticle.svelte';
  import Pagination from '$lib/components/Pagination.svelte';
  import RandomArticle from "$lib/components/RandomArticle.svelte";

  export let data;
</script>

<svelte:head>
  <title>最新文章 - 积薪</title>
  <meta name = "description" content = "最新文章 4小时更新一次"/>
  <meta property = "og:url" content = "https://firewood.news/latest/1">
  <meta property = "og:type" content = "website">
  <meta property = "og:title" content = "最新文章 - 积薪">
  <meta property = "og:description" content = "最新文章 4小时更新一次">
  <meta property = "og:image"
        content = "https://imagedelivery.net/VyUbUTLtvl82TWWarMVgPw/4763b0f6-c1f8-4738-3a8c-e57b7fcd7000/width=1200">
  <meta name = "twitter:card" content = "summary_large_image">
  <meta property = "twitter:domain" content = "firewood.news">
  <meta property = "twitter:url" content = "https://firewood.news/latest/1">
  <meta name = "twitter:title" content = "最新文章 - 积薪">
  <meta name = "twitter:description" content = "最新文章 4小时更新一次">
  <meta name = "twitter:image"
        content = "https://imagedelivery.net/VyUbUTLtvl82TWWarMVgPw/4763b0f6-c1f8-4738-3a8c-e57b7fcd7000/width=1200">
</svelte:head>

<div class = "mx-auto max-w-7xl flex flex-col-reverse lg:grid lg:grid-cols-7">
  <main class = "px-6 py-8 md:py-12 lg:col-span-5">
    <div class = "border-b border-gray-200 dark:border-gray-700 pb-5">
      <h1 class = "text-base font-medium leading-6 text-zinc-800 dark:text-zinc-100">最新文章</h1>
    </div>
    <div class = "flex flex-col py-8 gap-8 md:gap-12">
      {#each data.articles as article}
        <NormalArticle {article} topic = {true} location="latest"/>
      {/each}
    </div>
    <Pagination
      bind:currentPage = {data.page}
      totalArticles = {data.count}
      itemPerPage = {15}
      path = {'/latest'}
    />
  </main>
  <aside class = "px-6 py-8 lg:py-12 lg:col-span-2">
    <div class = "border-b border-gray-200 dark:border-gray-700 pb-5">
      <h2 class = "text-base font-medium leading-6 text-zinc-800 dark:text-zinc-100">随机传送</h2>
    </div>
    <div class = "space-y-4 mt-4">
      <RandomArticle />
    </div>
  </aside>
</div>
