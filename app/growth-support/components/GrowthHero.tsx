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
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
      linear-gradient(rgba(20,94,238,.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(20,94,238,.08) 1px, transparent 1px)
    `,
          backgroundSize: "60px 60px",
          opacity: 1,
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-1/2 h-137.5 w-137.5 -translate-x-1/2 rounded-full bg-[#145EEE]/15 blur-[140px]" />

        <div className="absolute top-32 left-10 h-52 w-52 rounded-full bg-[#145EEE]/10 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto py-24 md:mt-16 mt-10 lg:px-0 md:px-5 px-5">
        <div>
          <div className="flex justify-center">
            <span className="inline-flex items-center rounded-full border border-[#145EEE] bg-blue-50 px-4 py-2 text-sm font-semibold text-[#145EEE] uppercase tracking-[0.18em]">
              Growth Support Package
            </span>
          </div>

          <h1 className="mt-3 text-3xl text-center font-extrabold leading-tight text-[#102A56] lg:text-7xl md:text-5xl">
            Keep up with customer enquiries{" "}
            <span className="text-[#145EEE]">
              without hiring another full-time employee.
            </span>
          </h1>

          <p className="mt-3 text-center md:text-2xl leading-8 text-gray-600">
            We help growing businesses respond to customer messages, organise
            enquiries, capture bookings and follow up professionally so no
            opportunity gets lost in a busy inbox.
          </p>

          <div className="mt-5 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="rounded-full bg-[#145EEE]">
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
              className="rounded-full border border-[#145EEE] bg-white px-8 py-4 text-center font-semibold text-[#145EEE] transition"
            >
              View Support Packages
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
