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
    <section className="relative overflow-hidden bg-linear-to-br from-[#F7FAFF] via-white to-[#EEF4FF]">
      {/* Background */}
      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl md:gap-16 gap-10 px-5 pb-24 pt-40 lg:grid-cols-2 lg:px-0">
        {/* Left */}

        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <Search size={16} />
            Free Growth Audit
          </span>

          <h1 className="mt-5 text-2xl font-extrabold leading-tight text-[#102A56] lg:text-4xl md:text-3xl">
            Get a Free Review of Your {" "}
            <span className="text-blue-600">
              Website & Online Presence
            </span>
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
                <BadgeCheck size={22} className="text-green-600" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-3xl border border-blue-100 bg-blue-50 p-5">
            <h3 className="flex items-center gap-2 text-xl font-bold text-[#102A56]">
              <TrendingUp className="text-blue-600" size={22} />
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
                  className="rounded-xl bg-white px-4 py-3 text-sm font-medium flex items-center gap-1 text-[#102A56]"
                >
                  <Check size={15}/> {item}
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

            <button className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700">
              Request My Free Audit
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Input({
  label,
  type = "text",
}: {
  label: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-2 block font-medium text-[#102A56]">
        {label}
      </label>

      <input
        type={type}
        placeholder={label}
        className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
      />
    </div>
  );
};