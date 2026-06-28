import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

function ContactCTA() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-800 to-emerald-600 p-8 text-white shadow-2xl shadow-blue-900/20 sm:p-12 lg:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.28),transparent_35%)]" />
          <div className="relative max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-100">Call To Action</p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
              Need a wholesale quote for your next stock order?
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/85">
              Share your product list and quantities. We will respond with pricing, MOQ, availability, and
              dispatch options.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/918267064057"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-blue-800"
              >
                <MessageCircle size={20} />
                WhatsApp Sales
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-4 font-bold text-white"
              >
                Contact Form
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;
