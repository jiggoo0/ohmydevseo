// app/layout.js
import "./globals.css";
import ClientLayout from "./ClientLayout";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
        {/* ClientLayout รับหน้าที่จัดการ Navbar, Footer และ CartProvider */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}