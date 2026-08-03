"use client";

import {
  Headphones,
  MessagesSquare,
  Building2,
  Check,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Plan {
  name: string;
  tagline: string;
  price: string;
  icon: LucideIcon;
  featured: boolean;
  bestFor: string;
  description: string;
  features: string[];
}

const plans: Plan[] = [
  {
    name: "Growth Support START",
    tagline: "Stay responsive as you grow.",
    price: "£295",
    icon: Headphones,
    featured: false,

    bestFor: "Growing businesses",

    description:
      "A simple support package that helps you stay organised and responsive as customer enquiries increase.",

    features: [
      "Up to 300 customer conversations per month",
      "One supported messaging channel",
      "Approved customer replies",
      "Basic lead or order capture",
      "Enquiry organisation and follow-up",
      "Daily weekday summary",
      "4 short-form videos/month",
      "Edit raw phone footage, clips or images",
      "Help your business stay active and credible",
    ],
  },

  {
    name: "Growth Support PLUS",
    tagline: "More capacity, more channels, less admin.",
    price: "£495",
    icon: MessagesSquare,
    featured: true,

    bestFor: "Busy businesses",

    description:
      "Ideal for businesses receiving regular enquiries that need more support across multiple communication channels.",

    features: [
      "Up to 800 customer conversations per month",
      "Up to two supported channels",
      "Lead qualification or structured order capture",
      "Booking or collection coordination",
      "Shared enquiry tracker",
      "Daily summary and weekly overview",
      "4 short-form videos/month",
      "Edit raw phone footage, clips or images",
      "Help your business stay active and credible",
    ],
  },

  {
    name: "Growth Support PRO",
    tagline: "A more dedicated support function for high demand.",
    price: "£795",
    icon: Building2,
    featured: false,

    bestFor: "High-volume businesses",

    description:
      "Designed for businesses that need a dedicated customer support function with structured workflows.",

    features: [
      "Up to 1,500 customer conversations per month",
      "Up to three supported channels",
      "Custom support playbook",
      "Pipeline, order or booking management",
      "Weekly insights and priority coordination",
      "Additional volume available",
      "12 short-form videos/month",
      "Edit raw footage with campaign direction",
      "Support higher posting frequency and advertising",
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

function BoardingPass({ plan, index }: { plan: Plan; index: number }) {
  const Icon = plan.icon;
  const rotate =
    index === 0 ? "md:rotate-[-1.5deg]" : index === 2 ? "md:rotate-[1.5deg]" : "";

  return (
    <motion.div
      className={`relative w-full ${rotate} transition-transform duration-500 hover:rotate-0 hover:-translate-y-2 ${
        plan.featured ? "md:-translate-y-3" : ""
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
    >
      {plan.featured && (
        <div className="absolute -top-3.5 left-1/2 z-20 -translate-x-1/2 -rotate-3 rounded-md border-2 border-[#145EEE] bg-[#FDFBF4] px-3 py-1">
          <span className="text-[10px] font-black uppercase tracking-[0.14em] text-[#145EEE]">
            Most Popular
          </span>
        </div>
      )}

      <div
        className={`relative flex overflow-visible rounded-[22px] ${
          plan.featured ? "bg-[#102A56]" : "bg-[#145EEE]"
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
              {plan.tagline}
            </div>
          </div>

          <div>
            <div className="text-2xl font-black leading-none text-white">
              {plan.price}
            </div>
            <div className="mt-1 text-xs text-white">per month</div>
          </div>
        </div>

        <VerticalPerforation />

        {/* Details */}
        <div className="flex-1 px-5 py-7 md:px-7">
          <h3 className="text-lg font-bold leading-snug text-white">
            {plan.name}
          </h3>

          <div className="mt-2 inline-flex items-center rounded-full bg-white/10 px-3 py-1">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-white/80">
              Best for: {plan.bestFor}
            </span>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-white">
            {plan.description}
          </p>

          <div className="mt-5 space-y-2.5">
            {plan.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2.5">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50">
                  <Check size={11} className="text-[#145EEE]" />
                </div>
                <span className="text-sm text-white">{feature}</span>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-white py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-white/10"
          >
            Check Availability
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function GrowthPricing() {
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
            Growth Support Pricing
          </span>

          <h2 className="mt-6 text-2xl font-bold leading-tight text-[#102A56] md:text-3xl lg:text-4xl">
            Flexible support plans
            <span className="block text-[#145EEE]">
              built around your business.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 md:text-lg">
            Choose the level of support that matches your enquiry volume,
            communication channels and day-to-day operational needs.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-14 md:mt-20 md:grid-cols-3 md:items-start md:gap-y-0">
          {plans.map((plan, index) => (
            <BoardingPass key={plan.name} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};