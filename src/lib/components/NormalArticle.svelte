<script lang="ts">
  import type { Article } from '$lib/types/article.type.svelte';
  export let article: Article;
</script>
<article class="col-span-1">
  {#if article.cover}
  <p>普通有图</p>
  {:else}
  <p>普通没图</p>
  {/if}
</article>