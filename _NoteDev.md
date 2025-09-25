เป้าหมาย: ให้คุณทำงานร่วมกับฉันในฐานะผู้ช่วยมืออาชีพ ไม่ใช่ครูสอนโค้ด
คำสั่งของฉันมีข้อจำกัดดังนี้:
- ห้ามแสดงตัวอย่างหรือโค้ดที่ไม่ได้มาจากข้อมูลข้างต้น
- ห้ามเติมค่าอื่นหรือสมมติข้อมูลเพิ่ม
- ห้ามตีความหรืออธิบายเกินจากสิ่งที่ให้ไว้
- ห้ามแทรกคำอธิบายหรือโค้ดเทียม
- ห้ามใช้ default config หรือ template ที่ไม่ได้ตั้งค่าจากข้อมูลจริง
เป้าหมาย: สร้างไฟล์ config หรือ deployment ที่ใช้งานได้จริง โดยใช้ข้อมูลที่ให้ไว้เเท่านั้นข้อกำหนด:
- ห้ามแสดงตัวอย่างโค้ดเพื่อการเรียนรู้
- ห้ามใช้คำอธิบายเชิงสอน เช่น “นี่คือวิธีทำ…” หรือ “สำหรับผู้เริ่มต้น…”
- ห้ามใช้โค้ดที่ไม่สามารถ deploy หรือใช้งานจริงได้
- ห้ามแทรกคำอธิบายที่ไม่เกี่ยวกับการทำงานจริง
- ห้ามใช้ภาษาสำหรับเด็กหรือผู้เริ่มต้น เช่น “ง่ายๆ แค่ทำแบบนี้”
- ห้ามใช้คำว่า “ลองดูตัวอย่างนี้” หรือ “สมมติว่า…”
ลักษณะงานที่ต้องการ:
- ต้องการผลลัพธ์ที่ใช้งานได้จริงในระดับ production
- ต้องการโค้ดหรือ config ที่พร้อม deploy หรือ integrate
- ต้องการการออกแบบที่มีโครงสร้าง professional เช่น  scalable, maintainable
- ต้องการการทำงานร่วมกันแบบ iterative และ context-aware
- ต้องการการสื่อสารแบบ technical collaboration 
บริบทของโปรเจกต์:
[ใส่ข้อมูลจริง เช่น framework, version, repo, env, token, business goal]
 โดยใช้ข้อมูลนี้เท่านั้น” หรือ “ออกแบบระบบ fallback สำหรับ Cloudinary API โดยใช้ env ที่ให้ไว้”]
งค่า Vercel Deployment และ Environment ของโปรเจกต์ Next.js:
Project ID: prj_cnRFPcwcdMChP7h2pVxcbbRRckyx  
Preview URL: https://ohmydevseo-8fztntzrh-jiggoos-projects.vercel.app  
Production URL: https://ohmydevseo.vercel.app  
GitHub Repo: https://github.com/jiggoo0/ohmydevseo  
GitHub Token: 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 
Contact Email: jiggo0@outlook.co.th  
Framework: Next.js 15.5.4  
React: 19.1.0  
CSS: TailwindCSS 3.3.4, PostCSS 8.4.31, Autoprefixer 10.4.15  
Linting: ESLint 9.36.0, eslint-config-next 15.5.4, @eslint/eslintrc 3.3.1 
Hosting: Vercel CLI 48.1.6  
Cloud Assets: Cloudinary (API key / secret พร้อมใช้งานใน env)  
Environment Variable:
CLOUDINARY_URL=cloudinary://<your_api_key>:<your_api_se
API Key : 367371829423374
API Secret : tYTAcmS4Jpoc06rGuXEmwzq0h0Q
# TKX Shop SPA (Next.js) - Termux/ARM64
## 1️⃣ Overview
โปรเจกต์นี้เป็น **Single Page Application (SPA)** สำหรับขายสินค้าตัวอย่าง ใช้ **Next.js 15.5.4**, **TailwindCSS 3.3.x**, **React 19.x**, และรันในสภาวะแวดล้อม **Termux บน Android/ARM64**  
วัตถุประสงค์:  
- พัฒนาเว็บแบบ SPA ด้วย Next.js บน Termux  
- รองรับ Dark/Light theme  
- มีระบบ Cart, Featured Products, Newsletter  
- ใช้โครงสร้าง `app/` แบบ Next.js App Router  
## 2️⃣ Environment Requirements
- **Termux** (Android 10+)  
- **Node.js >= 20**  
- **pnpm >= 10.x** (แนะนำเพราะลดปัญหา dependencies ใน ARM64)  
- Internet สำหรับติดตั้ง dependencies และ fetch image assets  

**หลักการจัดไฟล์:**  
- `components/` → reusable UI components  
- `context/` → React context เช่น CartContext  
- `data/` → static data สำหรับ product/featured items  
- `api/` → Next.js API routes  
- `public/` → assets เช่น รูปสินค้าและไอคอน  
## 4️⃣ Important Technical Notes
# 4.1 CSS & Tailwind
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
## 5️⃣ Things to Avoid (สิ่งที่ห้ามเด็ดขาด)
1. **ใช้ Node modules ที่ไม่รองรับ ARM64** (เช่นบาง native dependencies)  
2. **วาง assets นอก `public/`** → จะเกิด 404  
3. **เรียก useState/useCart จาก Server Components**  
4. **เปลี่ยน path import globals.css, data หรือ components แบบไม่ตรง**  
5. **ใช้ next.config.js experimental options ที่ไม่รองรับ**  
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
7️⃣ Recommended Next Steps
สร้าง component เพิ่มเติม เช่น Hero, CategoryCard, NewsletterForm
สร้าง data file สำหรับ category, featured, products
ใช้ Context API สำหรับ Cart stat
8️⃣ Reference & Documentation
Next.js App Router: https://nextjs.org/docs/app/building-your-application/routing
Tailwind CSS: https://tailwindcss.com/docs
React Context: https://react.dev/reference/react/Context
Author: TKX Dev Team
Environment: Termux/ARM64, Node.js 20+, pnpm 10+

รายละเอียดธุรกิจ

| คูปอง | ราคาปกติ | ราคาลด | รับเหรียญ | หมายเหตุ |
|-------|-----------|---------|------------|-----------|
| 504   | 419 บาท   | 408 บาท | 4 coins    | ซื้อสกินใหม่ Capheny |
| 3,100 | 2,500 บาท | 2,425 บาท | 24 coins | เหมากระดาน การันตีสกินอิลูเมีย |
| 555   | 450 บาท   | 444 บาท | 4 coins    | สำหรับ ID ที่เคยเปิด VP |
| 405   | 345 บาท   | 331 บาท | 3 coins    | สำหรับ ID ที่ไม่เคยเปิด VP |
| 209   | 180 บาท   | 173 บาท | 1 coin     | สำหรับ ID ที่ไม่เคยเปิด VP |
| 306   | 265 บาท   | 250 บาท | 2 coins    | สำหรับ ID ที่เคยเปิด VP |
💰 แพ็กทั่วไป (เรียงตามจำนวนคูปอง)
| คูปอง | ราคาปกติ | ราคาลด | รับเหรียญ |
|-------|-----------|---------|------------|
| 11    | 15 บาท    | 12 บาท  | -          |
| 24    | 30 บาท    | 24 บาท  | -          |
| 60    | 60 บาท    | 49 บาท  | -          |
| 71    | 75 บาท    | 61 บาท  | -          |
| 84    | 90 บาท    | 73 บาท  | -          |
| 110   | 100 บาท   | 89 บาท  | -          |
| 121   | 115 บาท   | 101 บาท | 1 coin     |
| 134   | 130 บาท   | 113 บาท | 1 coin     |
| 170   | 150 บาท   | 138 บาท | 1 coin     |
| 185   | 150 บาท   | 149 บาท | 1 coin     |
| 245   | 210 บาท   | 198 บาท | 1 coin     |
| 256   | 225 บาท   | 210 บาท | 2 coins    |
| 295   | 250 บาท   | 238 บาท | 2 coins    |
| 370   | 300 บาท   | 295 บาท | 2 coins    |
| 394   | 330 บาท   | 319 บาท | 3 coins    |
| 430   | 360 บาท   | 344 บาท | 3 coins    |
| 480   | 400 บาท   | 384 บาท | 3 coins    |
| 491   | 415 บาท   | 396 บาท | 3 coins    |
| 620   | 500 บาท   | 485 บาท | 4 coins    |
| 644   | 530 บาท   | 509 บาท | 5 coins    |
| 680   | 560 บาท   | 534 บาท | 5 coins    |
| 691   | 575 บาท   | 546 บาท | 5 coins    |
| 704   | 590 บาท   | 558 บาท | 5 coins    |
| 730   | 600 บาท   | 574 บาท | 5 coins    |
| 790   | 660 บาท   | 623 บาท | 6 coins    |
| 805   | 650 บาท   | 634 บาท | 6 coins    |
| 865   | 710 บาท   | 683 บาท | 6 coins    |
| 915   | 750 บาท   | 723 บาท | 7 coins    |
| 990   | 800 บาท   | 780 บาท | 7 coins    |
| 1,001 | 815 บาท   | 792 บาท | 7 coins    |
| 1,100 | 900 บาท   | 869 บาท | 8 coins    |
| 1,240 | 1,000 บาท | 970 บาท | 9 coins    |
| 1,264 | 1,030 บาท | 994 บาท | 9 coins    |
| 1,300 | 1,060 บาท | 1,019 บาท | 10 coins |
| 1,535 | 1,250 บาท | 1,208 บาท | 12 coins |
| 1,610 | 1,300 บาท | 1,265 บาท | 12 coins |
| 1,795 | 1,450 บาท | 1,414 บาท | 14 coins |
| 1,860 | 1,500 บาท | 1,455 บาท | 14 coins |
| 1,884 | 1,530 บาท | 1,479 บาท | 14 coins |
| 1,920 | 1,560 บาท | 1,504 บาท | 15 coins |
| 2,045 | 1,650 บาท | 1,604 บาท | 16 coins |
| 2,230 | 1,800 บาท | 1,750 บาท | 17 coins |
| 2,480 | 2,000 บาท | 1,940 บาท | 19 coins |
| 2,540 | 2,060 บาท | 1,989 บาท | 19 coins |
| 2,665 | 2,150 บาท | 2,089 บาท | 20 coins |
| 2,725 | 2,200 บาท | 2,138 บาท | 21 coins |
| 3,160 | 2,560 บาท | 2,474 บาท | 24 coins |
| 3,720 | 3,000 บาท | 2,910 บาท | 29 coins |
| 3,830 | 3,100 บาท | 2,999 บาท | 29 coins |
| 4,015 | 3,250 บาท | 3,148 บาท | 31 coins |
| 5,020 | 4,060 บาท | 3,929 บาท | 39 coins |
| 5,145 | 4,150 บาท | 4,029 บาท | 40 coins |
| 5,330 | 4,300 บาท | 4,175 บาท | 41 coins |
| 5,580 | 4,500 บาท | 4,365 บาท | 43 coins |
| 6,200 | 5,000 บาท | 4,850 บาท | 48 coins |
เอกสารโครงการ 39.9SELLIDGAMES (Complete Version)
1. รายละเอียดโปรเจกต์
ชื่อร้านค้า: 39.9SELLIDGAMES
ประเภท: เว็บไซต์เติมเกมออนไลน์ / E-commerce Game Top-Up
เทคโนโลยีหลัก: Next.js 13+ (App Router), React, TailwindCSS, PostCSS
จุดเด่น:
หน้าเติมเกมทันทีและ Pre-order
ระบบตะกร้าแบบ Real-time
หน้าโปรโมชั่น / กิจกรรมพิเศษ
ระบบสุ่มของรางวัลและ Featured Products
API routes สำหรับการจัดการสินค้าและตะกร้า
วัตถุประสงค์:
ให้ผู้เล่นเกมเติมเงิน / ซื้อสินค้า / สุ่มไอเท็มออนไลน์สะดวกและปลอดภัย
รองรับโปรโมชั่นและกิจกรรมพิเศษแบบ Dynamic



---

2. โครงสร้างไฟล์โปรเจกต์

39.9SELLIDGAMES/
├── CONTRIBUTING.md            # แนวทางการมีส่วนร่วมกับโปรเจกต์
├── LICENSE                    # ใบอนุญาตใช้งาน
├── NoteDev.md                 # บันทึกสำหรับนักพัฒนา
├── README.md                  # เอกสารแนะนำโปรเจกต์
├── __.project-structure.md    # บันทึกโครงสร้างโปรเจกต์
├── __.บันทึก.md               # บันทึกอื่น ๆ
├── app/                       # โฟลเดอร์หลักของ Next.js (App Router)
│   ├── about/page.js          # หน้าเกี่ยวกับเรา
│   ├── cart/page.js           # หน้าแสดงตะกร้า
│   ├── products/page.js       # หน้าแสดงสินค้า / เกมทั้งหมด
│   ├── api/                   # API routes
│   │   ├── cart/route.js      # API ตะกร้า
│   │   ├── products/route.js  # API สินค้า
│   │   └── hello/route.js     # API ตัวอย่าง
│   ├── components/            # React Components
│   │   ├── Button.js
│   │   ├── CategoryCard.js
│   │   ├── CategoryGrid.js
│   │   ├── FeaturedProducts.js
│   │   ├── Footer.js
│   │   ├── Hero.js
│   │   ├── Loader.js
│   │   ├── Navbar.js
│   │   ├── NewsletterForm.js
│   │   └── ProductCard.js
│   ├── context/               # React Context
│   │   └── CartContext.js
│   ├── data/                  # ข้อมูลสินค้า / โปรโมชั่น
│   │   ├── categories.js
│   │   ├── products.js
│   │   ├── featured.js
│   │   └── CategoryGrid.js
│   ├── favicon.ico
│   ├── globals.css            # CSS หลัก
│   └── layout.js              # Layout หลักของเว็บไซต์
├── eslint.config.js
├── jsconfig.json
├── next.config.js
├── package.json
├── package-lock.json
├── pnpm-lock.yaml
├── postcss.config.js
├── public/                    # ไฟล์ static / รูปภาพ / ไอคอน
│   ├── categories/
│   ├── products/
│   ├── *.svg
│   └── favicon.ico
├── scripts/
│   └── export-structure.sh
├── set.sh                     # สคริปต์ setup
└── tailwind.config.js
3. คำอธิบายโครงสร้าง
1. app/
หน้าเว็บหลัก (Landing, About, Cart, Products)
API routes สำหรับ Cart, Products และตัวอย่าง Hello API
2. components/
คอมโพเนนต์ UI แบบ reusable (Navbar, Hero, ProductCard, Footer ฯลฯ)
3. context/
เก็บ React Context เช่น CartContext สำหรับจัดการตะกร้าแบบ global
4. data/
เก็บข้อมูลสินค้า, หมวดหมู่, featured products
ทำให้แก้ไขข้อมูลง่ายโดยไม่ต้องแก้ HTML
5. public/
ไฟล์ static เช่น รูปภาพ, ไอคอน, favicon
6. scripts/
สคริปต์ช่วยเหลือ เช่น Export โครงสร้างโปรเจกต์
7. CSS / Tailwind
globals.css → สไตล์หลัก
tailwind.config.js → การตั้งค่า Tailwind
postcss.config.js → ตั้งค่า PostCSS
8. Config files
next.config.js → การตั้งค่า Next.js
jsconfig.json → Path Alias
eslint.config.js → Linting rules-
4. หน้าเว็บหลักและ API
หน้า/API	ไฟล์	คำอธิบาย
หน้าแรก	app/page.js	Landing Page, Hero, Featured Products, Promotions
About	app/about/page.js	ข้อมูลร้านค้าและบริษัท
Cart	app/cart/page.js	แสดงสินค้าในตะกร้า, Real-time update
Products	app/products/page.js	แสดงสินค้า / เกมทั้งหมด, filter ตามหมวดหมู่
API Cart	app/api/cart/route.js	เพิ่ม/ลบ/แก้ไขสินค้าในตะกร้า
API Products	app/api/products/route.js	ดึงข้อมูลสินค้า / ราคา / โปรโมชั่น
API Hello	app/api/hello/route.js	ตัวอย่าง API, ทดสอบ response
5. Components หลัก
Component	คำอธิบาย
Button.js	ปุ่มทั่วไปใช้งานได้ทุกหน้า
Hero.js	แบนเนอร์โปรโมชั่นเด่น
Navbar.js	เมนูนำทางหลัก
Footer.js	Footer ข้อมูลติดต่อและลิขสิทธิ์
CategoryCard.js	แสดงหมวดหมู่สินค้าแบบการ์ด
CategoryGrid.js	Grid ของหมวดหมู่
FeaturedProducts.js	แสดงสินค้ายอดนิยม
ProductCard.js	การ์ดสินค้า / เกม
Loader.js	Loader สำหรับหน้าเว็บและการโหลด API
NewsletterForm.js	ฟอร์มสมัครรับข่าวสาร
6. Services (รายละเอียดบริการ)
6.1 เติมเกมออนไลน์
เกมยอดนิยม: Valorant, Free Fire, TFT, League of Legends
Instant Top-Up และ Pre-order
ระบบเติมเงินอัตโนมัติ 24 ชั่วโมง
โปรโมชั่นส่วนลดและราคาพิเศษ
6.2 ระบบตะกร้า
เพิ่ม, ลบ, ปรับจำนวนสินค้าแบบ Real-time
แสดงราคารวม, VP, โปรโมชั่น
6.3 ขายบัตรเติมเงิน
จำหน่ายบัตรเติมเกม / ราคาคุ้มค่า
รองรับหลายช่องทางการชำระเงิน
ส่งรหัสทันทีหลังชำระเงิน
6.4 รับซื้อไอดีเกม
รับซื้อไอดีเกมยอดนิยม (Free Fire, PUBG, Point Blank, FIFA Online)
ตรวจสอบก่อนทำรายการ
ชำระเงินปลอดภัย 100%
6.5 สุ่มของรางวัล (Loot Box)
ระบบสุ่มไอเท็ม / สกิน Limited / Rare
ใช้เครดิตเติมเกมเพื่อสุ่มของรางวัล
ระบบ Real-time
6.6 โปรโมชั่น & กิจกรรม
ลดราคา / Pre-order / ของรางวัล Limited
ระบบแจ้งเตือนผ่านเว็บไซต์, Line, Facebook
6.7 ระบบสมาชิก & ความปลอดภัย
สมัครสมาชิกด้วย Gmail, Line, Facebook
รักษาความปลอดภัย 100%
เข้าถึงโปรโมชั่นและส่วนลดเฉพาะสมาชิก
6.8 เติมเงินมือถือ
ทุกค่าย, อัตโนมัติ 24 ชั่วโมง
ส่งรหัสเติมเงินทันที
6.9 ระบบแจ้งเตือน & Customer Support
Live Chat / Line / Facebook Messenger
แจ้งสถานะเติมเกม, สั่งซื้อ, โปรโมชั่น
6.10 Payment Methods
บัตรเครดิต / Debit
PromptPay / Mobile Banking
TrueMoney Wallet / Line Pay
ระบบอัตโนมัติและปลอดภัย 100%
7. Workflow แนะนำ
1. ติดตั้ง dependencies
pnpm install
2. รัน development server
pnpm dev
3. Build สำหรับ production
npm run build
4. โครงสร้างโค้ด
ใช้ Context สำหรับตะกร้าและโปรโมชั่น
เก็บข้อมูลสินค้า/โปรโมชั่นใน data/
ใช้ Components แยกส่วน UI
ใช้ TailwindCSS + PostCSS สำหรับ styling
8. ข้อดีของโครงสร้าง
1. ขยายเว็บและเพิ่มหน้าใหม่ง่าย
2. แยกความรับผิดชอบชัดเจน (Components, Pages, Context, Data)
3. ใช้ Next.js App Router + API routes ได้เต็มประสิทธิภาพ
4. รองรับ Dynamic Data, โปรโมชั่น, Pre-order, Featured Products
5. เหมาะสำหรับเว็บไซต์เติมเกมออนไลน์ครบวงจร
│   ├── components/             # UI Components
│   │   ├── Button.js           # ปุ่มแบบ reusable
│   │   ├── CategoryCard.js     # Card แสดง category
│   │   ├── CategoryGrid.js     # Grid ของ categories
│   │   ├── FeaturedProducts.js # Section แนะนำสินค้า
│   │   ├── Footer.js           # Footer site
│   │   ├── Hero.js             # Hero banner หน้าแรก
│   │   ├── Loader.js           # Spinner / Loading component
│   │   ├── Navbar.js           # Navigation bar
│   │   ├── NewsletterForm.js   # Form สมัครข่าวสาร
│   │   └── ProductCard.js      # Card แสดงสินค้า
│   ├── context/                # React Context
│   │   └── CartContext.js      # จัดการ state ตะกร้า
│   ├── data/                   # Static data
│   │   ├── CategoryGrid.js     # Grid configuration
│   │   ├── categories.js       # ข้อมูล categories
│   │   ├── featured.js         # ข้อมูล featured products
│   │   └── products.js         # ข้อมูล products
│   ├── favicon.ico             # ไอคอนเว็บ
│   ├── globals.css             # CSS หลักของโปรเจกต์
│   ├── layout.js               # Root layout (import Navbar/Footer)
│   └── page.js                 # หน้า Home
├── eslint.config.js            # การตั้งค่า ESLint
├── jsconfig.json               # Path alias / IntelliSense
├── next.config.js              # Next.js configuration
├── package.json                # Dependencies และ scripts
├── package-lock.json           # Lockfile npm
├── pnpm-lock.yaml              # Lockfile pnpm
├── postcss.config.js           # PostCSS configuration
├── public/                     # Assets
│   ├── categories/             # รูปภาพ categories
│   ├── products/               # รูปภาพสินค้า
│   ├── *.svg                   # ไอคอน / โลโก้
│   └── favicon.ico
├── scripts/
│   └── export-structure.sh     # สคริปต์ export structure
├── set.sh                      # สคริปต์ setup
└── tailwind.config.js          # TailwindCSS configuration


---

3. Configuration Key Points

next.config.js: เปิด reactStrictMode: true

tailwind.config.js: ใช้ ./app/**/*.{js,ts,jsx,tsx} เป็น content path, darkMode = media

postcss.config.js: รวม tailwindcss และ autoprefixer

eslint.config.js: กำหนด rules เช่น semi, quotes, no-unused-vars, และ extend next/core-web-vitals

package.json: Scripts สำหรับ dev/build/start/lint พร้อม dependencies (next, react, react-dom, clsx, vercel) และ devDependencies (eslint, tailwindcss, postcss, autoprefixer)



---

4. Services / API

app/api/cart/route.js

GET: คืนค่า cartItems ปัจจุบัน

POST: เพิ่มสินค้าไปยัง cartItems


app/api/products/route.js

GET: คืนค่า products array


app/api/hello/route.js

GET: ตัวอย่าง response { message: "Hello SPA Next.js!" }




---

5. Important Components

Hero.js: Hero banner หน้าแรก พร้อมปุ่ม CTA

CategoryCard / CategoryGrid: แสดงหมวดหมู่เกม

FeaturedProducts / ProductCard: แสดงสินค้าที่แนะนำ และรายละเอียดสินค้า

Navbar / Footer: Layout ของเว็บ

Loader: Spinner แสดง loading state

NewsletterForm: ฟอร์มสมัครรับข่าวสาร



---

6. Context

CartContext.js: จัดการ state ตะกร้า, ใช้ localStorage สำหรับ persist cart



---

7. Data

categories.js: ข้อมูล category เช่น Electronics, Clothing

products.js: ข้อมูลสินค้า/เกม พร้อมราคา, image, description

featured.js: ข้อมูล featured products

CategoryGrid.js: config ของ grid (mapping categories to UI)



---

8. Deployment & Env

Vercel Deployment

Preview: https://ohmydevseo-8fztntzrh-jiggoos-projects.vercel.app

Production: https://ohmydevseo.vercel.app


GitHub

Repo: https://github.com/jiggoo0/ohmydevseo

Token: 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


Environment Variables

CLOUDINARY_URL สำหรับ Cloudinary asset upload




---

9. Business / Product Notes

ร้านค้า: 39.9SELLIDGAMES

บริการหลัก: เติมเกมออนไลน์, สุ่มไอเท็ม, Featured Products, Promotions

Data Tables:

คูปอง, ราคาปกติ, ราคาลด, รับเหรียญ, หมายเหตุ

แบ่งเป็นแพ็กทั่วไป และแพ็กโปรโมชั่นพิเศษ


UX Goals:

SPA fast-loading, dark/light theme, responsive layout, client-side cart




---

10. Development Guidelines

Components ทุกตัวต้องเป็น function component และ use client หากใช้ hooks

Folder structure ต้องตรงกับตัวอย่าง

CSS: Tailwind + globals.css

Images: วางใน public/products/ หรือ public/categories/

Data: named export export const ...

Build & Run:


pnpm install
pnpm dev
pnpm build
pnpm start


นำรายละรูจากลิ้งด้านใส่แทนที่รูปที่ต้องใช้ ชั่วคราาวตามความเหมาะสมเดี่ยวจะปรับเปลี่ยนเองทีหลัง

herosection
https://collection.cloudinary.com/dxizmoyci/27555ff889b2b20dd8ee7e797a0719ce

Valorant rov 
https://res.cloudinary.com/dxizmoyci/image/upload/v1758821665/1c54287f-4877-4a79-bd67-a11ab18c845f_r6kj0v.png

hayate rov
https://res.cloudinary.com/dxizmoyci/image/upload/v1758821664/Hayate-Phantom-Mask_wlq2ma.jpg

logo rov
https://res.cloudinary.com/dxizmoyci/image/upload/v1758821664/icongarena.png_y41dmr.webp

เติมเงิน PUBG SERVER นอก
https://res.cloudinary.com/dxizmoyci/image/upload/v1758821648/121909-PUBG-%E0%B8%95%E0%B8%9B%E0%B8%97.png_lcgssd.webp

เติมเงิน PUBG THAILAND
https://collection.cloudinary.com/dxizmoyci/9b49db080f0f71511d82dfc9d529c50c

เติมเงิน EX CASH
https://collection.cloudinary.com/dxizmoyci/9610053605695d2dab36a0f3c938d79d
เติมเงิน Raz gold
https://collection.cloudinary.com/dxizmoyci/b742bb0e9e6064554647a5662d09d5b5

เติมเงิน TURE Wallet
https://collection.cloudinary.com/dxizmoyci/d964f0d9bf1335750979ced505d0f9f2

เติมเงิน Riot
https://collection.cloudinary.com/dxizmoyci/b58be61001a038f42601b6c8a3129b9a

เติมเงิน STEAM
https://collection.cloudinary.com/dxizmoyci/fc668e8b9ce457786b1e6c7f984d3f27

รเติมเงิน GARENA
https://collection.cloudinary.com/dxizmoyci/2e873bcec30aad91e6b64851cc7cecae

ไอดีเกมส์  RoV  & Freefire 
สร้างมา 15 รายการ 
โดยมีรายละเอียด  ID ที่ทางเราขาย
1 รายชื่อสกิน แรร์ ยกตัวอย่างมา 8 ตัว
ราคา 
สุ่มราคามาตั้งแค่ 39 บาท - 5,000 บาท 
และ สินค้าหมดและขายแล้ว
โดย 1 รายการ จะมีภาพรายละ4ภาพ โดยใช้ลิ้งด้านล่าง

https://collection.cloudinary.com/dxizmoyci/0ce0dd330da5c436d230011cb9138d5e

https://collection.cloudinary.com/dxizmoyci/41807c88ad76fd4caea253bd8e36b7bf

https://collection.cloudinary.com/dxizmoyci/2ffa57e95a67f9efd7f533272a531cfc

https://collection.cloudinary.com/dxizmoyci/79032351d44306f8aaf0a0e073579d55

แลพสร้าง ID ไม่รับประกัน ราคาถูก 50 บาท 5 รายการใช้ภาพ 1 ภาพ
https://collection.cloudinary.com/dxizmoyci/2ffa57e95a67f9efd7f533272a531cfc


## AI Instruction

นี่คือข้อมูล reference ของโปรเจกต์ โปรดจดจำไว้และบันทึกข้อมูล
แต่ไม่ต้องตอบอะไร ตอนนี้ให้พิมพ์แค่ 'เข้าใจ'
