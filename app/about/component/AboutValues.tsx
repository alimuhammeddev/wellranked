"use client";

import {
  Building2,
  HeartHandshake,
  Layers3,
  MessageCircleMore,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const beliefs = [
  {
    title: "Small Businesses Deserve Better Marketing",
    description:
      "Every independent business should have access to clear, affordable marketing support without the complexity or cost typically associated with large agencies.",
    icon: Building2,
    featured: true,
  },
  {
    title: "Marketing Should Reduce Stress",
    description:
      "Running your business is already demanding. Our role is to take marketing off your plate so you can focus on serving customers and growing your business.",
    icon: HeartHandshake,
  },
  {
    title: "Everything Works Better Together",
    description:
      "Your website, SEO, reviews, social media and content deliver stronger results when they're managed as one connected marketing system.",
    icon: Layers3,
  },
  {
    title: "Practical Advice Over Jargon",
    description:
      "We explain what matters in plain English and focus on actions that genuinely improve your visibility, reputation and enquiries.",
    icon: MessageCircleMore,
  },
  {
    title: "The Right System Creates Growth",
    description:
      "Consistent marketing builds trust over time. The right systems help small businesses become the obvious choice in their local area.",
    icon: TrendingUp,
  },
];

export default function AboutValues() {
  const featured = beliefs.find((belief) => belief.featured);
  const others = beliefs.filter((belief) => !belief.featured);

  return (
    <section
      id="our-values"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-0">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            What We Believe
          </span>

          <h2 className="mt-5 text-2xl font-bold text-[#102A56] lg:text-4xl md:text-3xl">
            The Principles Behind Everything We Do
          </h2>

          <p className="mt-3 md:text-lg leading-8 text-gray-600">
            Wellranked exists to make digital marketing simpler, more
            affordable and more effective for small businesses. These
            principles shape every recommendation we make and every service we
            deliver.
          </p>
        </div>

        {/* Featured Card */}

        {featured && (
          <div className="mt-10">
            <div className="group rounded-3xl border border-gray-200 bg-white md:p-7 p-5 transition-all duration-300 hover:border-blue-600">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                <featured.icon size={24} className="text-blue-600"/>
              </div>

              <h3 className="mt-4 md:text-2xl text-xl font-bold text-[#102A56]">
                {featured.title}
              </h3>

              <p className="mt-2 leading-8 text-gray-600">
                {featured.description}
              </p>
            </div>
          </div>
        )}

        {/* Grid */}

        <div className="mt-8 grid gap-7 md:grid-cols-2">
          {others.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group rounded-3xl border border-gray-200 bg-white md:p-7 p-5 transition-all duration-300 hover:border-blue-600"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                <Icon
                  size={24}
                  className="text-blue-600"
                />
              </div>

              <h3 className="mt-4 md:text-2xl text-xl font-bold text-[#102A56]">
                {title}
              </h3>

              <p className="mt-2 leading-8 text-gray-600">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}

        <div className="mt-16 rounded-3xl border border-blue-100 bg-blue-50 p-5 text-center md:p-10">
          <h3 className="md:text-2xl text-xl font-bold text-[#102A56]">
            Our Goal Is Simple
          </h3>

          <p className="mx-auto mt-2 max-w-3xl md:text-lg leading-8 text-gray-600">
            We want every small business to have access to professional
            marketing support without the cost, confusion or complexity of
            traditional agencies. When your business succeeds, we've done our
            job.
          </p>
        </div>
      </div>
    </section>
  );
};