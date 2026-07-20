"use client";

import {
  ArrowRight,
  BadgeCheck,
  Globe,
  Search,
  Star,
  Bot,
  Image,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Essential",
    price: "£395",
    description: "Professional Online Presence",
  },
  {
    name: "Growth Partner",
    price: "£695",
    description: "Most Popular",
    featured: true,
  },
  {
    name: "Accelerator",
    price: "£995",
    description: "Scale Your Growth",
  },
];

export default function PackagesHero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#F7FAFF] via-white to-[#EEF4FF]">
      {/* Background Blur */}

      <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-start gap-20 lg:px-0 md:px-5 px-5 pb-24 pt-40 lg:grid-cols-2">
        {/* Left */}

        <div>
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            Packages & Pricing
          </span>

          <h1 className="mt-3 text-2xl font-extrabold leading-tight text-[#102A56] lg:text-4xl md:text-3xl">
            Simple marketing packages
            <span className="block text-blue-600">
              built for busy business owners.
            </span>
          </h1>

          <p className="mt-3 max-w-2xl md:text-lg leading-8 text-gray-600">
            Choose the level of support your business needs. Every package is
            designed to remove stress, improve trust and help your business
            become easier to find and easier to choose.
          </p>

          <div className="mt-5 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/growth-audit"
              className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              Book Your Free Growth Audit
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#pricing"
              className="rounded-full border border-gray-300 bg-white px-8 py-4 text-center font-semibold text-[#102A56] transition hover:border-blue-600 hover:text-blue-600"
            >
              Compare Packages
            </Link>
          </div>

          <div className="mt-5 space-y-3">
            {[
              "No long-term contracts",
              "One dedicated marketing team",
              "Clear monthly pricing",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <BadgeCheck size={22} className="text-green-600" />

                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="relative flex items-center justify-center min-h-[650px]">
          {/* Background Glow */}
          <div className="absolute h-[420px] w-[420px] rounded-full bg-blue-100/50 blur-3xl"></div>

          {/* Center Circle */}
          <div className="relative z-20 flex h-44 w-44 flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#1F3064] to-[#2563EB] text-white shadow-[0_30px_70px_rgba(37,99,235,.35)]">
            <div className="text-2xl font-bold">Wellranked</div>

            <p className="mt-1 text-center text-sm text-blue-100">
              Your Growth Partner
            </p>
          </div>

          {/* Website */}
          <div className="absolute top-6 left-16 z-10 rounded-2xl border border-blue-100 bg-white p-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                <Globe size={22} />
              </div>
              <div>
                <p className="font-semibold text-[#102A56]">Website</p>
                <span className="text-sm text-gray-500">Professional</span>
              </div>
            </div>
          </div>

          {/* SEO */}
          <div className="absolute top-12 right-6 z-10 rounded-2xl border border-blue-100 bg-white p-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                <Search size={22} />
              </div>
              <div>
                <p className="font-semibold text-[#102A56]">Local SEO</p>
                <span className="text-sm text-gray-500">Google Ready</span>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="absolute left-0 top-64 z-10 rounded-2xl border border-blue-100 bg-white p-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-yellow-100 p-3 text-yellow-600">
                <Star size={22} />
              </div>
              <div>
                <p className="font-semibold text-[#102A56]">Reviews</p>
                <span className="text-sm text-gray-500">Build Trust</span>
              </div>
            </div>
          </div>

          {/* AI */}
          <div className="absolute right-0 top-64 z-10 rounded-2xl border border-blue-100 bg-white p-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-purple-100 p-3 text-purple-600">
                <Bot size={22} />
              </div>
              <div>
                <p className="font-semibold text-[#102A56]">AI Assistant</p>
                <span className="text-sm text-gray-500">24/7 Replies</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="absolute bottom-28 left-14 z-10 rounded-2xl border border-blue-100 bg-white p-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-pink-100 p-3 text-pink-600">
                <Image size={22} />
              </div>
              <div>
                <p className="font-semibold text-[#102A56]">Social Media</p>
                <span className="text-sm text-gray-500">Stay Active</span>
              </div>
            </div>
          </div>

          {/* Growth */}
          <div className="absolute bottom-20 right-10 z-10 rounded-2xl border border-blue-100 bg-white p-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-green-100 p-3 text-green-600">
                <TrendingUp size={22} />
              </div>
              <div>
                <p className="font-semibold text-[#102A56]">Growth</p>
                <span className="text-sm text-gray-500">More Leads</span>
              </div>
            </div>
          </div>

          {/* SVG Connection Lines */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 700 650"
            fill="none"
          >
            <path d="M350 325 L170 120" stroke="#BFD8FF" strokeWidth="2" />
            <path d="M350 325 L550 120" stroke="#BFD8FF" strokeWidth="2" />
            <path d="M350 325 L110 310" stroke="#BFD8FF" strokeWidth="2" />
            <path d="M350 325 L590 310" stroke="#BFD8FF" strokeWidth="2" />
            <path d="M350 325 L180 520" stroke="#BFD8FF" strokeWidth="2" />
            <path d="M350 325 L540 520" stroke="#BFD8FF" strokeWidth="2" />
          </svg>

          {/* Bottom Result */}
          <div className="absolute bottom-0 left-1/2 z-30 w-[320px] -translate-x-1/2 rounded-3xl bg-gradient-to-r from-green-500 to-emerald-500 p-6 text-center text-white shadow-2xl">
            <p className="text-sm uppercase tracking-widest text-green-100">
              The Result
            </p>

            <h3 className="mt-2 text-3xl font-bold">More Enquiries</h3>

            <p className="mt-2 text-green-100">
              Everything works together to help your business get found, build
              trust and generate more customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
