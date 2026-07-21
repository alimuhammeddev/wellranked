"use client";

import {
  ArrowRight,
  BadgeCheck,
  Search,
  Globe,
  TrendingUp,
  Check,
} from "lucide-react";

export default function GrowthAuditHero() {
  return (
    <section className="relative overflow-hidde">
      {/* Dot grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(36,78,179,0.18) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 35%, black 40%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 35%, black 40%, transparent 95%)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl md:gap-16 gap-10 px-5 pb-24 pt-40 lg:grid-cols-2 lg:px-0">
        {/* Left */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#244EB3]">
            <Search size={16} />
            Free Growth Audit
          </span>

          <h1 className="mt-5 text-2xl font-extrabold leading-tight text-[#102A56] lg:text-4xl md:text-3xl">
            Get a Free Review of Your{" "}
            <span className="text-[#244EB3]">Website & Online Presence</span>
          </h1>

          <p className="mt-3 max-w-xl md:text-lg leading-8 text-gray-600">
            We'll review your website, Google visibility and overall online
            presence to show you what's working, what's missing and what can be
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
                <BadgeCheck size={22} className="text-[#244EB3]" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-3xl border border-blue-100 bg-blue-50 p-5">
            <h3 className="flex items-center gap-2 text-xl font-bold text-[#102A56]">
              <TrendingUp className="text-[#244EB3]" size={22} />
              What We'll Review
            </h3>

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
                  className="rounded-xl bg-white px-4 py-3 text-sm font-medium flex items-center gap-1 text-[#244EB3]"
                >
                  <Check size={15} /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="rounded-3xl border border-gray-200 bg-white p-5 md:p-8">
          <h2 className="md:text-2xl text-xl font-bold text-[#102A56]">
            Request Your Free Audit
          </h2>

          <p className="mt-2 text-gray-600">
            Complete the form below and we'll contact you to arrange your free
            Growth Audit.
          </p>

          <form className="mt-8 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <Input label="Name" />
              <Input label="Business Name" />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <Input label="Phone Number" />
              <Input label="Email Address" type="email" />
            </div>

            <Input label="Website URL" />

            <div className="grid gap-5 md:grid-cols-2">
              <Input label="Business Type" />
              <Input label="Location Served" />
            </div>

            <div>
              <label className="mb-2 block font-medium text-[#102A56]">
                Biggest Marketing Challenge
              </label>

              <textarea
                rows={4}
                placeholder="Tell us about your biggest challenge..."
                className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
              />
            </div>

            <Input label="Preferred Call Time" />

            <button className="flex w-full items-center justify-center gap-2 rounded-full bg-[#244EB3] py-4 font-semibold text-white">
              Request My Free Audit
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Input({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label className="mb-2 block font-medium text-[#102A56]">{label}</label>

      <input
        type={type}
        placeholder={label}
        className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#244EB3]"
      />
    </div>
  );
}
