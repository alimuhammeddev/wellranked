import WhyWellrankedGrid from "./components/WhyWellrankedGrid";
import WhyWellrankedHero from "./components/WhyWellrankedHero";
import CTA from "../components/CTA";

export default function WhywellRanked() {
  return (
    <section>
      <div>
        <WhyWellrankedHero />
      </div>
      <div>
        <WhyWellrankedGrid />
      </div>
      <div>
        <CTA />
      </div>
    </section>
  );
}
