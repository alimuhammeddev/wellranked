"use client";

import { Search, Globe, Megaphone, BarChart3, Sparkles } from "lucide-react";

const icons = [Search, Globe, Megaphone, BarChart3, Sparkles];

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-[#10224D]">
      <div className="relative flex items-center justify-center w-72 h-72">
        {/* Orbit */}
        <div className="absolute w-60 h-60 animate-spin-slow">
          {icons.map((Icon, index) => {
            const radius = 80; // Distance from the W
            const angle = (index / icons.length) * (2 * Math.PI) - Math.PI / 2;

            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <div
                key={index}
                className="absolute flex h-11 w-11 items-center justify-center rounded-full bg-white/10 border border-white/20"
                style={{
                  left: `calc(50% + ${x}px - 22px)`,
                  top: `calc(50% + ${y}px - 22px)`,
                }}
              >
                <Icon className="w-5 h-5 text-white" />
              </div>
            );
          })}
        </div>

        {/* Center Logo */}
        <div className="relative z-10">
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#244EB3] text-white text-3xl font-bold">
            W
          </div>
        </div>
      </div>
    </div>
  );
}
