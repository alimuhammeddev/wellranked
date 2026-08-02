"use client";

import { BadgeCheck, Pin } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ACCENTS = ["#145EEE", "#E4572E", "#0E9F73", "#D9A441"];

const solutions = [
  {
    title: "Website Build & Management",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
  },
  {
    title: "AI Customer Response Assistant",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
  },
  {
    title: "Local SEO & Google Visibility",
    image:
      "https://images.unsplash.com/photo-1571677246347-5040036b95cc?w=800&q=80",
  },
  {
    title: "Google Business Profile Management",
    image:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80",
  },
  {
    title: "Review Management & Reputation Management",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
  },
  {
    title: "Unlimited Business Graphics",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
  },
  {
    title: "3 Social Media Graphics Posts per Week",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
  },
  {
    title: "Email Marketing & Ads Management on Accelerator",
    image:
      "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80",
  },
].map((item, i) => ({ ...item, color: ACCENTS[i % ACCENTS.length] }));

export default function SolutionSection() {
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

  const lastIndex = solutions.length - 1;
  const active = solutions[activeCard];

  return (
    <section
      className="relative md:py-20 py-16"
      style={{
        backgroundColor: "#FFFFFF",
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
          <span className="inline-flex mx-auto items-center gap-1.5 rounded-full border border-[#145EEE] bg-blue-50 px-4 py-2 text-sm font-semibold text-[#145EEE] uppercase tracking-[0.18em]">
            One Team. One Monthly Fee.
          </span>

          <h1 className="mt-6 text-2xl lg:text-4xl md:text-3xl font-bold leading-tight text-[#102A56]">
            Everything, pinned to one board.
          </h1>

          <p className="mt-3 md:text-lg leading-8 text-[#5B5646]">
            Instead of hiring a developer, SEO specialist, designer, social
            manager and ads expert separately,{" "}
            <span className="font-semibold text-[#145EEE]">
              Wellranked runs it all as one connected team
            </span>{" "}
            — every piece working off the same plan.
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
            {solutions.map(({ title, image, color }, index) => {
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
                    className="pointer-events-none absolute left-1/2 top-8 z-20 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full ring-4 ring-[#F3ECDD] md:block"
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
                        Item {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-2 pb-3 pt-5">
                      <h1 className="text-lg md:text-xl font-bold leading-snug text-[#102A56]">
                        {title}
                      </h1>

                      <p className="mt-2 text-sm md:text-base leading-relaxed text-[#5B5646]">
                        Fully managed by our team, so you can focus on
                        running the business while this quietly runs itself.
                      </p>

                      <div
                        className="mt-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold"
                        style={{
                          color,
                          backgroundColor: `${color}1A`,
                        }}
                      >
                        <BadgeCheck size={16} />
                        Included
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
};