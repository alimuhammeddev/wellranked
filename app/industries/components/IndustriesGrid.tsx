"use client";

import {
  ArrowUpRight,
  BrushCleaning,
  Calculator,
  Hammer,
  Home,
  Scale,
  Sparkles,
  Stethoscope,
  Wrench,
  Zap,
} from "lucide-react";

const industries = [
  {
    title: "Plumbers & Heating Engineers",
    description:
      "Emergency and local search demand makes Google visibility, reviews and fast lead response essential.",
    icon: Wrench,
  },
  {
    title: "Electricians",
    description:
      "Customers compare local providers quickly. A better website, Google profile and review system can make you the safer choice.",
    icon: Zap,
  },
  {
    title: "Roofers",
    description:
      "High-value jobs mean even a small increase in qualified leads can create major ROI.",
    icon: Hammer,
  },
  {
    title: "Dentists",
    description:
      "Patients choose based on trust, reviews, visibility and website credibility.",
    icon: Stethoscope,
  },
  {
    title: "Aesthetic Clinics",
    description:
      "Your brand, visuals, reviews and social content directly influence bookings.",
    icon: Sparkles,
  },
  {
    title: "Solicitors",
    description:
      "Legal clients need trust before they enquire. Strong positioning and clear service pages matter.",
    icon: Scale,
  },
  {
    title: "Accountants",
    description:
      "Professional websites and local visibility help convert business owners into clients.",
    icon: Calculator,
  },
  {
    title: "Estate Agents",
    description:
      "Local trust, listings and consistent marketing improve authority and enquiries.",
    icon: Home,
  },
  {
    title: "Cleaning, Removals & Pest Control",
    description:
      "Highly searchable services where fast response and local visibility make the difference.",
    icon: BrushCleaning,
  },
];

export default function IndustriesGrid() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden md:py-24 py-10 bg-white"
    >
      <div className="relative mx-auto max-w-7xl px-5 lg:px-0">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-[#102A56]">
            Industries We Help Grow
          </h2>

          <p className="mt-2 md:text-lg text-gray-600">
            Every industry has different challenges. We tailor your website, SEO
            and digital marketing strategy to attract more of the customers you
            want.
          </p>
        </div>

        <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {industries.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-[#244EB3] p-5 md:p-7"
            >
              {/* oversized ghost icon watermark */}
              <Icon
                aria-hidden
                size={120}
                className="pointer-events-none absolute -bottom-6 -right-6 rotate-12 transition-colors duration-500 text-white/10"
              />

              <div className="relative flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-[#244EB3] bg-blue-100">
                  <Icon size={22} />
                </div>

                <ArrowUpRight size={18} className="mt-1 text-white" />
              </div>

              <h3 className="relative mt-4 md:text-xl font-bold text-white">
                {title}
              </h3>

              <p className="relative mt-2 leading-7 text-white">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
