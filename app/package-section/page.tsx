import PackageBreakdown from "./components/PackageBreakdown";
import PackagesHero from "./components/PackageHero";
import PricingCards from "./components/PricingCards";
import PricingComparison from "./components/PricingComparison";
import PricingNote from "./components/PricingNote";

export default function Packages() {
  return (
    <section>
      <div>
        <PackagesHero />
      </div>
      <div>
        <PricingCards />
      </div>
      <div>
        <PricingComparison />
      </div>
      <div>
        <PackageBreakdown />
      </div>
      <div>
        <PricingNote />
      </div>
    </section>
  );
}
