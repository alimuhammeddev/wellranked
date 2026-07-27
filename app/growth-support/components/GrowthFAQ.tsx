"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";

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
          className="mx-auto max-w-3xl text-center"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
        >
          <span className="inline-flex rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-[#059669]">
            Frequently Asked Questions
          </span>

          <h2 className="mt-3 text-2xl font-bold text-[#102A56] md:text-3xl lg:text-4xl">
            Everything you need to know
            <span className="block text-[#059669]">about Growth Support.</span>
          </h2>

          <p className="mt-4 text-gray-600 md:text-lg leading-8">
            Here are answers to the questions we receive most often about our
            Growth Support service.
          </p>
        </motion.div>

        <div className="mt-10 grid items-start gap-4 lg:grid-cols-2">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="overflow-hidden rounded-3xl border border-green-100 bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <h3 className="md:text-lg font-semibold text-[#102A56]">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`transition duration-300 ${
                    openIndex === index ? "rotate-180 text-[#059669]" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <p className="border-t border-gray-100 px-6 py-6 leading-8 text-gray-600">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
