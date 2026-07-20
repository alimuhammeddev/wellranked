"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Layers3,
  TrendingUp,
  Users2,
} from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    title: "One Marketing Partner",
    description: "Everything your business needs managed in one place.",
    icon: Users2,
  },
  {
    title: "Practical Growth",
    description: "Focused on visibility, trust and generating more enquiries.",
    icon: TrendingUp,
  },
  {
    title: "Built for UK SMEs",
    description: "Affordable solutions designed for independent businesses.",
    icon: Building2,
  },
];

const AUTO_ADVANCE_MS = 4500;

export default function WhyWellrankedHero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % highlights.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [active]);

  const ActiveIcon = highlights[active].icon;

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

      <div className="relative mx-auto grid max-w-7xl items-start gap-12 px-5 pb-24 pt-40 lg:grid-cols-2 lg:gap-20 lg:px-0">
        {/* Left */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#244EB3]">
            <BriefcaseBusiness size={16} />
            Why Wellranked
          </span>

          <h1 className="mt-4 text-2xl font-extrabold leading-tight text-[#102A56] lg:text-4xl md:text-3xl">
            Because Small Businesses Need{" "}
            <span className="text-[#244EB3]">More Than Another Agency.</span>
          </h1>

          <p className="mt-3 max-w-2xl md:text-lg leading-8 text-gray-600">
            Traditional agencies often sell individual services, while
            freelancers usually solve one problem at a time. Wellranked gives
            you one joined-up marketing team that keeps your business visible,
            trusted and consistently active online.
          </p>

          <div className="mt-5 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/growth-audit"
              className="flex items-center justify-center gap-2 rounded-full bg-[#244EB3] px-8 py-4 font-semibold text-white"
            >
              Book Your Free Growth Audit
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#why-grid"
              className="rounded-full border border-gray-300 bg-white px-8 py-4 text-center font-semibold text-[#102A56] transition hover:border-[#244EB3] hover:text-[#244EB3]"
            >
              Why Choose Us
            </Link>
          </div>

          <div className="mt-5 space-y-3">
            {[
              "One team managing your digital presence",
              "No confusing marketing jargon",
              "Everything working towards business growth",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <BadgeCheck className="text-[#244EB3]" size={22} />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — auto-cycling "one team" showcase panel */}
        <div className="relative overflow-hidden rounded-3xl bg-[#244EB3] p-6 md:p-8">
          <style>{`
            @keyframes why-progress { from { transform: scaleX(0); } to { transform: scaleX(1); } }
            @keyframes why-fade-in { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
            @keyframes why-icon-pop { 0% { transform: scale(0.6); opacity: 0; } 60% { transform: scale(1.08); opacity: 1; } 100% { transform: scale(1); opacity: 1; } }
            .why-progress-bar { animation: why-progress ${AUTO_ADVANCE_MS}ms linear forwards; }
            .why-fade-in { animation: why-fade-in 0.45s ease-out; }
            .why-icon-pop { animation: why-icon-pop 0.5s ease-out; }
            @media (prefers-reduced-motion: reduce) {
              .why-progress-bar, .why-fade-in, .why-icon-pop { animation: none !important; }
            }
          `}</style>

          {/* decorative glows */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-blue-400/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-indigo-400/10 blur-3xl"
          />

          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
            <Layers3 size={15} />
            What Makes Us Different
          </span>

          <h3 className="mt-4 md:text-2xl text-xl font-bold text-white">
            One Strategy. One Team. One Goal.
          </h3>

          <p className="mt-3 leading-7 text-blue-100/90">
            Instead of hiring different people for websites, SEO, social media,
            reviews and advertising, Wellranked brings everything together under
            one coordinated strategy.
          </p>

          {/* Tab selector, auto-advances and doubles as a progress indicator */}
          <div className="mt-6 flex gap-2">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              const isActive = i === active;
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={`group relative flex flex-1 flex-col items-center gap-1.5 overflow-hidden rounded-2xl border px-2 py-3 text-center transition-colors duration-300 ${
                    isActive
                      ? "border-white/30 bg-white/10"
                      : "border-white/10 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <Icon
                    size={18}
                    className={
                      isActive
                        ? "text-white"
                        : "text-blue-200 transition-colors duration-300 group-hover:text-white"
                    }
                  />
                  <span
                    className={`text-[11px] font-semibold leading-tight ${
                      isActive
                        ? "text-white"
                        : "text-blue-200 transition-colors duration-300 group-hover:text-white"
                    }`}
                  >
                    {item.title}
                  </span>

                  {isActive && (
                    <span
                      key={active}
                      className="why-progress-bar absolute bottom-0 left-0 h-0.75 w-full origin-left rounded-full bg-white"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active highlight detail, replays its entrance animation each switch */}
          <div
            key={active}
            className="why-fade-in mt-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3">
              <span className="why-icon-pop flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-white">
                <ActiveIcon size={18} />
              </span>
              <h4 className="font-semibold text-white">
                {highlights[active].title}
              </h4>
            </div>
            <p className="mt-3 text-sm leading-6 text-blue-100/90">
              {highlights[active].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
