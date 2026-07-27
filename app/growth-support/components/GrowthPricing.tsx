"use client";

import {
  Headphones,
  MessagesSquare,
  Building2,
  ArrowRight,
  Check,
} from "lucide-react";

import Link from "next/link";
import { motion } from "framer-motion";

const plans = [
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

export default function GrowthPricing() {
  return (
    <section id="pricing" className="bg-[#f5f5f5] md:py-24">
      <div className="mx-auto max-w-7xl lg:px-0 md:px-5 px-5">
        <motion.div
          className="mx-auto md:mb-16 mb-10 max-w-3xl text-center"
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
            ease: "easeOut",
          }}
        >
          <span className="inline-flex rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-[#059669]">
            Growth Support Pricing
          </span>

          <h2 className="mt-3 text-2xl font-bold text-[#102A56] md:text-3xl lg:text-4xl">
            Flexible support plans
            <span className="block text-[#059669]">
              built around your business.
            </span>
          </h2>

          <p className="mt-4 text-gray-600 md:text-lg leading-8">
            Choose the level of support that matches your enquiry volume,
            communication channels and day-to-day operational needs.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <motion.div
                key={plan.name}
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
                className="relative flex flex-col rounded-3xl border border-green-200"
              >
                {plan.featured && (
                  <div className="absolute left-1/2 -top-4 -translate-x-1/2 rounded-full bg-[#059669] px-5 py-2 text-sm font-semibold text-white">
                    MOST POPULAR
                  </div>
                )}

                <div
                  className={`rounded-t-3xl md:p-8 p-5 ${
                    plan.featured ? "bg-[#059669] text-white" : "bg-[#F8FAFF]"
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      plan.featured
                        ? "bg-white/20"
                        : "bg-green-100 text-[#059669]"
                    }`}
                  >
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-4 text-xl font-bold">{plan.name}</h3>

                  <p
                    className={`mt-2 ${
                      plan.featured ? "text-green-100" : "text-[#059669]"
                    }`}
                  >
                    {plan.tagline}
                  </p>

                  <div className="mt-5 flex items-end gap-2">
                    <span className="text-3xl font-extrabold">
                      {plan.price}
                    </span>

                    <span
                      className={
                        plan.featured
                          ? "pb-2 text-green-100"
                          : "pb-2 text-gray-500"
                      }
                    >
                      /month
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col md:p-8 p-5">
                  <p className="leading-7 text-gray-600">{plan.description}</p>

                  <div className="mt-6 rounded-xl bg-green-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#059669]">
                      Best For
                    </p>

                    <p className="mt-2 text-sm font-medium text-[#059669]">
                      {plan.bestFor}
                    </p>
                  </div>
                  <div className="my-8 h-px bg-gray-200" />

                  <div className="flex-1 space-y-4">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <div className="mt-1 rounded-full bg-green-100 p-1">
                          <Check size={12} className="text-[#059669]" />
                        </div>

                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className={`mt-10 flex items-center justify-center gap-2 rounded-full py-4 font-semibold transition ${
                      plan.featured
                        ? "bg-[#059669] text-white"
                        : "border border-[#059669] text-[#059669] hover:bg-green-50"
                    }`}
                  >
                    Check Availability
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
