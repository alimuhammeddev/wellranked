import { Clock3, Search, Star, Palette, TrendingUp } from "lucide-react";

const painPoints = [
  {
    icon: Clock3,
    title: "No time to update your website?",
    description: "We handle it.",
  },
  {
    icon: Search,
    title: "Not showing properly on Google?",
    description: "We improve it.",
  },
  {
    icon: Star,
    title: "Struggling to get reviews?",
    description: "We manage the system.",
  },
  {
    icon: Palette,
    title: "Need graphics or regular social posts?",
    description: "We create them.",
  },
  {
    icon: TrendingUp,
    title: "Want more enquiries?",
    description: "We build the growth system.",
  },
];

export default function PainSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#F8FAFC] via-[#F4F8FF] to-[#EEF6FF] md:py-24 py-10 lg:px-0 md:px-5 px-5">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl"></div>

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-sky-100/40 blur-3xl"></div>

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(#1F3064 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 md:gap-16 gap-5 items-center">
          {/* Left */}
          <div>
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              The Challenge
            </span>

            <h1 className="mt-6 text-2xl lg:text-4xl md:text-3xl font-bold leading-tight text-[#102A56]">
              Running a business is already hard enough.{" "}
              <span className="text-blue-600">
                Marketing shouldn't be another full time job.
              </span>
            </h1>

            <p className="mt-3 md:text-lg leading-8 text-gray-600">
              Most small business owners are trying to serve customers, answer
              enquiries, manage staff, send quotes, update websites, post on
              social media, ask for reviews and somehow still grow.
            </p>

            <p className="mt-2 md:text-lg leading-8 text-gray-600">
              That's too much.
              <span className="font-semibold text-[#102A56]">
                {" "}
                Wellranked exists to take marketing off your plate,
              </span>{" "}
              so you can focus on your product, service and customers.
            </p>
          </div>

          {/* Right */}

          <div className="grid md:grid-cols-2 md:gap-5 gap-3">
            {painPoints.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-blue-100 bg-linear-to-br from-white via-[#F8FBFF] to-[#EEF6FF] p-5 transition-all duration-300 hover:border-blue-200"
              >
                {/* Center Watermark Circle */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="h-20 w-20 rounded-full bg-linear-to-br from-blue-100/50 via-sky-100/30 to-transparent"></div>
                </div>

                {/* Decorative Ring */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="h-44 w-44 rounded-full border border-blue-100/40"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-blue-100 to-sky-100 text-blue-600">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h2 className="md:text-lg font-semibold text-[#102A56]">
                      {title}
                    </h2>

                    <p className="mt-1 text-gray-600 leading-7">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
