"use client";
import { useCart } from "../context/CartContext";
import Button from "./Button";

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="border rounded-lg p-4 flex flex-col items-center text-center">
      <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mb-2" />
      <h3 className="font-bold">{product.name}</h3>
      <p className="text-sm text-gray-600">{product.description}</p>
      <p className="font-semibold mt-1">${product.price}</p>
      <Button onClick={() => addItem(product)}>Add to Cart</Button>
    </div>
  );
}