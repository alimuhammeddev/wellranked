"use client";

import {
  Search,
  ClipboardCheck,
  FolderOpen,
  Globe,
  TrendingUp,
  BarChart3,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Free Growth Audit",
    description:
      "We review your website, Google visibility, reviews, content and lead generation setup.",
    icon: Search,
  },
  {
    number: "02",
    title: "Clear Improvement Plan",
    description:
      "We identify the biggest opportunities and recommend the package that best fits your business.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Fast Onboarding",
    description:
      "We collect your business details, brand assets, website access and service information.",
    icon: FolderOpen,
  },
  {
    number: "04",
    title: "Website & Marketing Setup",
    description:
      "Our team improves your website, Google profile, AI tools and marketing foundations.",
    icon: Globe,
  },
  {
    number: "05",
    title: "Monthly Delivery",
    description:
      "We manage your website, SEO, reviews, content, graphics and campaigns every month.",
    icon: TrendingUp,
  },
  {
    number: "06",
    title: "Simple Reporting",
    description:
      "Receive easy-to-understand updates showing what was completed and what improved.",
    icon: BarChart3,
  },
];

export default function HowItWorksTimeline() {
  return (
    <section
      id="process"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-0">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            Our Process
          </span>

          <h2 className="mt-5 text-2xl font-bold text-[#102A56] lg:text-4xl md:text-3xl">
            From Your First Conversation {" "}
            <span className="text-blue-600">
              To Long-Term Growth
            </span>
          </h2>

          <p className="mt-3 md:text-lg leading-8 text-gray-600">
            Every stage is designed to make marketing simple, transparent and
            effective, so you always know what happens next.
          </p>
        </div>

        {/* Desktop Timeline */}

        <div className="relative mt-10 hidden lg:block">
          <div className="absolute left-0 right-0 top-10 h-0.5 rounded-full bg-blue-100" />

          <div className="grid grid-cols-6 gap-6">
            {steps.map(({ number, title, description, icon: Icon }) => (
              <div
                key={number}
                className="relative text-center"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-blue-100 bg-white shadow-md">
                  <Icon
                    className="text-blue-600"
                    size={30}
                  />
                </div>

                <span className="mt-5 inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">
                  STEP {number}
                </span>

                <h3 className="mt-4 text-lg font-bold text-[#102A56]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile */}

        <div className="mt-10 space-y-6 lg:hidden">
          {steps.map(({ number, title, description, icon: Icon }) => (
            <div
              key={number}
              className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50">
                  <Icon
                    size={24}
                    className="text-blue-600"
                  />
                </div>

                <div>
                  <span className="text-sm font-semibold text-blue-600">
                    STEP {number}
                  </span>

                  <h3 className="mt-1 text-xl font-bold text-[#102A56]">
                    {title}
                  </h3>

                  <p className="mt-2 leading-7 text-gray-600">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};