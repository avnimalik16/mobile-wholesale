import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  ["Home", "/"],
  ["Categories", "/categories"],
  ["Products", "/products"],
  ["FAQ", "/faq"],
  ["Privacy Policy", "/privacy-policy"],
  ["Terms", "/terms"],
];

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_0.8fr_1fr_1fr] lg:px-8">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <img src="/images/logo.png" alt="Shiva Tempered" className="h-12 rounded-xl bg-white" />
            <div>
              <p className="text-xl font-black">Shiva Tempered</p>
              <p className="text-sm text-slate-400">Premium wholesale supply partner</p>
            </div>
          </Link>
          <p className="mt-5 max-w-sm leading-7 text-slate-300">
            Supplying tempered glasses, camera protectors, and mobile accessories with dependable stock,
            clear MOQs, and retailer-friendly service.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="https://example.com"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-blue-600"
                aria-label="Social profile"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">Quick Links</h3>
          <div className="mt-5 grid gap-3">
            {quickLinks.map(([label, to]) => (
              <Link key={to} to={to} className="text-slate-300 transition hover:text-white">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">Contact</h3>
          <div className="mt-5 space-y-4 text-slate-300">
            <a href="tel:9760684057" className="flex items-center gap-3 hover:text-white">
              <Phone size={18} />
              9760684057
            </a>
            <a href="mailto:sales@shivatempered.com" className="flex items-center gap-3 hover:text-white">
              <Mail size={18} />
              sales@shivatempered.com
            </a>
            <p>Mon-Sat, 10:00 AM - 7:00 PM</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">Newsletter</h3>
          <p className="mt-5 text-slate-300">Get stock updates and wholesale offers.</p>
          <form className="mt-5 flex overflow-hidden rounded-full bg-white p-1">
            <input
              className="min-w-0 flex-1 px-4 text-sm text-slate-900 outline-none"
              placeholder="Email address"
              type="email"
            />
            <button className="rounded-full bg-blue-700 px-5 py-3 text-sm font-bold text-white" type="submit">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6 text-center text-sm text-slate-400">
        Copyright 2026 Shiva Tempered. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
