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
    description: "Easy to understand updates on your progress.",
    icon: BarChart3,
  },
  {
    title: "Practical Growth Actions",
    description: "Recommendations that actually move your business forward.",
    icon: TrendingUp,
  },
  {
    title: "Designed for Real SMEs, not Corporate Brands",
    description: "Designed specifically for small businesses and sole traders.",
    icon: Building2,
  },
];

export default function TrustSection() {
  return (
    <section className="bg-[#F8FAFC] lg:py-24 md:py-10">
      <div className="mx-auto max-w-7xl lg:px-0 md:px-5 px-5">
        <div className="grid items-center md:gap-16 gap-10 lg:grid-cols-2">
          {/* Left */}

          <div>
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              Why Businesses Choose Wellranked
            </span>

            <h2 className="mt-3 text-2xl lg:text-4xl md:text-3xl font-bold leading-tight text-[#102A56]">
              Built for UK small businesses,
              <span className="block text-blue-600">
                sole traders & independent companies.
              </span>
            </h2>

            <p className="mt-3 md:text-lg leading-8 text-gray-600">
              We understand that small businesses need practical marketing
              support, not complicated agency language.
            </p>

            <p className="mt-2 md:text-lg leading-8 text-gray-600">
              Our packages are designed to be clear, affordable and useful from
              day one, helping you build visibility, generate enquiries and grow
              with confidence.
            </p>
          </div>

          {/* Right */}
          <div className="grid gap-5 sm:grid-cols-2">
            {trustItems.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition-all duration-300 hover:border-blue-200"
              >
                {/* Network Background */}
                <svg
                  className="absolute inset-0 h-full w-full opacity-[0.13] group-hover:opacity-[0.08] transition-opacity duration-500"
                  viewBox="0 0 400 300"
                  preserveAspectRatio="none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Horizontal Connections */}
                  <path
                    d="M20 40L100 70L180 40L260 80L380 50"
                    stroke="#2563EB"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M40 150L120 120L200 170L300 130L380 180"
                    stroke="#2563EB"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M20 260L120 220L220 250L320 210L390 260"
                    stroke="#2563EB"
                    strokeWidth="1.2"
                  />

                  {/* Vertical Connections */}
                  <path
                    d="M100 70L120 120L120 220"
                    stroke="#2563EB"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M180 40L200 170L220 250"
                    stroke="#2563EB"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M260 80L300 130L320 210"
                    stroke="#2563EB"
                    strokeWidth="1.2"
                  />

                  {/* Diagonal Connections */}
                  <path
                    d="M100 70L200 170L300 130"
                    stroke="#2563EB"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M120 220L220 250L320 210"
                    stroke="#2563EB"
                    strokeWidth="1.2"
                  />

                  {/* Nodes */}
                  {[
                    [20, 40],
                    [100, 70],
                    [180, 40],
                    [260, 80],
                    [380, 50],
                    [40, 150],
                    [120, 120],
                    [200, 170],
                    [300, 130],
                    [380, 180],
                    [20, 260],
                    [120, 220],
                    [220, 250],
                    [320, 210],
                    [390, 260],
                  ].map(([cx, cy], i) => (
                    <g key={i}>
                      <circle cx={cx} cy={cy} r="3" fill="#3B82F6" />
                      <circle
                        cx={cx}
                        cy={cy}
                        r="7"
                        fill="#3B82F6"
                        fillOpacity="28"
                      />
                    </g>
                  ))}
                </svg>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-4 md:text-lg font-semibold text-[#102A56]">
                    {title}
                  </h3>

                  <p className="mt-2 leading-7 text-gray-600">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
