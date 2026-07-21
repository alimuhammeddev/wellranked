"use client";

import { useState } from "react";
import { ChevronDown, MessageCircleQuestion, ArrowRight } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Do I need to already have a website?",
    answer:
      "No. If you don't already have a website, we can design and build one as part of your package. If you have an existing website, we'll manage, improve and keep it updated so it continues to support your business.",
  },
  {
    question: "Do you guarantee first page rankings?",
    answer:
      "We use proven local SEO, Google Business Profile optimisation, content improvements and website best practices to improve your visibility. However, rankings depend on factors such as competition, location, website history and search demand, so we don't make unrealistic guarantees.",
  },
  {
    question: "Is ad spend included?",
    answer:
      "No. If your package includes advertising management, we'll handle the campaigns, but the advertising budget itself is billed separately unless otherwise agreed in writing.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "We'll clearly explain your package terms during onboarding. We recommend a minimum commitment period to give your marketing strategy enough time to deliver meaningful results for your business.",
  },
  {
    question: "Who is Wellranked best for?",
    answer:
      "Wellranked is built for UK small businesses, sole traders and independent companies looking for help with website management, Google visibility, reviews, graphics, social media content and lead generation.",
  },
  {
    question: "Will I need to provide all the content?",
    answer:
      "No. We use a simple onboarding questionnaire along with competitor research to create website copy, service pages and marketing content that reflects your business.",
  },
  {
    question: "Do you manage social media completely?",
    answer:
      "Our Growth Partner and Accelerator packages include graphics-based social posting. Full social media management, video creation and influencer campaigns can be discussed as additional services.",
  },
  {
    question: "How quickly can we start?",
    answer:
      "Once we've received your onboarding information and the required account access, we'll begin setup and delivery based on your chosen package.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>();

  return (
    <section className="relative overflow-hidden py-14 md:py-24">
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-0">
        {/* LEFT */}
        <div className="h-fit lg:sticky lg:top-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#244EB3]">
            <MessageCircleQuestion size={16} />
            Frequently Asked Questions
          </span>

          <h2 className="mt-3 text-2xl font-bold leading-tight text-[#102A56] lg:text-4xl md:text-[3xl]">
            Everything You Need{" "}
            <span className="text-[#244EB3]">Before You Get Started</span>
          </h2>

          <p className="mt-2 text-lg leading-8 text-slate-600">
            We've answered the questions we're asked most often by business
            owners. If you can't find what you're looking for, our team is
            always happy to help.
          </p>

          {/* CTA */}

          <div className="relative mt-5 overflow-hidden rounded-3xl bg-[#244EB3] md:p-8 p-5 text-white">
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-cyan-300/10 blur-2xl" />

            <div className="relative">
              <h3 className="text-2xl font-bold">Still Have Questions?</h3>

              <p className="mt-2 leading-8 text-blue-100">
                We'd be happy to discuss your business, recommend the right
                package and answer any questions before you get started.
              </p>

              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#244EB3]"
              >
                Contact Our Team
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT */}

        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`group relative overflow-hidden rounded-3xl border bg-white/90 border-blue-200
                ${
                  isOpen
                    ? "border-blue-300"
                    : "border-blue-200"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="relative flex w-full items-center justify-between px-5 py-3 text-left"
                >
                  <div className="flex items-center gap-5">
                    {/* Number */}
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                        isOpen
                          ? "bg-[#244EB3] text-white"
                          : "bg-blue-50 text-[#244EB3]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <h3 className="md:text-lg font-semibold tracking-tight text-[#244EB3]">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Chevron */}

                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-[#244EB3] text-white"
                        : "bg-blue-50 text-[#244EB3]"
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {/* Content */}

                <div
                  className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-slate-100 md:px-7 px-5 pb-7 pt-5 text-[15px] leading-8 text-slate-600">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
