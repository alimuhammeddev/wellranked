import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutHero from "./component/AboutHero";
import AboutValues from "./component/AboutValues";
import FAQSection from "./component/FAQ";

export default function About() {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div>
        <AboutHero />
      </div>
      <div>
        <AboutValues />
      </div>
      <div>
        <FAQSection />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}
