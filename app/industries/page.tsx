import IndustriesCTA from "./components/IndustriesCTA";
import IndustriesGrid from "./components/IndustriesGrid";
import IndustriesHero from "./components/IndustriesHero";

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
        <IndustriesCTA />
      </div>
    </section>
  );
}
