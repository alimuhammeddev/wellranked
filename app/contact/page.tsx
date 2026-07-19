import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ContactHero from "./component/ContactHero";

export default function ContactUs() {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div>
        <ContactHero />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}
