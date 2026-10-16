import {
  BadgeCheck,
  Search,
  TrendingUp,
  Check,
} from "lucide-react";
import LeadConnectorGrowthAuditForm from "./LeadConnectorGrowthAuditForm";

export default function GrowthAuditHero() {
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
            <Search size={16} />
            Free Growth Audit
          </span>

          <h1 className="mt-5 text-2xl font-extrabold leading-tight text-[#102A56] lg:text-4xl md:text-3xl">
            Get a Free Review of Your{" "}
            <span className="text-[#145EEE]">Website & Online Presence</span>
          </h1>

          <p className="mt-3 max-w-xl md:text-lg leading-8 text-gray-600">
            We will review your website, Google visibility and overall online
            presence to show you what is working, what is missing and what can be
            improved to help your business generate more enquiries.
          </p>

          <div className="mt-5 space-y-4">
            {[
              "Website quality & conversion clarity",
              "Google Business Profile visibility",
              "Review strength & reputation",
              "Local SEO opportunities",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <BadgeCheck size={22} className="text-[#145EEE]" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-3xl border border-blue-100 bg-blue-100 p-5">
            <h1 className="flex items-center gap-2 text-xl font-bold text-[#145EEE]">
              <TrendingUp className="text-[#145EEE]" size={22} />
              What We Will Review
            </h1>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Website quality",
                "Google Business Profile",
                "Review strength",
                "Local SEO basics",
                "Competitor position",
                "Content & social activity",
                "Lead response opportunities",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-[#145EEE] px-4 py-3 text-sm font-medium flex items-center gap-1 text-white"
                >
                  <Check size={15} /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="rounded-3xl border border-gray-200 bg-white">
          <div className="mt-6">
            <LeadConnectorGrowthAuditForm />
          </div>
        </div>
      </div>
    </section>
  );
}
