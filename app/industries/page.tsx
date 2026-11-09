import { createBreadcrumbSchema, createPageMetadata } from "../seo";
import IndustriesGrid from "./components/IndustriesGrid";
import IndustriesHero from "./components/IndustriesHero";
import CTA from "../components/CTA";
import JsonLd from "../components/JsonLd";

export const metadata = createPageMetadata(
  "Industries We Help Grow | Wellranked",
  "Explore how Wellranked helps UK service businesses build trust, improve local visibility and generate more enquiries with tailored SEO and digital marketing.",
  "/industries",
);

export default function Industries() {
  return (
    <section>
      <JsonLd data={createBreadcrumbSchema("Industries", "/industries")} />
      <div>
        <IndustriesHero />
      </div>
      <div>
        <IndustriesGrid />
      </div>
      <div>
        <CTA />
      </div>
    </section>
  );
}
