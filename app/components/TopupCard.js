"use client";

import Button from "./Button";

export default function TopupCard({ topup, onClick }) {
  if (!topup) return null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={topup.image}
        alt={topup.name}
        className="w-full h-40 object-contain bg-gray-50 dark:bg-gray-700 p-4"
      />
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
          {topup.name}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-2">
          ราคา: {topup.price} บาท
        </p>
        <Button
          onClick={() => onClick && onClick(topup)}
          variant="primary"
          size="md"
        >
          เติมเงิน
        </Button>
      </div>
    </div>
  );
}