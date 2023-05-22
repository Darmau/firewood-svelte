<!-- 全部博客 -->
<script lang="ts">
	import Pagination from "$lib/components/Pagination.svelte";


	export let data;
</script>

<main class="mx-auto max-w-4xl px-6 py-8 md:py-12">
  <div class="flex flex-col gap-12 md:gap-16">
    {#each data.websites as website}
      {website.name}
    {/each}
  </div>
  <Pagination
    bind:currentPage={data.page}
    totalArticles={data.count}
    itemPerPage={10}
    path={'/author'} />
</main>