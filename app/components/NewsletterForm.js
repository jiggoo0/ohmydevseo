"use client";

export default function NewsletterForm() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-12">
      <h3 className="font-bold mb-4">Subscribe to our Newsletter</h3>
      <form className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          placeholder="Your email"
          className="flex-1 p-2 rounded border border-gray-300 dark:border-gray-700"
        />
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
          Subscribe
        </button>
      </form>
    </section>
  );
}