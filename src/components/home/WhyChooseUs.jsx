import { BadgeCheck, Boxes, Headphones, IndianRupee, ShieldCheck, Truck } from "lucide-react";
import SectionTitle from "../common/SectionTitle";

const features = [
  {
    icon: IndianRupee,
    title: "Wholesale-first pricing",
    description: "Clear bulk MOQs and competitive rates for retailers, resellers, and distributors.",
  },
  {
    icon: Boxes,
    title: "Ready stock depth",
    description: "Fast-moving inventory for tempered glass, camera protectors, and mobile accessories.",
  },
  {
    icon: Truck,
    title: "PAN India dispatch",
    description: "Secure packing and dependable dispatch support for multi-city orders.",
  },
  {
    icon: ShieldCheck,
    title: "Quality checked",
    description: "Products are checked for packing, finish, and retail readiness before dispatch.",
  },
  {
    icon: Headphones,
    title: "Responsive support",
    description: "Quick answers on availability, model compatibility, pricing, and reorders.",
  },
  {
    icon: BadgeCheck,
    title: "Retailer trust",
    description: "Built for repeat wholesale relationships, not one-time transactions.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Why Choose Us"
          title="A wholesale experience designed around repeat buyers"
          description="Every part of the workflow is tuned for retailers who need reliable stock, fast answers, and consistent margins."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="rounded-3xl border border-slate-100 bg-slate-50 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-white">
                  <Icon size={24} />
                </div>
                <h3 className="mt-6 text-xl font-black text-slate-950">{feature.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
