import {
  ArrowRight,
  Building2,
  CalendarDays,
  ClipboardCheck,
  Globe,
  MapPin,
  MessageCircle,
  MousePointerClick,
  Search,
  Share2,
  Star,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import Reveal from "../../components/Reveal";

interface Article {
  title: string;
  category: string;
  readTime: string;
  summary: string;
  takeaway: string;
  href: string;
  linkLabel: string;
  icon: LucideIcon;
  theme: {
    border: string;
    bar: string;
    icon: string;
    title: string;
    tag: string;
    tagBg: string;
    quote: string;
  };
}

const articles: Article[] = [
  {
    title: "One connected marketing system beats scattered activity",
    category: "Small business growth",
    readTime: "3 min read",
    summary:
      "A website, local search presence, reviews and social content all shape how a customer decides who to contact. When each is managed separately, it is easy for messages and updates to drift apart. A joined-up plan gives every channel the same clear story about what you do and who you help.",
    takeaway:
      "Start with one priority customer journey, then make each channel support the next step.",
    href: "/services-section",
    linkLabel: "Explore WellRanked services",
    icon: Building2,
    theme: {
      border: "border-amber-200",
      bar: "from-amber-400 to-orange-400",
      icon: "from-amber-400 to-orange-500 shadow-amber-500/20",
      title: "text-amber-600",
      tag: "text-amber-600",
      tagBg: "bg-amber-50",
      quote: "text-amber-50",
    },
  },
  {
    title: "Local SEO starts with the basics customers can verify",
    category: "Local SEO",
    readTime: "3 min read",
    summary:
      "Local visibility is easier to build when your business information is accurate and consistent. Keep your service details, contact information and location clear on your website and Google Business Profile. Useful service pages and genuine customer reviews help people understand whether you are the right fit before they get in touch.",
    takeaway:
      "Check that your business name, services, hours and contact details match everywhere.",
    href: "/services-section",
    linkLabel: "See our local visibility services",
    icon: MapPin,
    theme: {
      border: "border-emerald-200",
      bar: "from-emerald-400 to-teal-400",
      icon: "from-emerald-400 to-teal-500 shadow-emerald-500/20",
      title: "text-emerald-600",
      tag: "text-emerald-600",
      tagBg: "bg-emerald-50",
      quote: "text-emerald-50",
    },
  },
  {
    title: "Turn a website visit into a clear next step",
    category: "Websites",
    readTime: "3 min read",
    summary:
      "A good-looking website still needs to make it easy to take action. Explain your services in plain language, show visitors why they can trust you, and make the next step obvious on every important page. A visible phone number, simple enquiry form or booking route can remove friction for potential customers.",
    takeaway:
      "Ask someone unfamiliar with your business to find a service and contact you on their phone.",
    href: "/growth-audit",
    linkLabel: "Request a website review",
    icon: MousePointerClick,
    theme: {
      border: "border-violet-200",
      bar: "from-violet-400 to-purple-400",
      icon: "from-violet-400 to-purple-500 shadow-violet-500/20",
      title: "text-violet-600",
      tag: "text-violet-600",
      tagBg: "bg-violet-50",
      quote: "text-violet-50",
    },
  },
  {
    title: "Make your Google Business Profile work harder",
    category: "Google visibility",
    readTime: "3 min read",
    summary:
      "Your profile is often one of the first places local customers encounter your business. Keep its hours, contact details, service information and images current. Answer reviews professionally and share useful updates when something changes. These small habits make your profile more helpful to people comparing local options.",
    takeaway:
      "Set a regular reminder to review your profile details and respond to new reviews.",
    href: "/services-section",
    linkLabel: "Get help with your Google profile",
    icon: Globe,
    theme: {
      border: "border-rose-200",
      bar: "from-rose-400 to-pink-400",
      icon: "from-rose-400 to-pink-500 shadow-rose-500/20",
      title: "text-rose-600",
      tag: "text-rose-600",
      tagBg: "bg-rose-50",
      quote: "text-rose-50",
    },
  },
  {
    title: "Build a reputation with a process, not luck",
    category: "Reviews & reputation",
    readTime: "3 min read",
    summary:
      "Reviews are most useful when asking for feedback becomes a natural part of serving customers. Invite all customers to share an honest review, make the process straightforward, and respond thoughtfully to both praise and criticism. Over time, this gives prospective customers a clearer picture of what working with you is like.",
    takeaway:
      "Create a simple, consistent follow-up that invites honest feedback without pressure.",
    href: "/services-section",
    linkLabel: "Explore review management",
    icon: Star,
    theme: {
      border: "border-sky-200",
      bar: "from-sky-400 to-cyan-400",
      icon: "from-sky-400 to-cyan-500 shadow-sky-500/20",
      title: "text-sky-600",
      tag: "text-sky-600",
      tagBg: "bg-sky-50",
      quote: "text-sky-50",
    },
  },
  {
    title: "Why regular social content matters more than bursts",
    category: "Social content",
    readTime: "3 min read",
    summary:
      "Posting every day for a week and then disappearing is hard to sustain and gives customers little sense of what your business is doing. A manageable schedule of useful updates, consistent graphics and relevant offers is easier to maintain. Plan around real questions customers ask, rather than posting just to fill a calendar.",
    takeaway:
      "Choose a realistic weekly rhythm and prepare a few helpful topics in advance.",
    href: "/package-section",
    linkLabel: "See content support packages",
    icon: Share2,
    theme: {
      border: "border-orange-200",
      bar: "from-orange-400 to-amber-400",
      icon: "from-orange-400 to-amber-500 shadow-orange-500/20",
      title: "text-orange-600",
      tag: "text-orange-600",
      tagBg: "bg-orange-50",
      quote: "text-orange-50",
    },
  },
  {
    title: "Every unanswered enquiry is a process problem",
    category: "Customer support",
    readTime: "3 min read",
    summary:
      "When messages arrive across several channels, even a good team can lose track of what needs a reply. Agree who handles each inbox, record the next action, and follow up on open bookings or enquiries. A shared tracker and regular summaries help the team see what is pending before an opportunity slips through.",
    takeaway:
      "Give every new enquiry an owner, a status and a clear next action.",
    href: "/growth-support",
    linkLabel: "Explore Growth Support",
    icon: MessageCircle,
    theme: {
      border: "border-blue-200",
      bar: "from-blue-400 to-indigo-400",
      icon: "from-blue-400 to-indigo-500 shadow-blue-500/20",
      title: "text-blue-600",
      tag: "text-blue-600",
      tagBg: "bg-blue-50",
      quote: "text-blue-50",
    },
  },
  {
    title: "Choose marketing support around your next constraint",
    category: "Planning & packages",
    readTime: "4 min read",
    summary:
      "The right support depends on what is taking your attention away from growth. You may need a stronger website and local SEO foundation, or help coordinating content, reviews and campaigns. Start by naming the bottleneck, then compare the services, workload and monthly commitment that would address it. WellRanked offers flexible monthly packages, with ad spend billed separately.",
    takeaway:
      "Prioritise the task you cannot consistently manage before adding more channels.",
    href: "/package-section",
    linkLabel: "Compare marketing packages",
    icon: CalendarDays,
    theme: {
      border: "border-teal-200",
      bar: "from-teal-400 to-emerald-400",
      icon: "from-teal-400 to-emerald-500 shadow-teal-500/20",
      title: "text-teal-600",
      tag: "text-teal-600",
      tagBg: "bg-teal-50",
      quote: "text-teal-50",
    },
  },
  {
    title: "What a useful growth audit should uncover",
    category: "Getting started",
    readTime: "3 min read",
    summary:
      "An audit should connect your online presence to the way customers find and contact you. Review your website, Google visibility, reviews, local search foundations, content and enquiry handling. The point is not to produce a long list of jargon, but to identify a few practical improvements and decide which one to tackle first.",
    takeaway:
      "Ask for clear priorities you can act on, not just a score with no next steps.",
    href: "/growth-audit",
    linkLabel: "Book a free WellRanked Growth Audit",
    icon: ClipboardCheck,
    theme: {
      border: "border-fuchsia-200",
      bar: "from-fuchsia-400 to-pink-400",
      icon: "from-fuchsia-400 to-pink-500 shadow-fuchsia-500/20",
      title: "text-fuchsia-600",
      tag: "text-fuchsia-600",
      tagBg: "bg-fuchsia-50",
      quote: "text-fuchsia-50",
    },
  },
];

function ArticleCard({ article, index }: { article: Article; index: number }) {
  const Icon = article.icon;

  return (
    <Reveal
      delay={index * 0.06}
      className={`group relative h-full overflow-hidden rounded-3xl border ${article.theme.border} bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(16,42,86,0.2)] md:p-7`}
      style={{ boxShadow: "0 8px 30px -12px rgba(16,42,86,0.08)" }}
    >
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${article.theme.bar}`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -right-2 -top-3 select-none font-serif text-8xl leading-none ${article.theme.quote}`}
      >
        &rdquo;
      </span>

      <div className="relative flex h-full flex-col">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br ${article.theme.icon}`}
        >
          <Icon size={22} className="text-white" />
        </div>

        <div
          className={`mt-5 w-fit rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] ${article.theme.tagBg} ${article.theme.tag}`}
        >
          {article.category}
        </div>

        <h2
          className={`mt-4 text-xl font-bold leading-snug ${article.theme.title}`}
        >
          {article.title}
        </h2>

        <p className="mt-3 text-md leading-7 text-gray-600">
          {article.summary}
        </p>

        <p className="mt-4 border-l-2 border-[#145EEE]/30 pl-3 text-md font-medium leading-6 text-[#102A56]">
          {article.takeaway}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-gray-100 pt-5">
          <span className="text-xs font-medium text-gray-500">
            {article.readTime} · WellRanked
          </span>
          <Link
            href={article.href}
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#145EEE] transition-all group-hover:gap-2"
          >
            {article.linkLabel}
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </Reveal>
  );
}

export default function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-136"
        style={{
          backgroundImage: `
            linear-gradient(rgba(20,94,238,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(20,94,238,.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto py-24 md:mt-16 mt-10 lg:px-0 md:px-5 px-5">
        <Reveal className="relative isolate mx-auto mb-14 text-center md:mb-16">
          <div className="relative">
            <span className="inline-flex items-center rounded-full border border-[#145EEE] bg-blue-50 px-4 py-1.5 text-sm font-bold tracking-[0.18em] text-[#145EEE]">
              WellRanked Journal
            </span>

            <h1 className="mt-6 text-3xl font-bold leading-tight text-[#102A56] lg:text-6xl md:text-5xl">
              Practical ideas to help your business{" "}
              <span className="text-[#145EEE]">get found and grow.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-6xl text-base leading-7 text-gray-600 md:text-2xl md:leading-8">
              Straightforward guidance on local SEO, websites, reviews, content
              and customer support for UK small businesses. No jargon, just
              useful next steps.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <ArticleCard key={article.title} article={article} index={index} />
          ))}
        </div>

        <Reveal
          className="relative mt-12 overflow-hidden rounded-3xl border border-[#102A56]/10 bg-[#145EEE] p-8 text-center transition-all duration-500 hover:-translate-y-1 md:p-10"
          delay={0.1}
          style={{ boxShadow: "0 8px 30px -12px rgba(16,42,86,0.2)" }}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-1 -top-5 select-none font-serif text-9xl leading-none text-white/5"
          >
            &rdquo;
          </span>

          <div className="relative">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1.5">
              <Search size={14} className="text-white/80" />
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-white/80">
                Your Next Step
              </span>
            </div>

            <h2 className="text-xl font-bold text-white md:text-2xl">
              Want to know where your biggest opportunity is?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-8 text-white">
              Book a free Growth Audit. We’ll review your website, Google
              visibility, reviews and online presence, then share a clear,
              no-obligation action plan.
            </p>

            <Link
              href="/growth-audit"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-[#102A56] transition-all hover:bg-blue-50"
            >
              Book Your Free Audit
              <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
