import products, { categories } from "../data/products";

export function getProductById(id) {
  return products.find((product) => product.id === id);
}

export function getCategoryById(id) {
  return categories.find((category) => category.id === id);
}

export function getProductsByCategory(categoryId) {
  return products.filter((product) => product.categoryId === categoryId);
}

export function getRelatedProducts(product, limit = 3) {
  if (!product) {
    return [];
  }

  return products
    .filter((item) => item.categoryId === product.categoryId && item.id !== product.id)
    .slice(0, limit);
}

export function searchProducts(query, source = products) {
  const searchTerm = query.trim().toLowerCase();

  if (!searchTerm) {
    return source;
  }

  return source.filter((product) =>
    [product.name, product.category, product.description, product.availability]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm),
  );
}
