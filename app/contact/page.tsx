
import type { Metadata } from "next";

import ContactHero from "./component/ContactHero";

export const metadata: Metadata = {
  title: "Contact Wellranked | SEO & Digital Marketing Agency",
  description:
    "Get in touch with Wellranked to discuss your SEO and digital marketing needs. Connect with our team to explore strategies for improving search visibility and growing your business.",
};

export default function ContactUs() {
  return (
    <section>
      <div>
        <ContactHero />
      </div>
    </section>
  );
}