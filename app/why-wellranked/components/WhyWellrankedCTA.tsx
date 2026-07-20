"use client";

import { ArrowRight, BadgeCheck } from "lucide-react";
import Link from "next/link";

export default function WhyWellrankedCTA() {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-[#102A56] via-blue-700 to-indigo-700 py-24">
      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

      {/* Wellranked Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <h1 className="select-none text-[7rem] md:text-[18rem] lg:text-[17rem] font-black uppercase tracking-tight text-white/5 whitespace-nowrap">
          Wellranked
        </h1>
      </div>

      <div className="relative mx-auto max-w-5xl px-5 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100">
          <BadgeCheck size={16} />
          Ready to Grow Your Business?
        </span>

        <h2 className="mt-3 text-2xl font-bold leading-tight text-white lg:text-4xl md:text-3xl">
          Stop Managing Your Marketing.
          <span className="block text-blue-300">
            Start Growing Your Business.
          </span>
        </h2>

        <p className="mx-auto mt-3 max-w-3xl text-lg leading-8 text-blue-100">
          Whether you need a better website, stronger Google rankings,
          more customer enquiries or ongoing marketing support,
          Wellranked gives you one dedicated team focused on helping your
          business succeed online.
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
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[#102A56] transition duration-300"
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
        <p className="mt-5 text-sm text-blue-200">
          No long-term contracts. Just practical digital marketing that helps
          your business attract more customers.
        </p>
      </div>
    </section>
  );
};