import { ArrowLeft, MessageCircle, PackageCheck } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../components/catalog/ProductCard";
import SectionTitle from "../components/common/SectionTitle";
import { getProductById, getRelatedProducts } from "../services/catalog";

function ProductDetails() {
  const { productId = "" } = useParams();
  const product = getProductById(productId);
  const relatedProducts = getRelatedProducts(product);

  if (!product) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">Product not found</p>
        <h1 className="mt-4 text-4xl font-black text-slate-950">This product is no longer available.</h1>
        <Link to="/products" className="mt-8 inline-flex rounded-full bg-blue-700 px-6 py-3 font-bold text-white">
          Back to Products
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link to="/products" className="mb-8 inline-flex items-center gap-2 font-bold text-blue-700">
          <ArrowLeft size={18} />
          Back to products
        </Link>

        <section className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
              <img src={product.images[0]} alt={product.name} className="h-[28rem] w-full object-cover" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {product.images.map((image) => (
                <img
                  key={image}
                  src={image}
                  alt={`${product.name} gallery`}
                  className="h-36 rounded-2xl object-cover shadow-sm"
                />
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-7 shadow-xl sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">{product.category}</p>
            <h1 className="mt-3 text-4xl font-black leading-tight text-slate-950 sm:text-5xl">{product.name}</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">{product.description}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase text-slate-400">Price</p>
                <p className="mt-1 font-black text-slate-950">{product.price}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase text-slate-400">MOQ</p>
                <p className="mt-1 font-black text-slate-950">{product.moq}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase text-slate-400">Availability</p>
                <p className="mt-1 flex items-center gap-2 font-black text-emerald-700">
                  <PackageCheck size={17} />
                  {product.availability}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-black text-slate-950">Specifications</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {product.specifications.map((specification) => (
                  <li key={specification} className="rounded-2xl bg-blue-50 px-4 py-3 font-semibold text-blue-900">
                    {specification}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={`https://wa.me/918267064057?text=Hello Shiva Tempered, I want to inquire about ${encodeURIComponent(product.name)}`}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-700 to-emerald-600 px-7 py-4 font-bold text-white shadow-lg shadow-blue-900/20"
            >
              <MessageCircle size={20} />
              Inquiry Button
            </a>
          </div>
        </section>

        {relatedProducts.length > 0 && (
          <section className="mt-20">
            <SectionTitle align="left" eyebrow="Related Products" title="Similar wholesale products" />
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export default ProductDetails;
