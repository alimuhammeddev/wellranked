"use client";

import {
  MessageCircleMore,
  Inbox,
  ClipboardList,
  Clock3,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";
import Link from "next/link";

const problems = [
  {
    icon: MessageCircleMore,
    title: "Slow Responses",
    description:
      "Customers wait too long for replies, causing enquiries to go cold before you can respond.",
  },
  {
    icon: Inbox,
    title: "Scattered Conversations",
    description:
      "Instagram, Facebook and WhatsApp messages become difficult to track and organise.",
  },
  {
    icon: ClipboardList,
    title: "Lost Orders & Bookings",
    description:
      "Important booking details end up across multiple conversations, increasing mistakes.",
  },
  {
    icon: Clock3,
    title: "Missed Opportunities",
    description:
      "Potential customers leave before receiving the information they need to make a decision.",
  },
];

export default function ProblemsSection() {
  return (
    <section className="bg-[#f5f5f5] md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-0">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-[#059669]">
            Common Challenges
          </span>

          <h2 className="mt-5 text-2xl font-extrabold leading-tight text-[#102A56] lg:text-4xl md:text-3xl">
            Your business is growing.
            <br />
            <span className="text-[#059669]">
              Your inbox is becoming the bottleneck.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            More enquiries should mean more sales—not more stress. Without a
            clear system, opportunities disappear before you even have a chance
            to respond.
          </p>
        </div>

        <div className="md:mt-20 mt-10 grid gap-5 md:grid-cols-2">
          {problems.map((problem, index) => {
            const Icon = problem.icon;

            return (
              <motion.div
                key={problem.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="group rounded-3xl border border-gray-200 bg-white md:p-8 p-5 transition-all duration-300 hover:border-[#059669]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-[#059669]">
                  <Icon size={24} />
                </div>

                <h3 className="mt-4 md:text-xl text-lg font-bold text-[#102A56]">
                  {problem.title}
                </h3>

                <p className="mt-2 leading-8 text-gray-600">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
