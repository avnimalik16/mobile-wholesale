import { Eye, Gem, Target, Users } from "lucide-react";
import SectionTitle from "../components/common/SectionTitle";

const team = [
  { name: "Shiva Sales Team", role: "Wholesale Support" },
  { name: "Catalog Desk", role: "Product Sourcing" },
  { name: "Dispatch Team", role: "Packing & Logistics" },
];

function About() {
  return (
    <main>
      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-200">About Us</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">
            A wholesale partner focused on dependable stock and long-term retail relationships.
          </h1>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionTitle
              align="left"
              eyebrow="Company Story"
              title="Built for busy retailers"
              description="Shiva Tempered focuses on tempered glasses, camera protectors, and mobile accessories for retailers who need practical pricing, dependable inventory, and fast communication."
            />
            <p className="leading-8 text-slate-600">
              Our focus is simple: make wholesale ordering easier. We help shops and distributors source
              fast-moving products, understand MOQs clearly, and restock without long back-and-forth delays.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-100 p-4">
            <img
              src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1200&q=80"
              alt="Wholesale team planning"
              className="h-full min-h-96 rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            { icon: Target, title: "Mission", text: "Help retailers source reliable wholesale products with clarity and confidence." },
            { icon: Eye, title: "Vision", text: "Become a trusted mobile accessories and tempered glass supply partner for growing retail businesses." },
            { icon: Gem, title: "Values", text: "Transparent pricing, quality checks, responsive support, and practical MOQs." },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="rounded-3xl bg-white p-8 shadow-sm">
                <Icon className="text-blue-700" size={34} />
                <h2 className="mt-5 text-2xl font-black text-slate-950">{item.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Team" title="People behind the wholesale desk" />
          <div className="grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <article key={member.name} className="rounded-3xl border border-slate-100 bg-slate-50 p-7 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-700 text-white">
                  <Users size={28} />
                </div>
                <h3 className="mt-5 text-xl font-black text-slate-950">{member.name}</h3>
                <p className="mt-1 text-slate-500">{member.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
