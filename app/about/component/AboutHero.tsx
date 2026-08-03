"use client";

import {
  ArrowRight,
  BadgeCheck,
  Building2,
  FileText,
  Globe,
  MapPin,
  Megaphone,
  Search,
  Star,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CARDS = [
  { label: "Website", icon: Globe, x: 50, y: 10, lgX: 50, lgY: 20 },
  { label: "Local SEO", icon: Search, x: 84.6, y: 30, lgX: 76, lgY: 35 },
  {
    label: "Google Business Profile",
    icon: MapPin,
    x: 84.6,
    y: 70,
    lgX: 76,
    lgY: 65,
  },
  { label: "Reviews", icon: Star, x: 50, y: 90, lgX: 50, lgY: 80 },
  { label: "Content", icon: FileText, x: 15.4, y: 70, lgX: 24, lgY: 65 },
  {
    label: "Digital Marketing",
    icon: Megaphone,
    x: 15.4,
    y: 30,
    lgX: 24,
    lgY: 35,
  },
] as const;

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white">
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto text-center lg:mx-0 lg:text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#145EEE] text-[#145EEE] bg-blue-50 px-4 py-2 text-sm tracking-[0.18em] font-semibold">
            About Wellranked
          </span>

          <h1 className="mt-5 text-3xl font-extrabold leading-tight text-[#102A56] lg:text-5xl md:text-7xl">
            We Built Wellranked for Business Owners Who Are{" "}
            <span className="text-[#145EEE]">
              Tired of Doing Everything Themselves.
            </span>
          </h1>

          <p className="mt-3 md:text-lg leading-8 text-center text-gray-600">
            Wellranked was created to give UK small businesses access to the
            kind of joined-up marketing support that's usually only available to
            larger companies. We help businesses stay visible, trusted and
            active online, without the stress of managing everything yourself.
          </p>

          <p className="mt-3 md:text-lg leading-8 text-gray-600">
            Think of us as your outsourced marketing department. While you focus
            on serving your customers, we look after your website, local SEO,
            Google Business Profile, reviews, content and digital marketing to
            help your business grow.
          </p>

          {/* Buttons */}
          <div className="mt-5 flex flex-col justify-center gap-4 sm:flex-row">
            <div className="rounded-full bg-[#145EEE]">
              <Link
                href="/growth-audit"
                className="flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-white"
              >
                Book Your Free Growth Audit
                <ArrowRight size={18} />
              </Link>
            </div>

            <Link
              href="#our-values"
              className="rounded-full border border-[#145EEE] bg-white px-8 py-4 text-center font-semibold text-[#145EEE] transition"
            >
              Our Values
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
