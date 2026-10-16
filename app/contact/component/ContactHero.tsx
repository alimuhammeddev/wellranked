import { BadgeCheck, Mail, Phone, Globe } from "lucide-react";
import LeadConnectorForm from "./LeadConnectorForm";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(20,94,238,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(20,94,238,.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          opacity: 1,
        }}
      />

      <div className="relative mx-auto grid max-w-7xl md:gap-16 gap-10 px-5 pb-24 pt-40 lg:grid-cols-2 lg:px-0">
        {/* Left */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full tracking-[0.18em] border border-[#145EEE] bg-blue-50 px-4 py-2 text-sm font-semibold text-[#145EEE]">
            <Mail size={16} />
            Contact Wellranked
          </span>

          <h1 className="mt-5 text-2xl font-extrabold leading-tight text-[#102A56] lg:text-4xl md:text-3xl">
            Talk to <span className="text-[#145EEE]">Wellranked</span>
          </h1>

          <p className="mt-3 max-w-xl md:text-lg leading-8 text-gray-600">
            Whether you need a better website, stronger Google visibility, more
            reviews, regular content or a complete marketing partner, we will be
            happy to review your business and recommend the best next step.
          </p>

          <div className="mt-5 space-y-3">
            {[
              "Free Growth Audit",
              "Tailored recommendations",
              "No obligation consultation",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <BadgeCheck className="text-[#145EEE]" size={22} />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 space-y-5">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-blue-50 p-3">
                <Mail className="text-[#145EEE]" size={20} />
              </div>
              <div>
                <p className="font-semibold text-[#145EEE]">Email</p>
                <p className="text-gray-600">hello@wellranked.co.uk</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-blue-50 p-3">
                <Phone className="text-[#145EEE]" size={20} />
              </div>
              <div>
                <p className="font-semibold text-[#145EEE]">Phone</p>
                <p className="text-gray-600">Available during business hours</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-blue-50 p-3">
                <Globe className="text-[#145EEE]" size={20} />
              </div>
              <div>
                <p className="font-semibold text-[#145EEE]">Location</p>
                <p className="text-gray-600">
                  Supporting businesses across the UK
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div className="rounded-3xl border border-gray-200 bg-white ">
          <div className="mt-6">
            <LeadConnectorForm />
          </div>
        </div>
      </div>
    </section>
  );
}
