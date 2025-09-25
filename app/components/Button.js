"use client";

export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      {children}
    </button>
  );
}