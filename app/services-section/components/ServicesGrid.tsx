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
    href: "/services/website-design",
    icon: Globe,
  },
  {
    title: "Local SEO",
    description:
      "Improve your visibility in local search results with technical optimisation, service pages, citations and local SEO strategies that help customers find you.",
    cta: "Get My Free SEO Audit",
    href: "/services/local-seo",
    icon: Search,
  },
  {
    title: "Google Business Profile",
    description:
      "Optimise and manage your Google Business Profile with regular updates, posts, reviews and local visibility improvements.",
    cta: "Improve My Google Profile",
    href: "/services/google-business-profile",
    icon: MapPinned,
  },
  {
    title: "Review & Reputation Management",
    description:
      "Build trust before customers even contact you with review generation, monitoring and professional response management.",
    cta: "Grow My Reviews",
    href: "/services/reputation-management",
    icon: Star,
  },
  {
    title: "Graphics & Social Content",
    description:
      "Keep your business active online with professionally designed graphics and consistent social media content every week.",
    cta: "Get Content Support",
    href: "/services/social-content",
    icon: Palette,
  },
  {
    title: "Email Marketing",
    description:
      "Stay connected with existing customers through newsletters, promotions and automated email campaigns that generate repeat business.",
    cta: "Start Email Campaigns",
    href: "/services/email-marketing",
    icon: Mail,
  },
  {
    title: "Meta & Google Ads Management",
    description:
      "Launch targeted advertising campaigns designed to increase visibility, enquiries and return on investment.",
    cta: "Accelerate My Growth",
    href: "/services/paid-ads",
    icon: Megaphone,
  },
  {
    title: "Marketing Concierge",
    description:
      "Need a website update, flyer, campaign or promotion? Think of us as your outsourced marketing department.",
    cta: "Let Us Handle It",
    href: "/services/marketing-concierge",
    icon: BriefcaseBusiness,
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="relative overflow-hidden bg-white ">
      {/* Background Blur */}
      <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-indigo-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-0">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            Our Services
          </span>

          <h2 className="mt-4 text-2xl font-extrabold leading-tight text-[#102A56] lg:text-4xl md:text-3xl">
            Everything You Need
            <span className="block text-blue-600">
              To Grow Your Business Online
            </span>
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
                className="group flex h-full flex-col rounded-3xl border border-gray-200 bg-white md:p-8 p-5 transition-all duration-300  hover:border-blue-600"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-blue-600">
                  <Icon
                    size={24}
                    className="text-blue-600 transition group-hover:text-white"
                  />
                </div>

                {/* Content */}
                <h3 className="mt-3 text-xl font-bold text-[#102A56]">
                  {service.title}
                </h3>

                <p className="mt-3 grow leading-7 text-gray-600">
                  {service.description}
                </p>

                {/* CTA */}
                <Link
                  href={service.href}
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-blue-600 transition-all group-hover:gap-3"
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

      {/* Bottom Banner */}
      <div className="mt-20 relative overflow-hidden bg-linear-to-r from-[#102A56] via-blue-700 to-indigo-700 md:p-20 p-5 text-center text-white">
        <h3 className="md:text-3xl text-xl font-bold">
          Not Sure Which Service You Need?
        </h3>

        <p className="mx-auto mt-3 max-w-2xl text-blue-100 leading-8">
          Every business is different. Book a free Growth Audit and we'll
          recommend the services that will have the biggest impact on your
          business.
        </p>

        <Link
          href="/contact"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[#102A56] transition"
        >
          Book Your Free Growth Audit
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
