import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import IndustriesCTA from "./components/IndustriesCTA";
import IndustriesGrid from "./components/IndustriesGrid";
import IndustriesHero from "./components/IndustriesHero";

export default function Industries() {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div>
        <IndustriesHero />
      </div>
      <div>
        <IndustriesGrid />
      </div>
      <div>
        <IndustriesCTA />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}
