"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowRight, } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    "Home",
    "Packages",
    "Services",
    "Industries",
    "Why Wellranked",
    "About",
    "Contact",
  ];

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
        scrolled ? "top-0" : "top-5"
      }`}
    >
      {/* Navbar Background */}
      <div
        className={`bg-[#0A0A0A]/80 backdrop-blur-3xl border border-[#D4AF37]/15 shadow-[0_8px_30px_rgba(0,0,0,.35)] transition-all duration-700 ease-in-out ${
          scrolled ? "rounded-none" : "mx-4 rounded-full"
        }`}
      >
        {/* Navbar Content */}
        <div className="mx-auto flex h-20 max-w-337.5 items-center justify-between md:px-0 px-5">
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 shadow-lg shadow-[#D4AF37]/20">
              W
            </div>

            <div>
              <h1 className="text-white">Wellranked</h1>

              <p className="text-gray-400 text-sm">Visibility • Growth • Authority</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-12 lg:flex">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="group relative text-[15px] font-medium text-zinc-300 transition-colors duration-300 hover:text-zinc-100"
              >
                {link}
                <span className="absolute -bottom-2 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-zinc-300 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <Link
            href="/free-growth-audit"
            className="group relative hidden items-center justify-center overflow-hidden rounded-full bg-white/90 px-7 py-3 lg:flex"
          >
            <span className="relative z-10 flex items-center gap-2 font-semibold text-gray-900">
              Book Free Growth Audit
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </span>
          </Link>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="mobile menu"
            className="rounded-full p-2 text-zinc-300 transition hover:bg-orange-500/10 lg:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          open ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`bg-[#0A0A0A]/80 backdrop-blur-3xl border border-[#D4AF37]/15 shadow-[0_8px_30px_rgba(0,0,0,.35)] p-6 transition-all duration-700 ${
            scrolled ? "rounded-none" : "mx-4 mt-4 rounded-3xl"
          }`}
        >
          <div className="mx-auto max-w-7xl">
            <nav className="flex flex-col gap-5">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-zinc-300 transition-all duration-300 hover:translate-x-2 hover:text-zinc-100"
                >
                  {link}
                </a>
              ))}

              <a
                href="#"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-white/90 py-3 font-bold text-gray-900"
              >
                Book Free Growth Audit
                <ArrowRight size={18} />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
