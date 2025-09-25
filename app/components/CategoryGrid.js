"use client";

import CategoryCard from "./CategoryCard";

export default function CategoryGrid({ categories }) {
  if (!categories || categories.length === 0) {
    return <p className="text-center py-8 text-gray-500">No categories available</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {categories.map((cat) => (
        <CategoryCard key={cat.id} category={cat} />
      ))}
    </div>
  );
}