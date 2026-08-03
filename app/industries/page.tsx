import IndustriesGrid from "./components/IndustriesGrid";
import IndustriesHero from "./components/IndustriesHero";
import CTA from "../components/CTA";

export default function Industries() {
  return (
    <section>
      <div>
        <IndustriesHero />
      </div>
      <div>
        <IndustriesGrid />
      </div>
      <div>
        <CTA />
      </div>
    </section>
  );
}
