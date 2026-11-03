
import GrowthFAQ from "./components/GrowthFAQ";
import GrowthSupportHero from "./components/GrowthHero";
import GrowthPricing from "./components/GrowthPricing";
import GrowthServices from "./components/GrowthServices";
import ProblemsSection from "./components/ProblemSection";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata(
  "Growth Support Services for Businesses | Wellranked",
  "Get expert growth support to strengthen your digital presence, attract the right audience, improve marketing performance, and build sustainable business growth with WellRanked.",
  "/growth-support",
);

export default function GrwothSupport() {
  return (
    <section>
      <div>
        <GrowthSupportHero />
      </div>
      <div>
        <ProblemsSection />
      </div>
      <div>
        <GrowthServices />
      </div>
      <div>
        <GrowthPricing />
      </div>
      <div>
        <GrowthFAQ />
      </div>
    </section>
  );
};