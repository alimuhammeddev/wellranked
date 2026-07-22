"use client";

import {
  Building2,
  HeartHandshake,
  Layers3,
  MessageCircleMore,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const beliefs = [
  {
    title: "Small Businesses Deserve Better Marketing",
    description:
      "Every independent business should have access to clear, affordable marketing support without the complexity or cost typically associated with large agencies.",
    icon: Building2,
  },
  {
    title: "Marketing Should Reduce Stress",
    description:
      "Running your business is already demanding. Our role is to take marketing off your plate so you can focus on serving customers and growing your business.",
    icon: HeartHandshake,
  },
  {
    title: "Everything Works Better Together",
    description:
      "Your website, SEO, reviews, social media and content deliver stronger results when they're managed as one connected marketing system.",
    icon: Layers3,
  },
  {
    title: "Practical Advice Over Jargon",
    description:
      "We explain what matters in plain English and focus on actions that genuinely improve your visibility, reputation and enquiries.",
    icon: MessageCircleMore,
  },
  {
    title: "The Right System Creates Growth",
    description:
      "Consistent marketing builds trust over time. The right systems help small businesses become the obvious choice in their local area.",
    icon: TrendingUp,
  },
];

export default function AboutValues() {
  return (
    <section id="our-values" className="bg-white md:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-0">
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
          <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#244EB3]">
            What We Believe
          </span>

          <h1 className="mt-5 text-2xl font-bold text-[#102A56] md:text-3xl lg:text-4xl">
            The Principles Behind Everything We Do
          </h1>

          <p className="mt-3 leading-8 text-gray-600 md:text-lg">
            Wellranked exists to make digital marketing simpler, more affordable
            and more effective for small businesses. These principles shape
            every recommendation we make and every service we deliver.
          </p>
        </motion.div>

        {/* Beliefs */}
        <div className="mt-12 border-b border-blue-200">
          {beliefs.map(( { title, description, icon: Icon }, i, index) => (
            <motion.div
              key={title}
              className="group grid gap-4 border-t border-blue-200 py-8 transition-all duration-300 sm:grid-cols-[3.5rem_2.75rem_1fr] sm:items-start sm:gap-8"
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
              <span className="font-serif text-2xl font-medium text-[#244EB3] lg:text-4xl md:text-3xl">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-blue-50 text-[#244EB3]">
                <Icon size={20} />
              </div>

              <div>
                <h1 className="text-lg font-bold text-[#244EB3] md:text-xl">
                  {title}
                </h1>

                <p className="mt-2 max-w-2xl leading-7 text-gray-600">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="relative mt-16 overflow-hidden rounded-4xl border border-blue-100 bg-blue-50 p-6 text-center md:p-14"
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
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-16 -right-10 h-56 w-56 rounded-full bg-blue-200/40 blur-3xl"
          />

          <div className="relative">
            <h1 className="text-xl font-bold text-[#244EB3] sm:text-2xl">
              Our Goal Is Simple
            </h1>

            <p className="mx-auto mt-3 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
              We want every small business to have access to professional
              marketing support without the cost, confusion or complexity of
              traditional agencies. When your business succeeds, we&apos;ve done
              our job.
            </p>

            <Link
              href="/growth-audit"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#244EB3] px-7 py-3.5 font-semibold text-white"
            >
              Book Your Free Growth Audit
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
