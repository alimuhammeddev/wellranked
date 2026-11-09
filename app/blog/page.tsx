import BlogHero from "./component/BlogHero";
import JsonLd from "../components/JsonLd";
import { createBreadcrumbSchema, createPageMetadata } from "../seo";

export const metadata = createPageMetadata(
  "Small Business Marketing Advice & Guides | Wellranked",
  "Practical advice for UK small businesses on local SEO, websites, reviews, content and customer support from the Wellranked team.",
  "/blog",
);

export default function Blog() {
  return (
    <section>
      <JsonLd data={createBreadcrumbSchema("Blog", "/blog")} />
      <div>
        <BlogHero />
      </div>
    </section>
  );
}
