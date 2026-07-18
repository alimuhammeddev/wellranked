import Image from "next/image";
import Navbar from "./components/Navabr";
import Hero from "./components/Hero";
import PainSection from "./components/Pain";
import SolutionSection from "./components/Solution";
import PackagesPreview from "./components/Packages";
import TrustSection from "./components/Trust";

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

      <TrustSection />
    </section>
  );
}
