"use client";

import Button from "./Button";

export default function ProductCard({ product, addToCart }) {
  if (!product) return null;

  return (
    <div className="flex flex-col border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800">
      {/* Product Image */}
      <div className="w-full h-48 sm:h-56 md:h-64 relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
            {product.name}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            {product.description}
          </p>
          <p className="text-indigo-600 dark:text-indigo-400 font-bold text-lg">
            {product.price.toLocaleString()} บาท
          </p>
        </div>

        {/* Add to Cart Button */}
        <div className="mt-4">
          <Button
            onClick={() => addToCart(product)}
            variant="primary"
            size="md"
          >
            เพิ่มลงตะกร้า
          </Button>
        </div>
      </div>
    </div>
  );
}