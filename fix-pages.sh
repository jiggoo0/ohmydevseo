#!/usr/bin/env bash
set -e

ROOT=$(pwd)
APP="$ROOT/app"

echo "🚀 Fixing Next.js pages and layout..."

# 1. ลบไฟล์ CategoryGrid.js เก่าใน data
if [ -f "$APP/data/CategoryGrid.js" ]; then
  echo "🗑️ Removing old data file: CategoryGrid.js"
  rm "$APP/data/CategoryGrid.js"
fi

# 2. แก้ไข app/page.js ให้เป็น HomePage
PAGE_FILE="$APP/page.js"
cat > "$PAGE_FILE" << 'EOF'
"use client";

import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import NewsletterForm from "./components/NewsletterForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section id="featured" className="py-12">
        <FeaturedProducts />
      </section>
      <section id="newsletter" className="py-12 bg-gray-100 dark:bg-gray-800">
        <NewsletterForm />
      </section>
    </>
  );
}
EOF
echo "✅ app/page.js updated as HomePage"

# 3. ตรวจสอบ layout.js
LAYOUT_FILE="$APP/layout.js"
if [ ! -f "$LAYOUT_FILE" ]; then
  echo "⚠️ layout.js not found, creating default RootLayout"
  cat > "$LAYOUT_FILE" << 'EOF'
"use client";

import "./globals.css";
import { CartProvider } from "@/app/context/CartContext";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
EOF
  echo "✅ layout.js created"
else
  echo "ℹ️ layout.js exists, please ensure it wraps children with CartProvider, Navbar, Footer"
fi

# 4. ตรวจสอบ import path ของ FeaturedProducts, ProductCard, CategoryGrid
echo "🔍 Checking import paths..."
for FILE in "$APP/components/FeaturedProducts.js" "$APP/components/ProductCard.js" "$APP/components/CategoryGrid.js"; do
  if [ -f "$FILE" ]; then
    echo "✅ $FILE exists"
  else
    echo "⚠️ $FILE missing!"
  fi
done

echo "🎯 Fix complete. Run 'npm run dev' or 'pnpm dev' to verify."