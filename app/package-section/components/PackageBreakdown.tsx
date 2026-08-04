"use client";

import {
  Check,
  BriefcaseBusiness,
  Rocket,
  Crown,
  LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

interface Package {
  title: string;
  subtitle: string;
  description: string;
  bestFor: string;
  icon: LucideIcon;
  color: "blue" | "navy";
  featured: boolean;
  rotation: string;
  features: string[];
}

const packages: Package[] = [
  {
    title: "Wellranked Essential",
    subtitle: "Professional Online Presence",
    description:
      "For businesses that need a credible website and online foundation without managing everything themselves.",
    bestFor: "Sole traders, new businesses & small firms",
    icon: BriefcaseBusiness,
    color: "blue",
    featured: false,
    rotation: "md:rotate-0",
    features: [
      "Custom website",
      "Hosting & maintenance",
      "Local SEO",
      "AI website assistant",
      "Unlimited website updates",
      "Google Business Profile setup",
      "Review monitoring",
      "Monthly performance report",
    ],
  },
  {
    title: "Wellranked Growth Partner",
    subtitle: "Your Outsourced Marketing Department",
    description:
      "Our most popular package for businesses that want their website, Google visibility, reviews, graphics and social content handled properly every month.",
    bestFor: "Busy business owners",
    icon: Rocket,
    color: "navy",
    featured: true,
    rotation: "md:rotate-[0.6deg]",
    features: [
      "Everything in Essential",
      "Local SEO",
      "Advanced SEO",
      "Video Edit Reels (2 videos)",
      "Creative Consultancy",
      "Google Profile management",
      "Review growth campaigns",
      "Unlimited business graphics",
      "3 social posts per week",
      "Monthly competitor report",
      "Seasonal campaigns",
      "Monthly growth call",
      "Marketing concierge support",
    ],
  },
  {
    title: "Wellranked Accelerator",
    subtitle: "More Visibility. More Leads. More Growth.",
    description:
      "Generate more enquiries through paid campaigns, email marketing and stronger conversion systems.",
    bestFor: "Businesses ready to scale",
    icon: Crown,
    color: "blue",
    featured: false,
    rotation: "md:rotate-[-0.6deg]",
    features: [
      "Everything in Growth Partner",
      "Google Ads management",
      "Local SEO",
      "Advanced SEO",
      "Video Edit Reels (4 videos)",
      "Creative Consultancy",
      "Business Consultancy",
      "Meta Ads management",
      "Email marketing",
      "Lead response support",
      "Customer reactivation campaigns",
      "Missed-call text-back",
      "Landing page optimisation",
    ],
  },
];

function BoardingPassCard({
  pkg,
  index,
}: {
  pkg: Package;
  index: number;
}) {
  const Icon = pkg.icon;
  const bgClass = pkg.color === "navy" ? "bg-[#102A56]" : "bg-[#145EEE]";
  const checkStroke = pkg.color === "navy" ? "#102A56" : "#145EEE";

  return (
    <motion.div
      className={`relative group ${pkg.rotation} hover:rotate-0 transition-transform duration-500`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
    >
      {/* Featured Badge */}
      {pkg.featured && (
        <div className="absolute -top-3.5 left-1/2 z-20 -translate-x-1/2 -rotate-2 rounded-md border-2 border-[#145EEE] bg-white px-4 py-1 shadow-sm">
          <span className="text-[10px] font-black uppercase tracking-[0.14em] text-[#145EEE]">
            Most Popular
          </span>
        </div>
      )}

      <div
        className={`relative flex flex-col md:flex-row overflow-visible rounded-[22px] ${bgClass} transition-all duration-500`}
      >
        {/* Corner Punch Holes */}
        <div className="absolute left-3 top-3 h-2.5 w-2.5 rounded-full bg-white" />
        <div className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-white" />
        <div className="absolute left-3 bottom-3 h-2.5 w-2.5 rounded-full bg-white" />
        <div className="absolute right-3 bottom-3 h-2.5 w-2.5 rounded-full bg-white" />

        {/* Stub */}
        <div className="relative flex w-full md:w-[32%] flex-col justify-between px-6 py-8 md:px-8 md:py-10">
          {/* Vertical Perforation (desktop) */}
          <div className="hidden md:block absolute top-0 bottom-0 right-0 z-10 w-0">
            <div className="absolute -top-3 right-0 h-6 w-6 translate-x-1/2 rounded-full bg-white" />
            <div className="absolute -bottom-3 right-0 h-6 w-6 translate-x-1/2 rounded-full bg-white" />
            <div className="mx-auto h-full border-r-2 border-dashed border-white" />
          </div>

          {/* Horizontal Perforation (mobile) */}
          <div className="md:hidden absolute bottom-0 left-0 right-0 z-10 h-0">
            <div className="absolute -left-3 bottom-0 h-6 w-6 -translate-y-1/2 rounded-full bg-white" />
            <div className="absolute -right-3 bottom-0 h-6 w-6 -translate-y-1/2 rounded-full bg-white" />
            <div className="mx-auto w-full border-b-2 border-dashed border-white" />
          </div>

          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
              <Icon size={22} className="text-white" />
            </div>
            <div className="mt-4 text-[10px] font-black uppercase tracking-[0.16em] text-white">
              {pkg.subtitle}
            </div>
            <h3 className="mt-2 text-xl font-black text-white">{pkg.title}</h3>
          </div>

          <div className="mt-6 md:mt-0">
            <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                Best for: {pkg.bestFor}
              </span>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="flex-1 px-6 py-8 md:px-10 md:py-10">
          <p className="text-sm leading-relaxed text-white md:text-base">
            {pkg.description}
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {pkg.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2.5">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50">
                  <Check size={11} strokeWidth={3} className={`text-[${checkStroke}]`} style={{ color: checkStroke }} />
                </div>
                <span className="text-sm text-white">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PackageBreakdown() {
  return (
    <section className="relative overflow-hidden px-5 py-16 md:px-8 md:py-28 bg-white">
      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="mx-auto max-w-2xl text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center rounded-full border border-[#145EEE] bg-blue-50 px-4 py-1.5 font-bold text-sm tracking-[0.18em] text-[#145EEE]">
            Find Your Perfect Fit
          </span>

          <h2 className="mt-6 text-2xl font-bold leading-tight text-[#102A56] md:text-3xl lg:text-4xl">
            Every package is designed
            <span className="block text-[#145EEE]">
              to grow with your business.
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="space-y-10 md:space-y-12">
          {packages.map((pkg, index) => (
            <BoardingPassCard key={pkg.title} pkg={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};