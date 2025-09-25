"use client";

import Button from "./Button";

const HERO_IMAGE =
  "https://collection.cloudinary.com/dxizmoyci/27555ff889b2b20dd8ee7e797a0719ce";

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Hero Banner"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
          ยินดีต้อนรับสู่ 39.9SELLIDGAMES
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-10 text-gray-100">
          เติมเกมออนไลน์ ซื้อสินค้า และสุ่มไอเท็มพร้อมโปรโมชั่นพิเศษ
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
            variant="primary"
            size="lg"
          >
            ซื้อสินค้า
          </Button>
          <Button
            onClick={() => window.scrollTo({ top: 1200, behavior: "smooth" })}
            variant="secondary"
            size="lg"
          >
            ดูโปรโมชั่น
          </Button>
        </div>
      </div>
    </section>
  );
}