"use client";

import {
  ArrowUpRight,
  BadgeCheck,
  BrushCleaning,
  Calculator,
  Hammer,
  Home,
  Scale,
  Sparkles,
  Stethoscope,
  Wrench,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const industries = [
  {
    title: "Plumbers & Heating Engineers",
    description:
      "Emergency and local search demand makes Google visibility, reviews and fast lead response essential.",
    icon: Wrench,
    color: "#1E3A8A",
  },
  {
    title: "Electricians",
    description:
      "Customers compare local providers quickly. A better website, Google profile and review system can make you the safer choice.",
    icon: Zap,
    color: "#D97706",
  },
  {
    title: "Roofers",
    description:
      "High-value jobs mean even a small increase in qualified leads can create major ROI.",
    icon: Hammer,
    color: "#78350F",
  },
  {
    title: "Dentists",
    description:
      "Patients choose based on trust, reviews, visibility and website credibility.",
    icon: Stethoscope,
    color: "#0D9488",
  },
  {
    title: "Aesthetic Clinics",
    description:
      "Your brand, visuals, reviews and social content directly influence bookings.",
    icon: Sparkles,
    color: "#DB2777",
  },
  {
    title: "Solicitors",
    description:
      "Legal clients need trust before they enquire. Strong positioning and clear service pages matter.",
    icon: Scale,
    color: "#0EA5E9",
  },
  {
    title: "Accountants",
    description:
      "Professional websites and local visibility help convert business owners into clients.",
    icon: Calculator,
    color: "#047857",
  },
  {
    title: "Estate Agents",
    description:
      "Local trust, listings and consistent marketing improve authority and enquiries.",
    icon: Home,
    color: "#B45309",
  },
  {
    title: "Cleaning, Removals & Pest Control",
    description:
      "Highly searchable services where fast response and local visibility make the difference.",
    icon: BrushCleaning,
    color: "#7C3AED",
  },
];

export default function IndustriesGrid() {
  const [activeCard, setActiveCard] = useState(0);
  const [showWatermark, setShowWatermark] = useState(false);

  // Track scroll direction so we know whether a card is entering/leaving
  // because the user is scrolling down or scrolling back up.
  const scrollDirection = useRef<"up" | "down">("down");
  const lastScrollY = useRef(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      scrollDirection.current = currentY > lastScrollY.current ? "down" : "up";
      lastScrollY.current = currentY;

      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();

        // Section completely above viewport
        if (rect.bottom < 0) {
          setShowWatermark(false);
        }

        // Section completely below viewport
        if (rect.top > window.innerHeight) {
          setShowWatermark(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const lastIndex = industries.length - 1;

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="md:py-24 py-16 bg-white md:mb-0 mb-20"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        className="relative z-20 bg-white text-center max-w-xl mx-auto md:p-0 p-5"  
      >
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-[#102A56]">
          Industries We Help Grow
        </h2>

        <p className="mt-2 md:text-lg text-gray-600">
          Every industry has different challenges. We tailor your website, SEO
          and digital marketing strategy to attract more of the customers you
          want.
        </p>
      </motion.div>
      <div className="relative mx-auto max-w-7xl px-5 lg:px-0">
        {/* cards */}
        <div className="rounded-3xl md:p-8">
          {/* Fixed, viewport-centered watermark (state-driven, not scroll-container-bound) */}
          <div
            className={`pointer-events-none fixed inset-0 z-0 flex items-center justify-center transition-opacity duration-300 ${
              showWatermark ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1
              style={{
                color: industries[activeCard].color,
                opacity: 0.4,
                transition: "color 300ms ease",
              }}
              className="
              max-w-5xl
              text-center
              text-[50px]
              md:text-[100px]
              lg:text-[100px]
              font-black
              leading-[0.9]
              tracking-tight
              select-none
              mb-20
            "
            >
              {industries[activeCard].title}
            </h1>
          </div>

          <div className="mt-10 space-y-10">
            {industries.map(
              ({ title, description, icon: Icon, color }, index) => (
                <motion.div
                  key={title}
                  className={`relative z-10 flex ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ amount: 0.55, once: true }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  onViewportEnter={() => {
                    setActiveCard(index);
                    setShowWatermark(index > 0);
                  }}
                >
                  <motion.div
                    whileHover={{ y: -5, scale: 1 }}
                    style={{ backgroundColor: color }}
                    className="relative overflow-hidden rounded-3xl w-full md:w-[50%] md:h-87.5 md:p-8 p-5"
                  >
                    {/* Huge watermark icon */}
                    <div className="absolute -bottom-8 -right-8 opacity-[0.08] text-white">
                      <Icon size={220} strokeWidth={1} />
                    </div>

                    {/* Small circles */}
                    <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full border border-white/10" />
                    <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full border border-white/10" />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between">
                        <div
                          className="flex h-16 w-16 items-center justify-center rounded-2xl backdrop-blur"
                          style={{ background: "rgba(255,255,255,.18)" }}
                        >
                          <Icon size={30} className="text-white" />
                        </div>

                        <ArrowUpRight size={18} className="mt-1 text-white" />
                      </div>

                      <h3 className="mt-8 text-2xl font-bold text-white max-w-md leading-snug">
                        {title}
                      </h3>

                      <p className="mt-4 text-white/80 max-w-lg leading-8">
                        {description}
                      </p>

                      <div className="mt-8 flex items-center gap-2 text-white font-semibold">
                        Trusted Partner
                        <BadgeCheck size={20} />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
