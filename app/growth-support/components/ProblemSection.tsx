"use client";

import {
  MessageCircleMore,
  Inbox,
  ClipboardList,
  Clock3,
  LucideIcon,
} from "lucide-react";

import { motion } from "framer-motion";

const SECTION_BG = "#0A1830";

interface Problem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const problems: Problem[] = [
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

function Perforation({ position }: { position: number }) {
  return (
    <div
      className="absolute left-0 right-0 z-10"
      style={{ top: `${position}%` }}
    >
      <div
        className="absolute -left-3 h-6 w-6 -translate-y-1/2 rounded-full bg-white"
      />
      <div
        className="absolute -right-3 h-6 w-6 -translate-y-1/2 rounded-full bg-white"
      />
      <div className="mx-4 border-t-2 border-dashed border-white" />
    </div>
  );
}

function TicketCard({ problem, index }: { problem: Problem; index: number }) {
  const Icon = problem.icon;
  const rotate =
    index % 2 === 0 ? "md:rotate-[-1.5deg]" : "md:rotate-[1.5deg]";

  return (
    <motion.div
      className={`group relative w-full ${rotate} transition-transform duration-500 hover:rotate-0 hover:-translate-y-2`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
    >
      <div className="relative overflow-visible rounded-[22px] bg-[#145EEE]">
        {/* Punched corner holes */}
        <div className="absolute left-3 top-3 h-2 w-2 rounded-full bg-white" />
        <div className="absolute right-3 top-3 h-2 w-2 rounded-full bg-white" />

        {/* Top section */}
        <div className="px-6 pb-8 pt-7">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white">
              <Icon size={17} className="text-[#145EEE]" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white">
              Issue {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <p className="mt-4 text-[17px] font-semibold leading-snug text-white">
            {problem.title}
          </p>
        </div>

        <Perforation position={44} />

        {/* Bottom section */}
        <div className="px-6 pb-7 pt-8">
          <p className="text-[14px] leading-relaxed text-white">
            {problem.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProblemsSection() {
  return (
    <section
      className="relative overflow-hidden px-5 py-16 md:px-8 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-10 h-96 w-96 rounded-full bg-[#145EEE]/15 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#6FE3C4]/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex rounded-full border border-[#145EEE] bg-blue-50 px-4 py-2 text-sm font-semibold text-[#145EEE] tracking-[0.18em]">
            Common Challenges
          </span>

          <h2 className="mt-5 text-2xl font-extrabold leading-tight text-[#1B2233] lg:text-4xl md:text-3xl">
            Your business is growing.
            <br />
            <span className="text-[#145EEE]">
              Your inbox is becoming the bottleneck.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#4B5468]">
            More enquiries should mean more sales—not more stress. Without a
            clear system, opportunities disappear before you even have a
            chance to respond.
          </p>
        </motion.div>

        <div className="md:mt-20 mt-10 grid gap-6 md:grid-cols-2">
          {problems.map((problem, index) => (
            <TicketCard key={problem.title} problem={problem} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};