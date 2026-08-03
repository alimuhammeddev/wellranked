"use client";

import {
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
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
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="inline-flex items-center mx-auto gap-2.5 rounded-full border border-[#145EEE]/30 bg-white px-4 py-2 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#145EEE] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#145EEE]" />
              </span>

              <span className="text-sm font-medium text-[#145EEE]">
                Helping UK Small Businesses Grow Online
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-[-0.03em] text-[#102A56]">
              Your Outsourced{" "}
              <span className="relative inline-flex items-center justify-center px-6 py-2 mx-2 rounded-2xl overflow-hidden">
                <span className="relative z-10 font-black text-[#145EEE]">
                  Marketing Department
                </span>
              </span>
              {""}for Less Than the Cost of <span>One Employee.</span>
            </h1>

            <p className="mt-5 md:text-2xl text-gray-600 leading-8">
              Wellranked helps UK small businesses get found, trusted and chosen
              by managing your website, Google visibility, reviews, content,
              graphics, social posts and lead generation all under one simple
              monthly package.
            </p>

            {/* Buttons */}

            <div className="mt-8 flex flex-col mx-auto justify-center gap-4 sm:flex-row">
              <motion.div
                className="rounded-full bg-[#145EEE]"
              >
                <Link
                  href="/growth-audit"
                  className="flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white rounded-full"
                >
                  Book Your Free Growth Audit
                  <ArrowRight size={18} />
                </Link>
              </motion.div>

              <motion.div
              >
                <Link
                  href="/package-section"
                  className="flex items-center justify-center rounded-full border bg-white px-8 py-4 text-center font-semibold transition border-[#145EEE] text-[#145EEE]"
                >
                  View Packages
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
