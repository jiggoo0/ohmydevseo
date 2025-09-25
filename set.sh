#!/usr/bin/env bash
# clean-fix.sh - ลบ/แก้ไข conflict สำหรับ Next.js SPA Project

set -euo pipefail

echo "🚀 Cleaning and fixing project structure..."

# 1️⃣ ลบไฟล์ data ที่ขัดแย้งกับ component
if [ -f "./app/data/CategoryGrid.js" ]; then
  echo "🗑️ Removing conflicting data file: app/data/CategoryGrid.js"
  rm -f ./app/data/CategoryGrid.js
fi

# 2️⃣ ตรวจสอบ import path ของ FeaturedProducts.js
echo "🔧 Ensure FeaturedProducts imports correct data"
sed -i 's|import { featuredProducts } from .*|import { featuredProducts } from "@/app/data/featured";|' ./app/components/FeaturedProducts.js

# 3️⃣ ตรวจสอบ import path ของ ProductCard.js (ถ้ามี import products)
echo "🔧 Ensure ProductCard imports correct data (if used)"
# ตัวอย่าง: ProductCard.js ไม่ต้อง import products เพราะรับ props แต่ ProductsPage ใช้ products
sed -i 's|import { products } from .*|import { products } from "@/app/data/products";|' ./app/products/page.js || true

# 4️⃣ ตรวจสอบ layout.js ว่า wrap ด้วย CartProvider
echo "🔧 Ensuring layout.js wraps UI with <CartProvider>"
if ! grep -q "CartProvider" ./app/layout.js; then
  echo "⚠️ CartProvider not found in layout.js, adding wrapper"
  sed -i '/<body>/a \ \ \ \ <CartProvider>' ./app/layout.js
  sed -i '/<\/body>/i \ \ \ \ </CartProvider>' ./app/layout.js
fi

# 5️⃣ ตรวจสอบ page.js ว่าใช้ "use client"
echo "🔧 Ensuring page.js has \"use client\""
if ! head -n 1 ./app/page.js | grep -q 'use client'; then
  sed -i '1i"use client";' ./app/page.js
fi

# 6️⃣ แสดงผลลัพธ์
echo "✅ Cleaning and fix complete. Please review layout.js and component imports manually if needed."
