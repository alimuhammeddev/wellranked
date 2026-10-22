export async function GET() {
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>WellRanked</title>
    <link>https://www.wellranked.co.uk</link>
    <description>The Outsourced Marketing Department for UK Small Businesses</description>
    <language>en-gb</language>
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
