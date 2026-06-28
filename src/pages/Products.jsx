import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/catalog/ProductCard";
import SearchInput from "../components/common/SearchInput";
import SectionTitle from "../components/common/SectionTitle";
import products from "../data/products";
import useProductSearch from "../hooks/useProductSearch";

function Products() {
  const [searchParams] = useSearchParams();
  const { query, setQuery, results } = useProductSearch(products);

  useEffect(() => {
    setQuery(searchParams.get("search") ?? "");
  }, [searchParams, setQuery]);

  return (
    <main className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_24rem] lg:items-end">
          <SectionTitle
            align="left"
            eyebrow="Products"
            title="Wholesale product catalog"
            description="Search instantly across categories, product names, descriptions, availability, and MOQs."
          />
          <div className="mb-12">
            <SearchInput value={query} onChange={setQuery} placeholder="Search products instantly" />
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between gap-4">
          <p className="font-semibold text-slate-600">
            Showing {results.length} of {products.length} products
          </p>
        </div>

        {results.length > 0 ? (
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center">
            <h2 className="text-2xl font-black text-slate-950">No products found</h2>
            <p className="mt-3 text-slate-600">Try another keyword or contact sales for custom sourcing.</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default Products;
