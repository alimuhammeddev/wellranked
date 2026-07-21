import WhyChooseUs from "./components/ChooseUs";
import GrowthProcess from "./components/GrowthProcess";
import ServiceHero from "./components/ServiceHero";
import ServicesGrid from "./components/ServicesGrid";

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
