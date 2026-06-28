import { useMemo, useState } from "react";
import { searchProducts } from "../services/catalog";

export default function useProductSearch(sourceProducts) {
  const [query, setQuery] = useState("");

  const results = useMemo(
    () => searchProducts(query, sourceProducts),
    [query, sourceProducts],
  );

  return { query, setQuery, results };
}
