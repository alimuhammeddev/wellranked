"use client";

import { Clock3, Search, Star, Palette, TrendingUp, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface PainPoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface PainCardProps extends PainPoint {
  index: number;
}

const painPoints: PainPoint[] = [
  {
    icon: Clock3,
    title: "No time to update your website?",
    description: "We handle it.",
  },
  {
    icon: Search,
    title: "Not showing properly on Google?",
    description: "We improve it.",
  },
  {
    icon: Star,
    title: "Struggling to get reviews?",
    description: "We manage the system.",
  },
  {
    icon: Palette,
    title: "Need graphics or regular social posts?",
    description: "We create them.",
  },
  {
    icon: TrendingUp,
    title: "Want more enquiries?",
    description: "We build the growth system.",
  },
];

const cardAccents = [
  { color: "#059669", tint: "bg-emerald-50", tintText: "text-[#059669]" },
  { color: "#059669", tint: "bg-emerald-50", tintText: "text-[#059669]" },
];

function PainCard({ icon: Icon, title, description, index }: PainCardProps) {
  const accent = cardAccents[index % 2];

  return (
    <motion.div
      className="group relative rounded-2xl border border-slate-200 bg-white py-6 pl-6 pr-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/70"
      style={{ borderLeft: `4px solid ${accent.color}` }}
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
    >
      <div
        className="flex h-11 w-11 items-center justify-center rounded-xl text-white"
        style={{ backgroundColor: accent.color }}
      >
        <Icon size={20} />
      </div>

      <h3 className="mt-4 text-base font-semibold leading-snug text-[#102A56]">
        {title}
      </h3>

      <span
        className={`mt-3 inline-flex items-center rounded-full ${accent.tint} px-3 py-1 text-sm font-medium ${accent.tintText}`}
      >
        {description}
      </span>
    </motion.div>
  );
}

function GrowthCard({ icon: Icon, title, description, index }: PainCardProps) {
  return (
    <motion.div
      className="relative mt-5 overflow-hidden rounded-2xl bg-[#102A56] p-7 md:p-8"
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#059669]/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-6 -bottom-10 h-32 w-32 rounded-full bg-[#244EB3]/20 blur-3xl"
      />

      <div className="relative flex items-center gap-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#059669] text-white">
          <Icon size={22} />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-1 text-emerald-200">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function PainSection() {
  return (
    <section className="relative overflow-hidden bg-[#f5f5f5] md:py-24 py-10 lg:px-0 md:px-5 px-5">
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 md:gap-16 gap-5 items-center">
          {/* Left */}
          <motion.div
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
              The Challenge
            </span>

            <h1 className="mt-6 text-2xl lg:text-4xl md:text-3xl font-bold leading-tight text-[#102A56]">
              Running a business is already hard enough.{" "}
              <span className="text-[#059669]">
                Marketing shouldn't be another full time job.
              </span>
            </h1>

            <p className="mt-3 md:text-lg leading-8 text-gray-600">
              Most small business owners are trying to serve customers, answer
              enquiries, manage staff, send quotes, update websites, post on
              social media, ask for reviews and somehow still grow.
            </p>

            <p className="mt-2 md:text-lg leading-8 text-gray-600">
              That's too much.
              <span className="font-semibold text-[#059669]">
                {" "}
                Wellranked exists to take marketing off your plate,
              </span>{" "}
              so you can focus on your product, service and customers.
            </p>
          </motion.div>

          {/* Right */}
          <div>
            <div className="grid md:grid-cols-2 gap-5">
              {painPoints.slice(0, 4).map((point, index) => (
                <PainCard key={point.title} {...point} index={index} />
              ))}
            </div>

            <GrowthCard {...painPoints[4]} index={4} />
          </div>
        </div>
      </div>
    </section>
  );
};