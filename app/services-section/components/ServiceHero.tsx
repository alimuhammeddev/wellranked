"use client";

import {
  ArrowRight,
  BadgeCheck,
  Globe2,
  Globe,
  Headphones,
  Mail,
  MapPin,
  Megaphone,
  Palette,
  Search,
  Sparkles,
  Star,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const services = [
  { title: "Website Design & Management", icon: Globe },
  { title: "Local SEO", icon: Search },
  { title: "Google Business Profile", icon: MapPin },
  { title: "Review & Reputation Management", icon: Star },
  { title: "Graphics & Social Content", icon: Palette },
  { title: "Email Marketing", icon: Mail },
  { title: "Meta & Google Ads Management", icon: Megaphone },
  { title: "Marketing Concierge", icon: Headphones },
];

const colors = ["#244EB3", "#7C3AED", "#059669", "#EA580C", "#DC2626"];

export default function ServicesHero() {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const currentColor = colors[colorIndex];

  return (
    <section className="relative overflow-hidden ">
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

      <div className="relative z-10 mx-auto grid max-w-7xl items-start md:gap-20 gap-10 px-5 pb-24 pt-40 md:px-5 lg:grid-cols-2 lg:px-0">
        {/* Left */}
        <div>
          <motion.span
            animate={{
              borderColor: currentColor,
              color: currentColor,
            }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border bg-blue-50 px-4 py-2 text-sm font-semibold"
          >
            <Globe2 size={16} />
            Digital Growth Services
          </motion.span>

          <h1 className="mt-3 text-2xl font-extrabold leading-tight text-[#102A56] lg:text-4xl md:text-3xl">
            Everything Your Business Needs{" "}
            <motion.span
              animate={{ color: currentColor }}
              transition={{ duration: 0.8 }}
            >
              To Grow Online.
            </motion.span>
          </h1>

          <p className="mt-2 max-w-2xl md:text-lg leading-8 text-gray-600">
            Whether you need a better website, stronger Google rankings, more
            customer enquiries or ongoing marketing support, Wellranked provides
            practical digital marketing services that help UK businesses grow
            with confidence.
          </p>

          <div className="mt-5 flex flex-col gap-4 sm:flex-row">
            <motion.div
              animate={{ backgroundColor: currentColor }}
              transition={{ duration: 0.8 }}
              className="rounded-full"
            >
              <Link
                href="/growth-audit"
                className="flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-white"
              >
                Book Your Free Growth Audit
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            <Link
              href="#services"
              className="rounded-full border border-gray-300 bg-white px-8 py-4 text-center font-semibold text-[#102A56] transition hover:border-[#244EB3] hover:text-[#244EB3]"
            >
              See What We Can Improve
            </Link>
          </div>

          <div className="mt-5 space-y-3">
            {[
              "Professional websites that build trust",
              "Local SEO that gets your business found",
              "Marketing support from one trusted team",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <motion.div
                  animate={{ color: currentColor }}
                  transition={{ duration: 0.8 }}
                >
                  <BadgeCheck size={22} />
                </motion.div>
                <motion.span
                  className="text-gray-700"
                  animate={{ color: currentColor }}
                  transition={{ duration: 0.8 }}
                >
                  {item}
                </motion.span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — hub & spoke services map */}
        <div className="relative mx-auto w-full max-w-md">
          {/* Hub */}
          <motion.div
            className="relative z-20 mx-auto mb-8 w-fit"
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
            <div className="flex flex-col items-center gap-1.5 rounded-3xl border border-blue-100 bg-white/90 px-7 py-5 text-center">
              <motion.span
                animate={{ backgroundColor: currentColor }}
                transition={{ duration: 0.8 }}
                className="mb-1 flex h-11 w-11 items-center justify-center rounded-2xl text-white"
              >
                <Sparkles size={20} />
              </motion.span>
              <motion.h1
                animate={{ color: currentColor }}
                transition={{ duration: 0.8 }}
                className="font-extrabold md:text-lg"
              >
                Services We Offer
              </motion.h1>
              <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">
                One partner, every channel
              </p>
            </div>
          </motion.div>

          {/* Bridge connecting hub to the two service columns */}
          <motion.div
            aria-hidden
            className="relative mx-auto h-8 w-full"
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
            <motion.span
              animate={{ color: currentColor }}
              transition={{ duration: 0.8 }}
              className="absolute left-1/2 top-0 h-1/2 w-px -translate-x-1/2 border-l-2 border-dashed"
            />
            <motion.span
              animate={{ color: currentColor }}
              transition={{ duration: 0.8 }}
              className="absolute left-1/4 top-1/2 h-px w-1/2 -translate-y-1/2 border-t-2 border-dashed"
            />
            <motion.span
              animate={{ color: currentColor }}
              transition={{ duration: 0.8 }}
              className="absolute left-1/4 top-1/2 h-1/2 w-px -translate-x-1/2 border-l-2 border-dashed"
            />
            <motion.span
              animate={{ color: currentColor }}
              transition={{ duration: 0.8 }}
              className="absolute left-3/4 top-1/2 h-1/2 w-px -translate-x-1/2 border-l-2 border-dashed"
            />
          </motion.div>

          {/* Service cards */}
          <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
            <motion.span
              aria-hidden
              animate={{ color: currentColor }}
              transition={{ duration: 0.8 }}
              className="absolute left-1/4 top-0 z-0 h-full w-px -translate-x-1/2 border-l-2 border-dashed"
            />
            <motion.span
              aria-hidden
              animate={{ color: currentColor }}
              transition={{ duration: 0.8 }}
              className="absolute left-3/4 top-0 z-0 h-full w-px -translate-x-1/2 border-l-2 border-dashed"
            />

            {services.map(({ title, icon: Icon }, index) => (
              <motion.div
                key={title}
                className="relative z-10 flex flex-col items-center gap-2 rounded-2xl border bg-white/95 p-3 text-center  sm:p-4"
                animate={{ color: currentColor }}
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
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
              >
                <motion.span
                  animate={{
                    color: currentColor,
                    backgroundColor: `${currentColor}20`,
                  }}
                  transition={{ duration: 0.8 }}
                  className="flex h-9 w-9 items-center justify-center rounded-xl"
                >
                  <Icon size={17} />
                </motion.span>
                <motion.span
                  animate={{ color: currentColor }}
                  transition={{ duration: 0.8 }}
                  className="text-[11px] font-semibold leading-tight sm:text-xs"
                >
                  {title}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
