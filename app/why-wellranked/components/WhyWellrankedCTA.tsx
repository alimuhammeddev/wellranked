"use client";

import { ArrowRight, BadgeCheck } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WhyWellrankedCTA() {
  return (
    <section className="relative overflow-hidden bg-[#059669] py-24">
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
        <span className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
          <BadgeCheck size={16} />
          Ready to Grow Your Business?
        </span>

        <h2 className="mt-3 text-2xl font-bold leading-tight text-white lg:text-4xl md:text-3xl">
          Stop Managing Your Marketing.
          <span className="block text-white">
            Start Growing Your Business.
          </span>
        </h2>

        <p className="mx-auto mt-3 max-w-3xl text-lg leading-8 text-white">
          Whether you need a better website, stronger Google rankings, more
          customer enquiries or ongoing marketing support, Wellranked gives you
          one dedicated team focused on helping your business succeed online.
        </p>

        {/* Benefits */}
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          {[
            "One trusted partner",
            "Clear monthly reporting",
            "Tailored for UK SMEs",
          ].map((item) => (
            <div
              key={item}
              className="rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-medium text-white"
            >
              {item}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-5 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/growth-audit"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[#059669] transition duration-300"
          >
            Book Your Free Growth Audit
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/services-section"
            className="inline-flex items-center rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white/10"
          >
            Explore Our Services
          </Link>
        </div>

        {/* Bottom Note */}
        <p className="mt-5 text-sm text-white">
          No long-term contracts. Just practical digital marketing that helps
          your business attract more customers.
        </p>
      </motion.div>
    </section>
  );
}
