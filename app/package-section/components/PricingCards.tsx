import {
  BriefcaseBusiness,
  Rocket,
  Crown,
  ArrowRight,
  Check,
} from "lucide-react";
import Link from "next/link";

const packages = [
  {
    name: "Wellranked Essential",
    tagline: "Professional Online Presence",
    price: "£395",
    icon: BriefcaseBusiness,
    featured: false,
    bestFor: "Sole traders, new businesses & small firms",
    description:
      "For businesses that need a credible website and online foundation without managing everything themselves.",
    features: [
      "Custom Website",
      "Hosting & Maintenance",
      "AI Website Assistant",
      "Unlimited Website Updates",
      "Google Business Profile Setup",
      "Review Monitoring",
      "Monthly Performance Report",
    ],
  },
  {
    name: "Growth Partner",
    tagline: "Your Outsourced Marketing Department",
    price: "£695",
    icon: Rocket,
    featured: true,
    bestFor: "Busy business owners",
    description:
      "Our most popular package for businesses that want their website, Google visibility, reviews, graphics and social content handled properly every month.",
    features: [
      "Everything in Essential",
      "Local SEO",
      "Google Profile Management",
      "Review Growth Campaigns",
      "Unlimited Business Graphics",
      "3 Social Posts Per Week",
      "Monthly Competitor Report",
      "Seasonal Campaigns",
      "Monthly Growth Call",
      "Marketing Concierge Support",
    ],
  },
  {
    name: "Accelerator",
    tagline: "More Visibility. More Leads. More Growth.",
    price: "£995",
    icon: Crown,
    featured: false,
    bestFor: "Businesses ready to scale",
    description:
      "Generate more enquiries through paid campaigns, email marketing and stronger conversion systems.",
    features: [
      "Everything in Growth Partner",
      "Google Ads Management",
      "Meta Ads Management",
      "Email Marketing",
      "Lead Response Support",
      "Customer Reactivation Campaigns",
      "Missed Call Text-Back",
      "Landing Page Optimisation",
    ],
  },
];

export default function PricingCards() {
  return (
    <section id="pricing" className="md:py-24 bg-white">
      <div className="max-w-7xl mx-auto lg:px-0 md:px-5 px-5">
        <div className="text-center max-w-3xl mx-auto md:mb-16 mb-5">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#244EB3]">
            Choose Your Plan
          </span>

          <h2 className="mt-3 text-2xl lg:text-4xl md:text-3xl font-bold text-[#102A56]">
            One monthly fee.
            <span className="block text-[#244EB3]">
              Everything working together.
            </span>
          </h2>

          <p className="mt-3 md:text-lg text-gray-600 leading-8">
            Every package is designed to remove stress, improve trust and
            help your business grow online.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-1">
          {packages.map((plan) => {
            const Icon = plan.icon;

            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl border ${
                  plan.featured
                    ? "border-[#244EB3] shadow-2xl lg:scale-105"
                    : "border-gray-200"
                }`}
              >
                {plan.featured && (
                  <div className="absolute left-1/2 -top-4 -translate-x-1/2 rounded-full bg-[#244EB3] px-5 py-2 text-sm font-semibold text-white">
                    MOST POPULAR
                  </div>
                )}

                <div
                  className={`rounded-t-3xl md:p-8 p-5 ${
                    plan.featured
                      ? "bg-[#244EB3] text-white"
                      : "bg-[#F8FAFF]"
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      plan.featured
                        ? "bg-white/20"
                        : "bg-blue-100 text-[#244EB3]"
                    }`}
                  >
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-3 text-xl font-bold">
                    {plan.name}
                  </h3>

                  <p
                    className={`mt-1 font-medium ${
                      plan.featured
                        ? "text-blue-100"
                        : "text-[#244EB3]"
                    }`}
                  >
                    {plan.tagline}
                  </p>

                  <div className="mt-3 flex items-end gap-2">
                    <span className="text-3xl font-extrabold">
                      {plan.price}
                    </span>

                    <span
                      className={
                        plan.featured
                          ? "pb-2 text-blue-100"
                          : "pb-2 text-gray-500"
                      }
                    >
                      /month
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col md:p-8 p-5">
                  <p className="leading-7 text-gray-600">
                    {plan.description}
                  </p>

                  <div className="mt-6 rounded-xl bg-blue-50 p-4">
                    <p className="text-xs uppercase tracking-wide text-[#244EB3] font-semibold">
                      Best For
                    </p>

                    <p className="mt-2 text-sm font-medium text-[#102A56]">
                      {plan.bestFor}
                    </p>
                  </div>

                  <div className="my-8 h-px bg-gray-200" />

                  <div className="space-y-4 flex-1">
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-0.5 rounded-full bg-blue-100 p-1">
                          <Check
                            size={12}
                            className="text-[#244EB3]"
                          />
                        </div>

                        <span className="text-gray-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/growth-audit"
                    className={`mt-10 flex items-center justify-center gap-2 rounded-full py-4 font-semibold transition ${
                      plan.featured
                        ? "bg-[#244EB3] text-white"
                        : "border border-[#244EB3] text-[#244EB3] hover:bg-blue-50"
                    }`}
                  >
                    Get Started
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};