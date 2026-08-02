"use client";

import { Check, BriefcaseBusiness, Rocket, Crown, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

const SECTION_BG = "#0A1830";

interface Package {
  name: string;
  className: string;
  price: string;
  icon: LucideIcon;
  featured: boolean;
  description: string;
  features: string[];
}

const packages: Package[] = [
  {
    name: "Essential",
    className: "Economy",
    price: "£395",
    icon: BriefcaseBusiness,
    featured: false,
    description:
      "A professional website and online foundation for businesses that need to look credible and be easier to contact.",
    features: [
      "Professional website",
      "Website management",
      "Basic local SEO",
      "Google Business Profile",
      "Email support",
    ],
  },
  {
    name: "Growth Partner",
    className: "Business",
    price: "£695",
    icon: Rocket,
    featured: true,
    description:
      "Our most popular package. Your outsourced marketing department for website, SEO, Google profile, reviews, graphics and social content.",
    features: [
      "Everything in Essential",
      "Advanced local SEO",
      "Review management",
      "Unlimited graphics",
      "3 social posts / week",
      "Priority support",
    ],
  },
  {
    name: "Accelerator",
    className: "First Class",
    price: "£995",
    icon: Crown,
    featured: false,
    description:
      "For businesses ready to actively generate more enquiries through ads, email campaigns, landing pages and lead follow-up systems.",
    features: [
      "Everything in Growth Partner",
      "Email marketing",
      "Ads management",
      "Landing pages",
      "Lead follow-up",
      "Monthly strategy session",
    ],
  },
];

function VerticalPerforation() {
  return (
    <div className="absolute top-0 bottom-0 left-[34%] z-10 w-0 md:left-[36%]">
      <div
        className="absolute -top-3 left-0 h-6 w-6 -translate-x-1/2 rounded-full bg-white"
      />
      <div
        className="absolute -bottom-3 left-0 h-6 w-6 -translate-x-1/2 rounded-full bg-white"
      />
      <div className="mx-auto h-full border-l-2 border-dashed border-[#DDD6C4]" />
    </div>
  );
}

function BoardingPass({ pkg, index }: { pkg: Package; index: number }) {
  const Icon = pkg.icon;
  const rotate = index === 0 ? "md:rotate-[-1.5deg]" : index === 2 ? "md:rotate-[1.5deg]" : "";

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
        <div className="absolute -top-3.5 left-1/2 z-20 -translate-x-1/2 -rotate-3 rounded-md border-2 border-[#145EEE] bg-[#FDFBF4] px-3 py-1">
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
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                pkg.featured ? "bg-white/15" : "bg-white/15"
              }`}
            >
              <Icon size={18} className="text-white" />
            </div>
            <div
              className={`mt-3 text-[10px] font-bold uppercase tracking-[0.16em] ${
                pkg.featured ? "text-white" : "text-white"
              }`}
            >
              {pkg.className}
            </div>
          </div>

          <div>
            <div
              className={`text-2xl font-black leading-none ${
                pkg.featured ? "text-white" : "text-white"
              }`}
            >
              {pkg.price}
            </div>
            <div
              className={`mt-1 text-xs ${
                pkg.featured ? "text-white" : "text-white"
              }`}
            >
              per month
            </div>
          </div>
        </div>

        <VerticalPerforation />

        {/* Details */}
        <div className="flex-1 px-5 py-7 md:px-7">
          <h3
            className={`text-lg font-bold leading-snug ${
              pkg.featured ? "text-white" : "text-white"
            }`}
          >
            {pkg.name}
          </h3>

          <p
            className={`mt-2 text-sm leading-relaxed ${
              pkg.featured ? "text-white" : "text-white"
            }`}
          >
            {pkg.description}
          </p>

          <div className="mt-5 space-y-2.5">
            {pkg.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2.5">
                <div
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                    pkg.featured ? "bg-blue-50" : "bg-blue-50"
                  }`}
                >
                  <Check
                    size={11}
                    className={pkg.featured ? "text-[#145EEE]" : "text-[#145EEE]"}
                  />
                </div>
                <span
                  className={`text-sm ${
                    pkg.featured ? "text-white" : "text-white"
                  }`}
                >
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <button
            className={`mt-7 w-full rounded-xl border-2 border-dashed py-3 text-sm font-bold uppercase tracking-[0.08em] transition-colors ${
              pkg.featured
                ? "border-white text-white hover:bg-white/10"
                : "border-white text-white hover:bg-[#145EEE]/5"
            }`}
          >
            Choose {pkg.name}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function PackagesPreview() {
  return (
    <section
      className="relative overflow-hidden px-5 py-16 md:px-8 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-[#145EEE]/15 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#6FE3C4]/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center rounded-full border border-[#145EEE] bg-blue-50 px-4 py-1.5 font-bold uppercase tracking-[0.18em] text-[#145EEE]">
            Pricing
          </span>

          <h2 className="mt-6 text-2xl font-bold leading-tight text-[#102A56] md:text-3xl lg:text-4xl">
            Simple monthly packages.{" "}
            <span className="text-[#145EEE]">No hidden costs.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 md:text-lg">
            Choose the level of support your business needs today. Upgrade
            whenever you're ready to grow.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-14 md:mt-20 md:grid-cols-3 md:gap-y-0">
          {packages.map((pkg, index) => (
            <BoardingPass key={pkg.name} pkg={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};