"use client";

import Link from "next/link";
import { ArrowRight, BadgeCheck, } from "lucide-react";
import { motion } from "framer-motion";

export default function PackagesCTA() {
  return (
    <section className="relative overflow-hidden bg-[#059669]/95 py-24">
      {/* Wellranked Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <h1 className="select-none text-[7rem] md:text-[18rem] lg:text-[17rem] font-black uppercase tracking-tight text-white/10 whitespace-nowrap">
          Wellranked
        </h1>
      </div>

      <motion.div
        className="relative mx-auto max-w-5xl px-5 text-center"
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
        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
          Free Growth Audit
        </span>

        <h2 className="mt-5 text-2xl font-extrabold leading-tight text-white lg:text-4xl md:text-3xl">
          Ready to grow your business
          <span className="block">with less stress?</span>
        </h2>

        <p className="mx-auto mt-5 max-w-3xl md:text-lg leading-8 text-white">
          Book your free Wellranked Growth Audit and we'll show you the biggest
          opportunities to improve your website, Google visibility, reviews and
          lead generation. You'll receive practical, easy-to-understand
          recommendations with no pressure and no jargon.
        </p>

        <div className="mt-5 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/growth-audit"
            className="flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[#059669]"
          >
            Book Your Free Growth Audit
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
          >
            Speak to Our Team
          </Link>
        </div>

        <div className="mt-6 flex flex-col items-center justify-center gap-4 text-sm text-blue-100 md:flex-row md:gap-8">
          <div className="flex items-center gap-2">
            <BadgeCheck size={18} className="text-blue-100" />
            No pressure or obligation
          </div>

          <div className="flex items-center gap-2">
            <BadgeCheck size={18} className="text-blue-100" />
            Clear, practical advice
          </div>

          <div className="flex items-center gap-2">
            <BadgeCheck size={18} className="text-blue-100" />
            Tailored to your business
          </div>
        </div>
      </motion.div>
    </section>
  );
}
