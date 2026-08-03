"use client";

import {
  Search,
  Star,
  Palette,
  TrendingUp,
  Sparkles,
  LucideIcon,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

interface PainPoint {
  icon: LucideIcon;
  tag: string;
  problem: string;
  fix: string;
}

const painPoints: PainPoint[] = [
  {
    icon: Globe,
    tag: "Website",
    problem: "Your site hasn't changed in months.",
    fix: "We keep it fresh, fast, and working while you sleep.",
  },
  {
    icon: Search,
    tag: "Google",
    problem: "Customers can't find you searching.",
    fix: "We climb the rankings so they find you first.",
  },
  {
    icon: Star,
    tag: "Reviews",
    problem: "Good reviews only trickle in by luck.",
    fix: "We turn every happy customer into a 5-star review.",
  },
  {
    icon: Palette,
    tag: "Social",
    problem: "Social media eats an evening every week.",
    fix: "We design it, post it, and keep it on schedule.",
  },
];

const growthPoint: PainPoint = {
  icon: TrendingUp,
  tag: "Growth",
  problem: "You want more enquiries, not more busywork.",
  fix: "One system that runs your whole growth engine, end to end.",
};

function Perforation({ position }: { position: number }) {
  return (
    <div
      className="absolute left-0 right-0 z-10"
      style={{ top: `${position}%` }}
    >
      <div className="absolute -left-3 h-6 w-6 -translate-y-1/2 rounded-full bg-white" />
      <div className="absolute -right-3 h-6 w-6 -translate-y-1/2 rounded-full bg-white" />
      <div className="mx-4 border-t-2 border-dashed border-white" />
    </div>
  );
}

function TicketCard({
  point,
  index,
  rotate,
}: {
  point: PainPoint;
  index: number;
  rotate: string;
}) {
  const Icon = point.icon;
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

        {/* Problem section */}
        <div className="px-6 pb-8 pt-7">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white">
              <Icon size={17} className="text-[#145EEE]" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white">
              {point.tag}
            </span>
          </div>
          <p className="mt-4 text-[17px] font-semibold leading-snug text-white">
            {point.problem}
          </p>
        </div>

        <Perforation position={52} />

        {/* Fix / stamped section */}
        <div className="relative px-6 pb-10 pt-5">
          <p className="text-[14px] leading-relaxed text-white">
            {point.fix}
          </p> <br />

          <div className="pointer-events-none absolute -right-1 bottom-5 rotate-[-9deg] rounded-md border-2 border-blue-50 px-2.5 py-1 opacity-90">
            <span className="text-[10px] font-black tracking-[0.14em] text-white">
              HANDLED
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MasterPass({ point }: { point: PainPoint }) {
  const Icon = point.icon;
  return (
    <motion.div
      className="relative mt-10 w-full overflow-hidden rounded-[26px] bg-[#145EEE] md:mt-14"
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
    </motion.div>
  );
}

export default function PainSection() {
  const rotations = [
    "rotate-[-2deg]",
    "rotate-[1.5deg]",
    "rotate-[-1deg]",
    "rotate-[2deg]",
  ];

  return (
    <section className="relative overflow-hidden px-5 py-16 md:px-8 md:py-28 bg-white">
      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center rounded-full border border-[#145EEE] bg-blue-50 px-4 py-1.5 font-bold tracking-[0.18em] text-sm text-[#145EEE]">
            The Challenge
          </span>

          <h1 className="mt-6 text-2xl font-bold leading-tight text-[#102A56] md:text-3xl lg:text-4xl">
            Running a business is already hard enough.{" "}
            <span className="text-[#145EEE]">
              Marketing shouldn't be another full time job.
            </span>
          </h1>

          <p className="mt-5 text-base leading-7 text-gray-600 md:text-xl">
            Every task below is one more thing pulled off your plate stamped,
            handled, and running quietly in the background.
          </p>
        </motion.div>

        {/* Ticket strip */}
        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((point, index) => (
            <TicketCard
              key={point.tag}
              point={point}
              index={index}
              rotate={rotations[index % rotations.length]}
            />
          ))}
        </div>

        {/* Master pass */}
        <MasterPass point={growthPoint} />
      </div>
    </section>
  );
}
