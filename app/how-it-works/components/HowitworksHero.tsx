"use client";

import {
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HowItWorksHero() {
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center">
            <span className="inline-flex rounded-full border border-[#145EEE] bg-blue-50 px-4 py-2 text-sm tracking-[0.18em] font-semibold text-[#145EEE]">
              How It Works
            </span>
          </div>

          <h1 className="mt-5 text-3xl text-center font-extrabold leading-tight text-[#102A56] lg:text-7xl md:text-5xl">
            A Simple Process{" "}
            <span className="text-[#145EEE]">
              Built for Busy Business Owners.
            </span>
          </h1>

          <p className="mt-3 md:text-2xl text-center leading-8 text-gray-600">
            We've designed our process to make marketing straight forward. From
            your free Growth Audit to ongoing monthly support, every step is
            focused on helping your business grow without adding more work to
            your day.
          </p>

          {/* Buttons */}
          <div className="mt-5 flex flex-col mx-auto justify-center gap-4 sm:flex-row">
            <Link
              href="/growth-audit"
              className="flex items-center justify-center gap-2 rounded-full bg-[#145EEE] px-8 py-4 font-semibold text-white"
            >
              Book Free Growth Audit
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#process"
              className="rounded-full border border-[#145EEE] bg-white px-8 py-4 text-center font-semibold text-[#145EEE]"
            >
              See The Process
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
