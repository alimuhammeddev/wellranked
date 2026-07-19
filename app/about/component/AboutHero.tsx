"use client";

import {
  ArrowRight,
  BadgeCheck,
  HeartHandshake,
  Building2,
} from "lucide-react";
import Link from "next/link";

const missionPoints = [
  {
    title: "Affordable",
    description:
      "Professional marketing support designed for independent businesses and growing UK SMEs.",
  },
  {
    title: "Practical",
    description:
      "Clear strategies focused on helping you attract more enquiries and grow with confidence.",
  },
  {
    title: "Supportive",
    description:
      "An outsourced marketing team that works alongside your business every step of the way.",
  },
];

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#F7FAFF] via-white to-[#EEF4FF]">
      {/* Background Blur */}
      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-start gap-10 px-5 pb-24 pt-40 lg:grid-cols-2 lg:gap-20 lg:px-0">
        {/* Left */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <Building2 size={16} />
            About Wellranked
          </span>

          <h1 className="mt-5 text-2xl font-extrabold leading-tight text-[#102A56] lg:text-4xl md:text-3xl">
            We Built Wellranked for Business Owners Who Are {" "}
            <span className="text-blue-600">
              Tired of Doing Everything Themselves.
            </span>
          </h1>

          <p className="mt-3 max-w-2xl md:text-lg leading-8 text-gray-600">
            Wellranked was created to give UK small businesses access to the
            kind of joined-up marketing support that's usually only available
            to larger companies. We help businesses stay visible, trusted and
            active online, without the stress of managing everything yourself.
          </p>

          <p className="mt-3 max-w-2xl md:text-lg leading-8 text-gray-600">
            Think of us as your outsourced marketing department. While you focus
            on serving your customers, we look after your website, local SEO,
            Google Business Profile, reviews, content and digital marketing to
            help your business grow.
          </p>

          {/* Buttons */}
          <div className="mt-5 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Book Your Free Growth Audit
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#our-values"
              className="rounded-full border border-gray-300 bg-white px-8 py-4 text-center font-semibold text-[#102A56] transition hover:border-blue-600 hover:text-blue-600"
            >
              Our Values
            </Link>
          </div>

          {/* Trust Points */}
          <div className="mt-6 space-y-3">
            {[
              "Built specifically for UK small businesses",
              "One trusted partner for your digital marketing",
              "Helping you focus on running your business",
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
            <HeartHandshake size={15} />
            Our Mission
          </span>

          <h3 className="mt-4 md:text-2xl text-xl font-bold text-[#102A56]">
            Marketing That Works for Small Businesses
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            We believe every small business deserves affordable, practical
            marketing support without the complexity, inflated costs or agency
            jargon.
          </p>

          <div className="mt-5 space-y-5">
            {missionPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-2xl border border-gray-200 p-5 transition hover:border-blue-600 hover:bg-blue-50"
              >
                <h4 className="font-semibold text-[#102A56]">
                  {point.title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Card */}
          <div className="mt-8 rounded-2xl bg-[#F8FAFC] p-5">
            <p className="text-sm font-semibold text-[#102A56]">
              Our Promise
            </p>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Every recommendation we make is focused on one goal: helping your
              business get found, earn trust and generate more customer
              enquiries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};