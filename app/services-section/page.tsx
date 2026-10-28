
import type { Metadata } from "next";

import WhyChooseUs from "./components/ChooseUs";
import GrowthProcess from "./components/GrowthProcess";
import ServiceHero from "./components/ServiceHero";
import ServicesGrid from "./components/ServicesGrid";

export const metadata: Metadata = {
  title: "SEO Services & Digital Marketing Agency | Wellranked",
  description:
    "Explore Wellranked's SEO and digital marketing services to improve search visibility, attract qualified traffic, and generate more leads for your business.",
};

export default function ServicesSection() {
  return (
    <section>
      <div>
        <ServiceHero />
      </div>
      <div>
        <WhyChooseUs />
      </div>
      <div>
        <GrowthProcess />
      </div>
      <div>
        <ServicesGrid />
      </div>
    </section>
  );
}
