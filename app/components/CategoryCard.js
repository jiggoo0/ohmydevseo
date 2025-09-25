"use client";

import Image from "next/image";

export default function CategoryCard({ category }) {
  if (!category) return null;

  return (
    <div className="border rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-200 bg-white dark:bg-gray-800">
      <div className="relative w-full h-48">
        <Image
          src={category.image || "/placeholder-category.jpg"}
          alt={category.name || "Category Image"}
          fill
          className="object-cover"
          priority={false}
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {category.name || "Unnamed Category"}
        </h3>
      </div>
    </div>
  );
}