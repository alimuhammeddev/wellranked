"use client";

import {
  MessageCircleMore,
  CalendarDays,
  RefreshCcw,
  Inbox,
  FileText,
  Camera,
} from "lucide-react";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    icon: MessageCircleMore,
    title: "Customer Message Management",
    description:
      "Professional replies across agreed channels using your approved information and tone.",
  },
  {
    icon: Camera,
    title: "Video Editing",
    description:
      "We edit your videos into professional, engaging content that's ready to publish across your marketing channels.",
  },
  {
    icon: CalendarDays,
    title: "Booking Coordination",
    description:
      "We help customers select approved times and keep your booking information organised.",
  },
  {
    icon: RefreshCcw,
    title: "Customer Follow-up",
    description:
      "We follow up with incomplete enquiries, unpaid orders or unconfirmed bookings.",
  },
  {
    icon: Inbox,
    title: "Inbox Organisation",
    description:
      "Every conversation is categorised so you know what is new, confirmed, pending or escalated.",
  },
  {
    icon: FileText,
    title: "Daily Summaries",
    description:
      "See what happened, what converted and what still needs your attention.",
  },
];

export default function GrowthServices() {
  return (
    <section className="bg-[#f5f5f5] py-24">
      <div className="mx-auto max-w-7xl lg:px-0 md:px-5 px-5">
        <motion.div
          className="mx-auto max-w-3xl text-center"
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
            What We Can Handle
          </span>

          <h2 className="mt-3 text-2xl font-bold text-[#102A56] md:text-3xl lg:text-4xl">
            Every customer interaction,
            <span className="block text-[#059669]">
              handled professionally.
            </span>
          </h2>

          <p className="mt-4 text-gray-600 md:text-lg leading-8">
            From the first enquiry to the final follow-up, Growth Support helps
            your business stay organised, responsive and focused on serving
            customers.
          </p>
        </motion.div>

        <div className="md:mt-16 mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
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
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                className="group rounded-3xl border border-green-100 bg-white md:p-8 p-5 transition-all duration-300 hover:border-[#059669]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-[#059669]">
                  <Icon size={24} />
                </div>

                <h3 className="mt-4 md:text-xl text-lg font-bold text-[#102A56]">
                  {service.title}
                </h3>

                <p className="mt-2 leading-8 text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
