import { Globe, Search, MapPinned, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Website",
    icon: Globe,
    description: "Build & Manage",
  },
  {
    title: "SEO",
    icon: Search,
    description: "Improve Rankings",
  },
  {
    title: "Google Profile",
    icon: MapPinned,
    description: "Local Visibility",
  },
  {
    title: "Reviews",
    icon: Star,
    description: "Build Trust",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#F7FAFF] via-white to-[#EEF4FF]">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto py-24 lg:mt-40 md:mt-16 mt-10 lg:px-0 md:px-5 px-5">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-blue-100 shadow-sm rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-sm font-medium text-gray-700">
                Helping UK Small Businesses Grow Online
              </span>
            </div>

            <h1 className="text-2xl md:text-5xl font-extrabold leading-tight tracking-tight text-[#102A56]">
              Your Outsourced
              <span className="block text-blue-600">Marketing Department</span>
              for Less Than the Cost of
              <span className="block">One Employee</span>
            </h1>

            <p className="mt-5 md:text-lg text-gray-600 leading-8 max-w-xl">
              Wellranked helps UK small businesses get found, trusted and chosen
              by managing your website, Google visibility, reviews, content,
              graphics, social posts and lead generation all under one simple
              monthly package.
            </p>

            {/* Buttons */}

            <div className="mt-5 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-700"
              >
                Book Your Free Growth Audit
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/package-section"
                className="rounded-full border border-gray-300 bg-white px-8 py-4 text-center font-semibold text-[#102A56] transition hover:border-blue-600 hover:text-blue-600"
              >
                View Packages
              </Link>
            </div>

            <p className="mt-5 text-sm text-gray-500 max-w-lg">
              No pressure. No jargon. Just a clear review of what is holding
              your business back online.
            </p>
          </div>

          {/* RIGHT SIDE */}

          <div className="relative hidden lg:flex justify-center">
            <div className="relative w-120 rounded-3xl bg-white shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-linear-to-r from-blue-600 to-indigo-600 p-6">
                <h3 className="text-white text-xl font-bold">
                  Your Marketing Dashboard
                </h3>

                <p className="text-blue-100 mt-1">
                  Everything managed in one place
                </p>
              </div>

              {/* Grid */}

              <div className="grid grid-cols-2 gap-3 p-4">
                {services.map(({ title, icon: Icon, description }) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-gray-100 bg-gray-50 p-5 transition-all duration-300"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                      <Icon size={24} strokeWidth={2} />
                    </div>

                    <h4 className="font-semibold text-[#102A56]">{title}</h4>

                    <p className="mt-1 text-sm text-gray-500">{description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Cards */}

            <div className="absolute -top-10 -left-8 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
              <p className="text-sm text-gray-500">Google Visibility</p>

              <h2 className="text-3xl font-bold text-green-600">↑ 50%</h2>
            </div>

            <div className="absolute -bottom-10 -right-1 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
              <p className="text-sm text-gray-500">New Leads</p>

              <h2 className="text-3xl font-bold text-blue-600">+50</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
