import Link from "next/link";
import { ArrowRight, BadgeCheck, CheckCircle2 } from "lucide-react";

export default function PackagesCTA() {
  return (
    <section className="relative overflow-hidden bg-[#244EB3] py-24">
      {/* Background Glow */}
      <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />

      {/* Wellranked Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <h1 className="select-none text-[7rem] md:text-[18rem] lg:text-[17rem] font-black uppercase tracking-tight text-white/5 whitespace-nowrap">
          Wellranked
        </h1>
      </div>

      <div className="relative mx-auto max-w-5xl px-5 text-center">

        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
          Free Growth Audit
        </span>

        <h2 className="mt-6 text-2xl font-extrabold leading-tight text-white lg:text-4xl md:text-3xl">
          Ready to grow your business
          <span className="block text-blue-200">
            with less stress?
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-3xl md:text-lg leading-8 text-blue-100">
          Book your free Wellranked Growth Audit and we'll show you the
          biggest opportunities to improve your website, Google visibility,
          reviews and lead generation. You'll receive practical,
          easy-to-understand recommendations with no pressure and no jargon.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/growth-audit"
            className="flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[#244EB3]"
          >
            Book Your Free Growth Audit
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
          >
            Speak to Our Team
          </Link>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 text-sm text-blue-100 md:flex-row md:gap-8">
          <div className="flex items-center gap-2">
            <BadgeCheck size={18} className="text-blue-100" />
            No pressure or obligation
          </div>

          <div className="flex items-center gap-2">
            <BadgeCheck size={18} className="text-blue-100" />
            Clear, practical advice
          </div>

          <div className="flex items-center gap-2">
            <BadgeCheck size={18} className="text-blue-100" />
            Tailored to your business
          </div>
        </div>

      </div>
    </section>
  );
};