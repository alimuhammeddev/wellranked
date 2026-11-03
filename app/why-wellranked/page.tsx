
import WhyWellrankedGrid from "./components/WhyWellrankedGrid";
import WhyWellrankedHero from "./components/WhyWellrankedHero";
import CTA from "../components/CTA";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata(
  "Why Choose Wellranked? | SEO & Digital Marketing",
  "Discover why businesses choose Wellranked for SEO and digital marketing support. Explore how a tailored strategy can improve search visibility, attract relevant traffic, and drive sustainable growth.",
  "/why-wellranked",
);

export default function WhywellRanked() {
  return (
    <section>
      <div>
        <WhyWellrankedHero />
      </div>
      <div>
        <WhyWellrankedGrid />
      </div>
      <div>
        <CTA />
      </div>
    </section>
  );
}
