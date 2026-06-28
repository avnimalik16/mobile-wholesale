import CategoryCard from "../components/catalog/CategoryCard";
import SectionTitle from "../components/common/SectionTitle";
import { categories } from "../data/products";

function Categories() {
  return (
    <main className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Categories"
          title="Explore wholesale categories"
          description="Choose a category to view available products, MOQs, and inquiry options."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Categories;
