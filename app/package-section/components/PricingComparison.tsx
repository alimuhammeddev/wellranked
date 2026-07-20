import { Check, Minus } from "lucide-react";

const comparison = [
  {
    feature: "Custom Website",
    essential: true,
    growth: true,
    accelerator: true,
  },
  {
    feature: "Hosting & Maintenance",
    essential: true,
    growth: true,
    accelerator: true,
  },
  {
    feature: "AI Website Assistant",
    essential: true,
    growth: true,
    accelerator: true,
  },
  {
    feature: "Unlimited Website Updates",
    essential: true,
    growth: true,
    accelerator: true,
  },
  {
    feature: "Google Profile Setup",
    essential: true,
    growth: true,
    accelerator: true,
  },
  {
    feature: "Review Monitoring",
    essential: true,
    growth: true,
    accelerator: true,
  },
  {
    feature: "Local SEO",
    essential: false,
    growth: true,
    accelerator: true,
  },
  {
    feature: "Google Profile Management",
    essential: false,
    growth: true,
    accelerator: true,
  },
  {
    feature: "Review Growth Campaigns",
    essential: false,
    growth: true,
    accelerator: true,
  },
  {
    feature: "Unlimited Business Graphics",
    essential: false,
    growth: true,
    accelerator: true,
  },
  {
    feature: "3 Social Posts Per Week",
    essential: false,
    growth: true,
    accelerator: true,
  },
  {
    feature: "Monthly Competitor Report",
    essential: false,
    growth: true,
    accelerator: true,
  },
  {
    feature: "Seasonal Campaigns",
    essential: false,
    growth: true,
    accelerator: true,
  },
  {
    feature: "Monthly Growth Call",
    essential: false,
    growth: true,
    accelerator: true,
  },
  {
    feature: "Marketing Concierge Support",
    essential: false,
    growth: true,
    accelerator: true,
  },
  {
    feature: "Email Marketing",
    essential: false,
    growth: false,
    accelerator: true,
  },
  {
    feature: "Meta & Google Ads Management",
    essential: false,
    growth: false,
    accelerator: true,
  },
  {
    feature: "Lead Response Support",
    essential: false,
    growth: false,
    accelerator: true,
  },
  {
    feature: "Customer Reactivation Campaigns",
    essential: false,
    growth: false,
    accelerator: true,
  },
  {
    feature: "Missed Call Text-Back Setup",
    essential: false,
    growth: false,
    accelerator: true,
  },
  {
    feature: "Landing Page Optimisation",
    essential: false,
    growth: false,
    accelerator: true,
  },
];

const Cell = ({ value }: { value: boolean }) =>
  value ? (
    <Check className="mx-auto text-green-600" size={22} />
  ) : (
    <Minus className="mx-auto text-gray-300" size={22} />
  );

export default function PricingComparison() {
  return (
    <section className="bg-[#F8FAFC] py-24 md:block hidden">
      <div className="mx-auto max-w-7xl lg:px-0 px-5 ">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            Compare Packages
          </span>

          <h2 className="mt-3 text-2xl font-bold text-[#102A56] md:text-3xl lg:text-4xl">
            See exactly what's included
          </h2>

          <p className="mt-2 md:text-lg leading-8 text-gray-600">
            Compare every package side-by-side and choose the level of
            support that best suits your business.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl bg-white shadow-xl">
          <table className="min-w-225 w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="sticky left-0 bg-white px-6 py-6 text-left text-lg font-bold text-[#102A56]">
                  Features
                </th>

                <th className="px-8 py-6 text-center">
                  <h3 className="text-xl font-bold text-[#102A56]">
                    Essential
                  </h3>

                  <p className="mt-1 text-3xl font-bold text-[#244EB3]">
                    £395
                  </p>

                  <span className="text-gray-500">
                    /month
                  </span>
                </th>

                <th className="bg-[#244EB3] px-8 py-6 text-center text-white">
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
                    MOST POPULAR
                  </span>

                  <h3 className="mt-4 text-xl font-bold">
                    Growth Partner
                  </h3>

                  <p className="mt-1 text-3xl font-bold">
                    £695
                  </p>

                  <span className="text-blue-100">
                    /month
                  </span>
                </th>

                <th className="px-8 py-6 text-center">
                  <h3 className="text-xl font-bold text-[#102A56]">
                    Accelerator
                  </h3>

                  <p className="mt-1 text-3xl font-bold text-[#244EB3]">
                    £995
                  </p>

                  <span className="text-gray-500">
                    /month
                  </span>
                </th>
              </tr>
            </thead>

            <tbody>
              {comparison.map((item, index) => (
                <tr
                  key={item.feature}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="sticky left-0 bg-inherit px-6 py-5 font-medium text-[#102A56]">
                    {item.feature}
                  </td>

                  <td className="py-5">
                    <Cell value={item.essential} />
                  </td>

                  <td className="bg-blue-50 py-5">
                    <Cell value={item.growth} />
                  </td>

                  <td className="py-5">
                    <Cell value={item.accelerator} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};