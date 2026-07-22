"use client";

import {
  Globe,
  Search,
  MapPinned,
  Star,
  Palette,
  Image,
  Mail,
  Bot,
  BadgeCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const solutions = [
  {
    title: "Website Build & Management",
    icon: Globe,
  },
  {
    title: "AI Customer Response Assistant",
    icon: Bot,
  },
  {
    title: "Local SEO & Google Visibility",
    icon: Search,
  },
  {
    title: "Google Business Profile Mangement",
    icon: MapPinned,
  },
  {
    title: "Review Management & Reputation Management",
    icon: Star,
  },
  {
    title: "Unlimited Business Graphics",
    icon: Palette,
  },
  {
    title: "3 Social Media Graphics Posts per Week",
    icon: Image,
  },
  {
    title: "Email Marketing & Ads Management on Accelerator",
    icon: Mail,
  },
];

export default function SolutionSection() {
  return (
    <section className="md:py-24 py-16 bg-white">
      <div className="max-w-7xl mx-auto lg:px-0 md:px-5 px-5">
        <div className="grid lg:grid-cols-2 md:gap-20 gap-10 items-center">
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
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#244EB3]">
              One Team. One Monthly Fee.
            </span>

            <h2 className="mt-4 text-2xl lg:text-4xl md:text-3xl font-bold leading-tight text-[#102A56]">
              Everything handled.
            </h2>

            <p className="mt-3 md:text-lg leading-8 text-gray-600">
              Instead of hiring a website developer, SEO specialist, designer,
              social media manager, ads expert and marketing coordinator
              separately...
            </p>

            <p className="mt-2 md:text-lg leading-8 text-gray-600">
              <span className="font-semibold text-[#102A56]">
                Wellranked gives you one joined-up team
              </span>{" "}
              working together to improve your online presence, generate more
              enquiries and help your business grow.
            </p>
            <div className="mt-5 space-y-4">
              {[
                "No freelancers to manage",
                "No expensive in-house hires",
                "One monthly payment",
                "Everything working together",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <BadgeCheck size={22} className="text-[#244EB3]" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <div className="rounded-3xl border border-gray-200 bg-[#F8FAFF] md:p-8 p-5">
            <div className="grid sm:grid-cols-2 gap-4">
              {solutions.map(({ title, icon: Icon }, index) => (
                <motion.div
                  key={title}
                  className="group relative overflow-hidden rounded-2xl bg-[#244EB3] border border-blue-100 p-5 transition-all duration-300"
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
                >
                  {/* Decorative Curved Rings */}
                  <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full border border-blue-100"></div>

                  <div className="absolute -top-4 -right-4 h-20 w-20 rounded-full border border-blue-100"></div>

                  <div className="relative z-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-[#244EB3] transition">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-4 md:text-lg font-semibold text-white">
                      {title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
