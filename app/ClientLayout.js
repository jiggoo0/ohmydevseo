"use client";

import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function ClientLayout({ children }) {
  return (
    <CartProvider>
      <Navbar />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </CartProvider>
  );
}