"use client";

import { useCart } from "../context/CartContext";
import { products } from "@/app/data/products";
import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  const { addToCart } = useCart();

  if (!products || products.length === 0) {
    return (
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          ขณะนี้ยังไม่มีสินค้าให้เลือก
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">
        สินค้าและบริการของเรา
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}