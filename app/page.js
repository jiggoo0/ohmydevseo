"use client";

import Hero from "./components/Hero";
import TopupSection from "./components/TopupSection";
import FeaturedProducts from "./components/FeaturedProducts";
import NewsletterForm from "./components/NewsletterForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section id="topup" className="py-12 bg-gray-100 dark:bg-gray-800">
        <TopupSection />
      </section>
      <section id="featured" className="py-12">
        <FeaturedProducts />
      </section>
      <section id="newsletter" className="py-12 bg-gray-100 dark:bg-gray-800">
        <NewsletterForm />
      </section>
    </>
  );
}