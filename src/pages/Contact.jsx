import { Clock, Mail, MapPin, Phone } from "lucide-react";
import SectionTitle from "../components/common/SectionTitle";

function Contact() {
  return (
    <main className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Contact"
          title="Talk to our wholesale team"
          description="Share your requirements and we will respond with stock availability, MOQ, pricing, and dispatch options."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
          <form className="rounded-3xl bg-white p-6 shadow-xl sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 font-semibold text-slate-700">
                Name
                <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600" type="text" />
              </label>
              <label className="grid gap-2 font-semibold text-slate-700">
                Phone
                <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600" type="tel" />
              </label>
              <label className="grid gap-2 font-semibold text-slate-700 sm:col-span-2">
                Email
                <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600" type="email" />
              </label>
              <label className="grid gap-2 font-semibold text-slate-700 sm:col-span-2">
                Requirement
                <textarea
                  className="min-h-36 rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
                  placeholder="Tell us product categories, quantity, and delivery city"
                />
              </label>
            </div>
            <button className="mt-6 w-full rounded-full bg-gradient-to-r from-blue-700 to-emerald-600 px-7 py-4 font-bold text-white" type="submit">
              Submit Inquiry
            </button>
          </form>

          <div className="space-y-5">
            <div className="rounded-3xl bg-white p-7 shadow-xl">
              {[
                { icon: Phone, label: "Phone", value: "9760684057" },
                { icon: Mail, label: "Email", value: "sales@shivatempered.com" },
                { icon: Clock, label: "Working Hours", value: "Mon-Sat, 10:00 AM - 7:00 PM" },
                { icon: MapPin, label: "Location", value: "Wholesale dispatch desk, India" },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="flex gap-4 border-b border-slate-100 py-4 last:border-0">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="font-black text-slate-950">{item.label}</p>
                      <p className="text-slate-600">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex min-h-72 items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center shadow-sm">
              <div>
                <MapPin className="mx-auto text-blue-700" size={36} />
                <h2 className="mt-4 text-2xl font-black text-slate-950">Map Placeholder</h2>
                <p className="mt-2 text-slate-600">Embed Google Maps here when the business address is finalized.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
