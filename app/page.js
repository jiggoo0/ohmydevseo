"use client";

import "./globals.css";  // แก้ path ให้ถูกต้อง
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import NewsletterForm from "./components/NewsletterForm";

export default function Home() {
  return (
    <>
      <Hero />
      <section id="featured">
        <FeaturedProducts />
      </section>
      <NewsletterForm />
    </>
  );
}