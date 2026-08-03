"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const trustPoints = [
  "Website Performance Review",
  "Google Visibility Analysis",
  "Simple Action Plan, No Obligation",
];

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 md:px-8 md:py-28">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <motion.div
        className="relative mx-auto md:max-w-7xl rounded-3xl md:px-14 py-14 text-center md:py-16"
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-bold leading-tight text-[#145EEE] md:text-3xl lg:text-4xl">
          Want to know what's stopping your business from getting more
          enquiries?
        </h2>

        <p className="mx-auto mt-4 md:max-w-2xl text-base leading-7 text-[#145EEE] md:text-lg">
          Book a free Wellranked Growth Audit and we'll show you the biggest
          improvements you can make across your website, Google visibility,
          reviews and lead generation.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/growth-audit"
            className="group flex items-center justify-center gap-2 md:w-fit w-full rounded-full bg-[#145EEE] px-7 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Book Your Free Growth Audit
            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="/package-section"
            className="md:w-fit w-full rounded-full bg-white/15 border border-[#145EEE] px-7 py-3.5 font-semibold text-[#145EEE] backdrop-blur transition hover:bg-white/20"
          >
            View Packages
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {trustPoints.map((point) => (
            <div key={point} className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-[#145EEE]" />
              <span className="text-sm text-[#145EEE]">{point}</span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm font-medium text-white/70">
          No pressure. No jargon. Just clear advice to help your business grow.
        </p>
      </motion.div>
    </section>
  );
};