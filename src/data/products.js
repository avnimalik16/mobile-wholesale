export const categories = [
  {
    id: "tempered-glass",
    name: "Tempered Glass",
    tagline: "Premium screen protection stock for fast-moving mobile models.",
    image: "/products/original-superx.jpg",
  },
  {
    id: "camera-protectors",
    name: "Camera Protectors",
    tagline: "Camera lens glass and guard stock with retailer-friendly MOQs.",
    image: "/products/black-border.jpg",
  },
  {
    id: "mobile-accessories",
    name: "Mobile Accessories",
    tagline: "Back covers, chargers, cables, earbuds, and add-on accessories.",
    image:
      "/products/mobile-accessory.avif",
  },
];

const products = [
  {
    id: "original-superx",
    name: "Original SuperX Tempered Glass",
    category: "Tempered Glass",
    categoryId: "tempered-glass",
    description:
      "A clear, responsive tempered glass range for high-turnover mobile shops and distributors.",
    price: "Quote on request",
    images: ["/products/original-superx.jpg", "/products/new-og-superx.jpg"],
    moq: "10 Pieces",
    availability: "Ready Stock",
    featured: true,
    specifications: ["9H hardness", "Full glue", "Retail-ready packing", "Anti-scratch finish"],
  },
  {
    id: "new-og-superx",
    name: "New OG SuperX Tempered Glass",
    category: "Tempered Glass",
    categoryId: "tempered-glass",
    description:
      "Premium tempered glass with smooth finish, reliable touch response, and clean retail packaging.",
    price: "Quote on request",
    images: ["/products/new-og-superx.jpg", "/products/original-superx.jpg"],
    moq: "10 Pieces",
    availability: "Ready Stock",
    featured: true,
    specifications: ["Full coverage", "Smooth edges", "Bubble-free install", "Wholesale packing"],
  },
  {
    id: "privacy-glass",
    name: "Privacy Tempered Glass",
    category: "Tempered Glass",
    categoryId: "tempered-glass",
    description:
      "Privacy protection glass for customers who need screen security without compromising touch response.",
    price: "Quote on request",
    images: ["/products/privacy.jpg", "/products/black-border.jpg"],
    moq: "10 Pieces",
    availability: "Ready Stock",
    featured: true,
    specifications: ["Privacy filter", "Anti-fingerprint coating", "Bubble-free install", "9H hardness"],
  },
  {
    id: "ag-matte-glass",
    name: "AG Matte Tempered Glass",
    category: "Tempered Glass",
    categoryId: "tempered-glass",
    description:
      "Matte-finish tempered glass built for gamers, stylus users, and customers who prefer reduced glare.",
    price: "Quote on request",
    images: ["/products/ag-matte.jpg", "/products/300cc.jpg"],
    moq: "10 Pieces",
    availability: "Ready Stock",
    featured: true,
    specifications: ["Anti-glare finish", "Smooth swipe feel", "Case friendly", "Retail box packing"],
  },
  {
    id: "300cc-tempered",
    name: "300CC Tempered Glass",
    category: "Tempered Glass",
    categoryId: "tempered-glass",
    description:
      "Durable tempered glass stock for retailers who need dependable quality and repeat availability.",
    price: "Quote on request",
    images: ["/products/300cc.jpg", "/products/ag-matte.jpg"],
    moq: "10 Pieces",
    availability: "Ready Stock",
    featured: true,
    specifications: ["Clear finish", "Strong adhesion", "Retail packaging", "Popular model coverage"],
  },
  {
    id: "camera-lens-glass",
    name: "Camera Lens Protector",
    category: "Camera Protectors",
    categoryId: "camera-protectors",
    description:
      "Camera lens protector stock for premium handsets, designed for quick retail replacement sales.",
    price: "Quote on request",
    images: ["/products/black-border.jpg", "/products/privacy.jpg"],
    moq: "5 Pieces",
    availability: "Ready Stock",
    featured: true,
    specifications: ["Lens protection", "Easy install", "Model-wise stock", "Retail-ready packing"],
  },
  {
    id: "premium-phone-covers",
    name: "Premium Back Covers Bundle",
    category: "Mobile Accessories",
    categoryId: "mobile-accessories",
    description:
      "Assorted designer and transparent back covers for popular handset models with fast restock cycles.",
    price: "From ₹59",
    images: [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=1200&q=80",
    ],
    moq: "5 Pieces",
    availability: "Ready Stock",
    featured: false,
    specifications: ["Mixed models", "Transparent and designer options", "Scratch resistant", "Retail hang pack"],
  },
  {
    id: "fast-charging-kit",
    name: "Fast Charging Kit",
    category: "Mobile Accessories",
    categoryId: "mobile-accessories",
    description:
      "A wholesale-ready charger and cable combo with dependable output and strong shelf appeal.",
    price: "From ₹149",
    images: [
      "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=1200&q=80",
    ],
    moq: "5 Pieces",
    availability: "Ready Stock",
    featured: true,
    specifications: ["Type-C options", "Fast charging support", "Bulk carton packing", "QC tested"],
  },
  {
    id: "wireless-earbuds",
    name: "Wireless Earbuds Retail Pack",
    category: "Mobile Accessories",
    categoryId: "mobile-accessories",
    description:
      "Compact earbuds with attractive packaging for high-margin mobile accessory counters.",
    price: "From ₹499",
    images: [
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=1200&q=80",
    ],
    moq: "5 Pieces",
    availability: "Ready Stock",
    featured: true,
    specifications: ["Charging case", "Assorted colors", "Retail box", "Bulk discounts"],
  },
];

export default products;
