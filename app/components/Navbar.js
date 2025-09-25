"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="w-full bg-gray-100 dark:bg-gray-900 p-4 flex justify-between items-center font-sans">
      <div className="flex gap-4">
        <Link href="/" className="font-bold text-lg text-gray-900 dark:text-gray-100">
          TKX Shop
        </Link>
        <Link href="/products" className="text-gray-700 dark:text-gray-300">
          Products
        </Link>
        <Link href="/about" className="text-gray-700 dark:text-gray-300">
          About
        </Link>
      </div>
      <div>
        <Link href="/cart" className="text-gray-700 dark:text-gray-300">
          Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
}