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
  Bot,
  Image,
  TrendingUp,
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

const services = [
  { name: "Website", Icon: Monitor },
  { name: "SEO", Icon: Search },
  { name: "AI", Icon: Bot },
  { name: "Google Ads", Icon: TrendingUp },
  { name: "Social", Icon: MessageCircle },
  { name: "Branding", Icon: PenTool },
];

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
                className="text-[#244EB3] opacity-70"
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
              <span className="w-2 h-2 rounded-full bg-[#244EB3] animate-bounce"></span>
              <span className="text-sm font-medium text-[#1F3064]">
                Helping UK Small Businesses Grow Online
              </span>
            </div>

            <h1 className="text-2xl lg:text-4xl md:text-3xl font-extrabold leading-tight tracking-tight text-[#1F3064]">
              Your Outsourced
              <span className="block text-[#244EB3]">Marketing Department</span>
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
                className="flex items-center justify-center gap-2 rounded-full bg-[#244EB3] px-8 py-4 font-semibold text-white shadow-lg"
              >
                Book Your Free Growth Audit
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/package-section"
                className="rounded-full border border-gray-300 bg-white px-8 py-4 text-center font-semibold text-[#102A56] transition hover:border-[#244EB3] hover:text-[#244EB3]"
              >
                View Packages
              </Link>
            </div>

            <p className="mt-5 text-sm text-gray-500 max-w-lg">
              No pressure. No jargon. Just a clear review of what is holding
              your business back online.
            </p>
          </div>

          <div className="relative flex items-center justify-center py-16 md:mt-0 -mt-10">
            {/* Center Circle */}
            <div className="relative z-20 flex h-60 w-60 md:h-72 md:w-72 lg:h-80 lg:w-80 items-center justify-center rounded-full overflow-hidden bg-linear-to-br from-[#1F3064] to-[#2563EB] shadow-[0_35px_90px_rgba(37,99,235,.35)]">
              {/* Full background network */}
              <svg
                className="absolute inset-0 w-full h-full opacity-25"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {/* Horizontal */}
                <line
                  x1="0"
                  y1="20"
                  x2="100"
                  y2="20"
                  stroke="white"
                  strokeWidth=".3"
                />
                <line
                  x1="0"
                  y1="50"
                  x2="100"
                  y2="50"
                  stroke="white"
                  strokeWidth=".3"
                />
                <line
                  x1="0"
                  y1="80"
                  x2="100"
                  y2="80"
                  stroke="white"
                  strokeWidth=".3"
                />

                {/* Vertical */}
                <line
                  x1="20"
                  y1="0"
                  x2="20"
                  y2="100"
                  stroke="white"
                  strokeWidth=".3"
                />
                <line
                  x1="50"
                  y1="0"
                  x2="50"
                  y2="100"
                  stroke="white"
                  strokeWidth=".3"
                />
                <line
                  x1="80"
                  y1="0"
                  x2="80"
                  y2="100"
                  stroke="white"
                  strokeWidth=".3"
                />

                {/* Diagonals */}
                <line
                  x1="0"
                  y1="0"
                  x2="100"
                  y2="100"
                  stroke="white"
                  strokeWidth=".3"
                />
                <line
                  x1="100"
                  y1="0"
                  x2="0"
                  y2="100"
                  stroke="white"
                  strokeWidth=".3"
                />
                <line
                  x1="0"
                  y1="50"
                  x2="50"
                  y2="0"
                  stroke="white"
                  strokeWidth=".3"
                />
                <line
                  x1="50"
                  y1="100"
                  x2="100"
                  y2="50"
                  stroke="white"
                  strokeWidth=".3"
                />

                {/* Nodes */}
                {[
                  [20, 20],
                  [50, 20],
                  [80, 20],
                  [20, 50],
                  [50, 50],
                  [80, 50],
                  [20, 80],
                  [50, 80],
                  [80, 80],
                  [10, 35],
                  [90, 65],
                  [35, 10],
                  [65, 90],
                ].map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r="1.2" fill="white" />
                ))}
              </svg>

              {/* Optional glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />

              {/* Content */}
              <div className="relative z-10 text-center">
                <h2 className="text-3xl font-bold text-white">Wellranked</h2>
                <p className="mt-2 text-blue-100">Your Growth Partner</p>
              </div>
            </div>

            {/* Desktop Service Circles */}
            <div className="hidden lg:block">
              {[
                {
                  ...services[0],
                  className: "top-6 right-10",
                  line: "-rotate-12",
                  side: "right",
                }, // Website
                {
                  ...services[1],
                  className: "top-1/2 right-0 -translate-y-1/2",
                  line: "",
                  side: "right",
                }, // SEO
                {
                  ...services[2],
                  className: "bottom-6 right-10",
                  line: "rotate-12",
                  side: "right",
                }, // AI
                {
                  ...services[3],
                  className: "top-6 left-10",
                  line: "rotate-12",
                  side: "left",
                }, // Ads
                {
                  ...services[4],
                  className: "top-1/2 left-0 -translate-y-1/2",
                  line: "",
                  side: "left",
                }, // Social
                {
                  ...services[5],
                  className: "bottom-6 left-10",
                  line: "-rotate-12",
                  side: "left",
                }, // Branding
              ].map(({ Icon, name, className, line, side }) => (
                <div
                  key={name}
                  className={`absolute ${className} flex items-center`}
                >
                  {side === "left" && (
                    <div
                      className={`absolute left-full h-0.5 w-20 bg-blue-300 ${line} origin-left`}
                    />
                  )}

                  {side === "right" && (
                    <div
                      className={`absolute right-full h-0.5 w-20 bg-blue-300 ${line} origin-right`}
                    />
                  )}

                  <div className="relative z-30 flex h-24 w-24 flex-col items-center justify-center rounded-full border border-blue-100 bg-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl">
                    <Icon size={24} className="text-[#244EB3]" />
                    <span className="mt-1 text-[11px] font-semibold text-[#1F3064] text-center leading-tight px-1">
                      {name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile / Tablet */}
            <div className="absolute inset-0 lg:hidden">
              {[
                {
                  ...services[0],
                  className: " -mt-2 left-2/4 -translate-x-1/2",
                }, // Top
                {
                  ...services[1],
                  className: "top-[20%] -right-[1%]",
                }, // Top Right
                {
                  ...services[2],
                  className: "bottom-[16%] right-[1%]",
                }, // Bottom Right
                {
                  ...services[3],
                  className: "-bottom-[8px] left-2/4 -translate-x-1/2",
                }, // Bottom
                {
                  ...services[4],
                  className: "bottom-[16%] left-[1%]",
                }, // Bottom Left
                {
                  ...services[5],
                  className: "top-[16%] left-[1%]",
                }, // Top Left
              ].map(({ Icon, name, className }) => (
                <div key={name} className={`absolute ${className}`}>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white border border-blue-100 shadow-xl">
                    <div className="flex flex-col items-center">
                      <Icon className="text-[#244EB3]" size={22} />
                      <span className="mt-1 text-[10px] font-semibold text-[#1F3064] text-center leading-tight">
                        {name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
