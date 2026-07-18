import Image from "next/image";
import Navbar from "./components/Navabr";
import Hero from "./components/Hero";
import PainSection from "./components/Pain";

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
    </section>
  );
}
