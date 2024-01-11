<script lang = "ts">
  import getDomain from "$lib/functions/getDomain";
  import {convertDate} from "$lib/functions/convertDate";

  export let website;
  export let type;
</script>

<div
  class =
    "bg-gray-50 dark:bg-gray-900 rounded-lg p-6 flex flex-col gap-4 hover:bg-gray-100 dark:hover:bg-gray-950 transition-all duration-150"
>
  <a href = {`/blog/${getDomain(website.url)}/1`}
     class = "flex gap-2 items-center"
  >
    {#if website.cover}
      <img src = {website.cover} alt = {website.name}
           class = "w-5 h-5 rounded-sm dark:bg-white" width = "20" height =
             "20"/>
    {/if}
    <h2
      class =
        "text-zinc-800 dark:text-zinc-100 text-xl font-serif font-bold hover:text-teal-600 dark:hover:text-teal-400"
    >
      {website.name}
    </h2>
  </a>
  <p class = "flex-1 text-zinc-500 dark:text-zinc-400">{website.description}</p>
  <div class = "flex gap-6 my-2">
    <div class = "flex flex-col gap-1">
      <h3 class = "text-sm text-zinc-400 dark:text-zinc-500">文章收录</h3>
      <p class = "text-zinc-800 dark:text-zinc-100">{website.article_count}</p>
    </div>
    <div class = "flex flex-col gap-1">
      <h3 class = "text-sm text-zinc-400 dark:text-zinc-500">本站访问量</h3>
      <p class = "text-zinc-800 dark:text-zinc-100">{website.page_view}</p>
    </div>
    <div class = "flex flex-col gap-1">
      <h3 class = "text-sm text-zinc-400 dark:text-zinc-500">上次更新</h3>
      <p
        class = "text-zinc-800 dark:text-zinc-100">{convertDate(website.last_publish)}</p>
    </div>
  </div>
</div>
