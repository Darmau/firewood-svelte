<script lang="ts" context="module">
  import type {Article} from "./article.type.svelte";
  export type Website = {
    _id: string;
    name: string;
    url: string;
    description?: string;
    cover?: string;
    article_count: number;
    page_view: number;
    crawl_error: number;
    last_publish: string;
    last_crawl: string;
    latest: Article[];
    rss?: string;
  }
</script>