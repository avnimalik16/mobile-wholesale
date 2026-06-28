import {
  FaSearch,
  FaWhatsapp,
  FaFileDownload,
  FaBars,
} from "react-icons/fa";

import { useState } from "react";
import logo from "../../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-xl sticky top-0 z-50">

      {/* TOP */}

      <div className="max-w-7xl mx-auto px-6 py-5">

        <div className="flex items-center justify-between gap-10">

          {/* LOGO */}

          <div className="flex items-center gap-4">

            <img
              src={logo}
              alt="logo"
              className="w-16 h-16 object-contain"
            />

            <div>

              <h1 className="text-3xl font-black tracking-wide">

                SHIVA TEMPERED

              </h1>

              <p className="text-gray-500 text-sm">

                Wholesale Mobile Accessories

              </p>

            </div>

          </div>

          {/* SEARCH */}

          <div className="hidden lg:flex flex-1 max-w-2xl">

            <div className="flex w-full border rounded-full overflow-hidden shadow-md">

              <input
                type="text"
                placeholder="Search Tempered Glass, Covers, Chargers..."
                className="flex-1 px-6 py-4 outline-none"
              />

              <button className="bg-blue-600 px-8 text-white hover:bg-blue-700 transition">

                <FaSearch />

              </button>

            </div>

          </div>

          {/* RIGHT */}

          <div className="hidden lg:flex items-center gap-4">

            <a
              href="https://wa.me/919760684057"
              target="_blank"
              className="flex items-center gap-2 text-green-600 font-bold"
            >
              <FaWhatsapp size={30} />

              WhatsApp

            </a>

            <button className="border rounded-xl px-5 py-3 flex items-center gap-2 hover:bg-gray-100">

              <FaFileDownload />

              Catalogue

            </button>

          </div>

          {/* MOBILE */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-2xl"
          >
            <FaBars />
          </button>

        </div>

      </div>

      {/* MENU */}

      <div className="bg-slate-900">

        <div className="max-w-7xl mx-auto px-6">

          <div className="hidden lg:flex justify-between items-center">

            <div className="flex gap-8">

              {[
                "Home",
                "Products",
                "Categories",
                "New Arrivals",
                "About",
                "FAQ",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white py-5 hover:text-blue-400 transition"
                >
                  {item}
                </a>
              ))}

            </div>

            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold">

              Get Wholesale Quote

            </button>

          </div>

          {menuOpen && (

            <div className="lg:hidden flex flex-col text-white py-5 gap-4">

              <a href="#">Home</a>
              <a href="#">Products</a>
              <a href="#">Categories</a>
              <a href="#">About</a>
              <a href="#">FAQ</a>
              <a href="#">Contact</a>

            </div>

          )}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;