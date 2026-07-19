"use client";

import { ArrowRight, BadgeCheck, } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Essential",
    price: "£395",
    description: "Professional Online Presence",
  },
  {
    name: "Growth Partner",
    price: "£695",
    description: "Most Popular",
    featured: true,
  },
  {
    name: "Accelerator",
    price: "£995",
    description: "Scale Your Growth",
  },
];

export default function PackagesHero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#F7FAFF] via-white to-[#EEF4FF]">
      {/* Background Blur */}

      <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-start gap-20 lg:px-0 md:px-5 px-5 pb-24 pt-40 lg:grid-cols-2">

        {/* Left */}

        <div>

          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            Packages & Pricing
          </span>

          <h1 className="mt-3 text-2xl font-extrabold leading-tight text-[#102A56] lg:text-4xl md:text-3xl">
            Simple marketing packages
            <span className="block text-blue-600">
              built for busy business owners.
            </span>
          </h1>

          <p className="mt-3 max-w-2xl md:text-lg leading-8 text-gray-600">
            Choose the level of support your business needs. Every
            package is designed to remove stress, improve trust and
            help your business become easier to find and easier to
            choose.
          </p>

          <div className="mt-5 flex flex-col gap-4 sm:flex-row">

            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              Book Your Free Growth Audit
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#pricing"
              className="rounded-full border border-gray-300 bg-white px-8 py-4 text-center font-semibold text-[#102A56] transition hover:border-blue-600 hover:text-blue-600"
            >
              Compare Packages
            </Link>

          </div>

          <div className="mt-5 space-y-3">

            {[
              "No long-term contracts",
              "One dedicated marketing team",
              "Clear monthly pricing",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <BadgeCheck
                  size={22}
                  className="text-green-600"
                />

                <span className="text-gray-700">
                  {item}
                </span>
              </div>
            ))}

          </div>

        </div>

        {/* Right */}

        <div className="rounded-3xl border border-gray-200 bg-white md:p-8 p-5">

          <h3 className="text-xl font-bold text-[#102A56]">
            Choose Your Growth Plan
          </h3>

          <p className="mt-2 text-gray-500">
            Upgrade whenever your business grows.
          </p>

          <div className="mt-8 space-y-4">

            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-5 transition-all ${
                  plan.featured
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200"
                }`}
              >
                <div className="flex items-center justify-between">

                  <div>
                    <div className="flex items-center gap-3">

                      <h4 className="font-semibold text-[#102A56]">
                        {plan.name}
                      </h4>

                      {plan.featured && (
                        <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                          Most Popular
                        </span>
                      )}

                    </div>

                    <p className="mt-1 text-sm text-gray-500">
                      {plan.description}
                    </p>

                  </div>

                  <div className="text-right">

                    <p className="text-3xl font-bold text-[#102A56]">
                      {plan.price}
                    </p>

                    <span className="text-sm text-gray-500">
                      /month
                    </span>

                  </div>

                </div>
              </div>
            ))}

          </div>

          <div className="mt-8 rounded-2xl bg-[#F8FAFC] p-5">

            <p className="text-sm text-gray-500">
              ✔ No hidden fees
            </p>

            <p className="mt-2 text-sm text-gray-500">
              ✔ Flexible monthly packages
            </p>

            <p className="mt-2 text-sm text-gray-500">
              ✔ Upgrade anytime as your business grows
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};