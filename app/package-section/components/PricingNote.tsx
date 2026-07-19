import {
  CircleDollarSign,
  BadgeCheck,
  Clock3,
  MessageCircleMore,
} from "lucide-react";

const notes = [
  {
    icon: CircleDollarSign,
    title: "Advertising Spend",
    description:
      "Meta and Google advertising spend is billed separately from your monthly package.",
  },
  {
    icon: BadgeCheck,
    title: "Package Availability",
    description:
      "Recommendations may vary depending on your business type, location and current marketing setup.",
  },
  {
    icon: Clock3,
    title: "Flexible Monthly Plans",
    description:
      "No complicated long-term contracts. Upgrade your package whenever your business grows.",
  },
  {
    icon: MessageCircleMore,
    title: "Need Help Choosing?",
    description:
      "Book a free Growth Audit and we'll recommend the package that's right for your business.",
  },
];

export default function PricingNote() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-7xl px-5">

        {/* Heading */}

        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            Before You Choose
          </span>

          <h2 className="mt-4 text-2xl font-bold text-[#102A56] lg:text-4xl md:text-3xl">
            A few things worth knowing
          </h2>

          <p className="mt-2 text-lg leading-8 text-gray-600">
            We believe in clear pricing with no surprises. Here's what you
            should know before selecting your package.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {notes.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-3xl border border-gray-200 bg-white md:p-8 p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                <Icon size={24} />
              </div>

              <h3 className="mt-4 md:text-xl text-lg font-bold text-[#102A56]">
                {title}
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Notice */}

        <div className="mt-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 text-center">
          <h3 className="md:text-2xl text-xl font-bold text-[#102A56]">
            Not sure which package is right for you?
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-gray-600 leading-8">
            That's exactly why we offer a free Growth Audit. We'll review your
            website, Google visibility, reviews and online presence, then
            recommend the package that will deliver the biggest impact for your
            business—without any pressure or obligation.
          </p>
        </div>

      </div>
    </section>
  );
};