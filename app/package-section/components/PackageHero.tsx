"use client";

import {
  ArrowRight,
  BadgeCheck,
  BadgePoundSterling,
  TrendingUp,
  ChartNoAxesCombined,
  Wallet,
  Gem,
  ShieldCheck,
  Rocket,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Orbit badges placed on a true circle (computed, not hand-offset) so
// spacing reads as deliberate rather than scattered.
const orbitItems = [
  { text: "£695", icon: <BadgePoundSterling size={16} /> },
  { text: "ROI", icon: <TrendingUp size={16} /> },
  { text: "Growth", icon: <ChartNoAxesCombined size={16} /> },
  { text: "Flexible", icon: <Wallet size={16} /> },
  { text: "Premium", icon: <Gem size={16} /> },
  { text: "Trusted", icon: <ShieldCheck size={16} /> },
  { text: "Scalable", icon: <Rocket size={16} /> },
  { text: "Value", icon: <BadgeCheck size={16} /> },
].map((item, i, arr) => {
  const angle = (i / arr.length) * 2 * Math.PI - Math.PI / 2; // start at top
  const radius = 42; // % of container
  const x = 50 + radius * Math.cos(angle);
  const y = 50 + radius * Math.sin(angle) * 0.92; // slight vertical compression for the card aspect ratio
  return { ...item, x, y };
});

export default function PackagesHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Dot grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(36,78,179,0.18) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 35%, black 40%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 35%, black 40%, transparent 95%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-start gap-20 lg:px-0 md:px-5 px-5 pb-24 pt-40 lg:grid-cols-2">
        {/* Left */}
        <div>
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#244EB3]">
            Packages & Pricing
          </span>
          <h1 className="mt-3 text-2xl font-extrabold leading-tight text-[#102A56] lg:text-4xl md:text-3xl">
            Simple marketing packages{" "}
            <span className="text-[#244EB3]">
              built for busy business owners.
            </span>
          </h1>

          <p className="mt-3 max-w-2xl md:text-lg leading-8 text-gray-600">
            Choose the level of support your business needs. Every package is
            designed to remove stress, improve trust and help your business
            become easier to find and easier to choose.
          </p>

          <div className="mt-5 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/growth-audit"
              className="flex items-center justify-center gap-2 rounded-full bg-[#244EB3] px-8 py-4 font-semibold text-white"
            >
              Book Your Free Growth Audit
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#pricing"
              className="rounded-full border border-gray-300 bg-white px-8 py-4 text-center font-semibold text-[#102A56] transition hover:border-[#244EB3] hover:text-[#244EB3]"
            >
              Compare Packages
            </Link>
          </div>

          <div className="mt-5 space-y-3">
            {[
              "No long-term contracts",
              "One dedicated marketing team",
              "Clear monthly pricing",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <BadgeCheck size={22} className="text-[#244EB3]" />

                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="relative flex items-center justify-center md:min-h-140 min-h-96 rounded-[40px] overflow-hidden">
          <div className="absolute h-59 w-59 rounded-full bg-[#244EB3] z-20" />
          {/* Centerpiece: layered package cards */}
          <motion.div
            className="relative z-20 flex h-47.5 w-47.5 items-center justify-center"
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
            <div className="absolute h-37.5 w-37.5 -rotate-6 rounded-2xl border border-blue-200 bg-white" />
            <div className="absolute h-37.5 w-37.5 rotate-3 rounded-2xl border border-blue-200 bg-white" />
            <div className="relative flex h-39.5 w-34.5 flex-col items-center justify-center rounded-2xl border border-blue-200 bg-white">
              <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-[#244EB3]">
                Most Popular
              </span>
              <span className="mt-2 text-[11px] font-semibold text-[#102A56]">
                Growth
              </span>
              <span className="mt-1 text-xl font-extrabold text-[#244EB3]">
                £695
              </span>
              <span className="text-[10px] text-gray-500">per month</span>
            </div>
          </motion.div>

          {/* Orbiting feature badges, evenly spaced on a computed circle */}
          {orbitItems.map((item, index) => (
            <motion.div
              key={item.text}
              className="absolute flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full md:border md:border-blue-200 bg-white"
              style={{ left: `${item.x}%`, top: `${item.y}%` }}
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
                delay: index * 0.15,
                ease: "easeOut",
              }}
            >
              <div className="rounded-full bg-[#EEF4FF] p-2 text-[#244EB3]">
                {item.icon}
              </div>
              <span className="mt-1 text-[9px] font-semibold text-[#102A56]">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
