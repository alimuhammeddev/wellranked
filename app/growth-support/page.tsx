
import type { Metadata } from "next";

import GrowthFAQ from "./components/GrowthFAQ";
import GrowthSupportHero from "./components/GrowthHero";
import GrowthPricing from "./components/GrowthPricing";
import GrowthServices from "./components/GrowthServices";
import ProblemsSection from "./components/ProblemSection";

export const metadata: Metadata = {
  title: "Growth Support Services for Businesses | Wellranked",
  description:
    "Get expert growth support to strengthen your digital presence, attract the right audience, improve marketing performance, and build sustainable business growth with WellRanked.",
};

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