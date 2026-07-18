import { ArrowRight, CheckCircle2, CalendarDays } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-r from-[#1D4ED8] via-[#2563EB] to-[#1E40AF]" />

      {/* Decorative Blobs */}
      <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2">
        {/* Left */}

        <div>
          <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
            Free Growth Audit
          </span>

          <h2 className="mt-4 text-2xl font-bold leading-tight text-white md:text-4xl">
            Want to know what's stopping your business from getting
            <span className="block text-blue-200">
              more enquiries?
            </span>
          </h2>

          <p className="mt-3 max-w-xl text-lg leading-8 text-blue-100">
            Book a free Wellranked Growth Audit and we'll show you the
            biggest improvements you can make across your website,
            Google visibility, reviews and lead generation.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button className="group flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-blue-700">
              Book Your Free Growth Audit
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </button>

            <button className="rounded-full border border-white/30 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/10">
              View Packages
            </button>
          </div>
        </div>

        {/* Right */}

        <div className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-600">
              <CalendarDays size={22} />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">
                Your Free Audit Includes
              </h3>

              <p className="text-blue-100">
                A practical review of your online presence.
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {[
              "Website performance review",
              "Google visibility analysis",
              "Google Business Profile audit",
              "Review & reputation check",
              "Lead generation opportunities",
              "Simple action plan with no obligation",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4"
              >
                <CheckCircle2
                  className="text-green-300"
                  size={22}
                />

                <span className="text-white">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-white/10 p-5 text-center">
            <p className="text-sm uppercase tracking-wider text-blue-200">
              No pressure. No jargon.
            </p>

            <p className="mt-2 md:text-lg font-semibold text-white">
              Just clear advice to help your business grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};