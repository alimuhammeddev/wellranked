"use client";

import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Headphones,
  TrendingUp,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

const features: Feature[] = [
  {
    title: "Built for Small Businesses",
    description:
      "Every strategy is designed around the needs of local businesses, sole traders and growing SMEs. No unnecessary complexity just practical marketing that works.",
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

function Perforation({ position }: { position: number }) {
  return (
    <div
      className="absolute left-0 right-0 z-10"
      style={{ top: `${position}%` }}
    >
      <div className="absolute -left-3 h-6 w-6 -translate-y-1/2 rounded-full bg-white" />
      <div className="absolute -right-3 h-6 w-6 -translate-y-1/2 rounded-full bg-white" />
      <div className="mx-4 border-t-2 border-dashed border-white" />
    </div>
  );
}

function FeatureTicket({
  feature,
  index,
  rotate,
}: {
  feature: Feature;
  index: number;
  rotate: string;
}) {
  const Icon = feature.icon;

  return (
    <motion.div
      className={`group relative w-full ${rotate} transition-transform duration-500 hover:rotate-0 hover:-translate-y-2`}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
    >
      <div className="relative overflow-visible rounded-[22px] bg-[#145EEE]">
        {/* Punched corner holes */}
        <div className="absolute left-3 top-3 h-2 w-2 rounded-full bg-white" />
        <div className="absolute right-3 top-3 h-2 w-2 rounded-full bg-white" />

        {/* Icon + title section */}
        <div className="px-6 pb-8 pt-7">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
            <Icon size={20} className="text-[#145EEE]" />
          </div>

          <h3 className="mt-4 text-[17px] font-bold leading-snug text-white">
            {feature.title}
          </h3>
        </div>

        <Perforation position={42} />

        {/* Description section */}
        <div className="relative px-6 pb-9 pt-5">
          <p className="text-[14px] leading-relaxed text-white">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const rotations = [
    "rotate-[-2deg]",
    "rotate-[1.5deg]",
    "rotate-[-1.5deg]",
    "rotate-[2deg]",
  ];

  return (
    <section className="relative overflow-hidden bg-white md:py-24 py-16">
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
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 font-semibold text-[#145EEE] uppercase tracking-[0.18em]">
            Why Choose Wellranked
          </span>

          <h2 className="mt-4 text-2xl font-extrabold leading-tight text-[#102A56] lg:text-4xl md:text-3xl">
            A Digital Partner That{" "}
            <span className="text-[#145EEE]">Helps Your Business Grow.</span>
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
                <BadgeCheck size={22} className="text-[#145EEE]" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#145EEE] px-8 py-4 font-semibold text-white"
          >
            Talk To Wellranked
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        {/* Right */}
        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feature, index) => (
            <FeatureTicket
              key={feature.title}
              feature={feature}
              index={index}
              rotate={rotations[index % rotations.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};