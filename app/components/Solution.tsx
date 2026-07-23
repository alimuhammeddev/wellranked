"use client";

import {
  Globe,
  Search,
  MapPinned,
  Star,
  Palette,
  Image,
  Mail,
  Bot,
  BadgeCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const solutions = [
  {
    title: "Website Build & Management",
    icon: Globe,
    color: "#244EB3",
  },
  {
    title: "AI Customer Response Assistant",
    icon: Bot,
    color: "#7C3AED",
  },
  {
    title: "Local SEO & Google Visibility",
    icon: Search,
    color: "#059669",
  },
  {
    title: "Google Business Profile Management",
    icon: MapPinned,
    color: "#EA580C",
  },
  {
    title: "Review Management & Reputation Management",
    icon: Star,
    color: "#DC2626",
  },
  {
    title: "Unlimited Business Graphics",
    icon: Palette,
    color: "#EC4899",
  },
  {
    title: "3 Social Media Graphics Posts per Week",
    icon: Image,
    color: "#0891B2",
  },
  {
    title: "Email Marketing & Ads Management on Accelerator",
    icon: Mail,
    color: "#CA8A04",
  },
];

export default function SolutionSection() {
  const [activeCard, setActiveCard] = useState(0);
  const [showWatermark, setShowWatermark] = useState(false);

  // Track scroll direction so we know whether a card is entering/leaving
  // because the user is scrolling down or scrolling back up.
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

  return (
    <section className="md:py-24 py-16 bg-white">
      <div className="max-w-7xl mx-auto lg:px-0 md:px-5 px-5">
        <div className="grid items-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="relative z-20 bg-white text-center max-w-4xl mx-auto py-4"
          >
            <span className="inline-flex mx-auto items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#244EB3]">
              One Team. One Monthly Fee.
            </span>

            <h2 className="mt-4 text-2xl lg:text-4xl md:text-3xl font-bold leading-tight text-[#102A56]">
              Everything handled.
            </h2>

            <p className="mt-2 md:text-lg leading-8 text-gray-600">
              Instead of hiring a website developer, SEO specialist, designer,
              social media manager, ads expert and marketing coordinator
              separately.{" "}
              <span className="font-semibold text-[#102A56]">
                Wellranked gives you one joined-up team
              </span>{" "}
              working together to improve your online presence, generate more
              enquiries and help your business grow.
            </p>
          </motion.div>

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
                  color: solutions[activeCard].color,
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
                {solutions[activeCard].title}
              </h1>
            </div>

            <div className="space-y-10">
              {solutions.map(({ title, icon: Icon, color }, index) => (
                <motion.div
                  key={title}
                  className={`relative z-10 flex ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                  viewport={{
                    amount: 0.6,
                    once: false,
                  }}
                  onViewportEnter={() => {
                    setActiveCard(index);

                    if (index > 0) {
                      setShowWatermark(true);
                    } else {
                      setShowWatermark(false);
                    }
                  }}
                  onViewportLeave={() => {
                    if (index === 0 && scrollDirection.current === "up") {
                      setShowWatermark(false);
                    }

                    // Leaving the last card at the bottom
                    if (
                      index === lastIndex &&
                      scrollDirection.current === "down"
                    ) {
                      setShowWatermark(false);
                    }
                  }}
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 80,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      rotate: 0,
                    }}
                    viewport={{
                      amount: 0.25,
                      once: true,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      y: -6,
                    }}
                    style={{
                      backgroundColor: color,
                    }}
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
                      <div
                        className="flex h-16 w-16 items-center justify-center rounded-2xl backdrop-blur"
                        style={{
                          background: "rgba(255,255,255,.18)",
                        }}
                      >
                        <Icon size={30} className="text-white" />
                      </div>

                      <h3 className="mt-8 text-2xl font-bold text-white max-w-md leading-snug">
                        {title}
                      </h3>

                      <p className="mt-4 text-white/80 max-w-lg leading-8">
                        Everything is fully managed by our team so you can focus
                        on running your business while we grow your online
                        presence.
                      </p>

                      <div className="mt-8 flex items-center gap-2 text-white font-semibold">
                        Included
                        <BadgeCheck size={20} />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
