import { Award, Boxes, MapPinned, Store } from "lucide-react";

const stats = [
  { icon: Boxes, number: "500+", title: "Mobile accessory SKUs" },
  { icon: Store, number: "1000+", title: "Retailers served" },
  { icon: MapPinned, number: "28+", title: "States supplied" },
  { icon: Award, number: "5+", title: "Years experience" },
];

function Statistics() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="rounded-3xl border border-slate-100 bg-slate-50 p-6 text-center shadow-sm">
                <Icon size={36} className="mx-auto text-blue-700" />
                <h2 className="mt-4 text-3xl font-black text-slate-950 sm:text-4xl">{item.number}</h2>
                <p className="mt-2 text-sm font-semibold text-slate-500">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Statistics;
