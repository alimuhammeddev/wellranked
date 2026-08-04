"use client";

import {
  Check,
  BriefcaseBusiness,
  Rocket,
  Crown,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Package {
  name: string;
  tagline: string;
  price: string;
  icon: LucideIcon;
  featured: boolean;
  bestFor: string;
  description: string;
  features: string[];
}

const packages: Package[] = [
  {
    name: "Wellranked Essential",
    tagline: "Professional Online Presence",
    price: "£395",
    icon: BriefcaseBusiness,
    featured: false,
    bestFor: "Sole traders, new businesses & small firms",
    description:
      "For businesses that need a credible website and online foundation without managing everything themselves.",
    features: [
      "Custom Website",
      "Hosting & Maintenance",
      "AI Website Assistant",
      "Local SEO",
      "Unlimited Website Updates",
      "Google Business Profile Setup",
      "Review Monitoring",
      "Monthly Performance Report",
    ],
  },
  {
    name: "Growth Partner",
    tagline: "Your Outsourced Marketing Department",
    price: "£695",
    icon: Rocket,
    featured: true,
    bestFor: "Busy business owners",
    description:
      "Our most popular package for businesses that want their website, Google visibility, reviews, graphics and social content handled properly every month.",
    features: [
      "Everything in Essential",
      "Advanced SEO",
      "Google Profile Management",
      "Review Growth Campaigns",
      "Video Edit Reels (2 videos)",
      "Creative Consultancy",
      "Unlimited Business Graphics",
      "3 Social Posts Per Week",
      "Monthly Competitor Report",
      "Seasonal Campaigns",
      "Monthly Growth Call",
      "Marketing Concierge Support",
    ],
  },
  {
    name: "Accelerator",
    tagline: "More Visibility. More Leads. More Growth.",
    price: "£995",
    icon: Crown,
    featured: false,
    bestFor: "Businesses ready to scale",
    description:
      "Generate more enquiries through paid campaigns, email marketing and stronger conversion systems.",
    features: [
      "Everything in Growth Partner",
      "Google Ads Management",
      "Advanced SEO",
      "Meta Ads Management",
      "Video Edit Reels (4 videos)",
      "Creative Consultancy",
      "Business Consultancy",
      "Email Marketing",
      "Lead Response Support",
      "Customer Reactivation Campaigns",
      "Missed Call Text-Back",
      "Landing Page Optimisation",
    ],
  },
];

function VerticalPerforation() {
  return (
    <div className="absolute top-0 bottom-0 left-[34%] z-10 w-0 md:left-[36%]">
      <div className="absolute -top-3 left-0 h-6 w-6 -translate-x-1/2 rounded-full bg-white" />
      <div className="absolute -bottom-3 left-0 h-6 w-6 -translate-x-1/2 rounded-full bg-white" />
      <div className="mx-auto h-full border-l-2 border-dashed border-white" />
    </div>
  );
}

function BoardingPass({ pkg, index }: { pkg: Package; index: number }) {
  const Icon = pkg.icon;
  const rotate =
    index === 0 ? "md:rotate-[-1.5deg]" : index === 2 ? "md:rotate-[1.5deg]" : "";

  return (
    <motion.div
      className={`relative w-full ${rotate} transition-transform duration-500 hover:rotate-0 hover:-translate-y-2 ${
        pkg.featured ? "md:-translate-y-3" : ""
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
    >
      {pkg.featured && (
        <div className="absolute -top-3.5 left-1/2 z-20 -translate-x-1/2 -rotate-3 rounded-md border-2 border-[#145EEE] bg-white px-3 py-1">
          <span className="text-[10px] font-black uppercase tracking-[0.14em] text-[#145EEE]">
            Most Popular
          </span>
        </div>
      )}

      <div
        className={`relative flex overflow-visible rounded-[22px] ${
          pkg.featured ? "bg-[#102A56]" : "bg-[#145EEE]"
        }`}
      >
        {/* Punched corner holes */}
        <div className="absolute left-3 top-3 h-2 w-2 rounded-full bg-white" />
        <div className="absolute right-3 top-3 h-2 w-2 rounded-full bg-white" />

        {/* Stub */}
        <div className="flex w-[34%] flex-col justify-between px-4 py-7 md:w-[36%] md:px-5">
          <div>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
              <Icon size={18} className="text-white" />
            </div>
            <div className="mt-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
              {pkg.tagline}
            </div>
          </div>

          <div>
            <div className="text-2xl font-black leading-none text-white">
              {pkg.price}
            </div>
            <div className="mt-1 text-xs text-white">per month</div>
          </div>
        </div>

        <VerticalPerforation />

        {/* Details */}
        <div className="flex-1 px-5 py-7 md:px-7">
          <h3 className="text-lg font-bold leading-snug text-white">
            {pkg.name}
          </h3>

          <div className="mt-2 inline-flex items-center rounded-full bg-white/10 px-3 py-1">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-white">
              Best for: {pkg.bestFor}
            </span>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-white">
            {pkg.description}
          </p>

          <div className="mt-5 space-y-2.5">
            {pkg.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2.5">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50">
                  <Check size={11} className="text-[#145EEE]" />
                </div>
                <span className="text-sm text-white">{feature}</span>
              </div>
            ))}
          </div>

          <Link
            href="/growth-audit"
            className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-white py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-white/10"
          >
            Get Started
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function PricingCards() {
  return (
    <section id="pricing" className="relative overflow-hidden px-5 py-16 md:px-8 md:py-28">
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center rounded-full border border-[#145EEE] bg-blue-50 px-4 py-1.5 font-bold text-sm tracking-[0.18em] text-[#145EEE]">
            Choose Your Plan
          </span>

          <h2 className="mt-6 text-2xl font-bold leading-tight text-[#102A56] md:text-3xl lg:text-4xl">
            One monthly fee.
            <span className="block text-[#145EEE]">
              Everything working together.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 md:text-lg">
            Every package is designed to remove stress, improve trust and
            help your business grow online.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-14 md:mt-20 md:grid-cols-3 md:items-start md:gap-y-0">
          {packages.map((pkg, index) => (
            <BoardingPass key={pkg.name} pkg={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};