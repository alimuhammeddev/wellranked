"use client";

import {
  BarChart3,
  Building2,
  BriefcaseBusiness,
  Layers3,
  TrendingUp,
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
          <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#244EB3]">
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
          <div className="mt-10">
            <div className="group relative overflow-hidden rounded-3xl bg-[#244EB3] md:p-10 p-5">
              {/* decorative glows + ghost icon */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-indigo-400/10 blur-3xl"
              />
              <featured.icon
                aria-hidden
                size={150}
                className="pointer-events-none absolute -bottom-10 -right-10 rotate-12 text-white/5"
              />

              <div className="relative flex flex-col gap-6 md:grid md:grid-cols-[auto,1fr] md:items-center md:gap-10">
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-200 text-[#244EB3] backdrop-blur-sm">
                    <featured.icon size={24} />
                  </span>
                  <span className="text-xs font-bold tracking-widest text-blue-200">
                    01
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white md:text-2xl">
                    {featured.title}
                  </h3>
                  <p className="mt-3 max-w-3xl leading-8 text-white">
                    {featured.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Remaining Cards */}
        <div className="mt-7 grid gap-6 sm:grid-cols-2">
          {others.map(({ title, description, icon: Icon }, i) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-[#244EB3] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_45px_-15px_rgba(36,78,179,0.25)] md:p-8"
            >
              <Icon
                aria-hidden
                size={100}
                className="pointer-events-none absolute -bottom-4 -right-4 rotate-12 text-white/5"
              />

              <div className="relative flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-200 text-[#244EB3]">
                  <Icon size={22} />
                </span>
                <span className="text-xs font-bold tracking-widest text-blue-200">
                  0{i + 2}
                </span>
              </div>

              <h3 className="relative mt-4 text-lg font-bold text-white md:text-xl">
                {title}
              </h3>

              <p className="relative mt-2 leading-7 text-white md:leading-8">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};