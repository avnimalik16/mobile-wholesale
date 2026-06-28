import { Search } from "lucide-react";

function SearchInput({ value, onChange, placeholder = "Search products" }) {
  return (
    <label className="relative block w-full">
      <span className="sr-only">{placeholder}</span>
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-full border border-slate-200 bg-white/90 py-3 pl-11 pr-4 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        type="search"
      />
    </label>
  );
}

export default SearchInput;
