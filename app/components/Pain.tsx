import {
  Clock3,
  Search,
  Star,
  Palette,
  TrendingUp,
} from "lucide-react";

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
    <section className="bg-[#F8FAFC] md:py-24 py-10 md:px-0 px-5">
      <div className="max-w-7xl mx-auto ">

        <div className="grid lg:grid-cols-2 md:gap-16 gap-5 items-center">

          {/* Left */}

          <div>

            <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              The Challenge
            </span>

            <h2 className="mt-6 text-3xl lg:text-4xl font-bold leading-tight text-[#102A56]">
              Running a business is already hard enough.
              <span className="block text-blue-600">
                Marketing shouldn't be another full-time job.
              </span>
            </h2>

            <p className="mt-3 md:text-lg leading-8 text-gray-600">
              Most small business owners are trying to serve customers,
              answer enquiries, manage staff, send quotes, update websites,
              post on social media, ask for reviews and somehow still grow.
            </p>

            <p className="mt-2 md:text-lg leading-8 text-gray-600">
              That's too much.
              <span className="font-semibold text-[#102A56]">
                {" "}Wellranked exists to take marketing off your plate,
              </span>{" "}
              so you can focus on your product, service and customers.
            </p>

          </div>

          {/* Right */}

          <div className="grid md:gap-5 gap-3">

            {painPoints.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group flex items-start gap-5 rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-sm"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition">
                  <Icon size={26} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#102A56]">
                    {title}
                  </h3>

                  <p className="mt-1 text-gray-600">
                    {description}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};