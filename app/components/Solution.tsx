"use client";

import { BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const solutions = [
  {
    title: "Website Build & Management",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    color: "#57CC99",
  },
  {
    title: "AI Customer Response Assistant",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
    color: "#57CC99",
  },
  {
    title: "Local SEO & Google Visibility",
    image:
      "https://images.unsplash.com/photo-1571677246347-5040036b95cc?w=800&q=80",
    color: "#57CC99",
  },
  {
    title: "Google Business Profile Management",
    image:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80",
    color: "#57CC99",
  },
  {
    title: "Review Management & Reputation Management",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    color: "#57CC99",
  },
  {
    title: "Unlimited Business Graphics",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
    color: "#57CC99",
  },
  {
    title: "3 Social Media Graphics Posts per Week",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
    color: "#57CC99",
  },
  {
    title: "Email Marketing & Ads Management on Accelerator",
    image:
      "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80",
    color: "#57CC99",
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
    <section className="md:py-24 py-16 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto lg:px-0 md:px-5 px-5">
        <div className="grid items-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="relative z-20 bg-[#f5f5f5] text-center max-w-4xl mx-auto py-4"
          >
            <span className="inline-flex mx-auto items-center rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-[#059669]">
              One Team. One Monthly Fee.
            </span>

            <h1 className="mt-4 text-2xl lg:text-4xl md:text-3xl font-bold leading-tight text-[#102A56]">
              Everything handled.
            </h1>

            <p className="mt-2 md:text-lg leading-8 text-gray-600">
              Instead of hiring a website developer, SEO specialist, designer,
              social media manager, ads expert and marketing coordinator
              separately.{" "}
              <span className="font-semibold text-[#059669]">
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
                md:text-[80px]
                lg:text-[80px]
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
              {solutions.map(({ title, image, color }, index) => (
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
                    className="relative overflow-hidden rounded-3xl w-full md:w-[50%] md:h-87.5 lg:h-112.5 flex flex-col bg-[#059669]"
                  >
                    {/* Image block, clearly visible at the top of the card */}
                    <div className="relative w-full h-44 md:h-48 shrink-0 overflow-hidden">
                      <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Small circles */}

                    <div className="absolute top-32 -right-12 h-40 w-40 rounded-full border border-green-200" />

                    <div className="absolute top-38 -right-6 h-24 w-24 rounded-full border border-green-200" />

                    <div className="relative z-10 md:p-8 p-5">
                      <h1 className="md:text-2xl text-xl font-bold text-white max-w-md leading-snug">
                        {title}
                      </h1>

                      <p className="mt-2 text-white max-w-lg leading-8">
                        Everything is fully managed by our team so you can focus
                        on running your business while we grow your online
                        presence.
                      </p>

                      <div className="mt-5 flex items-center gap-2 text-white font-semibold">
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
};