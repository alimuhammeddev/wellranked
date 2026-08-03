"use client";

import {
  BarChart3,
  Building2,
  BriefcaseBusiness,
  Layers3,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "We Reduce Your Workload",
    description:
      "Running a business is demanding enough without chasing designers, updating your website, writing social posts, managing reviews or trying to understand SEO. We take care of the day-to-day marketing tasks so you can focus on serving your customers.",
    icon: BriefcaseBusiness,
    featured: true,
  },
  {
    title: "We Focus on Practical Growth",
    description:
      "Everything we do is designed to improve your visibility, build trust and generate more enquiries. No unnecessary jargon just work that helps customers choose your business.",
    icon: TrendingUp,
  },
  {
    title: "Built for UK SMEs",
    description:
      "Our services are designed for independent businesses, sole traders and growing local companies not large corporations with enterprise-sized budgets.",
    icon: Building2,
  },
  {
    title: "Everything Works Together",
    description:
      "Your website, SEO, Google Business Profile, reviews, social media, email marketing and advertising all perform better when they're connected through one strategy.",
    icon: Layers3,
  },
  {
    title: "Simple Reporting",
    description:
      "We provide straightforward updates showing what we've completed, what has improved and what we'll focus on next, so you always know how your marketing is performing.",
    icon: BarChart3,
  },
];

function Perforation({ position }: { position: number }) {
  return (
    <div
      className="absolute left-0 right-0 z-10"
      style={{ top: `${position}%` }}
    >
      <div className="absolute -left-3 h-6 w-6 -translate-y-1/2 rounded-full bg-white" />
      <div className="absolute -right-3 h-6 w-6 -translate-y-1/2 rounded-full bg-white" />
    </div>
  );
}

export default function WhyWellrankedGrid() {
  const featured = features.find((item) => item.featured);
  const others = features.filter((item) => !item.featured);

  return (
    <section id="why-grid" className="bg-white md:py-32 md:mb-0 py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-0">
        {/* Heading */}
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
            delay: 0.15,
            ease: "easeOut",
          }}
        >
          <span className="rounded-full border border-[#145EEE] text-sm tracking-[0.18em] bg-blue-50 px-4 py-2 font-semibold text-[#145EEE]">
            Why Businesses Trust Us
          </span>

          <h2 className="mt-5 text-2xl font-bold text-[#102A56] lg:text-4xl md:text-3xl">
            A Smarter Way To Grow Online
          </h2>

          <p className="mt-3 md:text-lg leading-8 text-gray-600">
            We don't just provide marketing services we become an extension of
            your business, making sure every part of your online presence works
            together to generate more enquiries.
          </p>
        </motion.div>

        {/* Featured Card */}
        {featured && (
          <div className="mt-10">
            <motion.div
              className="group relative overflow-hidden rounded-[26px] bg-[#145EEE]"
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
              <featured.icon
                aria-hidden
                size={150}
                className="pointer-events-none absolute -bottom-10 -right-10 rotate-12 text-white/10"
              />

              {/* Punched corner holes */}
              <div className="absolute left-4 top-4 h-2.5 w-2.5 rounded-full bg-white" />
              <div className="absolute right-4 top-4 h-2.5 w-2.5 rounded-full bg-white" />

              {/* Icon + number section */}
              <div className="relative flex items-center justify-between px-5 pt-7 md:px-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#145EEE] backdrop-blur-sm">
                  <featured.icon size={24} />
                </span>
                <span className="text-xs font-bold tracking-widest text-blue-200">
                  01
                </span>
              </div>

              <Perforation position={26} />

              {/* Title + description section */}
              <div className="relative px-5 pt-6 pb-8 md:px-10 md:pb-10">
                <h3 className="text-xl font-bold text-white md:text-2xl">
                  {featured.title}
                </h3>
                <p className="mt-3 max-w-3xl leading-8 text-white">
                  {featured.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}

        {/* Remaining Cards */}
        <div className="mt-7 grid gap-6 sm:grid-cols-2">
          {others.map(({ title, description, icon: Icon }, i) => (
            <motion.div
              key={title}
              className="group relative overflow-hidden rounded-[22px] bg-[#145EEE] transition-all duration-300 hover:-translate-y-1"
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
                delay: i * 0.15,
                ease: "easeOut",
              }}
            >
              <Icon
                aria-hidden
                size={100}
                className="pointer-events-none absolute -bottom-4 -right-4 rotate-12 text-white/10"
              />

              {/* Punched corner holes */}
              <div className="absolute left-3 top-3 h-2 w-2 rounded-full bg-white" />
              <div className="absolute right-3 top-3 h-2 w-2 rounded-full bg-white" />

              {/* Icon + number section */}
              <div className="relative flex items-start justify-between px-6 pt-7 md:px-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#145EEE]">
                  <Icon size={22} />
                </span>
                <span className="text-xs font-bold tracking-widest text-blue-200">
                  0{i + 2}
                </span>
              </div>

              <Perforation position={32} />

              {/* Title + description section */}
              <div className="relative px-6 pb-8 pt-6 md:px-8">
                <h3 className="text-lg font-bold text-white md:text-xl">
                  {title}
                </h3>
                <p className="mt-2 leading-7 text-white md:leading-8">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
