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
  LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

interface Service {
  title: string;
  description: string;
  cta: string;
  href: string;
  icon: LucideIcon;
}

const services: Service[] = [
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

function Perforation({ position }: { position: number }) {
  return (
    <div
      className="absolute left-0 right-0 z-10"
      style={{ top: `${position}%` }}
    >
      <div className="absolute -left-3 h-6 w-6 -translate-y-1/2 rounded-full bg-white" />
      <div className="absolute -right-3 h-6 w-6 -translate-y-1/2 rounded-full bg-white" />
      <div className="mx-4 border-t-2 border-dashed border-blue-50" />
    </div>
  );
}

function ServiceTicket({
  service,
  index,
  rotate,
  color,
}: {
  service: Service;
  index: number;
  rotate: string;
  color: string;
}) {
  const Icon = service.icon;

  return (
    <motion.div
      className={`group relative w-full ${rotate} transition-transform duration-500 hover:rotate-0 hover:-translate-y-2`}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    >
      <div
        className="relative flex h-full flex-col overflow-visible rounded-[22px]"
        style={{ backgroundColor: color }}
      >
        {/* Punched corner holes */}
        <div className="absolute left-3 top-3 h-2 w-2 rounded-full bg-white" />
        <div className="absolute right-3 top-3 h-2 w-2 rounded-full bg-white" />

        {/* Icon + title section */}
        <div className="px-6 pb-8 pt-7 md:px-7">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
            <Icon size={20} style={{ color }} />
          </div>

          <h3 className="mt-4 text-lg font-bold leading-snug text-white md:text-xl">
            {service.title}
          </h3>
        </div>

        <Perforation position={38} />

        {/* Description + CTA section */}
        <div className="relative flex flex-1 flex-col px-6 pb-8 pt-5 md:px-7">
          <p className="grow text-[14px] leading-relaxed text-white mb-10">
            {service.description}
          </p>

          <Link
            href={service.href}
            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white transition-all group-hover:gap-3"
          >
            {service.cta}
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesGrid() {
  const rotations = [
    "rotate-[-1.5deg]",
    "rotate-[1.5deg]",
    "rotate-[-1deg]",
    "rotate-[1deg]",
  ];

  // A small palette of harmonizing shades built from the brand blue (#145EEE)
  // and navy (#102A56) — same family, varied depth, so cards feel related
  // rather than identical.
  const colors = ["#145EEE", "#102A56", "#1D4ED8", "#3652C4"];

  return (
    <section id="services" className="relative overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-0 md:mt-20 mt-10 md:pb-24 pb-10">
        {/* Heading */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: "easeOut",
          }}
        >
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#145EEE] tracking-[0.18em]">
            Our Services
          </span>

          <h2 className="mt-4 text-2xl font-extrabold leading-tight text-[#102A56] lg:text-4xl md:text-3xl">
            Everything You Need{" "}
            <span className="text-[#145EEE]">To Grow Your Business Online</span>
          </h2>

          <p className="mt-3 md:text-lg leading-8 text-gray-600">
            From websites and SEO to paid advertising and ongoing marketing
            support, our services work together to help your business get found,
            build trust and generate more enquiries.
          </p>
        </motion.div>

        {/* Services */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-2">
          {services.map((service, index) => (
            <ServiceTicket
              key={service.title}
              service={service}
              index={index}
              rotate={rotations[index % rotations.length]}
              color={colors[index % colors.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};