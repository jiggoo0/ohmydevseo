"use client";

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-20 px-4 sm:px-6 lg:px-8 rounded-lg mb-12 shadow-lg">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Welcome to TKX Shop
        </h1>
        <p className="text-lg sm:text-xl mb-8">
          Your one-stop shop for demo SPA products.
        </p>
        <a
          href="#featured"
          className="inline-block bg-white text-indigo-600 font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Browse Featured Products
        </a>
      </div>
    </section>
  );
}