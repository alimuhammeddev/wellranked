import {
  Globe,
  Search,
  MapPinned,
  Star,
  ArrowRight,
  Sparkles,
  BarChart3,
  MousePointerClick,
  MessageCircle,
  Monitor,
  PenTool,
  Rocket,
} from "lucide-react";
import Link from "next/link";

const floatingIcons = [
  { Icon: Globe, top: "8%", left: "5%", delay: "0s" },
  { Icon: Search, top: "18%", right: "8%", delay: "2s" },
  { Icon: Sparkles, top: "40%", left: "3%", delay: "4s" },
  { Icon: BarChart3, top: "70%", left: "12%", delay: "1s" },
  { Icon: MousePointerClick, top: "80%", right: "10%", delay: "3s" },
  { Icon: MessageCircle, top: "58%", right: "4%", delay: "5s" },
  { Icon: Monitor, top: "25%", left: "48%", delay: "2.5s" },
  { Icon: PenTool, top: "88%", left: "42%", delay: "6s" },
  { Icon: MapPinned, top: "12%", left: "75%", delay: "1.5s" },
  { Icon: Star, top: "55%", left: "82%", delay: "4.5s" },
];

const particles = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  size: Math.random() * 8 + 4, // was 2-7px, now 4-12px
  top: Math.random() * 100,
  left: Math.random() * 100,
  duration: Math.random() * 18 + 12,
  delay: Math.random() * 10,
}));

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#F7FAFF] via-white to-[#EEF4FF]">
      {/* Floating Background Icons */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map(({ Icon, ...item }, index) => (
          <div
            key={index}
            className="absolute animate-float"
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              animationDelay: item.delay,
            }}
          >
            <div className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/70 p-3">
              <Icon
                size={24}
                className="text-blue-400 opacity-70"
                strokeWidth={1.8}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="particle"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto py-24 md:mt-16 mt-10 lg:px-0 md:px-5 px-5">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-blue-100 shadow-sm rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-bounce"></span>
              <span className="text-sm font-medium text-gray-700">
                Helping UK Small Businesses Grow Online
              </span>
            </div>

            <h1 className="text-2xl lg:text-4xl md:text-3xl font-extrabold leading-tight tracking-tight text-[#102A56]">
              Your Outsourced
              <span className="block text-blue-600">Marketing Department</span>
              for Less Than the Cost of
              <span className="block">One Employee</span>
            </h1>

            <p className="mt-3 md:text-lg text-gray-600 leading-8 max-w-xl">
              Wellranked helps UK small businesses get found, trusted and chosen
              by managing your website, Google visibility, reviews, content,
              graphics, social posts and lead generation all under one simple
              monthly package.
            </p>

            {/* Buttons */}

            <div className="mt-5 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/growth-audit"
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
          <div className="relative flex justify-center mt-12 lg:mt-0">
            <div className="relative w-full max-w-xl">
              {/* Main Card */}
              <div className="rounded-[30px] border border-gray-200/70 bg-white/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
                  <div>
                    <p className="text-sm text-gray-500">Monthly Performance</p>
                    <h3 className="text-2xl font-bold text-[#102A56]">
                      Your Business Growth
                    </h3>
                  </div>

                  <div className="rounded-full bg-green-100 px-4 py-2">
                    <span className="text-sm font-semibold text-green-600">
                      +38%
                    </span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 p-6">
                  <div className="rounded-2xl bg-[#F7FAFF] p-5">
                    <p className="text-sm text-gray-500">Website Visitors</p>

                    <h2 className="mt-2 text-2xl font-bold text-[#102A56]">
                      12.8K
                    </h2>

                    <p className="mt-1 text-sm text-green-600">
                      ↑ 21% this month
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#F7FAFF] p-5">
                    <p className="text-sm text-gray-500">New Leads</p>

                    <h2 className="mt-2 text-2xl font-bold text-[#102A56]">
                      86
                    </h2>

                    <p className="mt-1 text-sm text-blue-600">
                      +14 from last month
                    </p>
                  </div>

                  <div className="col-span-2 rounded-2xl bg-linear-to-r from-blue-600 to-indigo-600 p-6 text-white">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-blue-100 text-sm">Google Ranking</p>

                        <h2 className="text-2xl font-bold mt-2">#1</h2>
                      </div>

                      <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center text-xl">
                        <Rocket />
                      </div>
                    </div>

                    <p className="mt-5 text-blue-100">
                      Your business is appearing higher in local searches.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -top-16 -right-3 md:-right-8 rounded-2xl border border-gray-100 bg-white px-5 py-4">
                <p className="text-xs text-gray-500">Google Reviews</p>

                <div className="mt-1 flex items-center gap-2">
                  <span className="text-2xl font-bold text-[#102A56]">4.9</span>

                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-10 left-3 md:-left-8 rounded-2xl bg-white border border-gray-100 px-5 py-4">
                <p className="text-xs text-gray-500">AI Assistant</p>

                <div className="mt-2 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-green-500 animate-bounce"></span>

                  <span className="font-medium text-[#102A56]">
                    Optimising Website...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
