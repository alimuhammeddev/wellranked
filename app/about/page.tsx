
import type { Metadata } from "next";

import AboutHero from "./component/AboutHero";
import AboutValues from "./component/AboutValues";
import FAQSection from "./component/FAQ";

export const metadata: Metadata = {
  title: "About Wellranked | SEO & Digital Marketing Experts",
  description:
    "Learn about WellRanked and its approach to SEO and digital marketing. Discover how data-driven strategies help businesses improve search visibility, attract relevant traffic, and grow online.",
};

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