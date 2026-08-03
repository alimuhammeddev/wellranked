"use client";

import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Calculator,
  Key,
  Scale,
  Smile,
  Sparkles,
  SprayCan,
  Wrench,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function IndustriesHero() {
  return (
    <section className="relative overflow-hidden bg-white">
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
            <span className="inline-flex rounded-full border border-[#145EEE] text-[#145EEE] bg-blue-50 px-4 py-2 text-sm tracking-[0.18em] font-semibold">
              Industries We Help
            </span>
          </div>

          <h1 className="mt-5 text-3xl text-center font-extrabold leading-tight text-[#102A56] lg:text-7xl md:text-5xl">
            Built for Service Businesses That Depend on{" "}
            <span className="text-[#145EEE]">Trust & Local Enquiries.</span>
          </h1>

          <p className="mt-3 md:text-2xl text-center leading-8 text-gray-600">
            Wellranked helps UK SMEs improve their visibility, build customer
            trust and generate more enquiries through websites, SEO, Google
            Business optimisation and digital marketing.
          </p>

          <div className="mt-5 flex flex-col mx-auto justify-center gap-4 sm:flex-row">
            <div className="rounded-full bg-[#145EEE]">
              <Link
                href="/growth-audit"
                className="flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-white"
              >
                Book Your Free Growth Audit
                <ArrowRight size={18} />
              </Link>
            </div>

            <Link
              href="#industries"
              className="rounded-full border border-[#145EEE] bg-white px-8 py-4 text-center font-semibold text-[#145EEE] transition"
            >
              Explore Industries
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
