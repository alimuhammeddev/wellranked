"use client";

import {
  ArrowRight,
  Search,
  ClipboardCheck,
  Rocket,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

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
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#244EB3]">
            Our Process
          </span>

          <h2 className="mt-4 text-2xl font-extrabold leading-tight text-[#102A56] lg:text-4xl md:text-3xl">
            A Clear Process That {" "}
            <span className="text-[#244EB3]">
              Delivers Real Results.
            </span>
          </h2>

          <p className="mt-3 md:text-lg leading-8 text-gray-600">
            We make digital marketing simple. From your first consultation
            to ongoing optimisation, every step is focused on helping your
            business attract more customers and grow with confidence.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative rounded-3xl border border-gray-200 bg-white md:p-8 p-5 transition-all duration-300 hover:border-[#244EB3]"
              >
                {/* Number */}
                <span className="absolute right-6 top-6 text-5xl font-extrabold text-blue-50 transition group-hover:text-blue-100">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-[#244EB3]">
                  <Icon
                    size={24}
                    className="text-[#244EB3] transition group-hover:text-white"
                  />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#244EB3]">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};