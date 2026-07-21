"use client";

import {
  ArrowRight,
  BadgeCheck,
  Workflow,
  Search,
  ClipboardCheck,
  FolderOpen,
  Globe,
  TrendingUp,
  BarChart3,
  Check,
} from "lucide-react";
import Link from "next/link";

const journey = [
  {
    step: "01",
    title: "Free Growth Audit",
    icon: Search,
  },
  {
    step: "02",
    title: "Improvement Plan",
    icon: ClipboardCheck,
  },
  {
    step: "03",
    title: "Fast Onboarding",
    icon: FolderOpen,
  },
  {
    step: "04",
    title: "Website & Marketing Setup",
    icon: Globe,
  },
  {
    step: "05",
    title: "Monthly Delivery",
    icon: TrendingUp,
  },
  {
    step: "06",
    title: "Simple Reporting",
    icon: BarChart3,
  },
];

export default function HowItWorksHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Dot grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(36,78,179,0.18) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 35%, black 40%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 35%, black 40%, transparent 95%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-start gap-10 px-5 pb-24 pt-40 lg:grid-cols-2 lg:gap-20 lg:px-0">
        {/* Left */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#244EB3]">
            <Workflow size={16} />
            How It Works
          </span>

          <h1 className="mt-5 text-2xl font-extrabold leading-tight text-[#102A56] lg:text-4xl md:text-3xl">
            A Simple Process {" "}
            <span className="text-[#244EB3]">
              Built for Busy Business Owners.
            </span>
          </h1>

          <p className="mt-3 max-w-2xl md:text-lg leading-8 text-gray-600">
            We've designed our process to make marketing straightforward. From
            your free Growth Audit to ongoing monthly support, every step is
            focused on helping your business grow without adding more work to
            your day.
          </p>

          {/* Buttons */}
          <div className="mt-5 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/growth-audit"
              className="flex items-center justify-center gap-2 rounded-full bg-[#244EB3] px-8 py-4 font-semibold text-white"
            >
              Book Free Growth Audit
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#process"
              className="rounded-full border border-gray-300 bg-white px-8 py-4 text-center font-semibold text-[#102A56] transition hover:border-[#244EB3] hover:text-[#244EB3]"
            >
              See The Process
            </Link>
          </div>

          {/* Benefits */}
          <div className="mt-5 space-y-3">
            {[
              "Clear recommendations with no jargon",
              "Fast and hassle-free onboarding",
              "Ongoing monthly marketing support",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <BadgeCheck className="text-[#244EB3]" size={22} />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="rounded-3xl border border-gray-200 bg-white p-5 md:p-8">
          <div className="flex items-center gap-2">
            <Workflow className="text-[#244EB3]" size={20} />
            <h3 className="md:text-2xl text-xl font-bold text-[#102A56]">
              Your Journey
            </h3>
          </div>

          <p className="mt-2 text-gray-600">
            From your first conversation to ongoing growth, here's what working
            with Wellranked looks like.
          </p>

          <div className="mt-8 space-y-4">
            {journey.map(({ step, title, icon: Icon }, index) => (
              <div key={step}>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                    <Icon size={20} className="text-[#244EB3]" />
                  </div>

                  <div className="flex-1">
                    <p className="text-xs font-semibold tracking-wider text-[#244EB3]">
                      STEP {step}
                    </p>

                    <h4 className="font-semibold text-[#102A56]">{title}</h4>
                  </div>
                </div>

                {index !== journey.length - 1 && (
                  <div className="ml-6 mt-2 h-6 w-px bg-blue-200" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-[#F8FAFC] p-5">
            <p className="text-sm text-[#244EB3] flex items-center gap-1">
              <Check size={15} /> Simple process from start to finish
            </p>
            <p className="mt-2 text-sm text-[#244EB3] flex items-center gap-1">
              <Check size={15} /> One dedicated marketing partner
            </p>
            <p className="mt-2 text-sm text-[#244EB3] flex items-center gap-1">
              <Check size={15} /> Focused on helping your business grow
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
