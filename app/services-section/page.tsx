
import WhyChooseUs from "./components/ChooseUs";
import GrowthProcess from "./components/GrowthProcess";
import ServiceHero from "./components/ServiceHero";
import ServicesGrid from "./components/ServicesGrid";
import JsonLd from "../components/JsonLd";
import { createBreadcrumbSchema, createPageMetadata } from "../seo";

export const metadata = createPageMetadata(
  "SEO Services & Digital Marketing Agency | Wellranked",
  "Explore Wellranked's SEO and digital marketing services to improve search visibility, attract qualified traffic, and generate more leads for your business.",
  "/services-section",
);

export default function ServicesSection() {
  return (
    <section>
      <JsonLd data={createBreadcrumbSchema("Services", "/services-section")} />
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
