"use client";

import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Search,
  MapPinned,
  Star,
  Palette,
  Mail,
  Megaphone,
  BriefcaseBusiness,
} from "lucide-react";

const services = [
  {
    title: "Website Design & Management",
    description:
      "Professional websites that build trust, explain your services clearly and turn visitors into enquiries. We also provide ongoing updates, maintenance and improvements.",
    cta: "Improve My Website",
    href: "/growth-audit",
    icon: Globe,
  },
  {
    title: "Local SEO",
    description:
      "Improve your visibility in local search results with technical optimisation, service pages, citations and local SEO strategies that help customers find you.",
    cta: "Get My Free SEO Audit",
    href: "/growth-audit",
    icon: Search,
  },
  {
    title: "Google Business Profile",
    description:
      "Optimise and manage your Google Business Profile with regular updates, posts, reviews and local visibility improvements.",
    cta: "Improve My Google Profile",
    href: "/growth-audit",
    icon: MapPinned,
  },
  {
    title: "Review & Reputation Management",
    description:
      "Build trust before customers even contact you with review generation, monitoring and professional response management.",
    cta: "Grow My Reviews",
    href: "/growth-audit",
    icon: Star,
  },
  {
    title: "Graphics & Social Content",
    description:
      "Keep your business active online with professionally designed graphics and consistent social media content every week.",
    cta: "Get Content Support",
    href: "/growth-audit",
    icon: Palette,
  },
  {
    title: "Email Marketing",
    description:
      "Stay connected with existing customers through newsletters, promotions and automated email campaigns that generate repeat business.",
    cta: "Start Email Campaigns",
    href: "/growth-audit",
    icon: Mail,
  },
  {
    title: "Meta & Google Ads Management",
    description:
      "Launch targeted advertising campaigns designed to increase visibility, enquiries and return on investment.",
    cta: "Accelerate My Growth",
    href: "/growth-audit",
    icon: Megaphone,
  },
  {
    title: "Marketing Concierge",
    description:
      "Need a website update, flyer, campaign or promotion? Think of us as your outsourced marketing department.",
    cta: "Let Us Handle It",
    href: "/growth-audit",
    icon: BriefcaseBusiness,
  },
];

// Subtle dot-grid pattern, sits behind the top-right corner of each card.
function DotGrid() {
  const cols = 8;
  const rows = 6;
  const spacing = 18;

  const dots = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push({ x: c * spacing + 6, y: r * spacing + 6 });
    }
  }

  return (
    <svg
      viewBox="0 0 150 110"
      preserveAspectRatio="xMaxYMin meet"
      className="pointer-events-none absolute -right-2 -top-2 h-32 w-40 opacity-[0.12] transition-all duration-500 ease-out group-hover:opacity-[0.22]"
      aria-hidden="true"
    >
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={1.6} fill="#244EB3" />
      ))}
    </svg>
  );
}

function CornerRings() {
  return (
    <svg
      viewBox="0 0 160 160"
      className="pointer-events-none absolute -right-10 -top-10 h-30 w-30 transition-all duration-500 ease-out opacity-[0.25]"
      aria-hidden="true"
    >
      <circle
        cx="80"
        cy="80"
        r="78"
        fill="none"
        stroke="#244EB3"
        strokeWidth="1"
      />
      <circle
        cx="80"
        cy="80"
        r="54"
        fill="none"
        stroke="#244EB3"
        strokeWidth="1"
      />
    </svg>
  );
}

export default function ServicesGrid() {
  return (
    <section id="services" className="relative overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-0 md:mt-20 mt-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#244EB3]">
            Our Services
          </span>

          <h2 className="mt-4 text-2xl font-extrabold leading-tight text-[#102A56] lg:text-4xl md:text-3xl">
            Everything You Need{" "}
            <span className="text-[#244EB3]">To Grow Your Business Online</span>
          </h2>

          <p className="mt-3 md:text-lg leading-8 text-gray-600">
            From websites and SEO to paid advertising and ongoing marketing
            support, our services work together to help your business get found,
            build trust and generate more enquiries.
          </p>
        </div>

        {/* Services */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white md:p-8 p-5 border-blue-200"
              >
                <CornerRings />

                {/* Icon */}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ring-inset transition-all duration-300 bg-[#244EB3] ring-[#244EB3]">
                  <Icon size={24} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="relative mt-3 text-xl font-bold text-[#244EB3]">
                  {service.title}
                </h3>

                <p className="relative mt-3 grow leading-7 text-gray-600">
                  {service.description}
                </p>

                {/* CTA */}
                <Link
                  href={service.href}
                  className="relative mt-5 inline-flex items-center gap-2 font-semibold text-[#244EB3] transition-all group-hover:gap-3"
                >
                  {service.cta}

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
