import { ClipboardList, PackageCheck, Truck, WalletCards } from "lucide-react";
import SectionTitle from "../common/SectionTitle";

const steps = [
  { icon: ClipboardList, title: "Share requirement", text: "Send product type, quantity, models, and delivery city." },
  { icon: WalletCards, title: "Get wholesale quote", text: "Receive pricing, MOQ, availability, and dispatch timeline." },
  { icon: PackageCheck, title: "Confirm order", text: "Stock is packed, checked, and prepared for pickup or shipping." },
  { icon: Truck, title: "Dispatch & reorder", text: "Track shipment and reorder quickly from your purchase history." },
];

function Process() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Our Process"
          title="Simple wholesale ordering from inquiry to dispatch"
          description="A practical workflow for busy retailers who need stock clarity before committing to bulk orders."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article key={step.title} className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                <span className="text-sm font-bold text-emerald-300">Step {index + 1}</span>
                <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-700">
                  <Icon size={23} />
                </div>
                <h3 className="mt-6 text-xl font-black">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{step.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Process;
