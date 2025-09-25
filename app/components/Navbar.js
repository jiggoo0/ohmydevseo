"use client";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="w-full bg-gray-100 dark:bg-gray-900 p-4 flex justify-between items-center font-sans">
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/products">Products</Link>
      </div>
      <div>
        <Link href="/cart">
          Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
}