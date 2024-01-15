<script lang = "ts">
  import addPageView from "$lib/functions/addPageView";
  import topicTranslate from "$lib/functions/topicTranslate";
  import Tags from "$lib/components/Tags.svelte";
  import {convertDate} from "$lib/functions/convertDate";

  export let article;
</script>

<article class="colspan-1">
  <a
    href = {article.url}
    target = "_blank"
    on:click = {() => addPageView(article._id)}
    title = {article.abstract || article.description}
    data-umami-event = "article"
    data-umami-event-type = "personal"
    class = "flex flex-col-reverse gap-4 sm:flex-row sm:gap-8 group"
  >
    <div class = "space-y-4 flex-1">
      <h3
        class =
          "font-medium text-2xl break-words text-zinc-800 dark:text-zinc-100 group-hover:text-teal-600 dark:hover:text-teal-400">{article.title}</h3>
      {#if article.description}
        <p
          class =
            "text-zinc-600 leading-7 line-clamp-3 text-ellipsis break-all dark:text-zinc-400 group-hover:text-zinc-500">{article.description}</p>
      {/if}
      {#if article.abstract}
        <div class = "border-l border-teal-600 pl-2">
          <p
            class =
              "break-all text-zinc-600 p-2 rounded leading-7 dark:text-zinc-400"
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
        {#if article.crawl_error > 0}
          <li class = "text-sm text-zinc-400 dark:text-zinc-600">
            {article.crawl_error}次抓取失败
          </li>
        {/if}
      </ol>
    </div>
    {#if article.cover}
      <div
        class="rounded w-full h-auto aspect-video overflow-hidden bg-slate-100 sm:aspect-square sm:h-32 sm:w-32">
        <img src = {`${article.cover}/width=360`}
             alt = {article.title}
             class =
               "object-cover object-center w-full h-full transition-all duration-300 group-hover:scale-105"
             loading="lazy"
             width="360"
             height="360"
        />
      </div>
    {/if}
  </a>
</article>
