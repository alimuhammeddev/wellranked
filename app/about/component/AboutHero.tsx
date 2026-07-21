"use client";

import {
  ArrowRight,
  BadgeCheck,
  Building2,
  FileText,
  Globe,
  MapPin,
  Megaphone,
  Search,
  Star,
} from "lucide-react";
import Link from "next/link";

// The six services orbiting the hub, laid out as points on a hexagon
// (angles at 12, 2, 4, 6, 8, 10 o'clock) so the web reads as balanced,
// not scattered.
const NODES = [
  { label: "Website", icon: Globe, x: 50, y: 10 },
  { label: "Local SEO", icon: Search, x: 84.6, y: 30 },
  { label: "Google Business Profile", icon: MapPin, x: 84.6, y: 70 },
  { label: "Reviews", icon: Star, x: 50, y: 90 },
  { label: "Content", icon: FileText, x: 15.4, y: 70 },
  { label: "Digital Marketing", icon: Megaphone, x: 15.4, y: 30 },
] as const;

export default function AboutHero() {
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
            <Building2 size={16} />
            About Wellranked
          </span>

          <h1 className="mt-5 text-2xl font-extrabold leading-tight text-[#102A56] lg:text-4xl md:text-3xl">
            We Built Wellranked for Business Owners Who Are{" "}
            <span className="text-[#244EB3]">
              Tired of Doing Everything Themselves.
            </span>
          </h1>

          <p className="mt-3 max-w-2xl md:text-lg leading-8 text-gray-600">
            Wellranked was created to give UK small businesses access to the
            kind of joined-up marketing support that's usually only available to
            larger companies. We help businesses stay visible, trusted and
            active online, without the stress of managing everything yourself.
          </p>

          <p className="mt-3 max-w-2xl md:text-lg leading-8 text-gray-600">
            Think of us as your outsourced marketing department. While you focus
            on serving your customers, we look after your website, local SEO,
            Google Business Profile, reviews, content and digital marketing to
            help your business grow.
          </p>

          {/* Buttons */}
          <div className="mt-5 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/growth-audit"
              className="flex items-center justify-center gap-2 rounded-full bg-[#244EB3] px-8 py-4 font-semibold text-white"
            >
              Book Your Free Growth Audit
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#our-values"
              className="rounded-full border border-gray-300 bg-white px-8 py-4 text-center font-semibold text-[#102A56] transition hover:border-[#244EB3] hover:text-[#244EB3]"
            >
              Our Values
            </Link>
          </div>

          {/* Trust Points */}
          <div className="mt-6 space-y-3">
            {[
              "Built specifically for UK small businesses",
              "One trusted partner for your digital marketing",
              "Helping you focus on running your business",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <BadgeCheck className="text-[#244EB3]" size={22} />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="relative mx-auto w-full max-w-110 py-4 lg:max-w-none lg:py-0">
          <div className="relative aspect-square w-full">
            {/* Connecting lines */}
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full overflow-visible"
              aria-hidden
            >
              <defs>
                <linearGradient id="wr-line" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2563eb" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#4338ca" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              {NODES.map((n) => (
                <line
                  key={n.label}
                  x1="50"
                  y1="50"
                  x2={n.x}
                  y2={n.y}
                  stroke="url(#wr-line)"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  strokeDasharray="3 3"
                  className="wr-connector"
                />
              ))}
            </svg>

            {/* Hub */}
            <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
              <div className="relative h-24 w-24 lg:h-28 lg:w-28">
                <span className="absolute inset-0 animate-ping rounded-full bg-blue-400/20 [animation-duration:3s] motion-reduce:hidden" />
                <div className="relative flex h-full w-full items-center justify-center rounded-full bg-[#244EB3] text-3xl font-extrabold text-white shadow-lg shadow-blue-600/20">
                  W
                </div>
              </div>
              <span className="mt-3 text-xs font-bold uppercase tracking-wide text-[#244EB3]">
                Wellranked
              </span>
            </div>

            {/* Satellite nodes */}
            {NODES.map((n) => {
              const Icon = n.icon;
              return (
                <div
                  key={n.label}
                  className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
                  style={{ left: `${n.x}%`, top: `${n.y}%` }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-100 bg-white text-[#244EB3] shadow-sm">
                    <Icon size={18} />
                  </div>
                  <span className="max-w-23 text-center text-xs font-semibold leading-tight text-gray-600">
                    {n.label}
                  </span>
                </div>
              );
            })}
          </div>

          <style>{`
            .wr-connector {
              animation: wr-flow 6s linear infinite;
            }
            @keyframes wr-flow {
              to { stroke-dashoffset: -24; }
            }
            @media (prefers-reduced-motion: reduce) {
              .wr-connector { animation: none; }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};