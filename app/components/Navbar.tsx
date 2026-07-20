"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
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
    { name: "Home", href: "/" },
    { name: "Packages", href: "/package-section" },
    { name: "Services", href: "/services-section" },
    { name: "Industries", href: "/industries" },
    { name: "Why Wellranked", href: "/why-wellranked" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
        scrolled ? "top-0" : "top-5"
      }`}
    >
      {/* Navbar Background */}
      <div
        className={`bg-white/80 backdrop-blur-3xl border border-blue-100/80 shadow-[0_8px_30px_rgba(16,42,86,0.08)] transition-all duration-700 ease-in-out ${
          scrolled ? "rounded-none" : "mx-4 rounded-full"
        }`}
      >
        {/* Navbar Content */}
        <div className="mx-auto flex h-20 max-w-337.5 items-center justify-between md:px-5 px-5">
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#244EB3] text-white font-bold shadow-lg shadow-blue-200">
              W
            </div>

            <div>
              <h1 className="text-[#244EB3] font-bold">Wellranked</h1>

              <p className="text-gray-500 text-sm">
                Visibility • Growth • Authority
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-12 lg:flex">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative text-[15px] font-medium text-[#102A56] transition-colors duration-300 hover:text-[#244EB3]"
              >
                {link.name}
                <span className="absolute -bottom-2 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#244EB3] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            href="/growth-audit"
            className="group relative hidden items-center justify-center overflow-hidden rounded-full bg-[#244EB3] px-7 py-3 shadow-blue-200 lg:flex"
          >
            <span className="relative z-10 flex items-center gap-2 font-semibold text-white">
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
            className="rounded-full p-2 text-[#102A56] transition hover:bg-blue-50 lg:hidden"
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
          className={`bg-white/90 backdrop-blur-3xl border border-blue-100 shadow-[0_8px_30px_rgba(16,42,86,0.08)] p-6 transition-all duration-700 ${
            scrolled ? "rounded-none" : "mx-4 mt-4 rounded-3xl"
          }`}
        >
          <div className="mx-auto max-w-7xl">
            <nav className="flex flex-col gap-5">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-[#102A56] transition-all duration-300 hover:translate-x-2 hover:text-[#244EB3]"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/growth-audit"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#244EB3] py-3 font-bold text-white shadow-sm shadow-blue-200"
              >
                Book Free Growth Audit
                <ArrowRight size={18} />
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
