"use client";

import {
  ArrowRight,
  BadgeCheck,
  BadgePoundSterling,
  TrendingUp,
  ChartNoAxesCombined,
  Wallet,
  Gem,
  ShieldCheck,
  Rocket,
} from "lucide-react";
import Link from "next/link";

const nodes = [
  { x: 50, y: 8 }, // Top
  { x: 68, y: 14 },
  { x: 82, y: 30 },
  { x: 88, y: 50 },
  { x: 82, y: 70 },
  { x: 68, y: 86 },
  { x: 50, y: 92 },
  { x: 32, y: 86 },
  { x: 18, y: 70 },
  { x: 12, y: 50 },
  { x: 18, y: 30 },
  { x: 32, y: 14 },

  // Inner ring
  { x: 50, y: 25 },
  { x: 67, y: 33 },
  { x: 67, y: 67 },
  { x: 50, y: 75 },
  { x: 33, y: 67 },
  { x: 33, y: 33 },
];

// Orbit badges placed on a true circle (computed, not hand-offset) so
// spacing reads as deliberate rather than scattered.
const orbitItems = [
  { text: "£695", icon: <BadgePoundSterling size={16} /> },
  { text: "ROI", icon: <TrendingUp size={16} /> },
  { text: "Growth", icon: <ChartNoAxesCombined size={16} /> },
  { text: "Flexible", icon: <Wallet size={16} /> },
  { text: "Premium", icon: <Gem size={16} /> },
  { text: "Trusted", icon: <ShieldCheck size={16} /> },
  { text: "Scalable", icon: <Rocket size={16} /> },
  { text: "Value", icon: <BadgeCheck size={16} /> },
].map((item, i, arr) => {
  const angle = (i / arr.length) * 2 * Math.PI - Math.PI / 2; // start at top
  const radius = 42; // % of container
  const x = 50 + radius * Math.cos(angle);
  const y = 50 + radius * Math.sin(angle) * 0.92; // slight vertical compression for the card aspect ratio
  return { ...item, x, y };
});

export default function PackagesHero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#F7FAFF] via-white to-[#EEF4FF]">
      {/* Background Blur */}

      <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-start gap-20 lg:px-0 md:px-5 px-5 pb-24 pt-40 lg:grid-cols-2">
        {/* Left */}

        <div>
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#244EB3]">
            Packages & Pricing
          </span>

          <h1 className="mt-3 text-2xl font-extrabold leading-tight text-[#102A56] lg:text-4xl md:text-3xl">
            Simple marketing packages{" "}
            <span className="text-[#244EB3]">
              built for busy business owners.
            </span>
          </h1>

          <p className="mt-3 max-w-2xl md:text-lg leading-8 text-gray-600">
            Choose the level of support your business needs. Every package is
            designed to remove stress, improve trust and help your business
            become easier to find and easier to choose.
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
              href="#pricing"
              className="rounded-full border border-gray-300 bg-white px-8 py-4 text-center font-semibold text-[#102A56] transition hover:border-[#244EB3] hover:text-[#244EB3]"
            >
              Compare Packages
            </Link>
          </div>

          <div className="mt-5 space-y-3">
            {[
              "No long-term contracts",
              "One dedicated marketing team",
              "Clear monthly pricing",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <BadgeCheck size={22} className="text-green-600" />

                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="relative flex items-center justify-center md:min-h-140 min-h-96 rounded-[40px] overflow-hidden">
          {/* Constellation mesh, recolored for the premium navy/gold palette */}
          <svg
            className="absolute inset-0 h-full w-full opacity-[0.35]"
            viewBox="0 0 100 100"
          >
            {/* Outer Ring */}
            {nodes.slice(0, 12).map((node, i) => {
              const next = nodes[(i + 1) % 12];
              return (
                <line
                  key={`outer-${i}`}
                  x1={node.x}
                  y1={node.y}
                  x2={next.x}
                  y2={next.y}
                  stroke="#244EB3"
                  strokeWidth=".3"
                />
              );
            })}

            {/* Outer -> Inner */}
            {[
              [0, 12],
              [1, 13],
              [2, 13],
              [3, 14],
              [4, 14],
              [5, 15],
              [6, 15],
              [7, 16],
              [8, 16],
              [9, 17],
              [10, 17],
              [11, 12],
            ].map(([a, b], i) => (
              <line
                key={`spoke-${i}`}
                x1={nodes[a].x}
                y1={nodes[a].y}
                x2={nodes[b].x}
                y2={nodes[b].y}
                stroke="#244EB3 "
                strokeWidth=".3"
              />
            ))}

            {/* Inner Ring */}
            {[12, 13, 14, 15, 16, 17].map((index, i) => {
              const next = [12, 13, 14, 15, 16, 17][(i + 1) % 6];
              return (
                <line
                  key={`inner-${i}`}
                  x1={nodes[index].x}
                  y1={nodes[index].y}
                  x2={nodes[next].x}
                  y2={nodes[next].y}
                  stroke="#244EB3"
                  strokeWidth=".3"
                />
              );
            })}

            {/* Mesh Cross Connections */}
            {[
              [12, 14],
              [14, 16],
              [16, 12],
              [13, 15],
              [15, 17],
              [17, 13],
              [12, 15],
              [13, 16],
              [14, 17],
            ].map(([a, b], i) => (
              <line
                key={`mesh-${i}`}
                x1={nodes[a].x}
                y1={nodes[a].y}
                x2={nodes[b].x}
                y2={nodes[b].y}
                stroke="#244EB3"
                strokeWidth=".25"
              />
            ))}

            {/* Nodes */}
            {nodes.map((node, i) => (
              <circle key={i} cx={node.x} cy={node.y} r="1" fill="#244EB3" />
            ))}
          </svg>

          {/* Slow rotating gilded ring behind the centerpiece */}
          <div
            className="absolute h-65 w-65 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, #244EB3 40deg, transparent 90deg, transparent 270deg, #6E8CFF 320deg, transparent 360deg)",
              filter: "blur(1px)",
              animation: "packages-orbit-spin 14s linear infinite",
            }}
          />
          <div className="absolute h-59 w-59 rounded-full bg-[#244EB3]" />

          {/* Centerpiece: layered package cards */}
          <div className="relative z-10 flex h-47.5 w-47.5 items-center justify-center">
            <div className="absolute h-37.5 w-37.5 -rotate-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm" />
            <div className="absolute h-37.5 w-37.5 rotate-3 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-sm" />
            <div className="relative flex h-39.5 w-34.5 flex-col items-center justify-center rounded-2xl border border-white/20 bg-linear-to-b from-white/95 to-white/85 shadow-2xl">
              <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-[#244EB3]">
                Most Popular
              </span>
              <span className="mt-2 text-[11px] font-semibold text-[#102A56]">
                Growth
              </span>
              <span className="mt-1 text-xl font-extrabold text-[#244EB3]">
                £695
              </span>
              <span className="text-[10px] text-gray-500">per month</span>
            </div>
          </div>

          {/* Orbiting feature badges, evenly spaced on a computed circle */}
          {orbitItems.map((item) => (
            <div
              key={item.text}
              className="absolute z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-blue-100 bg-white/95 backdrop-blur-sm transition-transform duration-300 hover:scale-110"
              style={{ left: `${item.x}%`, top: `${item.y}%` }}
            >
              <div className="rounded-full bg-[#EEF4FF] p-2 text-[#244EB3]">
                {item.icon}
              </div>
              <span className="mt-1 text-[9px] font-semibold text-[#102A56]">
                {item.text}
              </span>
            </div>
          ))}

          <style>{`
            @keyframes packages-orbit-spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @media (prefers-reduced-motion: reduce) {
              [style*="packages-orbit-spin"] { animation: none !important; }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};