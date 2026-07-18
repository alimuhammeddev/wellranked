import {
  PoundSterling,
  Headphones,
  Laptop,
  BarChart3,
  TrendingUp,
  Building2,
} from "lucide-react";

const trustItems = [
  {
    title: "Clear Monthly Pricing",
    description: "No hidden costs or surprise invoices.",
    icon: PoundSterling,
  },
  {
    title: "Dedicated Support",
    description: "A team that knows your business.",
    icon: Headphones,
  },
  {
    title: "Remote Efficient Team",
    description: "Professional marketing support without the overhead.",
    icon: Laptop,
  },
  {
    title: "Simple Reports",
    description: "Easy-to-understand updates on your progress.",
    icon: BarChart3,
  },
  {
    title: "Practical Growth Actions",
    description: "Recommendations that actually move your business forward.",
    icon: TrendingUp,
  },
  {
    title: "Built for UK SMEs",
    description: "Designed specifically for small businesses and sole traders.",
    icon: Building2,
  },
];

export default function TrustSection() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-7xl px-5">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Why Businesses Choose Wellranked
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-[#102A56] md:text-5xl">
              Built for UK small businesses,
              <span className="block text-blue-600">
                sole traders & independent companies.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We understand that small businesses need practical marketing
              support, not complicated agency language.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Our packages are designed to be clear, affordable and useful
              from day one, helping you build visibility, generate enquiries
              and grow with confidence.
            </p>

          </div>

          {/* Right */}

          <div className="grid gap-5 sm:grid-cols-2">

            {trustItems.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={26} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-[#102A56]">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};