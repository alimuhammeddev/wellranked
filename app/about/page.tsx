import AboutHero from "./component/AboutHero";
import AboutValues from "./component/AboutValues";
import FAQSection from "./component/FAQ";

export default function About() {
  return (
    <section>
      <div>
        <AboutHero />
      </div>
      <div>
        <AboutValues />
      </div>
      <div>
        <FAQSection />
      </div>
    </section>
  );
}
