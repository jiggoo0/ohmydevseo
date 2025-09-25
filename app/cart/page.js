"use client";

import { useCart } from "../context/CartContext";
import Button from "../components/Button";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  if (!cart || cart.length === 0) {
    return (
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          Your cart is empty.
        </p>
      </div>
    );
  }

  const totalPrice = cart.reduce((sum, product) => sum + (product.price || 0), 0);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="grid grid-cols-1 gap-6">
        {cart.map((product, index) => (
          <div
            key={product.id || index}
            className="flex flex-col sm:flex-row items-center justify-between p-4 border rounded-md bg-white dark:bg-gray-800 shadow"
          >
            <div className="flex items-center space-x-4">
              <img
                src={product.image || "/products/default.png"}
                alt={product.name || "Product Image"}
                className="w-24 h-24 object-cover rounded"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {product.name || "Unnamed Product"}
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  ${product.price?.toFixed(2) || "0.00"}
                </p>
              </div>
            </div>

            <div className="mt-4 sm:mt-0 flex space-x-2">
              <Button onClick={() => removeFromCart(product)} variant="danger">
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col sm:flex-row sm:justify-between items-center">
        <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Total: ${totalPrice.toFixed(2)}
        </p>
        <Button onClick={clearCart} variant="secondary" className="mt-4 sm:mt-0">
          Clear Cart
        </Button>
      </div>
    </div>
  );
}