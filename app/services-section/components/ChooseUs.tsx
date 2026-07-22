"use client";

import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Headphones,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

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
    <section className="relative overflow-hidden bg-white md:py-24">
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-5 lg:grid-cols-2 lg:px-0">
        {/* Left */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: "easeOut",
          }}
        >
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#244EB3]">
            Why Choose Wellranked
          </span>

          <h2 className="mt-4 text-2xl font-extrabold leading-tight text-[#102A56] lg:text-4xl md:text-3xl">
            A Digital Partner That{" "}
            <span className="text-[#244EB3]">Helps Your Business Grow.</span>
          </h2>

          <p className="mt-3 max-w-2xl md:text-lg leading-8 text-gray-600">
            We don't just build websites or run marketing campaigns. We become
            an extension of your business, helping you attract more customers,
            build trust and create sustainable long-term growth.
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
        </motion.div>

        {/* Right */}
        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border border-blue-200 bg-white md:p-7 p-5"
                initial={{
                  opacity: 0,
                  y: 40,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
              >
                <GhostQuote />

                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#244EB3]">
                  <Icon size={24} className="text-white" />
                </div>

                <h3 className="relative mt-4 md:text-xl font-bold text-[#244EB3]">
                  {feature.title}
                </h3>

                <p className="relative mt-3 leading-7 text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
