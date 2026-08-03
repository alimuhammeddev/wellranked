"use client";

import { Megaphone, Package, Calendar, HelpCircle } from "iconoir-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Note {
  icon: typeof Megaphone;
  title: string;
  description: string;
  tag: string;
  theme: {
    border: string;
    barFrom: string;
    barTo: string;
    iconFrom: string;
    iconTo: string;
    shadow: string;
    title: string;
    tagText: string;
    quoteBg: string;
  };
}

const notes: Note[] = [
  {
    icon: Megaphone,
    title: "Advertising Spend",
    description:
      "Meta and Google advertising spend is billed separately from your monthly package.",
    tag: "Billed separately",
    theme: {
      border: "border-amber-200",
      barFrom: "from-amber-400",
      barTo: "to-orange-400",
      iconFrom: "from-amber-400",
      iconTo: "to-orange-500",
      shadow: "shadow-amber-500/20",
      title: "text-amber-600",
      tagText: "text-amber-500",
      quoteBg: "text-amber-50",
    },
  },
  {
    icon: Package,
    title: "Package Availability",
    description:
      "Recommendations may vary depending on your business type, location and current marketing setup.",
    tag: "Tailored to you",
    theme: {
      border: "border-emerald-200",
      barFrom: "from-emerald-400",
      barTo: "to-teal-400",
      iconFrom: "from-emerald-400",
      iconTo: "to-teal-500",
      shadow: "shadow-emerald-500/20",
      title: "text-emerald-600",
      tagText: "text-emerald-500",
      quoteBg: "text-emerald-50",
    },
  },
  {
    icon: Calendar,
    title: "Flexible Monthly Plans",
    description:
      "No complicated long-term contracts. Upgrade your package whenever your business grows.",
    tag: "No lock-in",
    theme: {
      border: "border-violet-200",
      barFrom: "from-violet-400",
      barTo: "to-purple-400",
      iconFrom: "from-violet-400",
      iconTo: "to-purple-500",
      shadow: "shadow-violet-500/20",
      title: "text-violet-600",
      tagText: "text-violet-500",
      quoteBg: "text-violet-50",
    },
  },
  {
    icon: HelpCircle,
    title: "Need Help Choosing?",
    description:
      "Book a free Growth Audit and we'll recommend the package that's right for your business.",
    tag: "Free audit",
    theme: {
      border: "border-rose-200",
      barFrom: "from-rose-400",
      barTo: "to-pink-400",
      iconFrom: "from-rose-400",
      iconTo: "to-pink-500",
      shadow: "shadow-rose-500/20",
      title: "text-rose-600",
      tagText: "text-rose-500",
      quoteBg: "text-rose-50",
    },
  },
];

function GhostQuote({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute -top-2 right-4 select-none font-serif text-7xl leading-none ${className}`}
    >
      &rdquo;
    </span>
  );
}

export default function PricingNote() {
  return (
    <section className="relative overflow-hidden px-5 py-20 md:px-8 md:py-28 bg-white">
      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          className="mx-auto mb-16 max-w-2xl text-center"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <span className="inline-flex items-center rounded-full border border-[#145EEE] bg-blue-50 px-4 py-1.5 font-bold uppercase tracking-[0.18em] text-[#145EEE]">
            Before You Choose
          </span>

          <h2 className="mt-6 text-2xl font-bold leading-tight text-[#102A56] md:text-3xl lg:text-4xl">
            A few things worth knowing
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            We believe in clear pricing with no surprises. Here's what you
            should know before selecting your package.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {notes.map(
            ({ icon: Icon, title, description, tag, theme }, index) => (
              <motion.div
                key={title}
                className={`group relative overflow-hidden rounded-3xl border ${theme.border} bg-white p-6 md:p-7 transition-all duration-500 hover:-translate-y-2`}
                style={{
                  boxShadow: "0 8px 30px -12px rgba(16,42,86,0.08)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 20px 50px -12px ${theme.shadow.replace("shadow-", "").replace("/20", "40")}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px -12px rgba(16,42,86,0.08)";
                }}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
              >
                {/* Top accent bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${theme.barFrom} ${theme.barTo}`}
                />

                <GhostQuote className={theme.quoteBg} />

                <div className="relative">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br ${theme.iconFrom} ${theme.iconTo} shadow-lg ${theme.shadow}`}
                  >
                    <Icon width={22} height={22} className="text-white" />
                  </div>

                  <h3
                    className={`relative mt-5 text-lg font-bold ${theme.title}`}
                  >
                    {title}
                  </h3>

                  <p className="relative mt-2 text-sm leading-7 text-gray-600">
                    {description}
                  </p>

                  <div
                    className={`mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${theme.tagText}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {tag}
                  </div>
                </div>
              </motion.div>
            ),
          )}
        </div>

        {/* Bottom Notice */}
        <motion.div
          className="relative mt-10 overflow-hidden rounded-3xl border border-[#102A56]/10 bg-[#145EEE] p-8 md:p-10 text-center transition-all duration-500 hover:-translate-y-1"
          style={{
            boxShadow: "0 8px 30px -12px rgba(16,42,86,0.2)",
          }}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -top-4 right-6 select-none font-serif text-8xl leading-none text-white/5"
          >
            &rdquo;
          </span>

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 border border-white/10 mb-4">
              <HelpCircle width={14} height={14} className="text-white/80" />
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-white/80">
                Still Deciding?
              </span>
            </div>

            <h3 className="relative text-xl md:text-2xl font-bold text-white">
              Not sure which package is right for you?
            </h3>

            <p className="relative mx-auto mt-4 max-w-2xl text-white leading-8 text-[15px]">
              That's exactly why we offer a free Growth Audit. We'll review your
              website, Google visibility, reviews and online presence, then
              recommend the package that will deliver the biggest impact for
              your business—without any pressure or obligation.
            </p>

            <Link
              href="/growth-audit"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-[#102A56] transition-all hover:bg-blue-50"
            >
              Book Free Audit
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
