import JsonLd from "../components/JsonLd";
import { createBreadcrumbSchema, createPageMetadata } from "../seo";
import GrowthAuditHero from "./component/GrowthAudit";

export const metadata = createPageMetadata(
  "Free Growth Audit | Wellranked",
  "Request a free review of your website, Google visibility, reviews, local SEO and online presence to uncover practical opportunities to generate more enquiries.",
  "/growth-audit",
);

export default function GrowthAudit() {
  return (
    <section>
      <JsonLd data={createBreadcrumbSchema("Growth Audit", "/growth-audit")} />
      <div>
        <GrowthAuditHero />
      </div>
    </section>
  );
}
