import { Star } from "lucide-react";
import SectionTitle from "../common/SectionTitle";

const testimonials = [
  {
    name: "Amit Verma",
    role: "Mobile Store Owner",
    quote:
      "Their tempered glass stock moves quickly in our shop. Pricing is clear, packing is clean, and reorders are simple.",
  },
  {
    name: "Neha Traders",
    role: "Distributor",
    quote:
      "We get quick replies on availability and dispatch. That reliability matters when supplying multiple retail counters.",
  },
  {
    name: "R K Accessories",
    role: "Retail Chain Buyer",
    quote:
      "Good mix of fast-moving products, practical MOQs, and support that understands wholesale urgency.",
  },
];

function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Testimonials"
          title="Trusted by retailers and distributors"
          description="Wholesale buyers choose us for consistent stock, practical pricing, and responsive communication."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-3xl border border-slate-100 bg-slate-50 p-7 shadow-sm">
              <div className="flex gap-1 text-amber-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="mt-5 leading-7 text-slate-700">"{testimonial.quote}"</p>
              <div className="mt-6 border-t border-slate-200 pt-5">
                <p className="font-black text-slate-950">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
