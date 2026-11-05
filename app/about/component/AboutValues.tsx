import {
  Building2,
  HeartHandshake,
  Layers3,
  MessageCircleMore,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Reveal from "../../components/Reveal";

const beliefs = [
  {
    title: "Small Businesses Deserve Better Marketing",
    description:
      "Every independent business should have access to clear, affordable marketing support without the complexity or cost typically associated with large agencies.",
    icon: Building2,
  },
  {
    title: "Marketing Should Reduce Stress",
    description:
      "Running your business is already demanding. Our role is to take marketing off your plate so you can focus on serving customers and growing your business.",
    icon: HeartHandshake,
  },
  {
    title: "Everything Works Better Together",
    description:
      "Your website, SEO, reviews, social media and content deliver stronger results when they're managed as one connected marketing system.",
    icon: Layers3,
  },
  {
    title: "Practical Advice Over Jargon",
    description:
      "We explain what matters in plain English and focus on actions that genuinely improve your visibility, reputation and enquiries.",
    icon: MessageCircleMore,
  },
  {
    title: "The Right System Creates Growth",
    description:
      "Consistent marketing builds trust over time. The right systems help small businesses become the obvious choice in their local area.",
    icon: TrendingUp,
  },
];

export default function AboutValues() {
  return (
    <section id="our-values" className="bg-white md:py-24 py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-0">
        {/* Heading */}
        <Reveal
          className="mx-auto max-w-3xl text-center"
          delay={0.15}
        >
          <span className="rounded-full border border-[#145EEE] text-sm tracking-[0.18em] bg-blue-50 px-4 py-2 font-semibold text-[#145EEE]">
            What We Believe
          </span>

          <h2 className="mt-5 text-2xl font-bold text-[#102A56] md:text-3xl lg:text-4xl">
            The Principles Behind Everything We Do
          </h2>

          <p className="mt-3 leading-8 text-gray-600 md:text-lg">
            WellRanked exists to make digital marketing simpler, more affordable
            and more effective for small businesses. These principles shape
            every recommendation we make and every service we deliver.
          </p>
        </Reveal>

        {/* Beliefs */}
        <div className="mt-12 border-b border-blue-200">
          {beliefs.map(( { title, description, icon: Icon }, i) => (
            <Reveal
              key={title}
              className="group grid gap-4 border-t border-blue-200 py-8 transition-all duration-300 sm:grid-cols-[3.5rem_2.75rem_1fr] sm:items-start sm:gap-8"
              delay={i * 0.1}
            >
              <span className="font-serif text-2xl font-medium text-[#145EEE] lg:text-4xl md:text-3xl">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-blue-50 text-[#145EEE]">
                <Icon size={20} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#145EEE] md:text-xl">
                  {title}
                </h3>

                <p className="mt-2 max-w-2xl leading-7 text-gray-600">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal
          className="relative mt-16 overflow-hidden rounded-4xl border border-blue-100 bg-blue-50 p-6 text-center md:p-14"
          delay={0.15}
        >

          <div className="relative">
            <h2 className="text-xl font-bold text-[#145EEE] sm:text-2xl">
              Our Goal Is Simple
            </h2>

            <p className="mx-auto mt-3 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
              We want every small business to have access to professional
              marketing support without the cost, confusion or complexity of
              traditional agencies. When your business succeeds, we&apos;ve done
              our job.
            </p>

            <Link
              href="/growth-audit"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#145EEE] px-7 py-3.5 font-semibold text-white"
            >
              Book Your Free Growth Audit
              <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};