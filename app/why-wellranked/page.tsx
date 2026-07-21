import WhyWellrankedCTA from "./components/WhyWellrankedCTA";
import WhyWellrankedGrid from "./components/WhyWellrankedGrid";
import WhyWellrankedHero from "./components/WhyWellrankedHero";

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
        <WhyWellrankedCTA />
      </div>
    </section>
  );
}
