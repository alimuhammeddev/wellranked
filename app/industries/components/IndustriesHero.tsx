"use client";

import { ArrowRight, Building2, BadgeCheck } from "lucide-react";
import Link from "next/link";

export default function IndustriesHero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#F7FAFF] via-white to-[#EEF4FF]">
      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center lg:gap-20 gap-10 px-5 pt-40 pb-24 lg:grid-cols-2 lg:px-0">
        {/* Left */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <Building2 size={16} />
            Industries We Help
          </span>

          <h1 className="mt-5 text-2xl font-extrabold leading-tight text-[#102A56] lg:text-4xl md:text-3xl">
            Built for Service Businesses That Depend on{" "}
            <span className="text-blue-600">Trust & Local Enquiries.</span>
          </h1>

          <p className="mt-3 max-w-2xl md:text-lg leading-8 text-gray-600">
            Wellranked helps UK SMEs improve their visibility, build customer
            trust and generate more enquiries through websites, SEO, Google
            Business optimisation and digital marketing.
          </p>

          <div className="mt-5 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/growth-audit"
              className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Book Your Free Growth Audit
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#industries"
              className="rounded-full border border-gray-300 bg-white px-8 py-4 text-center font-semibold text-[#102A56] transition hover:border-blue-600 hover:text-blue-600"
            >
              Explore Industries
            </Link>
          </div>

          <div className="mt-5 space-y-3">
            {[
              "More local enquiries",
              "Stronger online credibility",
              "Marketing tailored to your industry",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <BadgeCheck className="text-green-600" size={22} />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="rounded-3xl border border-gray-200 bg-white p-5 md:p-7">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            How We Help
          </span>

          <h3 className="mt-4 md:text-2xl text-xl font-bold text-[#102A56]">
            Helping Local Businesses Win More Customers
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            We focus on the areas that have the biggest impact on generating
            enquiries and growing your business online.
          </p>

          <div className="mt-5 space-y-5">
            {[
              {
                title: "Build Trust",
                text: "Professional websites that make a strong first impression.",
              },
              {
                title: "Increase Visibility",
                text: "Improve your Google presence so more local customers find you.",
              },
              {
                title: "Generate Enquiries",
                text: "Turn more website visitors into calls, bookings and quote requests.",
              },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-blue-600 pl-4">
                <h4 className="font-semibold text-[#102A56]">{item.title}</h4>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
