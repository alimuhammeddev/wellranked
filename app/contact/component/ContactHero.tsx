"use client";

import { ArrowRight, BadgeCheck, Mail, Phone, Globe } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Dot grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(36,78,179,0.18) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 35%, black 40%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 35%, black 40%, transparent 95%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl md:gap-16 gap-10 px-5 pb-24 pt-40 lg:grid-cols-2 lg:px-0">
        {/* Left */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#244EB3]">
            <Mail size={16} />
            Contact Wellranked
          </span>

          <h1 className="mt-5 text-2xl font-extrabold leading-tight text-[#102A56] lg:text-4xl md:text-3xl">
            Talk to <span className="text-[#244EB3]">Wellranked</span>
          </h1>

          <p className="mt-3 max-w-xl md:text-lg leading-8 text-gray-600">
            Whether you need a better website, stronger Google visibility, more
            reviews, regular content or a complete marketing partner, we'd be
            happy to review your business and recommend the best next step.
          </p>

          <div className="mt-5 space-y-3">
            {[
              "Free Growth Audit",
              "Tailored recommendations",
              "No obligation consultation",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <BadgeCheck className="text-[#244EB3]" size={22} />

                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 space-y-5">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-blue-50 p-3">
                <Mail className="text-[#244EB3]" size={20} />
              </div>

              <div>
                <p className="font-semibold text-[#244EB3]">Email</p>

                <p className="text-gray-600">hello@wellranked.co.uk</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-blue-50 p-3">
                <Phone className="text-[#244EB3]" size={20} />
              </div>

              <div>
                <p className="font-semibold text-[#244EB3]">Phone</p>

                <p className="text-gray-600">Available during business hours</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-blue-50 p-3">
                <Globe className="text-[#244EB3]" size={20} />
              </div>

              <div>
                <p className="font-semibold text-[#244EB3]">Location</p>

                <p className="text-gray-600">
                  Supporting businesses across the UK
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="rounded-3xl border border-gray-200 bg-white p-5 md:p-8">
          <h2 className="md:text-2xl text-xl font-bold text-[#102A56]">
            Send an Enquiry
          </h2>

          <p className="mt-2 text-gray-600">
            Complete the form below and we'll get back to you as soon as
            possible.
          </p>

          <form className="mt-8 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <Input label="Name" />
              <Input label="Business Name" />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <Input label="Email" type="email" />
              <Input label="Phone" />
            </div>

            <Input label="Website" />

            <Input label="Business Type" />

            <div>
              <label className="mb-2 block font-medium text-[#102A56]">
                Message
              </label>

              <textarea
                rows={8}
                className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#244EB3]"
                placeholder="Tell us a little about your business..."
              />
            </div>

            <button className="flex w-full items-center justify-center gap-2 rounded-full bg-[#244EB3] py-4 font-semibold text-white">
              Send Enquiry
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Input({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label className="mb-2 block font-medium text-[#102A56]">{label}</label>

      <input
        type={type}
        placeholder={label}
        className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
      />
    </div>
  );
}
