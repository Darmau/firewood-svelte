<script lang = "ts">
  import {onMount} from "svelte";

  let randomArticle;

  const fetchRandomArticle = async () => {
    randomArticle = null;
    const article = await fetch('/api/article/random');
    const data = await article.json();
    randomArticle = data[0]
  }

  onMount(fetchRandomArticle);
</script>

<div class = "py-4 space-y-4">
  {#if randomArticle}
    <a href = {randomArticle.crawl_error > 3 ? `/article/${randomArticle.url}` : randomArticle.url}
       target = "_blank"
       class = "space-y-2 group"
    >
      <h4 class = "text-base font-bold text-teal-800 dark:text-teal-200">
        {randomArticle.author}
        ·
        <span class = "font-normal text-sm text-zinc-400 dark:text-zinc-600">{randomArticle.website}</span>
      </h4>
      <h3 class = "text-xl font-serif font-bold break-words text-zinc-800 group-hover:text-teal-600 dark:text-zinc-100 group-hover:dark:group-hover:text-teal-400">{randomArticle.title}</h3>
      {#if randomArticle.abstract}
        <p class = "text-base leading-6 text-zinc-600 dark:text-zinc-400 line-clamp-5">{randomArticle.abstract}</p>
      {/if}
      {#if randomArticle.cover}
        <img
          src = {`${randomArticle.cover}/width=320`}
          alt = {randomArticle.title}
          width = "320"
          height = "192"
          class = "object-cover w-full h-48 rounded-md bg-gray-200 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
        />
      {/if}
    </a>
  {:else}
    <!--    加载状态-->
    <div class = "border border-zinc-300 dark:border-zinc-700 rounded-md p-4 max-w-sm w-full mx-auto">
      <div class = "animate-pulse flex space-x-4">
        <div class = "flex-1 space-y-6 py-1">
          <div class = "h-2 bg-slate-200 dark:bg-slate-800 rounded"></div>
          <div class = "flex flex-col gap-2">
            <div class = "h-4 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
            <div class = "h-4 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
          </div>
          <div class = "flex flex-col gap-2">
            <div class = "h-1 bg-slate-200 dark:bg-slate-800 rounded-sm"></div>
            <div class = "h-1 bg-slate-200 dark:bg-slate-800 rounded-sm"></div>
            <div class = "h-1 bg-slate-200 dark:bg-slate-800 rounded-sm"></div>
          </div>
          <div class = "h-48 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
        </div>
      </div>
    </div>
  {/if}
  <button on:click = {fetchRandomArticle} type = "button"
          class = "inline-flex justify-centeru items-center px-4 py-2 font-bold leading-6 text-sm shadow rounded-md text-white bg-teal-500 hover:bg-teal-400 transition ease-in-out duration-150">
    {#if randomArticle}
      换一篇
    {:else}
      <svg class = "animate-spin h-5 w-5 text-white" xmlns = "http://www.w3.org/2000/svg" fill = "none"
           viewBox = "0 0 24 24">
        <circle class = "opacity-25" cx = "12" cy = "12" r = "10" stroke = "currentColor" stroke-width = "4"></circle>
        <path class = "opacity-75" fill = "currentColor"
              d = "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    {/if}
  </button>
</div>
