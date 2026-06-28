import { Link, useParams } from "react-router-dom";
import ProductCard from "../components/catalog/ProductCard";
import SectionTitle from "../components/common/SectionTitle";
import { getCategoryById, getProductsByCategory } from "../services/catalog";

function Category() {
  const { category = "" } = useParams();
  const categoryDetails = getCategoryById(category);
  const products = getProductsByCategory(category);

  if (!categoryDetails) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">Category not found</p>
        <h1 className="mt-4 text-4xl font-black text-slate-950">We could not find that category.</h1>
        <Link to="/categories" className="mt-8 inline-flex rounded-full bg-blue-700 px-6 py-3 font-bold text-white">
          View Categories
        </Link>
      </main>
    );
  }

  return (
    <main>
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
        <img src={categoryDetails.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-200">Category</p>
          <h1 className="mt-4 text-4xl font-black sm:text-6xl">{categoryDetails.name}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">{categoryDetails.tagline}</p>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            align="left"
            eyebrow="Available Stock"
            title={`${categoryDetails.name} products`}
            description={`${products.length} wholesale product${products.length === 1 ? "" : "s"} available in this category.`}
          />

          {products.length > 0 ? (
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center">
              <h2 className="text-2xl font-black text-slate-950">Stock list coming soon</h2>
              <p className="mt-3 text-slate-600">Contact sales for current availability in this category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Category;
