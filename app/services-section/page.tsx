import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WhyChooseUs from "./components/ChooseUs";
import GrowthProcess from "./components/GrowthProcess";
import ServiceHero from "./components/ServiceHero";
import ServicesGrid from "./components/ServicesGrid";

export default function ServicesSection() {
  return (
    <section>
      <div>
        <Navbar />
      </div>
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
      <div>
        <Footer />
      </div>
    </section>
  );
}
