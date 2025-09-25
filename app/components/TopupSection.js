"use client";

import { topups } from "../data/topups";
import TopupCard from "./TopupCard";

export default function TopupSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-8">เติมเงินเกม</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {topups.map((topup) => (
          <TopupCard
            key={topup.id}
            topup={topup}
            onClick={(t) => alert(`คุณเลือกเติมเงิน: ${t.name}`)}
          />
        ))}
      </div>
    </div>
  );
}