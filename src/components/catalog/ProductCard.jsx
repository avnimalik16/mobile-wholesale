import { MessageCircle, PackageCheck } from "lucide-react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-lg shadow-slate-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <Link to={`/products/${product.id}`} className="block overflow-hidden bg-slate-100">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-700">
            {product.category}
          </span>
          <span className="flex items-center gap-1 text-xs font-semibold text-emerald-700">
            <PackageCheck size={15} />
            {product.availability}
          </span>
        </div>

        <div>
          <Link to={`/products/${product.id}`} className="text-xl font-bold text-slate-950 hover:text-blue-700">
            {product.name}
          </Link>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{product.description}</p>
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 pt-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-400">MOQ</p>
            <p className="font-semibold text-slate-900">{product.moq}</p>
          </div>
          <p className="font-bold text-blue-700">{product.price}</p>
        </div>

        <a
          href={`https://wa.me/918267064057?text=Hello Shiva Tempered, I want wholesale price for ${encodeURIComponent(product.name)}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-700 to-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-900/20 transition hover:scale-[1.01]"
        >
          <MessageCircle size={18} />
          Send Inquiry
        </a>
      </div>
    </article>
  );
}

export default ProductCard;
