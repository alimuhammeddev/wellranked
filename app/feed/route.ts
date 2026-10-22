
const BASE_URL = "https://www.wellranked.co.uk";

const pages = [
  {
    title: "WellRanked",
    path: "/",
    description:
      "The Outsourced Marketing Department for UK Small Businesses.",
  },
  {
    title: "About WellRanked",
    path: "/about",
    description: "Learn more about WellRanked.",
  },
  {
    title: "Contact WellRanked",
    path: "/contact",
    description: "Get in touch with WellRanked.",
  },
  {
    title: "Free Growth Audit",
    path: "/growth-audit",
    description: "Explore the WellRanked growth audit.",
  },
  {
    title: "Growth Support",
    path: "/growth-support",
    description: "Discover WellRanked growth support services.",
  },
  {
    title: "How It Works",
    path: "/how-it-works",
    description: "Learn how WellRanked works.",
  },
  {
    title: "Industries",
    path: "/industries",
    description: "Explore the industries WellRanked serves.",
  },
  {
    title: "Packages",
    path: "/package-section",
    description: "Explore WellRanked packages.",
  },
  {
    title: "Services",
    path: "/services-section",
    description: "Explore WellRanked services.",
  },
  {
    title: "Why WellRanked",
    path: "/why-wellranked",
    description: "Discover why businesses choose WellRanked.",
  },
];

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const items = pages
    .map((page) => {
      const url = `${BASE_URL}${page.path}`;

      return `
    <item>
      <title>${escapeXml(page.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(page.description)}</description>
    </item>`;
    })
    .join("");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>WellRanked</title>
    <link>${BASE_URL}</link>
    <description>The Outsourced Marketing Department for UK Small Businesses</description>
    <language>en-gb</language>
    ${items}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
