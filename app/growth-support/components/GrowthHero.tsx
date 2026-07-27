"use client";

import {
  ArrowRight,
  BadgeCheck,
  BadgePoundSterling,
  MessageCircle,
  CalendarDays,
  ClipboardList,
  RefreshCcw,
  Database,
  Headphones,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Orbit items
const orbitItems = [
  { text: "£295", icon: <BadgePoundSterling size={16} /> },
  { text: "Replies", icon: <MessageCircle size={16} /> },
  { text: "Bookings", icon: <CalendarDays size={16} /> },
  { text: "Orders", icon: <ClipboardList size={16} /> },
  { text: "Follow-up", icon: <RefreshCcw size={16} /> },
  { text: "CRM", icon: <Database size={16} /> },
  { text: "Support", icon: <Headphones size={16} /> },
  { text: "Reports", icon: <FileText size={16} /> },
].map((item, i, arr) => {
  const angle = (i / arr.length) * 2 * Math.PI - Math.PI / 2;
  const radius = 42;

  const x = 50 + radius * Math.cos(angle);
  const y = 50 + radius * Math.sin(angle) * 0.92;

  return {
    ...item,
    x,
    y,
  };
});

export default function GrowthSupportHero() {
  return (
    <section className="relative overflow-hidden bg-[#f5f5f5]">
      {/* Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(5,150,105,0.18) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 35%, black 40%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 35%, black 40%, transparent 95%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-start gap-20 lg:px-0 md:px-5 px-5 pb-24 pt-40 lg:grid-cols-2">
        {/* LEFT */}

        <div>
          <span className="inline-flex items-center rounded-full border border-[#059669] bg-green-50 px-4 py-2 text-sm font-semibold text-[#059669]">
            Growth Support
          </span>

          <h1 className="mt-3 text-2xl font-extrabold leading-tight text-[#102A56] lg:text-4xl md:text-3xl">
            Keep up with customer enquiries{" "}
            <span className="text-[#059669]">
              without hiring another full-time employee.
            </span>
          </h1>

          <p className="mt-3 max-w-2xl md:text-lg leading-8 text-gray-600">
            We help growing businesses respond to customer messages, organise
            enquiries, capture bookings and follow up professionally—so no
            opportunity gets lost in a busy inbox.
          </p>

          <div className="mt-5 flex flex-col gap-4 sm:flex-row">
            <div className="rounded-full bg-[#059669]">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-white"
              >
                Book Free Support Assessment
                <ArrowRight size={18} />
              </Link>
            </div>

            <Link
              href="#pricing"
              className="rounded-full border border-[#059669] bg-white px-8 py-4 text-center font-semibold text-[#059669] transition hover:border-[#059669] hover:text-[#059669]"
            >
              View Support Packages
            </Link>
          </div>

          <div className="mt-5 space-y-3">
            {[
              "Professional customer replies",
              "Organised bookings & enquiries",
              "Daily business summaries",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="text-[#059669]">
                  <BadgeCheck size={22} />
                </div>

                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
        {/* RIGHT */}
        <div className="relative flex items-center justify-center md:min-h-140 min-h-100 overflow-hidden rounded-[40px]">
          {/* Background circle */}
          <div className="absolute z-10 h-60 w-60 rounded-full bg-[#059669]" />

          {/* Center Card */}
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
            {/* Back Card */}
            <div className="absolute h-37.5 w-37.5 -rotate-6 rounded-2xl border border-green-200 bg-white shadow-sm" />

            {/* Middle Card */}
            <div className="absolute h-37.5 w-37.5 rotate-3 rounded-2xl border border-green-200 bg-white shadow-sm" />

            {/* Front Card */}
            <div className="relative flex h-40 w-35 flex-col items-center justify-center rounded-2xl border border-green-200 bg-white shadow-xl">
              <span className="rounded-full border border-[#059669] bg-green-100 px-3 py-1 text-[9px] font-bold uppercase tracking-wide text-[#059669]">
                START
              </span>

              <span className="mt-3 text-xs font-semibold text-[#102A56]">
                Growth Support
              </span>

              <span className="mt-2 text-xl font-extrabold text-[#059669]">
                £295
              </span>

              <span className="text-[11px] text-gray-500">per month</span>
            </div>
          </motion.div>

          {/* Orbit Items */}
          {orbitItems.map((item, index) => (
            <motion.div
              key={item.text}
              className="absolute flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#059669] bg-white"
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
              }}
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
                duration: 0.8,
                delay: index * 0.12,
                ease: "easeOut",
              }}
            >
              <div className="rounded-full bg-green-50 p-2 text-[#059669]">
                {item.icon}
              </div>

              <span className="mt-1 text-[9px] font-semibold text-[#059669]">
                {item.text}
              </span>
            </motion.div>
          ))}

          {/* Floating Glow */}
          <motion.div
            className="absolute bottom-20 left-12 h-24 w-24 rounded-full bg-green-200/40 blur-3xl"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute right-10 top-16 h-20 w-20 rounded-full bg-emerald-300/30 blur-3xl"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </section>
  );
}
