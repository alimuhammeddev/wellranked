"use client";

import { BriefcaseBusiness, Rocket, Crown, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const packages = [
  {
    title: "Wellranked Essential",
    subtitle: "Professional Online Presence",
    icon: BriefcaseBusiness,
    color: "blue",
    description:
      "For businesses that need a credible website and online foundation without managing everything themselves.",
    bestFor:
      "Sole traders, new businesses and small firms that need to look professional online.",
    features: [
      "Custom website",
      "Hosting & maintenance",
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
    icon: Rocket,
    color: "indigo",
    description:
      "Our most popular package for businesses that want their website, Google visibility, reviews, graphics and social content handled properly every month.",
    bestFor:
      "Busy business owners who want peace of mind and consistent marketing support.",
    features: [
      "Everything in Essential",
      "Local SEO",
      "Google Profile management",
      "Review growth campaigns",
      "Unlimited business graphics",
      "3 social posts every week",
      "Monthly competitor report",
      "Seasonal campaigns",
      "Monthly growth call",
      "Marketing concierge support",
    ],
  },
  {
    title: "Wellranked Accelerator",
    subtitle: "More Visibility. More Leads. More Growth.",
    icon: Crown,
    color: "emerald",
    description:
      "For businesses ready to actively generate more enquiries through organic visibility, paid campaigns, email marketing and stronger conversion systems.",
    bestFor:
      "Businesses ready to scale lead generation and increase monthly enquiries.",
    features: [
      "Everything in Growth Partner",
      "Email marketing",
      "Google Ads management",
      "Meta Ads management",
      "Lead response support",
      "Customer reactivation campaigns",
      "Missed-call text-back",
      "Landing page optimisation",
    ],
  },
];

export default function PackageBreakdown() {
  return (
    <section className="md:py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto lg:px-0 px-5">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10"
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
          <span className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-[#059669]">
            Find Your Perfect Fit
          </span>

          <h2 className="mt-4 text-2xl lg:text-4xl md:text-3xl font-bold text-[#102A56]">
            Every package is designed
            <span className="block text-[#059669]">
              to grow with your business.
            </span>
          </h2>
        </motion.div>

        <div className="space-y-24">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;

            return (
              <div
                key={pkg.title}
                className={`grid lg:grid-cols-2 md:gap-14 gap-10 items-center ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Content */}
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
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-[#059669]">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="md:text-2xl text-xl font-bold text-[#102A56]">
                        {pkg.title}
                      </h3>
                      <p className="text-[#059669] font-medium mt-1">
                        {pkg.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 md:text-lg leading-8 text-gray-600">
                    {pkg.description}
                  </p>
                  <div className="mt-4 rounded-2xl bg-green-50 p-6">
                    <p className="text-sm font-semibold uppercase tracking-wide text-[#059669]">
                      Best For
                    </p>
                    <p className="mt-3 text-[#059669] font-medium">
                      {pkg.bestFor}
                    </p>
                  </div>
                </motion.div>

                {/* Feature Card */}
                <motion.div
                  className="relative rounded-3xl border border-gray-200 bg-[#f5f5f5] md:p-8 p-5 overflow-hidden"
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
                  <div className="absolute left-0 top-0 h-1 w-full bg-[#059669]" />
                  <h4 className="text-xl font-bold text-[#059669]">
                    What's Included
                  </h4>
                  <div className="mt-4 space-y-5">
                    {pkg.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-4">
                        <BadgeCheck
                          size={22}
                          className="text-[#059669] mt-0.5"
                        />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
