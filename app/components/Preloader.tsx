"use client";

import { Search, Globe, Megaphone, BarChart3, Sparkles } from "lucide-react";
import Image from "next/image";
import icon from "./assets/icon.svg";

const icons = [Search, Globe, Megaphone, BarChart3, Sparkles];
const SWEEP_DURATION = 5;

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-[#145EEE] overflow-hidden">
      {/* Ambient depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2266ff_0%,#0f4dd1_70%)]" />

      <div className="relative flex items-center justify-center w-72 h-72">
        {/* Rotating radar sweep, sits behind the icons */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from -90deg, rgba(255,255,255,0.35) 0deg, rgba(255,255,255,0) 45deg 315deg, rgba(255,255,255,0.35) 360deg)",
            animation: `sweep-rotate ${SWEEP_DURATION}s linear infinite`,
          }}
        />

        {/* Static ring guide (subtle, gives the radar a "dish") */}
        <div className="absolute w-60 h-60 rounded-full border border-white/15" />

        {/* Icons — fixed positions, gentle float, brighten as sweep passes */}
        {icons.map((Icon, index) => {
          const radius = 96;
          const angle = (index / icons.length) * 2 * Math.PI - Math.PI / 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div
              key={index}
              className="absolute flex h-11 w-11 items-center justify-center rounded-full bg-white/10 border border-white/25 backdrop-blur-sm"
              style={{
                left: `calc(50% + ${x}px - 22px)`,
                top: `calc(50% + ${y}px - 22px)`,
                animation: `icon-float 3s ease-in-out ${index * 0.25}s infinite`,
              }}
            >
              <Icon className="w-5 h-5 text-white" />
            </div>
          );
        })}

        {/* Ping rings emanating from the logo */}
        {[0, 0.6, 1.2].map((delay) => (
          <div
            key={delay}
            className="absolute h-20 w-20 rounded-3xl border-2 border-white/40"
            style={{ animation: `radar-ping 1.8s ease-out ${delay}s infinite` }}
          />
        ))}

        {/* Center logo — white plate so a blue logo actually shows up */}
        <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] p-3">
          <Image
            src={icon}
            alt="Logo"
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      {/* Loading label */}
      <div className="absolute bottom-16 text-white/70 text-xs tracking-[0.3em] uppercase">
        Loading
      </div>

      <style>{`
        @keyframes sweep-rotate {
          to { transform: rotate(360deg); }
        }
        @keyframes icon-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes radar-ping {
          0% { transform: scale(0.7); opacity: 0.6; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>
    </div>
  );
};