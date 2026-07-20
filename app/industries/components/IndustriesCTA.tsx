"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function IndustriesCTA() {
  return (
    <section className="relative overflow-hidden bg-[#244EB3] py-24">
      {/* Wellranked Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <h1 className="select-none text-[7rem] md:text-[18rem] lg:text-[17rem] font-black uppercase tracking-tight text-white/5 whitespace-nowrap">
          Wellranked
        </h1>
      </div>
      
      <div className="mx-auto max-w-4xl px-5 text-center">
        <span className="rounded-full border border-blue-400/20 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100">
          Ready to Grow?
        </span>

        <h2 className="mt-4 text-2xl font-bold text-white lg:text-4xl md:text-3xl">
          Let's Help Your Business Get Found Online
        </h2>

        <p className="mx-auto mt-3 max-w-2xl md:text-lg leading-8 text-blue-100">
          Whether you're looking for more phone calls, quote requests,
          appointments or bookings, we'll create a digital strategy that helps
          your business attract the right customers.
        </p>

        <Link
          href="/growth-audit"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[#102A56]"
        >
          Book Your Free Growth Audit
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
