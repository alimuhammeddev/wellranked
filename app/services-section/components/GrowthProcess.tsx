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
    <section className="relative overflow-hidden bg-white md:py-24 py-10">
      <div className="relative mx-auto max-w-5xl px-5 lg:px-0">
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
          <span className="inline-flex items-center rounded-full border border-[#145EEE] bg-blue-50 px-4 py-2 font-semibold text-[#145EEE] uppercase tracking-[0.18em]">
            Our Process
          </span>

          <h2 className="mt-4 text-2xl font-extrabold leading-tight text-[#102A56] lg:text-4xl md:text-3xl">
            A Clear Process That{" "}
            <span className="text-[#145EEE]">Delivers Real Results.</span>
          </h2>

          <p className="mt-3 md:text-lg leading-8 text-gray-600">
            We make digital marketing simple. From your first consultation to
            ongoing optimisation, every step is focused on helping your business
            attract more customers and grow with confidence.
          </p>
        </motion.div>

        {/* Roadmap */}
        <div className="relative mt-16 md:mt-24">
          {/* Center spine — desktop only */}
          <div className="absolute left-1/2 top-2 bottom-2 hidden w-px -translate-x-1/2 border-l-2 border-dashed border-blue-200 md:block" />

          {/* Mobile spine */}
          <div className="absolute left-6 top-2 bottom-2 w-px border-l-2 border-dashed border-blue-200 md:hidden" />

          <div className="space-y-10 md:space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  className="relative md:flex md:items-center"
                  initial={{
                    opacity: 0,
                    x: isEven ? -40 : 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.4,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                >
                  {/* Node on the spine */}
                  <div className="absolute left-6 top-8 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-[#145EEE] ring-4 ring-[#f5f5f5] md:left-1/2 md:top-1/2 md:-translate-y-1/2">
                    <Icon size={14} className="text-white" />
                  </div>

                  {/* Content card */}
                  <div
                    className={`pl-16 md:w-1/2 md:pl-0 ${
                      isEven
                        ? "md:pr-16 md:text-right"
                        : "md:ml-auto md:pl-16"
                    }`}
                  >
                    <div className="relative rounded-3xl border border-blue-200 bg-white p-6 md:p-7">
                      <span
                        className={`text-xs font-bold uppercase tracking-[0.2em] text-[#145EEE]/60`}
                      >
                        Step {step.number}
                      </span>

                      <h3 className="mt-2 text-xl font-bold text-[#145EEE]">
                        {step.title}
                      </h3>

                      <p className="mt-3 leading-7 text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};