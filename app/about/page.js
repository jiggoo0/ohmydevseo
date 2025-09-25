"use client";

import "../globals.css";

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">About TKX Shop</h1>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Welcome to TKX Shop! We are your one-stop destination for demo products in our SPA Next.js store.
      </p>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Our mission is to provide an easy-to-use, fast, and responsive online shopping experience. Browse products, add them to your cart, and checkout seamlessly.
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        This SPA is built with Next.js, TailwindCSS, and React Context for state management.
      </p>
    </div>
  );
}