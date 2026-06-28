import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import products from "../../data/products";
import ProductCard from "../catalog/ProductCard";
import SectionTitle from "../common/SectionTitle";

function FeaturedProducts() {
  const featuredProducts = products.filter((product) => product.featured).slice(0, 6);

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle
            align="left"
            eyebrow="Featured Products"
            title="Best sellers ready for bulk orders"
            description="A handpicked selection of fast-moving wholesale products with clear MOQs and instant inquiry options."
          />
          <Link
            to="/products"
            className="mb-12 inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-900 shadow-sm transition hover:border-blue-600 hover:text-blue-700"
          >
            View all products
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
