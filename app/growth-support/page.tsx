import GrowthFAQ from "./components/GrowthFAQ";
import GrowthSupportHero from "./components/GrowthHero";
import GrowthPricing from "./components/GrowthPricing";
import GrowthServices from "./components/GrowthServices";
import ProblemsSection from "./components/ProblemSection";

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
}
