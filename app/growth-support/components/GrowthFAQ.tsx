"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Can I buy Growth Support without a marketing package?",
    answer:
      "Yes. Growth Support can be purchased on its own or added to WEB, GROWTH or ACCELERATOR.",
  },
  {
    question: "Which channels can you manage?",
    answer:
      "Depending on the selected package, support can cover agreed channels such as Instagram, Facebook, WhatsApp Business or website enquiries.",
  },
  {
    question: "Will you answer every question without me?",
    answer:
      "We handle approved, repeatable enquiries. Bespoke quotations, complaints, refunds and sensitive decisions are escalated to you.",
  },
  {
    question: "Do you answer telephone calls?",
    answer:
      "Telephone answering is not included in the standard packages unless specifically agreed and quoted.",
  },
  {
    question: "What happens if I exceed my monthly allowance?",
    answer:
      "We will notify you and offer an additional conversation block or recommend the next package.",
  },
  {
    question: "Can you take cake or catering orders?",
    answer:
      "We can capture structured order information, confirm approved details and organise the enquiry. Final availability, bespoke pricing or exceptions remain subject to your rules.",
  },
  {
    question: "Do you create the videos for me?",
    answer:
      "We edit footage you provide. Filming and on-site production are separate services.",
  },
  {
    question: "Can I add more videos to my package?",
    answer: "Yes. Additional monthly editing bundles are available.",
  },
  {
    question: "Will video editing make my content go viral?",
    answer:
      "No agency can guarantee virality. The service helps you publish more consistently with clearer, professional content.",
  },
  {
    question: "Is my customer information protected?",
    answer:
      "We use controlled account access, confidentiality procedures and agreed data-handling processes. Full details are provided during onboarding.",
  },
];

export default function GrowthFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>();

  return (
    <section className="bg-[#f5f5f5] py-20">
      <div className="mx-auto max-w-7xl lg:px-0 md:px-5 px-5">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center rounded-full border border-[#145EEE] bg-blue-50 px-4 py-1.5 font-bold uppercase tracking-[0.18em] text-[#145EEE]">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-2xl font-bold leading-tight text-[#102A56] md:text-3xl lg:text-4xl">
            Everything you need to know
            <span className="block text-[#145EEE]">about Growth Support.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 md:text-lg">
            Here are answers to the questions we receive most often about our
            Growth Support service.
          </p>
        </motion.div>

        <div className="mt-14 grid items-start gap-5 lg:grid-cols-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.06 }}
                className={`overflow-hidden rounded-3xl border bg-white transition-shadow ${
                  isOpen
                    ? "border-[#145EEE]/30 shadow-[0_12px_30px_-12px_rgba(20,94,238,0.25)]"
                    : "border-blue-100 hover:border-blue-200"
                }`}
              >
                {/* Question — styled as an incoming enquiry */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-start gap-3 p-5 text-left"
                >
                  <span
                    className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white transition-colors ${
                      isOpen ? "bg-[#145EEE]" : "bg-[#102A56]"
                    }`}
                  >
                    Q
                  </span>

                  <span className="flex-1 rounded-2xl rounded-tl-sm bg-[#F8FAFF] px-4 py-3 md:text-[15px] text-sm font-semibold text-[#102A56]">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={18}
                    className={`mt-2 shrink-0 text-[#145EEE] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer — styled as the reply */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="ml-[35px] h-3 w-px border-l border-dashed border-blue-200" />

                      <div className="flex items-start gap-3 px-5 pb-5">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[11px] font-bold text-[#145EEE]">
                          A
                        </span>

                        <p className="flex-1 rounded-2xl rounded-tl-sm border border-blue-100 bg-blue-50/60 px-4 py-3 text-sm leading-7 text-gray-600">
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
};