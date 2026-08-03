"use client";

import {
  Search,
  ClipboardCheck,
  FolderOpen,
  Globe,
  TrendingUp,
  BarChart3,
} from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Free Growth Audit",
    description:
      "We review your website, Google visibility, reviews, content and lead generation setup.",
    icon: Search,
  },
  {
    number: "02",
    title: "Clear Improvement Plan",
    description:
      "We identify the biggest opportunities and recommend the package that best fits your business.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Fast Onboarding",
    description:
      "We collect your business details, brand assets, website access and service information.",
    icon: FolderOpen,
  },
  {
    number: "04",
    title: "Website & Marketing Setup",
    description:
      "Our team improves your website, Google profile, AI tools and marketing foundations.",
    icon: Globe,
  },
  {
    number: "05",
    title: "Monthly Delivery",
    description:
      "We manage your website, SEO, reviews, content, graphics and campaigns every month.",
    icon: TrendingUp,
  },
  {
    number: "06",
    title: "Simple Reporting",
    description:
      "Receive easy-to-understand updates showing what was completed and what improved.",
    icon: BarChart3,
  },
];

export default function HowItWorksTimeline() {
  return (
    <section id="process" className="bg-wwhite md:py-24 py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-0">
        {/* Heading */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#145EEE]">
            Our Process
          </span>

          <h2 className="mt-5 text-2xl font-bold text-[#102A56] lg:text-4xl md:text-3xl">
            From Your First Conversation{" "}
            <span className="text-[#145EEE]">To Long-Term Growth</span>
          </h2>

          <p className="mt-3 md:text-lg leading-8 text-gray-600">
            Every stage is designed to make marketing simple, transparent and
            effective, so you always know what happens next.
          </p>
        </motion.div>

        {/* Desktop Timeline — original layout */}
        <div className="relative mt-10 hidden lg:block">
          <div className="absolute left-0 right-0 top-10 h-0.5 rounded-full bg-blue-200" />

          <div className="grid grid-cols-6 gap-6">
            {steps.map(({ number, title, description, icon: Icon }) => (
              <div key={number} className="relative text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#145EEE] bg-[#145EEE]">
                  <Icon className="text-white" size={30} />
                </div>

                <span className="mt-5 inline-block rounded-full bg-[#145EEE] px-3 py-1 text-xs font-bold text-white">
                  STEP {number}
                </span>

                <h3 className="mt-4 text-lg font-bold text-[#145EEE]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: connected spine */}
        <div className="relative mt-10 lg:hidden">
          <div className="absolute left-6 top-2 bottom-2 w-px border-l-2 border-dashed border-blue-200" />

          <div className="space-y-6">
            {steps.map(({ number, title, description, icon: Icon }, i) => (
              <motion.div
                key={number}
                className="relative pl-16"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              >
                <div className="absolute left-6 top-6 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-[#145EEE] ring-4 ring-[#f5f5f5]">
                  <Icon size={22} className="text-white" />
                </div>

                <div className="rounded-3xl border border-blue-200 bg-white p-5 transition-shadow duration-300 hover:shadow-md">
                  <span className="text-sm font-semibold text-[#145EEE]">
                    STEP {number}
                  </span>

                  <h3 className="mt-1 text-xl font-bold text-[#145EEE]">
                    {title}
                  </h3>

                  <p className="mt-2 leading-7 text-gray-600">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};