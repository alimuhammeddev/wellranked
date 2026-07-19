import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WhyWellrankedCTA from "./components/WhyWellrankedCTA";
import WhyWellrankedGrid from "./components/WhyWellrankedGrid";
import WhyWellrankedHero from "./components/WhyWellrankedHero";

export default function WhywellRanked() {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div>
        <WhyWellrankedHero />
      </div>
      <div>
        <WhyWellrankedGrid />
      </div>
      <div>
        <WhyWellrankedCTA />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}
