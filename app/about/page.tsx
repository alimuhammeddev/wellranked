
import AboutHero from "./component/AboutHero";
import AboutValues from "./component/AboutValues";
import FAQSection from "./component/FAQ";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata(
  "About Wellranked | SEO & Digital Marketing Experts",
  "Learn about WellRanked and its approach to SEO and digital marketing. Discover how data-driven strategies help businesses improve search visibility, attract relevant traffic, and grow online.",
  "/about",
);

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