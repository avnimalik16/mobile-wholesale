import CategoryCard from "../catalog/CategoryCard";
import SectionTitle from "../common/SectionTitle";
import { categories } from "../../data/products";

function ProductCategories() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Featured Categories"
          title="Wholesale categories built for mobile accessory retailers"
          description="Source reliable stock across tempered glasses, camera protectors, back covers, chargers, cables, and earbuds."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.slice(0, 5).map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductCategories;
