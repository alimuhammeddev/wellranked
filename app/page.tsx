import Image from "next/image";
import Navbar from "./components/Navabar";
import Hero from "./components/Hero";
import PainSection from "./components/Pain";
import SolutionSection from "./components/Solution";
import PackagesPreview from "./components/Packages";
import TrustSection from "./components/Trust";
import FinalCTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <section>
      <div>
        <Navbar />
      </div>

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

      <div>
        <Footer />
      </div>
    </section>
  );
}
