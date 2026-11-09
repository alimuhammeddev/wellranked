
import ContactHero from "./component/ContactHero";
import JsonLd from "../components/JsonLd";
import {
  createBreadcrumbSchema,
  createLocalBusinessSchema,
  createPageMetadata,
} from "../seo";

export const metadata = createPageMetadata(
  "Contact Wellranked | SEO & Digital Marketing Agency",
  "Get in touch with Wellranked to discuss your SEO and digital marketing needs. Connect with our team to explore strategies for improving search visibility and growing your business.",
  "/contact",
);

export default function ContactUs() {
  return (
    <section>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          ...createLocalBusinessSchema(),
        }}
      />
      <JsonLd data={createBreadcrumbSchema("Contact", "/contact")} />
      <div>
        <ContactHero />
      </div>
    </section>
  );
}