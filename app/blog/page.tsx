import BlogHero from "./component/BlogHero";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata(
  "Small Business Marketing Advice & Guides | Wellranked",
  "Practical advice for UK small businesses on local SEO, websites, reviews, content and customer support from the Wellranked team.",
  "/blog",
);

export default function Blog() {
  return (
    <section>
      <div>
        <BlogHero />
      </div>
    </section>
  );
}
