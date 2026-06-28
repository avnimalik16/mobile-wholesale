import {
  FaTruck,
  FaPhoneAlt,
  FaEnvelope,
  FaGem,
} from "react-icons/fa";

function TopBar() {
  return (
    <div className="bg-slate-950 text-white text-sm">

      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between">

        <div className="flex gap-8">

          <span className="flex items-center gap-2">

            <FaTruck className="text-green-400" />

            Fast Dispatch

          </span>

          <span className="flex items-center gap-2">

            <FaGem className="text-blue-400" />

            Premium Quality

          </span>

          <span>

            PAN India Delivery

          </span>

        </div>

        <div className="flex gap-8">

          <span className="flex items-center gap-2">

            <FaPhoneAlt />

            +91 9760684057

          </span>

          <span className="flex items-center gap-2">

            <FaEnvelope />

            sales@shivatempered.com

          </span>

        </div>

      </div>

    </div>
  );
}

export default TopBar;