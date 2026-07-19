import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import GrowthAuditHero from "./component/GrowthAudit";

export default function GrowthAudit() {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div>
        <GrowthAuditHero />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}
