"use client";

import { ArrowRight, BadgeCheck, CalendarDays } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-[#244EB3]/95 md:mt-0 mt-20" />

      {/* Decorative Blobs */}
      <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />

      {/* Wellranked Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <h1 className="select-none text-[7rem] md:text-[18rem] lg:text-[17rem] font-black uppercase tracking-tight text-white/5 whitespace-nowrap">
          Wellranked
        </h1>
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:px-0 md:px-5 px-5 lg:grid-cols-2">
        {/* Left */}
        <motion.div
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
          <span className="inline-flex items-center rounded-full border border-blue-400/20 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100">
            Free Growth Audit
          </span>

          <h2 className="mt-4 text-2xl lg:text-4xl md:text-3xl font-bold leading-tight text-white">
            Want to know what's stopping your business from getting
            <span className="block text-white">more enquiries?</span>
          </h2>

          <p className="mt-3 max-w-xl text-lg leading-8 text-white">
            Book a free Wellranked Growth Audit and we'll show you the biggest
            improvements you can make across your website, Google visibility,
            reviews and lead generation.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/growth-audit"
              className="group flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[#244EB3]"
            >
              Book Your Free Growth Audit
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/package-section"
              className="rounded-full border border-white/30 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/10 text-center"
            >
              View Packages
            </Link>
          </div>
        </motion.div>

        {/* Right */}

        <motion.div
          className="rounded-3xl border border-white/20 bg-[#244EB3] md:p-8 p-5 backdrop-blur-xl"
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
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#244EB3]">
              <CalendarDays size={24} />
            </div>

            <div>
              <h3 className="md:text-xl text-lg font-bold text-white">
                Your Free Audit Includes
              </h3>

              <p className="text-white">
                A practical review of your online presence.
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {[
              "Website performance review",
              "Google visibility analysis",
              "Google Business Profile audit",
              "Review & reputation check",
              "Lead generation opportunities",
              "Simple action plan with no obligation",
            ].map((item) => (
              <div key={item} className="flex items-center gap-4">
                <BadgeCheck className="text-white" size={22} />

                <span className="text-white">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-white/10 p-5 text-center">
            <p className="text-sm uppercase tracking-wider text-white">
              No pressure. No jargon.
            </p>

            <p className="mt-2 md:text-lg font-semibold text-white">
              Just clear advice to help your business grow.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
