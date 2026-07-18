import {
  Globe,
  Search,
  MapPinned,
  Star,
  Palette,
  Image,
  Mail,
  Bot,
  CheckCircle2,
} from "lucide-react";

const solutions = [
  {
    title: "Website Build & Management",
    icon: Globe,
  },
  {
    title: "AI Customer Response Assistant",
    icon: Bot,
  },
  {
    title: "Local SEO & Google Visibility",
    icon: Search,
  },
  {
    title: "Google Business Profile Mangement",
    icon: MapPinned,
  },
  {
    title: "Review Management & Reputation Management",
    icon: Star,
  },
  {
    title: "Unlimited Business Graphics",
    icon: Palette,
  },
  {
    title: "3 Social Media Graphics Posts per Week",
    icon: Image,
  },
  {
    title: "Email Marketing & Ads Management on Accelerator",
    icon: Mail,
  },
];

export default function SolutionSection() {
  return (
    <section className="md:py-24 py-16 bg-white">
      <div className="max-w-7xl mx-auto md:px-0 px-5">

        <div className="grid lg:grid-cols-2 md:gap-20 gap-10 items-center">

          {/* Left */}

          <div>

            <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              One Team. One Monthly Fee.
            </span>

            <h2 className="mt-4 text-2xl lg:text-4xl font-bold leading-tight text-[#102A56]">
              Everything handled.
            </h2>

            <p className="mt-3 md:text-lg leading-8 text-gray-600">
              Instead of hiring a website developer, SEO specialist,
              designer, social media manager, ads expert and marketing
              coordinator separately...
            </p>

            <p className="mt-2 md:text-lg leading-8 text-gray-600">
              <span className="font-semibold text-[#102A56]">
                Wellranked gives you one joined-up team
              </span>{" "}
              working together to improve your online presence,
              generate more enquiries and help your business grow.
            </p>

            <div className="mt-5 space-y-4">

              {[
                "No freelancers to manage",
                "No expensive in-house hires",
                "One monthly payment",
                "Everything working together",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={22}
                    className="text-green-600"
                  />

                  <span className="text-gray-700 font-medium">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

          {/* Right */}

          <div className="rounded-3xl border border-gray-200 bg-[#F8FAFF] md:p-8 p-4">

            <div className="grid sm:grid-cols-2 gap-4">

              {solutions.map(({ title, icon: Icon }) => (
                <div
                  key={title}
                  className="group rounded-2xl bg-white border border-gray-100 p-5"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-4 font-medium text-[#102A56]">
                    {title}
                  </h3>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};