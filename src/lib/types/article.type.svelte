<script lang="ts" context="module">
	export type Article = {
		_id: string;
		url: string;
		title: string;
		description?: string;
		publish_date: string;
		cover?: {
			jpg: string;
			webp: string;
			avif: string;
		};
		isFeatured: boolean;
		tags?: string[];
		topic: string;
		abstract?: string;
		page_view: number;
		content?: string;
		isBlocked: boolean;
		crawl_error: number;
		website: string;
		author: string;
	};
</script>
