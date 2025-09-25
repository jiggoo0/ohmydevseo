"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

/**
 * CartProvider: จัดการ state ตะกร้าแบบ global
 * persist ผ่าน localStorage และรองรับ add/remove/clear
 */
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // โหลด cart จาก localStorage เมื่อเริ่ม mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    const savedCart = localStorage.getItem("ohmydevseo_cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch {
        setCart([]);
      }
    }
  }, []);

  // เก็บ cart ลง localStorage ทุกครั้งที่ cart เปลี่ยน
  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("ohmydevseo_cart", JSON.stringify(cart));
  }, [cart]);

  /**
   * เพิ่มสินค้าเข้า cart
   * @param {Object} product
   */
  const addToCart = (product) => {
    if (!product || !product.id) return;
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) return prev; // ป้องกันซ้ำ
      return [...prev, product];
    });
  };

  /**
   * ลบสินค้าออกจาก cart
   * @param {Object} product
   */
  const removeFromCart = (product) => {
    if (!product || !product.id) return;
    setCart((prev) => prev.filter((p) => p.id !== product.id));
  };

  /**
   * ล้างตะกร้าทั้งหมด
   */
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

/**
 * Hook สำหรับเรียกใช้งาน CartContext
 */
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}