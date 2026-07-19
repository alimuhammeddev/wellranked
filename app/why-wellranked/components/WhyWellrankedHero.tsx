"use client";

import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Layers3,
} from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    title: "One Marketing Partner",
    description:
      "Everything your business needs managed in one place.",
  },
  {
    title: "Practical Growth",
    description:
      "Focused on visibility, trust and generating more enquiries.",
  },
  {
    title: "Built for UK SMEs",
    description:
      "Affordable solutions designed for independent businesses.",
  },
];

export default function WhyWellrankedHero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#F7FAFF] via-white to-[#EEF4FF]">
      {/* Background Blur */}
      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-start gap-12 px-5 pb-24 pt-40 lg:grid-cols-2 lg:gap-20 lg:px-0">
        {/* Left */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <BriefcaseBusiness size={16} />
            Why Wellranked
          </span>

          <h1 className="mt-4 text-2xl font-extrabold leading-tight text-[#102A56] lg:text-4xl md:text-3xl">
            Because Small Businesses Need {" "}
            <span className="text-blue-600">
              More Than Another Agency.
            </span>
          </h1>

          <p className="mt-3 max-w-2xl md:text-lg leading-8 text-gray-600">
            Traditional agencies often sell individual services, while
            freelancers usually solve one problem at a time. Wellranked gives
            you one joined-up marketing team that keeps your business visible,
            trusted and consistently active online.
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
              href="#why-grid"
              className="rounded-full border border-gray-300 bg-white px-8 py-4 text-center font-semibold text-[#102A56] transition hover:border-blue-600 hover:text-blue-600"
            >
              Why Choose Us
            </Link>
          </div>

          <div className="mt-5 space-y-3">
            {[
              "One team managing your digital presence",
              "No confusing marketing jargon",
              "Everything working towards business growth",
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
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <Layers3 size={15} />
            What Makes Us Different
          </span>

          <h3 className="mt-4 md:text-2xl text-xl font-bold text-[#102A56]">
            One Strategy. One Team. One Goal.
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            Instead of hiring different people for websites, SEO, social media,
            reviews and advertising, Wellranked brings everything together
            under one coordinated strategy.
          </p>

          <div className="mt-5 space-y-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 p-5 transition hover:border-blue-600 hover:bg-blue-50"
              >
                <h4 className="font-semibold text-[#102A56]">
                  {item.title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};