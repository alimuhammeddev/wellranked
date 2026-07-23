"use client";

import {
  Globe,
  Search,
  ArrowRight,
  MessageCircle,
  PenTool,
  Bot,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const services = [
  { name: "Website", Icon: Globe },
  { name: "SEO", Icon: Search },
  { name: "AI", Icon: Bot },
  { name: "Google Ads", Icon: TrendingUp },
  { name: "Social", Icon: MessageCircle },
  { name: "Branding", Icon: PenTool },
];

const colors = [
  "#244EB3", // Blue
  "#7C3AED", // Purple
  "#059669", // Green
  "#EA580C", // Orange
  "#DC2626", // Red
];

export default function Hero() {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 2500); // Change every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentColor = colors[colorIndex];

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

      <div className="relative max-w-7xl mx-auto py-24 md:mt-16 mt-10 lg:px-0 md:px-5 px-5">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <motion.div
              animate={{ borderColor: currentColor }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 mb-8"
            >
              <motion.span
                className="w-2 h-2 rounded-full"
                animate={{ backgroundColor: currentColor }}
                transition={{ duration: 0.8 }}
              />

              <motion.span
                className="text-sm font-medium"
                animate={{ color: currentColor }}
                transition={{ duration: 0.8 }}
              >
                Helping UK Small Businesses Grow Online
              </motion.span>
            </motion.div>

            <h1 className="text-2xl lg:text-4xl md:text-3xl font-extrabold leading-tight tracking-tight text-[#1F3064]">
              Your Outsourced{" "}
              <motion.span
                animate={{ color: currentColor }}
                transition={{ duration: 0.8 }}
              >
                Marketing Department
              </motion.span>
              {""} for Less Than the Cost of <span>One Employee.</span>
            </h1>

            <p className="mt-3 md:text-lg text-gray-600 leading-8 max-w-xl">
              Wellranked helps UK small businesses get found, trusted and chosen
              by managing your website, Google visibility, reviews, content,
              graphics, social posts and lead generation all under one simple
              monthly package.
            </p>

            {/* Buttons */}

            <div className="mt-5 flex flex-col gap-4 sm:flex-row">
              <motion.div
                animate={{ backgroundColor: currentColor }}
                transition={{ duration: 0.8 }}
                className="rounded-full"
              >
                <Link
                  href="/growth-audit"
                  className="flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white rounded-full"
                >
                  Book Your Free Growth Audit
                  <ArrowRight size={18} />
                </Link>
              </motion.div>

              <Link
                href="/package-section"
                className="rounded-full border border-gray-300 bg-white px-8 py-4 text-center font-semibold text-[#102A56] transition hover:border-[#244EB3] hover:text-[#244EB3]"
              >
                View Packages
              </Link>
            </div>

            <p className="mt-5 text-sm text-gray-500 max-w-lg">
              No pressure. No jargon. Just a clear review of what is holding
              your business back online.
            </p>
          </div>

          <div className="relative flex items-center justify-center py-16 md:mt-0 -mt-10">
            {/* Center Circle */}
            <motion.div
              animate={{ backgroundColor: currentColor }}
              transition={{ duration: 0.8 }}
              className="relative z-20 flex h-60 w-60 md:h-72 md:w-72 lg:h-80 lg:w-80 items-center justify-center rounded-full overflow-hidden"
            >
              {/* Full background network */}
              <svg
                className="absolute inset-0 w-full h-full opacity-25"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {/* Horizontal */}
                <line
                  x1="0"
                  y1="20"
                  x2="100"
                  y2="20"
                  stroke="white"
                  strokeWidth=".3"
                />
                <line
                  x1="0"
                  y1="50"
                  x2="100"
                  y2="50"
                  stroke="white"
                  strokeWidth=".3"
                />
                <line
                  x1="0"
                  y1="80"
                  x2="100"
                  y2="80"
                  stroke="white"
                  strokeWidth=".3"
                />

                {/* Vertical */}
                <line
                  x1="20"
                  y1="0"
                  x2="20"
                  y2="100"
                  stroke="white"
                  strokeWidth=".3"
                />
                <line
                  x1="50"
                  y1="0"
                  x2="50"
                  y2="100"
                  stroke="white"
                  strokeWidth=".3"
                />
                <line
                  x1="80"
                  y1="0"
                  x2="80"
                  y2="100"
                  stroke="white"
                  strokeWidth=".3"
                />

                {/* Diagonals */}
                <line
                  x1="0"
                  y1="0"
                  x2="100"
                  y2="100"
                  stroke="white"
                  strokeWidth=".3"
                />
                <line
                  x1="100"
                  y1="0"
                  x2="0"
                  y2="100"
                  stroke="white"
                  strokeWidth=".3"
                />
                <line
                  x1="0"
                  y1="50"
                  x2="50"
                  y2="0"
                  stroke="white"
                  strokeWidth=".3"
                />
                <line
                  x1="50"
                  y1="100"
                  x2="100"
                  y2="50"
                  stroke="white"
                  strokeWidth=".3"
                />

                {/* Nodes */}
                {[
                  [20, 20],
                  [50, 20],
                  [80, 20],
                  [20, 50],
                  [50, 50],
                  [80, 50],
                  [20, 80],
                  [50, 80],
                  [80, 80],
                  [10, 35],
                  [90, 65],
                  [35, 10],
                  [65, 90],
                ].map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r="1.2" fill="white" />
                ))}
              </svg>

              {/* Content */}
              <div className="relative z-10 text-center">
                <h2 className="text-3xl font-bold text-white">Wellranked</h2>
                <p className="mt-2 text-blue-100">Your Growth Partner</p>
              </div>
            </motion.div>

            {/* Desktop Service Circles */}
            <div className="hidden lg:block">
              {[
                {
                  ...services[0],
                  className: "top-6 right-10",
                  line: "-rotate-12",
                  side: "right",
                }, // Website
                {
                  ...services[1],
                  className: "top-1/2 right-0 -translate-y-1/2",
                  line: "",
                  side: "right",
                }, // SEO
                {
                  ...services[2],
                  className: "bottom-6 right-10",
                  line: "rotate-12",
                  side: "right",
                }, // AI
                {
                  ...services[3],
                  className: "top-6 left-10",
                  line: "rotate-12",
                  side: "left",
                }, // Ads
                {
                  ...services[4],
                  className: "top-1/2 left-0 -translate-y-1/2",
                  line: "",
                  side: "left",
                }, // Social
                {
                  ...services[5],
                  className: "bottom-6 left-10",
                  line: "-rotate-12",
                  side: "left",
                }, // Branding
              ].map(({ Icon, name, className }, index) => (
                <motion.div
                  key={name}
                  className={`absolute ${className}`}
                  initial={{
                    opacity: 0,
                    scale: 0.6,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.4,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                    ease: "easeOut",
                  }}
                >
                  <motion.div
                    className="flex h-24 w-24 items-center justify-center rounded-full bg-white border"
                    animate={{
                      borderColor: currentColor,
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="flex flex-col items-center">
                      <motion.div
                        animate={{ color: currentColor }}
                        transition={{ duration: 0.8 }}
                      >
                        <Icon size={24} />
                      </motion.div>
                      <motion.span
                        className="mt-1 text-[11px] font-semibold"
                        animate={{ color: currentColor }}
                        transition={{ duration: 0.8 }}
                      >
                        {name}
                      </motion.span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Mobile / Tablet */}
            <div className="absolute inset-0 lg:hidden">
              {[
                {
                  ...services[0],
                  className: " -mt-2 left-2/4 -translate-x-1/2",
                }, // Top
                {
                  ...services[1],
                  className: "top-[20%] -right-[1%]",
                }, // Top Right
                {
                  ...services[2],
                  className: "bottom-[16%] right-[1%]",
                }, // Bottom Right
                {
                  ...services[3],
                  className: "-bottom-[8px] left-2/4 -translate-x-1/2",
                }, // Bottom
                {
                  ...services[4],
                  className: "bottom-[16%] left-[1%]",
                }, // Bottom Left
                {
                  ...services[5],
                  className: "top-[16%] left-[1%]",
                }, // Top Left
              ].map(({ Icon, name, className }, index) => (
                <motion.div
                  key={name}
                  className={`absolute ${className}`}
                  initial={{
                    opacity: 0,
                    scale: 0.6,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.4,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <div className="flex h-20 w-20 items-center justify-center">
                    <div className="flex flex-col items-center">
                      <motion.div
                        animate={{ color: currentColor }}
                        transition={{ duration: 0.8 }}
                      >
                        <Icon size={22} />
                      </motion.div>
                      <motion.span
                        className="mt-1 text-[10px] font-semibold"
                        animate={{ color: currentColor }}
                        transition={{ duration: 0.8 }}
                      >
                        {name}
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
