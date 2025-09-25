"use client";

import ProductCard from "./ProductCard";
import { featuredProducts } from "@/app/data/featured";

export default function FeaturedProducts() {
  if (!featuredProducts || featuredProducts.length === 0) {
    return <p className="text-center py-8 text-gray-500">No featured products available</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {featuredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}