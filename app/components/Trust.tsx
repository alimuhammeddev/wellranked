"use client";

import {
  PoundSterling,
  Headphones,
  Laptop,
  BarChart3,
  TrendingUp,
  Building2,
  LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

interface TrustItem {
  title: string;
  description: string;
  icon: LucideIcon;
  from: string;
  to: string;
}

const trustItems: TrustItem[] = [
  {
    title: "Clear Monthly Pricing",
    description: "No hidden costs or surprise invoices.",
    icon: PoundSterling,
    from: "#145EEE",
    to: "#5B8DEF",
  },
  {
    title: "Dedicated Support",
    description: "A team that knows your business.",
    icon: Headphones,
    from: "#7C5CFC",
    to: "#A78BFA",
  },
  {
    title: "Remote Efficient Team",
    description: "Professional marketing support without the overhead.",
    icon: Laptop,
    from: "#16B8A6",
    to: "#5EEAD4",
  },
  {
    title: "Simple Reports",
    description: "Easy to understand updates on your progress.",
    icon: BarChart3,
    from: "#F5A623",
    to: "#FBC776",
  },
  {
    title: "Practical Growth Actions",
    description: "Recommendations that actually move your business forward.",
    icon: TrendingUp,
    from: "#F5578B",
    to: "#FB9CB9",
  },
  {
    title: "Built for Real SMEs",
    description: "Designed specifically for small businesses and sole traders, not corporate brands.",
    icon: Building2,
    from: "#5B6EF5",
    to: "#8FA0FA",
  },
];

function TrustCard({ item, index }: { item: TrustItem; index: number }) {
  const Icon = item.icon;

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
    >
      {/* hairline gradient border */}
      <div
        className="rounded-[26px] p-px transition-opacity duration-300"
        style={{
          backgroundImage: `linear-gradient(135deg, ${item.from}55, transparent 60%)`,
        }}
      >
        <div className="relative overflow-hidden rounded-[25px] bg-white p-8 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_20px_45px_rgba(16,24,40,0.09)]">
          {/* ghost watermark icon */}
          <Icon
            size={112}
            strokeWidth={1}
            className="pointer-events-none absolute -right-5 -top-5 text-black/[0.035] transition-transform duration-500 group-hover:scale-110"
          />

          <div className="relative z-10">
            <div
              className="flex h-13 w-13 items-center justify-center rounded-2xl"
              style={{
                background: `linear-gradient(135deg, ${item.from}, ${item.to})`,
                height: "3.25rem",
                width: "3.25rem",
              }}
            >
              <Icon size={22} className="text-white" />
            </div>

            <h3 className="mt-5 text-lg font-bold leading-snug text-[#102A56]">
              {item.title}
            </h3>

            <p className="mt-2.5 text-sm leading-relaxed text-gray-500">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-16 md:px-8 md:py-28">
      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#145EEE] tracking-[0.18em]">
            Why Businesses Choose Wellranked
          </span>

          <h2 className="mt-6 text-2xl lg:text-4xl md:text-3xl font-bold leading-tight text-[#102A56]">
            Built for UK small businesses,{" "}
            <span className="text-[#145EEE]">sole traders & independent companies.</span>
          </h2>

          <p className="mt-5 md:text-lg leading-8 text-gray-600">
            We understand small businesses need practical marketing support,
            not complicated agency language every package is built to be
            clear, affordable and useful from day one.
          </p>
        </motion.div>

        {/* Card grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-20 md:gap-6">
          {trustItems.map((item, index) => (
            <TrustCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};