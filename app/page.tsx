
import Hero from "./components/Hero";
import PainSection from "./components/Pain";
import SolutionSection from "./components/Solution";
import PackagesPreview from "./components/Packages";
import TrustSection from "./components/Trust";
import FinalCTA from "./components/CTA";
import JsonLd from "./components/JsonLd";
import { createHomePageSchema, createPageMetadata } from "./seo";

const homeTitle = "Outsourced Marketing for UK Small Businesses | Wellranked";
const homeDescription =
  "Your outsourced marketing department. Expert SEO, content and social media for UK small businesses, without the cost of an in-house team.";

export const metadata = createPageMetadata(
  homeTitle,
  homeDescription,
  "/",
);

export default function Home() {
  return (
    <section>
      <JsonLd data={createHomePageSchema(homeTitle, homeDescription)} />
      <div>
        <Hero />
      </div>

      <div>
        <PainSection />
      </div>

      <div>
        <SolutionSection />
      </div>

      <div>
        <PackagesPreview />
      </div>

      <div>
        <TrustSection />
      </div>

      <div>
        <FinalCTA />
      </div>
    </section>
  );
}