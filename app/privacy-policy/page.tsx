import type { ReactNode } from "react";
import JsonLd from "../components/JsonLd";
import { createBreadcrumbSchema, createPageMetadata } from "../seo";

export const metadata = createPageMetadata(
  "Privacy & Cookie Policy | WellRanked",
  "Learn how WellRanked handles personal information and uses cookies and similar technologies on its website.",
  "/privacy-policy",
);

const contactEmail = "hello@wellranked.co.uk";

function PolicySection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-slate-200 py-8 last:border-b-0"
    >
      <h2 className="text-2xl font-semibold text-[#102A56]">{title}</h2>
      <div className="mt-4 space-y-4 leading-7 text-slate-600">{children}</div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <section
      aria-labelledby="privacy-policy-title"
      className="bg-white px-5 pb-20 pt-36"
    >
      <JsonLd
        data={createBreadcrumbSchema("Privacy Policy", "/privacy-policy")}
      />

      <div className="mx-auto max-w-4xl">
        <header className="mb-10">
          <p className="font-semibold uppercase tracking-[0.18em] text-[#145EEE]">
            WellRanked
          </p>
          <h1
            id="privacy-policy-title"
            className="mt-3 text-4xl font-bold tracking-tight text-[#102A56] md:text-5xl"
          >
            Privacy &amp; Cookie Policy
          </h1>
          <p className="mt-4 text-slate-500">Last updated: 9 November 2026</p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            This policy explains how WellRanked handles personal information
            when you visit our website, contact us, or enquire about our
            services.
          </p>
        </header>

        <nav
          aria-label="On this page"
          className="mb-8 flex flex-wrap gap-x-6 gap-y-2 rounded-2xl bg-slate-50 p-5 text-[#145EEE]"
        >
          <a className="underline underline-offset-4" href="#privacy">
            Privacy Policy
          </a>
          <a className="underline underline-offset-4" href="#cookies">
            Cookie Policy
          </a>
        </nav>

        <div className="divide-y divide-slate-200">
          <div id="privacy">
            <h2 className="border-b border-slate-200 pb-4 text-3xl font-bold text-[#102A56]">
              Privacy Policy
            </h2>

            <PolicySection id="who-we-are" title="1. Who we are">
              <p>
                WellRanked is a UK focused provider of website development and
                management, search engine optimisation, local search services,
                advertising, digital marketing and related business support
                services. In this policy, “WellRanked”, “we”, “us” and “our”
                refer to WellRanked LTD, trading as WellRanked, registered in
                United Kingdom under company number 17389885, with registered
                office at 235 Tonge Moor Road, Bolton, Greater Manchester, BL2
                2HR, England.
              </p>
              <p>
                For questions or requests about your personal data, contact{" "}
                <a
                  className="text-[#145EEE] underline underline-offset-2"
                  href={`mailto:${contactEmail}`}
                >
                  {contactEmail}
                </a>
                . This policy covers visitors to our website, prospective
                clients, client representatives, suppliers and business
                contacts, including people using our onboarding pages at
                go.wellranked.co.uk.
              </p>
            </PolicySection>

            <PolicySection
              id="information-we-collect"
              title="2. Information we collect"
            >
              <p>Depending on how you interact with us, this may include:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Identity and contact details, such as your name, job title,
                  business name, email address, telephone number, and business
                  address.
                </li>
                <li>
                  Enquiry and sales details, including messages, services
                  requested, appointment details, proposals, and communications
                  with our team.
                </li>
                <li>
                  Information you provide for client onboarding or service
                  delivery, such as business descriptions, service areas,
                  website addresses, branding materials, marketing goals, and
                  campaign preferences.
                </li>
                <li>
                  Transaction and administration details, such as contract
                  information, invoices, billing contacts, and payment status.
                </li>
                <li>
                  Technical and usage information that may be collected by our
                  website and its services, such as IP address, browser and
                  device details, approximate location, page interactions,
                  referral source, and security or cookie-preference records.
                </li>
                <li>
                  Professional contact details and publicly available business
                  information used for business-to-business prospecting, where
                  lawfully collected.
                </li>
              </ul>
              <p>
                Please do not send sensitive personal information or passwords
                through general enquiry or onboarding forms. If such information
                is necessary for a specific service, we will explain the secure
                process separately.
              </p>
            </PolicySection>

            <PolicySection
              id="where-information-comes-from"
              title="3. Where information comes from"
            >
              <p>
                We receive information directly from you when you contact us,
                book a call, submit a form, sign an agreement or complete
                onboarding. We may also receive information from your employer
                or colleagues, referrals, public business directories,
                professional websites, social media, company registers and
                business-data providers. We may receive technical information
                from website, analytics, communications and security providers.
              </p>
            </PolicySection>

            <PolicySection
              id="how-we-use-information"
              title="4. How and why we use information"
            >
              <p>
                We use information to respond to enquiries, provide proposals,
                arrange consultations, deliver and administer services, manage
                billing and records, protect our systems, and handle disputes.
                We may also use it to understand website use and to communicate
                relevant business-to-business marketing where permitted.
              </p>
              <p>
                Depending on the circumstances, our lawful basis may be taking
                steps at your request before entering a contract, performing a
                contract, complying with a legal obligation, our legitimate
                interests, or your consent. Where we rely on legitimate
                interests, we consider the impact on individuals and their
                expectations. Where processing relies on consent, you can
                withdraw it at any time.
              </p>
            </PolicySection>

            <PolicySection id="marketing" title="5. Business marketing">
              <p>
                We may contact relevant business representatives about our
                services using professional contact details collected directly
                or obtained from lawful business sources. We handle marketing in
                accordance with applicable UK data protection and privacy rules.
                You can object to direct marketing at any time by contacting us
                using the details in this policy or by using an unsubscribe
                facility where one is provided.
              </p>
              <p>
                The screening and suppression procedures used for particular
                marketing channels have not been confirmed in the information
                reviewed. Automated marketing calls require the relevant
                consent.
              </p>
            </PolicySection>

            <PolicySection
              id="client-data"
              title="6. Information processed for clients"
            >
              <p>
                When we handle information on a client&apos;s instructions, for
                example, while working with a client website, campaign, or
                customer system—the client may be the controller and WellRanked
                may be a processor. Any such processing is governed by the
                applicable service agreement and data processing terms. This
                policy describes our own activities and does not replace a
                client&apos;s privacy notice.
              </p>
            </PolicySection>

            <PolicySection
              id="sharing-information"
              title="7. Who we share information with"
            >
              <p>
                We may share information with authorised staff and contractors
                and with providers that support website hosting, forms and
                onboarding, communications, analytics, advertising, payments, or
                accounting. We may also share it with professional advisers or
                authorities where required by law.
              </p>
              <p>
                The website code includes integrations for Google Analytics 4,
                Microsoft Clarity, LeadConnector forms, and the Chatbase chat
                widget. The specific data each service receives, its processing
                role, and any additional recipients have not been independently
                verified.
              </p>
            </PolicySection>

            <PolicySection
              id="international-transfers"
              title="8. International transfers"
            >
              <p>
                Some service providers may process or access information outside
                the United Kingdom. The locations, transfer mechanisms, and
                safeguards applicable to the services used by this website have
                not been confirmed in the information reviewed. Please contact
                us if you would like to ask about a particular transfer.
              </p>
            </PolicySection>

            <PolicySection
              id="retention"
              title="9. How long we keep information"
            >
              <p>
                We keep personal information only for as long as reasonably
                necessary for the purposes described in this policy, including
                providing services, meeting legal obligations, and handling
                disputes. It may then be securely deleted or anonymised.
              </p>
              <p>
                Specific retention periods for enquiries, client records,
                financial records, website logs, and cookie-consent records have
                not been confirmed in the information reviewed.
              </p>
            </PolicySection>

            <PolicySection id="your-rights" title="10. Your rights">
              <p>
                Subject to applicable conditions and exemptions, you may have
                the right to request access to, correction or deletion of your
                personal information, restriction of or objection to processing,
                and portability of information you provided. You can object to
                direct marketing at any time and withdraw consent where
                processing relies on it.
              </p>
              <p>
                To make a request, email{" "}
                <a
                  className="text-[#145EEE] underline underline-offset-2"
                  href={`mailto:${contactEmail}`}
                >
                  {contactEmail}
                </a>
                . We may need to verify your identity before responding.
              </p>
            </PolicySection>

            <PolicySection id="security" title="11. Security">
              <p>
                We take steps intended to protect personal information against
                unauthorised access, loss, or misuse. No internet-based system
                can be guaranteed to be completely secure.
              </p>
            </PolicySection>

            <PolicySection id="children" title="12. Children">
              <p>
                Our services are intended for business users and are not
                directed at children. If you believe a child has provided
                personal information to us, please contact us.
              </p>
            </PolicySection>

            <PolicySection
              id="automated-decisions"
              title="13. Automated decisions"
            >
              <p>
                The information reviewed does not establish whether any
                profiling or automated decision-making is used in connection
                with enquiries or marketing. Contact us if you have questions
                about how a decision concerning you was made.
              </p>
            </PolicySection>

            <PolicySection
              id="external-services"
              title="14. External links and services"
            >
              <p>
                Our website may link to or embed third-party websites and
                services. Their own privacy notices apply when you interact with
                them. We encourage you to review those notices.
              </p>
            </PolicySection>

            <PolicySection id="complaints" title="15. Complaints and contact">
              <p>
                Please contact us first if you have a concern about how your
                information is handled. You can also complain to the UK
                Information Commissioner&apos;s Office (ICO) at{" "}
                <a
                  className="text-[#145EEE] underline underline-offset-2"
                  href="https://ico.org.uk/"
                  rel="noreferrer"
                  target="_blank"
                >
                  ico.org.uk
                </a>
                .
              </p>
            </PolicySection>

            <PolicySection
              id="privacy-changes"
              title="16. Changes to this policy"
            >
              <p>
                We may update this policy to reflect changes to our services,
                technology, or legal requirements. We will publish the revised
                version on this page and update the date above.
              </p>
            </PolicySection>
          </div>

          <div id="cookies" className="pt-8">
            <h2 className="border-b border-slate-200 pb-4 text-3xl font-bold text-[#102A56]">
              Cookie Policy
            </h2>

            <PolicySection
              id="cookie-basics"
              title="1. Cookies and similar technologies"
            >
              <p>
                Cookies are small files stored on your device when you visit a
                website. Similar technologies include local storage, pixels, and
                tags that store information on or access information from your
                device. They can support website functionality, remember
                choices, measure performance, or support advertising.
              </p>
            </PolicySection>

            <PolicySection
              id="cookie-use"
              title="2. How this website uses these technologies"
            >
              <p>
                The website code includes Google Analytics 4 and Microsoft
                Clarity scripts, a Chatbase chat widget, and embedded
                LeadConnector forms. These services may use cookies or similar
                technologies for analytics, functionality, communications, or
                form operation.
              </p>
              <p>
                The exact cookies, storage items, purposes, providers,
                durations, and consent behaviour have not been confirmed by a
                technical audit. The code review also did not identify a
                website-wide cookie settings control. The presence of a
                third-party integration does not establish which cookies it sets
                in every browser or whether a particular cookie is necessary.
              </p>
            </PolicySection>

            <PolicySection id="cookie-categories" title="3. Cookie categories">
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-[#102A56]">
                    Strictly necessary:
                  </strong>{" "}
                  technologies needed for a service or feature you request,
                  security, form submission, or saving privacy choices. An
                  exemption from consent applies only where the legal
                  requirements are met.
                </li>
                <li>
                  <strong className="text-[#102A56]">
                    Analytics and performance:
                  </strong>{" "}
                  technologies that help understand visits, performance, and
                  user journeys. Consent may be required before non-exempt
                  technologies are used.
                </li>
                <li>
                  <strong className="text-[#102A56]">
                    Functional and preferences:
                  </strong>{" "}
                  technologies that remember optional settings or provide
                  enhanced features. Whether consent is required depends on
                  their purpose.
                </li>
                <li>
                  <strong className="text-[#102A56]">
                    Advertising and targeting:
                  </strong>{" "}
                  technologies that support advertising measurement, audience
                  creation, or remarketing. Consent may be required before
                  non-essential tracking is activated.
                </li>
              </ul>
            </PolicySection>

            <PolicySection id="cookie-choices" title="4. Your choices">
              <p>
                You can manage or delete cookies using your browser settings.
                Blocking some technologies may affect website features. Browser
                controls do not replace any consent required by law. The cookie
                preference controls and withdrawal mechanism for this website
                have not been confirmed in the information reviewed.
              </p>
            </PolicySection>

            <PolicySection
              id="third-party-cookies"
              title="5. Third-party technologies"
            >
              <p>
                Google Analytics 4, Microsoft Clarity, LeadConnector, and
                Chatbase are integrated in the website code. These providers may
                process information under their own privacy terms. The complete
                list of providers, applicable notices, and any technologies
                loaded by embedded services has not been independently verified.
              </p>
            </PolicySection>

            <PolicySection id="cookie-changes" title="6. Changes and questions">
              <p>
                We may update this Cookie Policy when our technologies,
                providers, or legal requirements change. For questions about
                cookies or personal information, contact{" "}
                <a
                  className="text-[#145EEE] underline underline-offset-2"
                  href={`mailto:${contactEmail}`}
                >
                  {contactEmail}
                </a>
                .
              </p>
            </PolicySection>
          </div>
        </div>
      </div>
    </section>
  );
}
