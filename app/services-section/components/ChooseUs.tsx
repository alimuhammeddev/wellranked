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

// Small decorative glow-dots scattered inside a card. Positions vary per
// card so a row of cards doesn't look stamped from the same template.
function Sparkles({ variant = 0 }: { variant?: number }) {
  const layouts = [
    "left-7 top-9 h-2 w-2 bg-blue-300/60",
    "right-8 top-16 h-1.5 w-1.5 bg-indigo-300/60",
    "right-14 bottom-10 h-1 w-1 bg-blue-400/50",
  ];
  const offsets = [0, 1, 2, 1, 0];
  return (
    <>
      {layouts.map((pos, idx) => (
        <span
          key={pos}
          aria-hidden
          className={`pointer-events-none absolute rounded-full blur-[1.5px] motion-safe:animate-pulse motion-reduce:opacity-70 ${pos}`}
          style={{
            animationDuration: "3.2s",
            animationDelay: `${(idx + offsets[variant % offsets.length]) * 0.6}s`,
          }}
        />
      ))}
    </>
  );
}

function GhostQuote() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute -top-3 right-5 select-none font-serif text-7xl leading-none text-blue-50"
    >
      &rdquo;
    </span>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Blur */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-indigo-100/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-5 lg:grid-cols-2 lg:px-0">
        {/* Left */}
        <div>
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#244EB3]">
            Why Choose Wellranked
          </span>

          <h2 className="mt-4 text-2xl font-extrabold leading-tight text-[#102A56] lg:text-4xl md:text-3xl">
            A Digital Partner That{" "}
            <span className="text-[#244EB3]">
              Helps Your Business Grow.
            </span>
          </h2>

          <p className="mt-3 max-w-2xl md:text-lg leading-8 text-gray-600">
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
                <BadgeCheck size={22} className="text-[#244EB3]" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#244EB3] px-8 py-4 font-semibold text-white"
          >
            Talk To Wellranked
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Right */}
        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feature, i) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border border-blue-200 bg-white md:p-7 p-5"
              >
                <GhostQuote />
                <Sparkles variant={i} />

                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#244EB3]">
                  <Icon size={24} className="text-white" />
                </div>

                <h3 className="relative mt-4 md:text-xl font-bold text-[#244EB3]">
                  {feature.title}
                </h3>

                <p className="relative mt-3 leading-7 text-gray-600">
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