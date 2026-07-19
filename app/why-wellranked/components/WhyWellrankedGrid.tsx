"use client";

import {
  BriefcaseBusiness,
  TrendingUp,
  Building2,
  Layers3,
  BarChart3,
  ArrowRight,
} from "lucide-react";

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
      "Everything we do is designed to improve your visibility, build trust and generate more enquiries. No unnecessary jargon—just work that helps customers choose your business.",
    icon: TrendingUp,
  },
  {
    title: "Built for UK SMEs",
    description:
      "Our services are designed for independent businesses, sole traders and growing local companies—not large corporations with enterprise-sized budgets.",
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

export default function WhyWellrankedGrid() {
  const featured = features.find((item) => item.featured);
  const others = features.filter((item) => !item.featured);

  return (
    <section id="why-grid" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-0">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            Why Businesses Choose Wellranked
          </span>

          <h2 className="mt-5 text-2xl font-bold text-[#102A56] lg:text-4xl md:text-3xl">
            A Smarter Way To Grow Online
          </h2>

          <p className="mt-3 md:text-lg leading-8 text-gray-600">
            We don't just provide marketing services—we become an extension of
            your business, making sure every part of your online presence works
            together to generate more enquiries.
          </p>
        </div>

        {/* Featured Card */}
        {featured && (
          <div className="mt-8">
            <div className="group rounded-3xl border border-gray-200 bg-white md:p-8 p-5 transition-all duration-300 hover:border-blue-600">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                <featured.icon size={24} className="text-blue-600"/>
              </div>

              <h3 className="mt-3 text-2xl font-bold text-[#102A56]">
                {featured.title}
              </h3>

              <p className="mt-2 max-w-3xl text-lg leading-8 text-gray-600">
                {featured.description}
              </p>
            </div>
          </div>
        )}

        {/* Remaining Cards */}
        <div className="mt-8 grid gap-7 md:grid-cols-2">
          {others.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group rounded-3xl border border-gray-200 bg-white md:p-8 p-5 transition-all duration-300 hover:border-blue-600"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 transition">
                <Icon
                  size={24}
                  className="text-blue-600"
                />
              </div>

              <h3 className="mt-3 md:text-2xl text-xl font-bold text-[#102A56]">
                {title}
              </h3>

              <p className="mt-2 leading-8 text-gray-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};