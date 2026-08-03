"use client";

import { BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// A distinct accent set from the "SolutionSection" board — same idea
// (rotating colour per pin/tape/badge) but shifted hues so the two
// sections don't read as identical: sky blue, orange, emerald, violet.
const ACCENTS = ["#0EA5E9", "#F97316", "#10B981", "#8B5CF6"];

const industries = [
  {
    title: "Plumbers & Heating Engineers",
    description:
      "Emergency and local search demand makes Google visibility, reviews and fast lead response essential.",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Electricians",
    description:
      "Customers compare local providers quickly. A better website, Google profile and review system can make you the safer choice.",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Roofers",
    description:
      "High-value jobs mean even a small increase in qualified leads can create major ROI.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Dentists",
    description:
      "Patients choose based on trust, reviews, visibility and website credibility.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Aesthetic Clinics",
    description:
      "Your brand, visuals, reviews and social content directly influence bookings.",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Solicitors",
    description:
      "Legal clients need trust before they enquire. Strong positioning and clear service pages matter.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Accountants",
    description:
      "Professional websites and local visibility help convert business owners into clients.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Estate Agents",
    description:
      "Local trust, listings and consistent marketing improve authority and enquiries.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Cleaning, Removals & Pest Control",
    description:
      "Highly searchable services where fast response and local visibility make the difference.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
  },
].map((item, i) => ({ ...item, color: ACCENTS[i % ACCENTS.length] }));

export default function IndustriesGrid() {
  const [activeCard, setActiveCard] = useState(0);
  const [showWatermark, setShowWatermark] = useState(false);

  const scrollDirection = useRef<"up" | "down">("down");
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      scrollDirection.current = currentY > lastScrollY.current ? "down" : "up";
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const lastIndex = industries.length - 1;
  const active = industries[activeCard];

  return (
    <section
      id="industries"
      className="relative md:py-24 py-16"
      style={{
        backgroundColor: "white",
        backgroundImage:
          "radial-gradient(rgba(16,42,86,0.06) 1px, transparent 1px)",
        backgroundSize: "18px 18px",
      }}
    >
      <div className="max-w-6xl mx-auto lg:px-0 md:px-5 px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="relative z-20 text-center max-w-3xl mx-auto"
        >
          <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-[#102A56]">
            Industries We Help Grow
          </h2>

          <p className="mt-2 md:text-lg leading-8 text-gray-600">
            Every industry has different challenges. We tailor your website, SEO
            and digital marketing strategy to attract more of the customers you
            want.
          </p>
        </motion.div>

        {/* Board */}
        <div className="relative mt-16 md:mt-24">
          {/* Fixed watermark */}
          <div
            className={`pointer-events-none fixed inset-0 z-0 flex items-center justify-center px-6 transition-opacity duration-300 ${
              showWatermark ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1
              style={{ color: active.color, opacity: 0.14 }}
              className="max-w-5xl text-center text-[46px] md:text-[76px] font-black italic leading-[0.9] tracking-tight select-none transition-colors duration-300"
            >
              {active.title}
            </h1>
          </div>

          {/* Center thread */}
          <div className="pointer-events-none absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 border-l-2 border-dashed border-[#102A56]/20 md:block" />

          <div className="space-y-14 md:space-y-20">
            {industries.map(({ title, description, image, color }, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={title}
                  className={`relative z-10 flex ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                  viewport={{ amount: 0.6, once: false }}
                  onViewportEnter={() => {
                    setActiveCard(index);
                    setShowWatermark(index > 0);
                  }}
                  onViewportLeave={() => {
                    if (index === 0 && scrollDirection.current === "up") {
                      setShowWatermark(false);
                    }
                    if (
                      index === lastIndex &&
                      scrollDirection.current === "down"
                    ) {
                      setShowWatermark(false);
                    }
                  }}
                >
                  {/* Pin on the thread */}
                  <div
                    className="pointer-events-none absolute left-1/2 top-8 z-20 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full ring-4 ring-[#f5f5f5] md:block"
                    style={{ backgroundColor: color }}
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 60, rotate: isLeft ? -3 : 3 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      rotate: isLeft ? -1.5 : 1.5,
                    }}
                    whileHover={{ rotate: 0, y: -6 }}
                    viewport={{ amount: 0.25, once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.06,
                      ease: "easeOut",
                    }}
                    className="relative w-full md:w-[47%] rounded-2xl bg-white p-3 shadow-[0_20px_45px_rgba(16,42,86,0.18)]"
                  >
                    {/* Washi tape */}
                    <div
                      className="absolute -top-3 left-8 h-6 w-16 -rotate-6 rounded-sm opacity-70"
                      style={{ backgroundColor: color }}
                    />

                    {/* Photo */}
                    <div className="relative h-44 w-full overflow-hidden rounded-lg md:h-48">
                      <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div
                        className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white"
                        style={{ backgroundColor: color }}
                      >
                        Industry {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-2 pb-3 pt-5">
                      <h3 className="text-lg md:text-xl font-bold leading-snug text-[#102A56]">
                        {title}
                      </h3>

                      <p className="mt-2 text-sm md:text-base leading-relaxed text-gray-600">
                        {description}
                      </p>

                      <div
                        className="mt-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold"
                        style={{
                          color,
                          backgroundColor: `${color}1A`,
                        }}
                      >
                        <BadgeCheck size={16} />
                        Trusted Partner
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
