
import type { Metadata } from "next";

import WhyWellrankedGrid from "./components/WhyWellrankedGrid";
import WhyWellrankedHero from "./components/WhyWellrankedHero";
import CTA from "../components/CTA";

export const metadata: Metadata = {
  title: "Why Choose Wellranked? | SEO & Digital Marketing",
  description:
    "Discover why businesses choose Wellranked for SEO and digital marketing support. Explore how a tailored strategy can improve search visibility, attract relevant traffic, and drive sustainable growth.",
};

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
