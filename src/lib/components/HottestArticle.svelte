<script lang="ts">
import addPageView from "$lib/functions/addPageView";

export let articles;
</script>

<div class="space-y-4">
  {#each articles as article}
    <article class = "group">
      <a href = {article.url}
         class = "space-y-1"
         target = "_blank"
         on:click = {() => addPageView(article._id)}
      >
        <h3
          class = "font-serif text-lg font-bold text-zinc-800 dark:text-zinc-100 group-hover:text-teal-600 dark:hover:text-teal-400">{article.title}</h3>
        <p class = "text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-500">
          {article.author}
          ·
          <span>{article.page_view}</span>
        </p>
      </a>
    </article>
  {/each}
</div>
