import {
  MessageCircleMore,
  CalendarDays,
  RefreshCcw,
  Inbox,
  FileText,
  Camera,
  Check,
  LucideIcon,
} from "lucide-react";
import Reveal from "../../components/Reveal";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: MessageCircleMore,
    title: "Customer Message Management",
    description:
      "Professional replies across agreed channels using your approved information and tone.",
  },
  {
    icon: Camera,
    title: "Video Editing",
    description:
      "We edit your videos into professional, engaging content that's ready to publish across your marketing channels.",
  },
  {
    icon: CalendarDays,
    title: "Booking Coordination",
    description:
      "We help customers select approved times and keep your booking information organised.",
  },
  {
    icon: RefreshCcw,
    title: "Customer Follow-up",
    description:
      "We follow up with incomplete enquiries, unpaid orders or unconfirmed bookings.",
  },
  {
    icon: Inbox,
    title: "Inbox Organisation",
    description:
      "Every conversation is categorised so you know what is new, confirmed, pending or escalated.",
  },
  {
    icon: FileText,
    title: "Daily Summaries",
    description:
      "See what happened, what converted and what still needs your attention.",
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;

  return (
    <Reveal
      delay={index * 0.1}
      className="group relative overflow-hidden rounded-3xl border border-blue-200 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_20px_50px_-12px_rgba(16,42,86,0.15)]"
    >
      <div className="relative">
        {/* Icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#145EEE]">
          <Icon size={22} className="text-white" />
        </div>

        {/* Title */}
        <h3 className="mt-5 text-lg font-bold text-[#145EEE]">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm leading-7 text-gray-600">
          {service.description}
        </p>
      </div>
    </Reveal>
  );
}

export default function GrowthServices() {
  return (
    <section className="relative overflow-hidden px-5 py-20 md:px-8 md:py-28 bg-white">
      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <Reveal
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <span className="inline-flex items-center rounded-full border border-[#145EEE] bg-blue-50 px-4 py-1.5 font-bold text-sm tracking-[0.18em] text-[#145EEE]">
            What We Can Handle
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-[#102A56] md:text-4xl">
            Every customer interaction,
            <span className="block text-[#145EEE]">
              handled professionally.
            </span>
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            From the first enquiry to the final follow-up, Growth Support helps
            your business stay organised, responsive and focused on serving
            customers.
          </p>
        </Reveal>

        {/* Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};