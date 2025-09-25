"use client";

import { useState } from "react";
import Button from "./Button";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    // สามารถเชื่อม API สำหรับ newsletter subscribe ได้
  };

  if (submitted) {
    return <p className="text-center text-green-600 dark:text-green-400">Thank you for subscribing!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-4 py-2 rounded border border-gray-300 dark:border-gray-700"
        required
      />
      <Button type="submit">Subscribe</Button>
    </form>
  );
}