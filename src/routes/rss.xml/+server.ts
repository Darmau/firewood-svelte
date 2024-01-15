import type { RequestHandler } from '@sveltejs/kit';
import {API_URL} from '$env/static/private';
import type { Article } from '$lib/types/article.type.svelte';

export const GET: RequestHandler = async () => {
	const featureArticles = await fetch(`${API_URL}/article/featured?page=1&limit=15`).then((res) =>
		res.json()
	);
	const xml = gegerateFeed(featureArticles);
	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=7200'
		}
	});
};

function gegerateFeed(articles: Article[]) {
	return `
     <?xml version="1.0" encoding="UTF-8" ?>
      <rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" version="2.0">
        <channel>
          <title>积薪</title>
          <link>https://firewood.news/</link>
          <description>中文独立博客导航</description>
          <language>zh-CN</language>
          <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
          <docs>https://validator.w3.org/feed/docs/rss2.html</docs>
          <generator>积薪</generator>
          <image>
            <title>积薪</title>
            <url>https://imagedelivery.net/VyUbUTLtvl82TWWarMVgPw/4763b0f6-c1f8-4738-3a8c-e57b7fcd7000/width=1024</url>
            <link>https://firewood.news/</link>
          </image>
          <copyright>归属于原作者</copyright>
          ${generateArticleFeed(articles)}
        </channel>
      </rss>
  `.trim();
}

function generateArticleFeed(articles: Article[]) {
	const articlesXml = articles
		.map((article) => {
			const cover = article.cover
				? `<enclosure url="${article.cover}/width=800" type="image/jpeg" />`
				: '';
			return `
    <item>
      <title>${article.title}</title>
      <link>${article.url}</link>
      <guid>${article.url}</guid>
      <pubDate>${article.publish_date}</pubDate>
      <description><![CDATA[${article.abstract || article.description}]]></description>
      <author>${article.author}</author>
      ${cover}
    </item>
  `;
		})
		.join('\n')
		.trim();
	return articlesXml;
}
