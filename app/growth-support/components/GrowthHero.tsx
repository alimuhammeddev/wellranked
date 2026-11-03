import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Reveal from "../../components/Reveal";

export default function GrowthSupportHero() {
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
      <div className="relative max-w-7xl mx-auto py-24 md:mt-16 mt-10 lg:px-0 md:px-5 px-5">
        <Reveal duration={0.6}>
          <div className="flex justify-center">
            <span className="inline-flex items-center rounded-full border border-[#145EEE] bg-blue-50 px-4 py-2 text-sm font-semibold text-[#145EEE] tracking-[0.18em]">
              Growth Support Package
            </span>
          </div>

          <h1 className="mt-3 text-3xl text-center font-extrabold leading-tight text-[#102A56] lg:text-7xl md:text-5xl">
            Keep up with customer enquiries{" "}
            <span className="text-[#145EEE]">
              without hiring another full-time employee.
            </span>
          </h1>

          <p className="mt-3 text-center md:text-2xl leading-8 text-gray-600">
            We help growing businesses respond to customer messages, organise
            enquiries, capture bookings and follow up professionally so no
            opportunity gets lost in a busy inbox.
          </p>

          <div className="mt-5 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="rounded-full bg-[#145EEE]">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-white"
              >
                Book Free Support Assessment
                <ArrowRight size={18} />
              </Link>
            </div>

            <Link
              href="#pricing"
              className="rounded-full border border-[#145EEE] bg-white px-8 py-4 text-center font-semibold text-[#145EEE] transition"
            >
              View Support Packages
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
