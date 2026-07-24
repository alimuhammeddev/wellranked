"use client";

import { Search, ClipboardCheck, Rocket, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding your business, goals, current marketing and where your biggest opportunities lie.",
    icon: Search,
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We create a tailored strategy covering your website, SEO, Google profile and marketing priorities.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Launch",
    description:
      "Our team implements your website improvements, optimises your online presence and launches your campaigns.",
    icon: Rocket,
  },
  {
    number: "04",
    title: "Grow",
    description:
      "We continually monitor, improve and refine your marketing to generate more enquiries and long-term growth.",
    icon: BarChart3,
  },
];

export default function GrowthProcess() {
  return (
    <section className="relative overflow-hidden md:py-24 py-10">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-0">
        {/* Heading */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
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
          <span className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-[#059669]">
            Our Process
          </span>

          <h2 className="mt-4 text-2xl font-extrabold leading-tight text-[#102A56] lg:text-4xl md:text-3xl">
            A Clear Process That{" "}
            <span className="text-[#059669]">Delivers Real Results.</span>
          </h2>

          <p className="mt-3 md:text-lg leading-8 text-gray-600">
            We make digital marketing simple. From your first consultation to
            ongoing optimisation, every step is focused on helping your business
            attract more customers and grow with confidence.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                className="group relative rounded-3xl border border-green-200 bg-white md:p-8 p-5 transition-all duration-300"
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
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
              >
                {/* Number */}
                <span className="absolute right-6 top-6 text-5xl font-extrabold text-green-100 transition">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#059669]">
                  <Icon
                    size={24}
                    className="text-white transition"
                  />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#059669]">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};