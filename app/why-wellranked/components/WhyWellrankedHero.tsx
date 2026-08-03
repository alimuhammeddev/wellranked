"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Layers3,
  TrendingUp,
  Users2,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const highlights = [
  {
    title: "One Marketing Partner",
    description: "Everything your business needs managed in one place.",
    icon: Users2,
  },
  {
    title: "Practical Growth",
    description: "Focused on visibility, trust and generating more enquiries.",
    icon: TrendingUp,
  },
  {
    title: "Built for UK SMEs",
    description: "Affordable solutions designed for independent businesses.",
    icon: Building2,
  },
];

const AUTO_ADVANCE_MS = 4500;

export default function WhyWellrankedHero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % highlights.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [active]);

  const ActiveIcon = highlights[active].icon;

  return (
    <section className=" bg-white">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
      linear-gradient(rgba(20,94,238,.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(20,94,238,.08) 1px, transparent 1px)
    `,
          backgroundSize: "60px 60px",
          opacity: 1,
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-1/2 h-137.5 w-137.5 -translate-x-1/2 rounded-full bg-[#145EEE]/15 blur-[140px]" />

        <div className="absolute top-32 left-10 h-52 w-52 rounded-full bg-[#145EEE]/10 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto py-24 md:mt-16 mt-10 lg:px-0 md:px-5 px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#145EEE] bg-blue-50 px-4 py-2 uppercase tracking-[0.18em] font-semibold text-[#145EEE]">
              Why Wellranked
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold text-center leading-tight text-[#102A56] lg:text-7xl md:text-5xl">
            Because Small Businesses Need{" "}
            <span className="text-[#145EEE]">More Than Another Agency.</span>
          </h1>

          <p className="mt-3 md:text-2xl text-center leading-8 text-gray-600">
            Traditional agencies often sell individual services, while
            freelancers usually solve one problem at a time. Wellranked gives
            you one joined-up marketing team that keeps your business visible,
            trusted and consistently active online.
          </p>

          <div className="mt-5 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/growth-audit"
              className="flex items-center justify-center gap-2 rounded-full bg-[#145EEE] px-8 py-4 font-semibold text-white"
            >
              Book Your Free Growth Audit
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#why-grid"
              className="rounded-full border border-[#145EEE] bg-white px-8 py-4 text-center font-semibold text-[#145EEE]"
            >
              Why Choose Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
