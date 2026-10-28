
import type { Metadata } from "next";

import Hero from "./components/Hero";
import PainSection from "./components/Pain";
import SolutionSection from "./components/Solution";
import PackagesPreview from "./components/Packages";
import TrustSection from "./components/Trust";
import FinalCTA from "./components/CTA";

export const metadata: Metadata = {
  title: "Wellranked | SEO & Digital Marketing Agency UK",
  description:
    "Grow your online visibility with SEO and digital marketing services from Wellranked. Improve search rankings, attract relevant traffic and generate more leads.",
};

export default function Home() {
  return (
    <section>
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