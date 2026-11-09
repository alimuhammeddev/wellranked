import JsonLd from "../components/JsonLd";
import { createBreadcrumbSchema, createPageMetadata } from "../seo";
import HowItWorksHero from "./components/HowitworksHero";
import HowItWorksTimeline from "./components/HowitworksTimeline";

export const metadata = createPageMetadata(
  "How Wellranked Works | Our Growth Process",
  "See how Wellranked takes your business from a free Growth Audit to focused, ongoing marketing support that improves visibility and generates enquiries.",
  "/how-it-works",
);

export default function Works() {
  return (
    <section>
      <JsonLd
        data={createBreadcrumbSchema("How It Works", "/how-it-works")}
      />
      <div>
        <HowItWorksHero />
      </div>
      <div>
        <HowItWorksTimeline />
      </div>
    </section>
  );
}
