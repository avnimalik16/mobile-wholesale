import heroBg from "../../assets/hero-bg.jpeg";
import {
  FaWhatsapp,
  FaDownload,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}

          <div>

            <span className="inline-block bg-blue-600/20 border border-blue-500 text-blue-300 px-5 py-2 rounded-full text-sm font-semibold">
              Trusted Wholesale Supplier Across India
            </span>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight mt-8">

              Premium Mobile
              <br />

              Accessories &
              <br />

              <span className="text-blue-400">

                Screen Protectors

              </span>

            </h1>

            <p className="text-gray-300 text-xl leading-9 mt-8 max-w-xl">

              High-quality tempered glass, camera protectors,
              back covers, chargers, earbuds, smart watches,
              cables and mobile accessories at wholesale prices.

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="#catalogue"
                className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl flex items-center gap-3 font-semibold"
              >
                <FaDownload />

                Download Catalogue

              </a>

              <a
                href="https://wa.me/919760684057"
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-xl flex items-center gap-3 font-semibold"
              >
                <FaWhatsapp />

                WhatsApp Us

              </a>

            </div>

            {/* FEATURES */}

            <div className="grid grid-cols-2 gap-5 mt-12">

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-green-400" />

                Premium Quality

              </div>

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-green-400" />

                Bulk Orders

              </div>

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-green-400" />

                PAN India Delivery

              </div>

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-green-400" />

                Fast Dispatch

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <img
              src={heroBg}
              alt="Mobile Accessories"
              className="rounded-3xl shadow-2xl object-cover w-full h-[800px]"
            />

            
                

              

            

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;