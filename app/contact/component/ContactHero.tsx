"use client";

import { useState } from "react";
import { ArrowRight, BadgeCheck, Mail, Phone, Globe, Loader2 } from "lucide-react";

export default function ContactHero() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    website: "",
    businessType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          subject: `New enquiry from ${formData.fullName} — ${formData.businessName}`,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setStatusMessage("Enquiry sent successfully! We'll be in touch soon.");
        setFormData({
          fullName: "",
          businessName: "",
          email: "",
          phone: "",
          website: "",
          businessType: "",
          message: "",
        });
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setStatusMessage("Failed to send. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(20,94,238,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(20,94,238,.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          opacity: 1,
        }}
      />

      <div className="relative mx-auto grid max-w-7xl md:gap-16 gap-10 px-5 pb-24 pt-40 lg:grid-cols-2 lg:px-0">
        {/* Left */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full tracking-[0.18em] border border-[#145EEE] bg-blue-50 px-4 py-2 text-sm font-semibold text-[#145EEE]">
            <Mail size={16} />
            Contact Wellranked
          </span>

          <h1 className="mt-5 text-2xl font-extrabold leading-tight text-[#102A56] lg:text-4xl md:text-3xl">
            Talk to <span className="text-[#145EEE]">Wellranked</span>
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
                <BadgeCheck className="text-[#145EEE]" size={22} />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 space-y-5">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-blue-50 p-3">
                <Mail className="text-[#145EEE]" size={20} />
              </div>
              <div>
                <p className="font-semibold text-[#145EEE]">Email</p>
                <p className="text-gray-600">hello@wellranked.co.uk</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-blue-50 p-3">
                <Phone className="text-[#145EEE]" size={20} />
              </div>
              <div>
                <p className="font-semibold text-[#145EEE]">Phone</p>
                <p className="text-gray-600">Available during business hours</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-blue-50 p-3">
                <Globe className="text-[#145EEE]" size={20} />
              </div>
              <div>
                <p className="font-semibold text-[#145EEE]">Location</p>
                <p className="text-gray-600">Supporting businesses across the UK</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div className="rounded-3xl border border-gray-200 bg-white p-5 md:p-8">
          <h2 className="md:text-2xl text-xl font-bold text-[#102A56]">
            Send an Enquiry
          </h2>
          <p className="mt-2 text-gray-600">
            Complete the form below and we'll get back to you as soon as possible.
          </p>

          {status !== "idle" && (
            <div
              className={`mt-4 rounded-xl px-4 py-3 text-sm font-medium ${
                status === "success"
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {statusMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <Input
                label="Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <Input
                label="Business Name"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <Input
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <Input
              label="Website"
              name="website"
              value={formData.website}
              onChange={handleChange}
            />
            <Input
              label="Business Type"
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
            />

            <div>
              <label className="mb-2 block font-medium text-[#102A56]">
                Message
              </label>
              <textarea
                name="message"
                rows={8}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#145EEE]"
                placeholder="Tell us a little about your business..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#145EEE] py-4 font-semibold text-white transition hover:bg-[#114bc7] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Enquiry
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Input({
  label,
  name,
  type = "text",
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block font-medium text-[#102A56]">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={label}
        className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#145EEE]"
      />
    </div>
  );
}