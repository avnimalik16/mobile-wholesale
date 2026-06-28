function Terms() {
  return (
    <main className="bg-white py-20">
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">Terms</p>
        <h1 className="mt-4 text-4xl font-black text-slate-950">Wholesale order terms</h1>
        <div className="mt-8 space-y-6 leading-8 text-slate-600">
          <p>
            Product availability, pricing, and minimum order quantities may change based on stock, demand,
            and supplier updates. Final terms are confirmed before order processing.
          </p>
          <p>
            Orders are packed after confirmation of product list, quantity, pricing, payment terms, and
            dispatch method. Shipping costs and timelines depend on destination and order size.
          </p>
          <p>
            Returns or replacements are handled according to product condition, packaging status, and
            supplier policy communicated at the time of sale.
          </p>
        </div>
      </article>
    </main>
  );
}

export default Terms;
