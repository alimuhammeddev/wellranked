import PackagesHero from "./components/PackageHero";
import PricingCards from "./components/PricingCards";
import PricingComparison from "./components/PricingComparison";
import PricingNote from "./components/PricingNote";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata(
  "SEO Packages & Digital Marketing Services | Wellranked",
  "Discover Wellranked's SEO packages and digital marketing services designed to improve search visibility, attract relevant traffic, and support sustainable business growth.",
  "/package-section",
);

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
      {/* <div>
        <PackageBreakdown />
      </div> */}
      <div>
        <PricingNote />
      </div>
    </section>
  );
}
