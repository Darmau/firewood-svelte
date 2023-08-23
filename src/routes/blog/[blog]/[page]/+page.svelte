<script lang = "ts">
  import BlogArticle from "$lib/components/BlogArticle.svelte";
  import convertNumber from "$lib/functions/convertNumber";
  import {convertDate} from "$lib/functions/convertDate";
  import topicTranslate from "$lib/functions/topicTranslate";
  import Pagination from "$lib/components/Pagination.svelte";

  export let data;
</script>

<svelte:head>
  <title>{data.blog.name} - 积薪</title>
  <meta name = "description" content = {`${data.blog.name}的博客文章`}/>
  <meta property = "og:url" content =
    {`https://firewood.news/blog/${data.url}/1`}>
  <meta property = "og:type" content = "website">
  <meta property = "og:title" content = {`${data.blog.name} - 积薪`}>
  <meta property = "og:description"
        content = {data.blog.description ||`${data.blog.name}的博客文章`}>
  <meta property = "og:image"
        content = "https://imagedelivery.net/VyUbUTLtvl82TWWarMVgPw/4763b0f6-c1f8-4738-3a8c-e57b7fcd7000/width=1200">
  <meta name = "twitter:card" content = "summary_large_image">
  <meta property = "twitter:domain" content = "firewood.news">
  <meta property = "twitter:url"
        content = {`https://firewood.news/blog/${data.url}/1`}>
  <meta name = "twitter:title" content = {`${data.blog.name} - 积薪`}>
  <meta name = "twitter:description"
        content = {data.blog.description ||`${data.blog.name}的博客文章`}>
  <meta name = "twitter:image"
        content = "https://imagedelivery.net/VyUbUTLtvl82TWWarMVgPw/4763b0f6-c1f8-4738-3a8c-e57b7fcd7000/width=1200">
</svelte:head>

<div class =
       "mx-auto max-w-7xl flex flex-col-reverse lg:grid lg:grid-cols-3 lg:gap-8">
  <main class = "px-4 py-4 lg:py-8 lg:col-span-2">
    <div class = "flex flex-col py-8 gap-12 md:gap-16">
      {#each data.articles as article}
        <BlogArticle article = {article}/>
      {/each}
    </div>
    <Pagination
      bind:currentPage = {data.page}
      totalArticles = {data.articleCount}
      itemPerPage = {15}
      path = {`/blog/${data.url}`}
    />
  </main>
  <aside class =
           "px-6 py-4 space-y-8 lg:py-8 lg:col-span-1">
    <div class = "space-y-4 lg:space-y-8 mt-4">
      <div class = "space-y-4">
        {#if data.blog.cover}
          <img src = {data.blog.cover} alt = {data.blog.name}
               class =
                 "h-12 w-12 dark:bg-white border border-zinc-200 dark:border-zinc-700 rounded-full"
               width =
                 "20" height = "20"/>
        {/if}
        <h1
          class =
            "font-bold font-serif text-2xl text-zinc-800 dark:text-zinc-100">{data.blog.name}</h1>
        <p
          class = "text-zinc-700 dark:text-zinc-300">{data.blog.description ||
        "貌似这位作者没有留下博客介绍"}
        </p>
      </div>
      <!--      文章数量/近一年发布/访问量/上次发布/抓取错误次数/分类统计-->
      <div class = "grid grid-cols-4 py-4">
        <div class = "flex flex-col-reverse items-start gap-1">
          <h3 class = "text-sm text-zinc-400">上次发布</h3>
          <p
            class = "text-teal-700 dark:text-teal-300">{convertDate(data.blog.last_publish)}</p>
        </div>
        <div class = "flex flex-col-reverse items-start gap-1">
          <h3 class = "text-sm text-zinc-400">近一年发布</h3>
          <p
            class = "text-teal-700 dark:text-teal-300">{data.articleCountLastYear}篇
          </p>
        </div>
        <div class = "flex flex-col-reverse items-start gap-1">
          <h3 class = "text-sm text-zinc-400">访问量</h3>
          <p
            class = "text-teal-700 dark:text-teal-300">{convertNumber(data.blog.page_view)}</p>
        </div>
        <div class = "flex flex-col-reverse items-start gap-1">
          <h3 class = "text-sm text-zinc-400">收录文章</h3>
          <p
            class = "text-teal-700 dark:text-teal-300">{data.blog.article_count}</p>
        </div>
      </div>
      <!--      分类信息统计-->
      <div class = "space-y-4">
        <h3 class = "text-base font-bold text-teal-800 dark:text-teal-300">
          文章分类</h3>
        <ol class = "flex gap-4 flex-wrap items-start">
          {#each data.categories as item}
            <li
              class = "flex gap-1 text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-900 p-2 text-sm rounded">
              <span>{topicTranslate(Object.keys(item)[0])}</span>
              <span class = "font-mono">({Object.values(item)[0]})</span>
            </li>
          {/each}
        </ol>
      </div>
      <!--      抓取错误次数-->
      <div class = "flex gap-4">
        <h3 class = "text-base font-bold text-teal-800 dark:text-teal-300">
          抓取错误次数
        </h3>
        <p
          class="font-mono text-zinc-700 dark:text-zinc-300">{data.blog.crawl_error}</p>
      </div>
      <!--      按钮-->
      <div class = "flex gap-4 items-center">
        <a
          class =
            "inline-flex justify-center items-center px-4 py-2 font-bold leading-6 text-sm shadow rounded-md text-white bg-teal-600 hover:bg-teal-500 transition ease-in-out duration-150"
          href = {data.blog.url}
          target = "_blank"
          data-umami-event = "blog"
          data-umami-event-source = "profile"
        >访问博客
          <span class = "ml-2">
            <svg xmlns = "http://www.w3.org/2000/svg" viewBox = "0 0 20 20"
                 fill = "currentColor" class = "w-5 h-5">
              <path fill-rule = "evenodd"
                    d = "M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                    clip-rule = "evenodd"/>
              <path fill-rule = "evenodd"
                    d = "M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                    clip-rule = "evenodd"/>
             </svg>
          </span>
        </a>
        <a
          href = {data.blog.rss}
          target = "_blank"
          data-umami-event = "blog"
          data-umami-event-source = "RSS"
          class = "text-teal-600 hover:text-teal-400 dark:text-teal-400 dark:hover:text-teal-600"
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
    </div>
  </aside>
</div>
