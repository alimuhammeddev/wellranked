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

      <div className="relative mx-auto grid max-w-7xl items-start gap-10 px-5 pb-24 pt-40 lg:grid-cols-2 lg:gap-20 lg:px-0">
        {/* Left */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#244EB3]">
            <Building2 size={16} />
            About Wellranked
          </span>

          <h1 className="mt-5 text-2xl font-extrabold leading-tight text-[#102A56] lg:text-4xl md:text-3xl">
            We Built Wellranked for Business Owners Who Are{" "}
            <span className="text-[#244EB3]">
              Tired of Doing Everything Themselves.
            </span>
          </h1>

          <p className="mt-3 max-w-2xl md:text-lg leading-8 text-gray-600">
            Wellranked was created to give UK small businesses access to the
            kind of joined-up marketing support that's usually only available to
            larger companies. We help businesses stay visible, trusted and
            active online, without the stress of managing everything yourself.
          </p>

          <p className="mt-3 max-w-2xl md:text-lg leading-8 text-gray-600">
            Think of us as your outsourced marketing department. While you focus
            on serving your customers, we look after your website, local SEO,
            Google Business Profile, reviews, content and digital marketing to
            help your business grow.
          </p>

          {/* Buttons */}
          <div className="mt-5 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/growth-audit"
              className="flex items-center justify-center gap-2 rounded-full bg-[#244EB3] px-8 py-4 font-semibold text-white"
            >
              Book Your Free Growth Audit
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#our-values"
              className="rounded-full border border-gray-300 bg-white px-8 py-4 text-center font-semibold text-[#102A56] transition hover:border-[#244EB3] hover:text-[#244EB3]"
            >
              Our Values
            </Link>
          </div>

          {/* Trust Points */}
          <div className="mt-6 space-y-3">
            {[
              "Built specifically for UK small businesses",
              "One trusted partner for your digital marketing",
              "Helping you focus on running your business",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <BadgeCheck className="text-[#244EB3]" size={22} />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="relative mx-auto w-full max-w-110 py-4 lg:max-w-none lg:py-0">
          <div className="relative aspect-square w-full">
            {/* Center Circle*/}
            <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
              <div className="relative h-24 w-24 lg:h-28 lg:w-28">
                <div className="relative flex h-full w-full items-center justify-center rounded-full bg-[#244EB3] text-3xl font-extrabold text-white">
                  W
                </div>
              </div>
              <span className="mt-3 text-xs font-bold uppercase tracking-wide text-[#244EB3]">
                Wellranked
              </span>
            </div>

            {/* Cards */}
            {CARDS.map((n, index) => {
              const Icon = n.icon;
              return (
                <motion.div
                  key={n.label}
                  className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 left-(--x) top-var(--y) lg:left-(--lg-x) lg:top-(--lg-y)"
                  style={
                    {
                      "--x": `${n.x}%`,
                      "--y": `${n.y}%`,
                      "--lg-x": `${n.lgX}%`,
                      "--lg-y": `${n.lgY}%`,
                    } as React.CSSProperties
                  }
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
                    delay: index* 0.15,
                    ease: "easeOut",
                  }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-100 bg-white text-[#244EB3]">
                    <Icon size={18} />
                  </div>
                  <span className="max-w-23 text-center text-xs font-semibold leading-tight text-gray-600">
                    {n.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
