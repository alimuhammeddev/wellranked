import { Check, BriefcaseBusiness, Rocket, Crown } from "lucide-react";

const packages = [
  {
    name: "Essential",
    price: "£395",
    icon: BriefcaseBusiness,
    featured: false,
    description:
      "A professional website and online foundation for businesses that need to look credible and be easier to contact.",
    features: [
      "Professional Website",
      "Website Management",
      "Basic Local SEO",
      "Google Business Profile",
      "Email Support",
    ],
  },
  {
    name: "Growth Partner",
    price: "£695",
    icon: Rocket,
    featured: true,
    description:
      "Our most popular package. Your outsourced marketing department for website, SEO, Google profile, reviews, graphics and social content.",
    features: [
      "Everything in Essential",
      "Advanced Local SEO",
      "Review Management",
      "Unlimited Graphics",
      "3 Social Posts per Week",
      "Priority Support",
    ],
  },
  {
    name: "Accelerator",
    price: "£995",
    icon: Crown,
    featured: false,
    description:
      "For businesses ready to actively generate more enquiries through ads, email campaigns, landing pages and lead follow up systems.",
    features: [
      "Everything in Growth",
      "Email Marketing",
      "Ads Management",
      "Landing Pages",
      "Lead Follow up",
      "Monthly Strategy Session",
    ],
  },
];

export default function PackagesPreview() {
  return (
    <section className="bg-[#F8FAFC] md:py-20 py-10">
      <div className="mx-auto max-w-7xl lg:px-0 md:px-5 px-5">
        {/* Heading */}

        <div className="mx-auto md:mb-16 mb-10 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#244EB3]">
            Pricing
          </span>

          <h2 className="mt-4 text-2xl lg:text-4xl md:text-3xl font-bold text-[#102A56]">
            Simple monthly packages.
            <span className="block text-[#244EB3]">No hidden costs.</span>
          </h2>

          <p className="mt-2 md:text-lg leading-7 text-gray-600">
            Choose the level of support your business needs today. Upgrade
            whenever you're ready to grow.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-3">
          {packages.map((pkg) => {
            const Icon = pkg.icon;

            return (
              <div
                key={pkg.name}
                className={`relative flex flex-col rounded-3xl border bg-white ${
                  pkg.featured
                    ? "border-[#244EB3] shadow-lg lg:-mt-4 lg:mb-4"
                    : "border-gray-200 shadow-sm"
                }`}
              >
                {pkg.featured && (
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#244EB3] px-5 py-2 text-sm font-semibold text-white">
                    Most Popular
                  </div>
                )}

                {/* Header */}

                <div
                  className={`rounded-t-3xl md:p-8 p-5 ${
                    pkg.featured
                      ? "bg-[#244EB3] text-white"
                      : "bg-white"
                  }`}
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                      pkg.featured ? "bg-white/20" : "bg-blue-100 text-[#244EB3]"
                    }`}
                  >
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-3 text-xl font-bold">{pkg.name}</h3>

                  <div className="mt-3 flex items-end gap-1">
                    <span className="text-3xl font-extrabold">{pkg.price}</span>

                    <span
                      className={
                        pkg.featured
                          ? "pb-2 text-blue-100"
                          : "pb-2 text-gray-500"
                      }
                    >
                      /month
                    </span>
                  </div>

                  <p
                    className={`mt-3 leading-7 ${
                      pkg.featured ? "text-blue-100" : "text-gray-600"
                    }`}
                  >
                    {pkg.description}
                  </p>
                </div>

                {/* Features */}

                <div className="flex-1 md:p-8 p-5">
                  <div className="space-y-4">
                    {pkg.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                          <Check size={14} className="text-[#244EB3]" />
                        </div>

                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`mt-10 w-full rounded-full py-4 font-medium transition ${
                      pkg.featured
                        ? "bg-[#244EB3] text-white"
                        : "border border-[#244EB3] text-[#244EB3] hover:bg-blue-50"
                    }`}
                  >
                    Choose Package
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
