"use client";

import { useState } from "react";
import { ChevronDown, MessageCircleQuestion, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
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
    <section className="relative overflow-hidden py-14 md:py-24 bg-white">
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-0">
        {/* LEFT */}
        <motion.div
          className="h-fit lg:sticky lg:top-24"
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
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#145EEE]">
            <MessageCircleQuestion size={16} />
            Frequently Asked Questions
          </span>

          <h2 className="mt-3 text-2xl font-bold leading-tight text-[#102A56] lg:text-4xl md:text-3xl">
            Everything You Need{" "}
            <span className="text-[#145EEE]">Before You Get Started</span>
          </h2>

          <p className="mt-2 md:text-lg leading-8 text-slate-600">
            We've answered the questions we're asked most often by business
            owners. If you can't find what you're looking for, our team is
            always happy to help.
          </p>

          {/* CTA */}

          <div className="relative mt-5 overflow-hidden rounded-3xl bg-[#145EEE] md:p-8 p-5 text-white">
            <div className="relative">
              <h3 className="md:text-2xl text-xl font-bold">
                Still Have Questions?
              </h3>

              <p className="mt-2 leading-8 text-white">
                We'd be happy to discuss your business, recommend the right
                package and answer any questions before you get started.
              </p>

              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#145EEE]"
              >
                Contact Our Team
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — Q&A conversation thread */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.06 }}
                className={`overflow-hidden rounded-3xl border bg-white transition-shadow ${
                  isOpen
                    ? "border-[#145EEE]/30 shadow-[0_12px_30px_-12px_rgba(20,94,238,0.25)]"
                    : "border-blue-100 hover:border-blue-200"
                }`}
              >
                {/* Question — incoming enquiry */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-start gap-3 p-5 text-left"
                >
                  <span
                    className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white transition-colors ${
                      isOpen ? "bg-[#145EEE]" : "bg-[#102A56]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex-1 rounded-2xl rounded-tl-sm bg-[#F8FAFF] px-4 py-3 md:text-lg font-semibold tracking-tight text-[#145EEE]">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={18}
                    className={`mt-2 shrink-0 text-[#145EEE] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer — the reply */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="ml-8.75 h-3 w-px border-l border-dashed border-blue-200" />

                      <div className="flex items-start gap-3 px-5 pb-5">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[11px] font-bold text-[#145EEE]">
                          A
                        </span>

                        <p className="flex-1 rounded-2xl rounded-tl-sm border border-blue-100 bg-blue-50/60 px-4 py-3 text-[15px] leading-8 text-slate-600">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
