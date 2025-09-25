# TKX Shop SPA (Next.js) - Termux/ARM64

## 1️⃣ Overview

โปรเจกต์นี้เป็น **Single Page Application (SPA)** สำหรับขายสินค้าตัวอย่าง ใช้ **Next.js 15.5.4**, **TailwindCSS 3.3.x**, **React 19.x**, และรันในสภาวะแวดล้อม **Termux บน Android/ARM64**  

วัตถุประสงค์:  
- พัฒนาเว็บแบบ SPA ด้วย Next.js บน Termux  
- รองรับ Dark/Light theme  
- มีระบบ Cart, Featured Products, Newsletter  
- ใช้โครงสร้าง `app/` แบบ Next.js App Router  

---

## 2️⃣ Environment Requirements

- **Termux** (Android 10+)  
- **Node.js >= 20**  
- **pnpm >= 10.x** (แนะนำเพราะลดปัญหา dependencies ใน ARM64)  
- Internet สำหรับติดตั้ง dependencies และ fetch image assets  

---

## 3️⃣ Project Structure

. ├── README.md ├── app │   ├── about/page.js │   ├── api/ │   ├── cart/page.js │   ├── components/ │   ├── context/CartContext.js │   ├── data/ │   ├── favicon.ico │   ├── globals.css │   ├── layout.js │   ├── page.js │   └── products/page.js ├── next.config.js ├── node_modules/ ├── package.json ├── package-lock.json ├── pnpm-lock.yaml ├── postcss.config.js ├── public/ └── tailwind.config.js

**หลักการจัดไฟล์:**  
- `components/` → reusable UI components  
- `context/` → React context เช่น CartContext  
- `data/` → static data สำหรับ product/featured items  
- `api/` → Next.js API routes  
- `public/` → assets เช่น รูปสินค้าและไอคอน  

---

## 4️⃣ Important Technical Notes

### 4.1 CSS & Tailwind
- ใช้ `globals.css` ที่ path **ถูกต้องตามไฟล์** เช่น `app/layout.js` import `./globals.css`  
- Tailwind base/components/utilities ต้อง import ตามลำดับ  
- Dark mode ใช้ media query `prefers-color-scheme: dark`  

### 4.2 Images
- รูปภาพสินค้า **ต้องอยู่ใน `public/products/`**  
- ห้ามเรียก path นอก `public/` เนื่องจาก Next.js SPA บน Termux/ARM64 จะ 404  

### 4.3 Client vs Server
- ทุก Component ที่ใช้ React hooks เช่น `useCart()` ต้อง **"use client"**  
- Server Components ห้ามเรียก hooks ของ Client  

### 4.4 Module path
- ห้ามใช้ relative import ผิด path (`../globals.css`) เพราะ Next.js บน Termux มัก error  
- ใช้ path ถูกต้องตามโครงสร้างตัวอย่าง  

### 4.5 Next.js Config
- ห้ามใช้ option ที่ **deprecated/experimental** บน Next.js 15.5.4 เช่น `swcMinify`, `fontLoaders`  
- ไม่ควรแก้ไข `webpack.cache`  

---

## 5️⃣ Things to Avoid (สิ่งที่ห้ามเด็ดขาด)

1. **ใช้ Node modules ที่ไม่รองรับ ARM64** (เช่นบาง native dependencies)  
2. **วาง assets นอก `public/`** → จะเกิด 404  
3. **เรียก useState/useCart จาก Server Components**  
4. **เปลี่ยน path import globals.css, data หรือ components แบบไม่ตรง**  
5. **ใช้ next.config.js experimental options ที่ไม่รองรับ**  

---

## 6️⃣ Development Guidelines

- **All components** ต้องเป็น `function components` และ `use client` เมื่อมี hook  
- **Folder structure** ต้องตรงตามตัวอย่าง  
- **CSS** ต้องใช้ Tailwind + custom variables ใน `globals.css`  
- **Images** ต้องวางใน `public/products/` และใช้ path ตรงกับ data objects  
- **Data** ควร export แบบ named export เช่น `export const products = [...]`  
- **Build & Run**  
```bash
# ติดตั้ง dependencies
pnpm install

# รัน development server
pnpm dev

# Build production
pnpm build
pnpm start


---

7️⃣ Recommended Next Steps

สร้าง component เพิ่มเติม เช่น Hero, CategoryCard, NewsletterForm

สร้าง data file สำหรับ category, featured, products

ใช้ Context API สำหรับ Cart state



---

8️⃣ Reference & Documentation

Next.js App Router: https://nextjs.org/docs/app/building-your-application/routing

Tailwind CSS: https://tailwindcss.com/docs

React Context: https://react.dev/reference/react/Context



---

Author: TKX Dev Team
Environment: Termux/ARM64, Node.js 20+, pnpm 10+

