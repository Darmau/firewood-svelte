<script lang = "ts">
  import addPageView from "$lib/functions/addPageView";
  import topicTranslate from "$lib/functions/topicTranslate";
  import Tags from "$lib/components/Tags.svelte";
  import {convertDate} from "$lib/functions/convertDate";

  export let article;
</script>

<article>
  <a
    href = {article.url}
    target = "_blank"
    on:click = {() => addPageView(article._id)}
    data-umami-event = "article"
    data-umami-event-source = "normal"
    title = {article.abstract || article.description}
    class = "w-full flex flex-col-reverse lg:flex-row lg:justify-between gap-4"
  >
    <div class = "space-y-4">
      <h3
        class = "font-serif font-bold text-2xl text-zinc-800 dark:text-zinc-100">{article.title}</h3>
      {#if article.description}
        <p
          class = "text-zinc-600 leading-7 line-clamp-3 text-ellipsis break-words dark:text-zinc-400">{article.description}</p>
      {/if}
      {#if article.abstract}
        <div class = "border-l border-teal-600 p-2 pl-4 overflow-y-hidden">
          <p
            class = "text-zinc-600 rounded leading-7 line-clamp-3 text-ellipsis break-words dark:text-zinc-400"
            title = {article.abstract}
          >
            {article.abstract}
          </p>
        </div>
      {/if}
      <ol class = "flex gap-2 flex-wrap lg:gap-4">
        <li>
          {#if article.topic}
            <a
              href = {`/topic/${article.topic}/1`}
              class = "self-start text-xs relative z-10 rounded-full bg-slate-50 dark:bg-slate-800 px-3 py-1.5 font-medium text-slate-600 dark:text-slate-300 hover:bg-zinc-100 dark:hover:bg-zinc-500"
            >{topicTranslate(article.topic)}</a
            >
          {/if}
        </li>
        <li>
          {#if article.tags}
            <div class = "flex flex-wrap">
              {#each article.tags as tag}
                <Tags {tag}/>
              {/each}
            </div>
          {/if}
        </li>
      </ol>
      <ol class = "flex gap-4 flex-wrap">
        <li class = "text-sm text-zinc-400 dark:text-zinc-600">
          {convertDate(article.publish_date)}
        </li>
        <li class = "text-sm text-zinc-400 dark:text-zinc-600">
          {article.page_view}次浏览
        </li>
        {#if article.crawl_error > 1}
          <li class = "text-sm text-zinc-400 dark:text-zinc-600">
            {article.crawl_error}次抓取失败
          </li>
        {/if}
      </ol>
    </div>
    {#if article.cover}
      <img src = {`${article.cover}/width=360`} alt = {article.title}
           class = "w-full h-48 object-cover lg:w-36 lg:h-36 rounded"/>
    {/if}
  </a>
</article>
