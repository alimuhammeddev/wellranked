"use client";

import {
  CircleDollarSign,
  BadgeCheck,
  Clock3,
  MessageCircleMore,
} from "lucide-react";
import { motion } from "framer-motion";

const notes = [
  {
    icon: CircleDollarSign,
    title: "Advertising Spend",
    description:
      "Meta and Google advertising spend is billed separately from your monthly package.",
  },
  {
    icon: BadgeCheck,
    title: "Package Availability",
    description:
      "Recommendations may vary depending on your business type, location and current marketing setup.",
  },
  {
    icon: Clock3,
    title: "Flexible Monthly Plans",
    description:
      "No complicated long-term contracts. Upgrade your package whenever your business grows.",
  },
  {
    icon: MessageCircleMore,
    title: "Need Help Choosing?",
    description:
      "Book a free Growth Audit and we'll recommend the package that's right for your business.",
  },
];

function GhostQuote() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute -top-3 right-5 select-none font-serif text-7xl leading-none text-green-50"
    >
      &rdquo;
    </span>
  );
}

export default function PricingNote() {
  return (
    <section className="bg-[#f5f5f5] py-24">
      <div className="mx-auto max-w-7xl lg:px-0 px-5">
        {/* Heading */}

        <motion.div
          className="mx-auto mb-10 max-w-3xl text-center"
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
          <span className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-[#059669]">
            Before You Choose
          </span>

          <h2 className="mt-4 text-2xl font-bold text-[#102A56] lg:text-4xl md:text-3xl">
            A few things worth knowing
          </h2>

          <p className="mt-2 text-lg leading-8 text-gray-600">
            We believe in clear pricing with no surprises. Here's what you
            should know before selecting your package.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {notes.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              className="group relative overflow-hidden rounded-3xl border bg-white md:p-8 p-5 border-green-200"
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
              <GhostQuote />

              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#059669]">
                <Icon size={24} className="text-white" />
              </div>

              <h3 className="relative mt-4 md:text-xl text-lg font-bold text-[#059669]">
                {title}
              </h3>

              <p className="relative mt-2 leading-7 text-gray-600">
                {description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Notice */}
        <motion.div
          className="relative mt-10 overflow-hidden rounded-3xl border border-green-200 bg-green-50 p-8 text-center"
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
          <GhostQuote />

          <h3 className="relative md:text-2xl text-xl font-bold text-[#059669]">
            Not sure which package is right for you?
          </h3>

          <p className="relative mx-auto mt-4 max-w-3xl text-gray-600 leading-8">
            That's exactly why we offer a free Growth Audit. We'll review your
            website, Google visibility, reviews and online presence, then
            recommend the package that will deliver the biggest impact for your
            business—without any pressure or obligation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
