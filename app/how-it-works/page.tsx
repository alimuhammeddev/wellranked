import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HowItWorksHero from "./components/HowitworksHero";
import HowItWorksTimeline from "./components/HowitworksTimeline";

export default function Works() {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div>
        <HowItWorksHero />
      </div>
      <div>
        <HowItWorksTimeline />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}
