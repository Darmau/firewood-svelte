<script>
  export let data;
</script>

<section class="hidden lg:block py-8">
<div class = "border-b border-gray-200 dark:border-gray-700 pb-5">
  <h2 class =
        "text-base font-medium leading-6 text-zinc-800 dark:text-zinc-100">实时统计
  </h2>
</div>
  <div class="grid grid-cols-2 items-start py-6">
    <div>
      <p
        class="text-lg font-medium text-teal-600 dark:text-teal-300">{data.website}</p>
      <h3 class="text-base leading-7 text-zinc-600 dark:text-zinc-400">博客数</h3>
    </div>
    <div>
      <p
        class="text-lg font-medium text-teal-600 dark:text-teal-300">{data.article}</p>
      <h3 class="text-base leading-7 text-zinc-600 dark:text-zinc-400">文章数</h3>
    </div>
  </div>
</section>
