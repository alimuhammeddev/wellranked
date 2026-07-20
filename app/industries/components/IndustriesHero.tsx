"use client";

import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Calculator,
  Key,
  Scale,
  Smile,
  Sparkles,
  SprayCan,
  Wrench,
  Zap,
} from "lucide-react";
import Link from "next/link";

const industries = [
  {
    title: "Plumbers & Heating Engineers",
    icon: Wrench,
  },
  {
    title: "Electricians",
    icon: Zap,
  },
  {
    title: "Roofers",
    icon: Building2,
  },
  {
    title: "Dentists",
    icon: Smile,
  },
  {
    title: "Aesthetic Clinics",
    icon: Sparkles,
  },
  {
    title: "Solicitors",
    icon: Scale,
  },
  {
    title: "Accountants",
    icon: Calculator,
  },
  {
    title: "Estate Agents",
    icon: Key,
  },
  {
    title: "Cleaning, Removals & Pest Control",
    icon: SprayCan,
  },
];

export default function IndustriesHero() {
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

      <div className="relative mx-auto grid max-w-7xl items-center lg:gap-20 gap-10 px-5 pt-40 pb-24 lg:grid-cols-2 lg:px-0">
        {/* Left */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#244EB3]">
            <Building2 size={16} />
            Industries We Help
          </span>

          <h1 className="mt-5 text-2xl font-extrabold leading-tight text-[#102A56] lg:text-4xl md:text-3xl">
            Built for Service Businesses That Depend on{" "}
            <span className="text-[#244EB3]">Trust & Local Enquiries.</span>
          </h1>

          <p className="mt-3 max-w-2xl md:text-lg leading-8 text-gray-600">
            Wellranked helps UK SMEs improve their visibility, build customer
            trust and generate more enquiries through websites, SEO, Google
            Business optimisation and digital marketing.
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
              href="#industries"
              className="rounded-full border border-gray-300 bg-white px-8 py-4 text-center font-semibold text-[#102A56] transition hover:border-[#244EB3] hover:text-[#244EB3]"
            >
              Explore Industries
            </Link>
          </div>

          <div className="mt-5 space-y-3">
            {[
              "More local enquiries",
              "Stronger online credibility",
              "Marketing tailored to your industry",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <BadgeCheck className="text-[#244EB3]" size={22} />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — orbiting industries */}
        <div className="relative mx-auto flex h-104 w-full max-w-md items-center justify-center">
          <style>{`
            @keyframes orbit-spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes orbit-counter {
              from { transform: translate(-50%, -50%) rotate(0deg); }
              to { transform: translate(-50%, -50%) rotate(-360deg); }
            }
            @keyframes orbit-pulse {
              0%, 100% { transform: scale(1); opacity: 0.35; }
              50% { transform: scale(1.15); opacity: 0.15; }
            }
            .orbit-ring { animation: orbit-spin 34s linear infinite; }
            .orbit-icon { animation: orbit-counter 34s linear infinite; }
            .orbit-halo { animation: orbit-pulse 4s ease-in-out infinite; }
            @media (prefers-reduced-motion: reduce) {
              .orbit-ring, .orbit-icon, .orbit-halo { animation: none !important; }
            }
          `}</style>

          {/* soft pulsing glow */}
          <div
            aria-hidden
            className="orbit-halo absolute h-64 w-64 rounded-full bg-blue-400/30 blur-2xl"
          />

          {/* dashed orbit guide rings */}
          <div
            aria-hidden
            className="absolute h-80 w-80 rounded-full border border-dashed border-blue-200"
          />
          <div
            aria-hidden
            className="absolute h-48 w-48 rounded-full border border-dashed border-blue-100"
          />

          {/* center hub */}
          <div className="relative z-10 flex h-28 w-28 flex-col items-center justify-center gap-1 rounded-full border border-blue-100 bg-white text-center">
            <Building2 size={22} className="text-[#244EB3]" />
            <span className="text-[11px] font-bold leading-tight text-[#102A56]">
              Your
              <br />
              Industry
            </span>
          </div>

          {/* rotating layer carrying each industry icon around the hub */}
          <div className="orbit-ring absolute h-80 w-80">
            {industries.map(({ title, icon: Icon }, i) => {
              const angle = (360 / industries.length) * i;
              return (
                <div
                  key={title}
                  className="absolute left-1/2 top-1/2 h-0 w-0"
                  style={{ transform: `rotate(${angle}deg) translate(10rem)` }}
                >
                  <div className="orbit-icon group absolute flex flex-col items-center">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-100 bg-white text-[#244EB3] shadow-[0_6px_20px_-4px_rgba(16,42,86,0.25)] transition-transform duration-300 group-hover:scale-110">
                      <Icon size={24} />
                    </span>
                    <div className="pointer-events-none absolute top-full z-30 mt-2 w-max max-w-44 scale-95 rounded-xl bg-[#102A56] px-3 py-2 text-center opacity-0 shadow-xl transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
                      <span className="block text-[11px] font-bold leading-tight text-white">
                        {title}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
