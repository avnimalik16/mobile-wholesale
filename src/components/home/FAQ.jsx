import faqs from "../../data/faq";
import SectionTitle from "../common/SectionTitle";

function FAQ({ limit }) {
  const visibleFaqs = limit ? faqs.slice(0, limit) : faqs;

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="FAQ"
          title="Common wholesale questions"
          description="Quick answers about MOQs, shipping, pricing, and order handling."
        />

        <div className="space-y-4">
          {visibleFaqs.map((faq) => (
            <details key={faq.question} className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
              <summary className="cursor-pointer list-none text-lg font-black text-slate-950">
                {faq.question}
              </summary>
              <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
