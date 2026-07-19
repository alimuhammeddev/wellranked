"use client";

import { ArrowRight, BadgeCheck, CheckCircle2, Globe2, Search, Star } from "lucide-react";
import Link from "next/link";

const services = [
  "Website Design & Management",
  "Local SEO",
  "Google Business Profile",
  "Review Management",
  "Social Content",
  "Email Marketing",
  "Meta & Google Ads",
  "Marketing Concierge",
];

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#F7FAFF] via-white to-[#EEF4FF]">
      {/* Background Blur */}
      <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-start md:gap-20 gap-10 px-5 pb-24 pt-40 md:px-5 lg:grid-cols-2 lg:px-0">
        {/* Left */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <Globe2 size={16} />
            Digital Growth Services
          </span>

          <h1 className="mt-3 text-2xl font-extrabold leading-tight text-[#102A56] lg:text-4xl md:text-3xl">
            Everything Your Business Needs
            <span className="block text-blue-600">To Grow Online.</span>
          </h1>

          <p className="mt-2 max-w-2xl md:text-lg leading-8 text-gray-600">
            Whether you need a better website, stronger Google rankings, more
            customer enquiries or ongoing marketing support, Wellranked provides
            practical digital marketing services that help UK businesses grow
            with confidence.
          </p>

          <div className="mt-5 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              Book Your Free Growth Audit
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#services"
              className="rounded-full border border-gray-300 bg-white px-8 py-4 text-center font-semibold text-[#102A56] transition hover:border-blue-600 hover:text-blue-600"
            >
              See What We Can Improve
            </Link>
          </div>

          <div className="mt-5 space-y-3">
            {[
              "Professional websites that build trust",
              "Local SEO that gets your business found",
              "Marketing support from one trusted team",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <BadgeCheck size={22} className="text-green-600" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            <CheckCircle2 size={16} />
            Why Businesses Choose Wellranked
          </span>

          <h3 className="mt-4 md:text-2xl text-lg font-bold text-[#102A56]">
            A Simple Partner for Your Digital Growth
          </h3>

          <p className="mt-3 text-gray-600 leading-7">
            We help small businesses attract more customers with practical
            digital marketing solutions that are easy to understand, affordable,
            and focused on real business results.
          </p>

          <div className="mt-4 space-y-3">
            {[
              "Clear advice with no technical jargon",
              "Tailored strategies for your business",
              "Reliable support whenever you need it",
              "Everything managed in one place",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <BadgeCheck className="mt-1 text-green-600" size={20} />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4 rounded-2xl bg-blue-50 md:p-5 p-3">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">1</p>
              <p className="mt-1 text-xs text-gray-600">Trusted Partner</p>
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">8+</p>
              <p className="mt-1 text-xs text-gray-600">Core Services</p>
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">100%</p>
              <p className="mt-1 text-xs text-gray-600">Business Focused</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
