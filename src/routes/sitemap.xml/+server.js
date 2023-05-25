export async function GET() {
  // 一个时间生成函数。生成当地时间上午9点的ISO时间
  function getISODate() {
    const date = new Date();
    date.setHours(9);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date.toISOString();
  }

  const time = getISODate();
	return new Response(
		`
      <?xml version="1.0" encoding="UTF-8" ?>
      <urlset
          xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:xhtml="https://www.w3.org/1999/xhtml"
          xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
          xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
          xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
          xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
      >
          <url>
            <loc>https://firewood.news/</loc>
            <lastmod>${time}</lastmod>
            <priority>1.0</priority>
          </url>
          <url>
            <loc>https://firewood.news/feature/1</loc>
            <lastmod>${time}</lastmod>
            <priority>0.8</priority>
          </url>
          <url>
            <loc>https://firewood.news/latest/1</loc>
            <lastmod>${time}</lastmod>
            <priority>0.8</priority>
          </url>
          <url>
            <loc>https://firewood.news/topic/tech/1</loc>
            <lastmod>${time}</lastmod>
            <priority>0.6</priority>
          </url>
          <url>
            <loc>https://firewood.news/topic/society/1</loc>
            <lastmod>${time}</lastmod>
            <priority>0.6</priority>
          </url>
          <url>
            <loc>https://firewood.news/topic/culture/1</loc>
            <lastmod>${time}</lastmod>
            <priority>0.6</priority>
          </url>
          <url>
            <loc>https://firewood.news/topic/travel/1</loc>
            <lastmod>${time}</lastmod>
            <priority>0.6</priority>
          </url>
          <url>
            <loc>https://firewood.news/topic/emotion/1</loc>
            <lastmod>${time}</lastmod>
            <priority>0.6</priority>
          </url>
          <url>
            <loc>https://firewood.news/topic/politics/1</loc>
            <lastmod>${time}</lastmod>
            <priority>0.6</priority>
          </url>
          <url>
            <loc>https://firewood.news/topic/history/1</loc>
            <lastmod>${time}</lastmod>
            <priority>0.6</priority>
          </url>
          <url>
            <loc>https://firewood.news/topic/sports/1</loc>
            <lastmod>${time}</lastmod>
            <priority>0.6</priority>
          </url>
          <url>
            <loc>https://firewood.news/topic/others/1</loc>
            <lastmod>${time}</lastmod>
            <priority>0.6</priority>
          </url>
          <url>
            <loc>https://firewood.news/topic/finance/1</loc>
            <lastmod>${time}</lastmod>
            <priority>0.6</priority>
          </url>
          <url>
            <loc>https://firewood.news/topic/game/1</loc>
            <lastmod>${time}</lastmod>
            <priority>0.6</priority>
          </url>
          <url>
            <loc>https://firewood.news/author/latest/1</loc>
            <lastmod>${time}</lastmod>
            <priority>0.6</priority>
          </url>
          <url>
            <loc>https://firewood.news/about</loc>
            <lastmod>${time}</lastmod>
            <priority>0.5</priority>
          </url>
      </urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}
