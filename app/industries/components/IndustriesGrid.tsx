"use client";

import {
  Wrench,
  Zap,
  Hammer,
  Stethoscope,
  Sparkles,
  Scale,
  Calculator,
  Home,
  BrushCleaning,
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
    <section id="industries" className="md:py-24 py-10 bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-0">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-[#102A56]">
            Industries We Help Grow
          </h2>

          <p className="mt-2 md:text-lg text-gray-600">
            Every industry has different challenges. We tailor your website,
            SEO and digital marketing strategy to attract more of the customers
            you want.
          </p>
        </div>

        <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {industries.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group rounded-3xl border border-gray-200 bg-white md:p-7 p-5  shadow-sm transition-all duration-300 hover:border-blue-600"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                <Icon className="text-blue-600" size={24} />
              </div>

              <h3 className="mt-3 md:text-xl font-bold text-[#102A56]">
                {title}
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};