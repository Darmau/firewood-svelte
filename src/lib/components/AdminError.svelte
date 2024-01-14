<script lang="ts">
  import generateDate from '$lib/functions/generateDate';
  import type { Website } from '$lib/types/website.type.svelte';
  import AddBlog from './AddBlog.svelte';
  import EditBlog from './EditBlog.svelte';

  // 获取数据
  let blogs: Website[] = [];
  let page: number = 1;
  async function getBlogs(newPage: number) {
    page = newPage;
    window.scroll(0, 0)
    blogs = await fetch(`/api/crawl-error?page=${page}`).then((res) =>
        res.json());
  }
  getBlogs(page);

  // 控制编辑组件的显示
  let isEditing: boolean = false;
  function closeEdit() {
    isEditing = false;
    getBlogs(page);
  }

  let activeBlog: Website;
  function openEdit(blog: Website) {
    isEditing = true;
    activeBlog = blog;
  }

  // 控制新增组件的显示
  let isAdding: boolean = false;
  function closeAdd() {
    isAdding = false;
    getBlogs(page);
  }

  function openAdd() {
    isAdding = true;
  }

  export let token: string;
</script>

<div class="flex justify-end mb-8">
  <button on:click={openAdd} class="py-2 px-4 bg-teal-600 text-white rounded hover:bg-teal-800">Add Blog</button>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {#each blogs as blog}
    <div class="border rounded p-6 space-y-4">
      <div class="flex justify-between">
        <h3 class="text-lg font-medium text-zinc-800">{blog.name}</h3>
        <button
          on:click={() => openEdit(blog)}
          class="text-teal-700 text-sm hover:font-medium hover;text-teal-900">修改</button
        >
      </div>
      <p class="text-zinc-600">{blog.description}</p>
      <p class="font-mono text-sm text-teal-600">{blog.url}</p>
      <p class="font-mono text-sm text-teal-600">{blog.rss}</p>
      <div class="flex justify-between">
        <div>
          <h4 class="text-sm text-zinc-400">文章数量</h4>
          <p class="text-zinc-600 font-mono">{blog.article_count}</p>
        </div>
        <div>
          <h4 class="text-sm text-zinc-400">总浏览量</h4>
          <p class="text-zinc-600 font-mono">{blog.page_view}</p>
        </div>
        <div>
          <h4 class="text-sm text-zinc-400">抓取错误</h4>
          <p class="text-zinc-600 font-mono">{blog.crawl_error}</p>
        </div>
      </div>
      <div class="flex justify-between">
        <div>
          <h4 class="text-sm text-zinc-400">上次发布时间</h4>
          <p class="text-zinc-600">{generateDate(blog.last_publish)}</p>
        </div>
        <div>
          <h4 class="text-sm text-zinc-400">上次抓取时间</h4>
          <p class="text-zinc-600">{generateDate(blog.last_crawl)}</p>
        </div>
      </div>
    </div>
  {/each}
</div>

<div class="flex justify-between py-8 w-full">
  <button
    on:click={() => getBlogs(page - 1)}
    class={`border p-2 rounded text-zinc-800 hover:bg-zinc-100  ${
			page === 1 ? 'invisible pointer-events-none' : ''
		}}`}>上一页</button
  >
  <button
    on:click={() => getBlogs(page + 1)}
    class="border p-2 rounded text-zinc-800 hover:bg-zinc-100">下一页</button
  >
</div>

{#if isEditing}
  <div
    class="fixed top-0 left-0 w-screen h-screen bg-zinc-900/20 z-50 flex justify-center items-center backdrop-blur-sm"
  >
    <EditBlog blog={activeBlog} {closeEdit} {token} />
  </div>
{/if}

{#if isAdding}
  <div
    class="fixed top-0 left-0 w-screen h-screen bg-zinc-900/20 z-50 flex justify-center items-center backdrop-blur-sm"
  >
    <AddBlog {closeAdd} {token} />
  </div>
{/if}
