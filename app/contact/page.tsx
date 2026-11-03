
import ContactHero from "./component/ContactHero";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata(
  "Contact Wellranked | SEO & Digital Marketing Agency",
  "Get in touch with Wellranked to discuss your SEO and digital marketing needs. Connect with our team to explore strategies for improving search visibility and growing your business.",
  "/contact",
);

export default function ContactUs() {
  return (
    <section>
      <div>
        <ContactHero />
      </div>
    </section>
  );
}