"use client";

import "../globals.css";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 dark:text-gray-300">Add some products to your cart!</p>
      </div>
    );
  }

  const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {cart.map((product) => (
          <div key={product.id} className="border rounded p-4 flex flex-col">
            <ProductCard product={product} />
            <button
              onClick={() => removeFromCart(product.id)}
              className="mt-2 bg-red-500 text-white rounded px-3 py-1 hover:bg-red-600 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <span className="text-xl font-semibold">Total: ${totalPrice}</span>
        <button
          onClick={clearCart}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}