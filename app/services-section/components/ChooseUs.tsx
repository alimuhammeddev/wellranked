"use client";

import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Headphones,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Built for Small Businesses",
    description:
      "Every strategy is designed around the needs of local businesses, sole traders and growing SMEs. No unnecessary complexity—just practical marketing that works.",
    icon: BadgeCheck,
  },
  {
    title: "Results You Can Measure",
    description:
      "We focus on improving visibility, generating enquiries and helping your business grow with clear, measurable outcomes.",
    icon: TrendingUp,
  },
  {
    title: "Ongoing Marketing Support",
    description:
      "Need a website update, a new promotion or help with your online presence? We're here whenever you need us.",
    icon: Headphones,
  },
  {
    title: "Fast Response Times",
    description:
      "Business moves quickly. That's why we deliver updates, improvements and support without unnecessary delays.",
    icon: Clock3,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Blur */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-indigo-100/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-5 lg:grid-cols-2 lg:px-0">
        {/* Left */}
        <div>
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            Why Choose Wellranked
          </span>

          <h2 className="mt-4 text-2xl font-extrabold leading-tight text-[#102A56] lg:text-4xl md:text-3xl">
            A Digital Partner That
            <span className="block text-blue-600">
              Helps Your Business Grow.
            </span>
          </h2>

          <p className="mt-3 max-w-2xl text-lg leading-8 text-gray-600">
            We don't just build websites or run marketing campaigns. We
            become an extension of your business, helping you attract more
            customers, build trust and create sustainable long-term growth.
          </p>

          <div className="mt-5 space-y-4">
            {[
              "Everything managed under one roof",
              "Clear communication and transparent pricing",
              "Designed specifically for UK SMEs",
              "Long-term support as your business grows",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <BadgeCheck size={22} className="text-green-600" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            Talk To Wellranked
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Right */}
        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-gray-200 bg-white md:p-7 p-5 transition-all duration-300 hover:border-blue-600"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                  <Icon
                    size={26}
                    className="text-blue-600 transition"
                  />
                </div>

                <h3 className="mt-4 md:text-xl font-bold text-[#102A56]">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};