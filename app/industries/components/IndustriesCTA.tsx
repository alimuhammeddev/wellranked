"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function IndustriesCTA() {
  return (
    <section className="relative overflow-hidden bg-[#059669]/95 py-24">
      {/* Wellranked Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <h1 className="select-none text-[7rem] md:text-[18rem] lg:text-[17rem] font-black uppercase tracking-tight text-white/10 whitespace-nowrap">
          Wellranked
        </h1>
      </div>

      <motion.div
        className="mx-auto max-w-4xl px-5 text-center"
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
        <span className="rounded-full border border-green-400/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
          Ready to Grow?
        </span>

        <h2 className="mt-4 text-2xl font-bold text-white lg:text-4xl md:text-3xl">
          Let's Help Your Business Get Found Online
        </h2>

        <p className="mx-auto mt-3 max-w-2xl md:text-lg leading-8 text-white">
          Whether you're looking for more phone calls, quote requests,
          appointments or bookings, we'll create a digital strategy that helps
          your business attract the right customers.
        </p>

        <Link
          href="/growth-audit"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[#059669]"
        >
          Book Your Free Growth Audit
          <ArrowRight size={18} />
        </Link>
      </motion.div>
    </section>
  );
}
