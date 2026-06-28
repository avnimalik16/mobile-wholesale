import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <Link
      to={`/category/${category.id}`}
      className="group relative min-h-72 overflow-hidden rounded-3xl bg-slate-900 shadow-lg shadow-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      <img
        src={category.image}
        alt={category.name}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" />
      <div className="relative flex h-full min-h-72 flex-col justify-end p-7 text-white">
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 backdrop-blur">
          <ArrowUpRight size={20} />
        </div>
        <h3 className="text-2xl font-bold">{category.name}</h3>
        <p className="mt-3 text-sm leading-6 text-white/80">{category.tagline}</p>
      </div>
    </Link>
  );
}

export default CategoryCard;
