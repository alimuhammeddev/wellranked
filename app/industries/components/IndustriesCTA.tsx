"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function IndustriesCTA() {
  return (
    <section className="bg-[#102A56] py-24">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-blue-200">
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
          href="/contact"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[#102A56] transition hover:scale-105"
        >
          Book Your Free Growth Audit
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
};