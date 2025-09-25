"use client";

export default function CategoryCard({ category }) {
  if (!category) return null; // ป้องกัน undefined props

  return (
    <div className="border rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <img
        src={category.image || "/placeholder-category.jpg"} // fallback image
        alt={category.name || "Category Image"}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold">{category.name}</h3>
      </div>
    </div>
  );
}