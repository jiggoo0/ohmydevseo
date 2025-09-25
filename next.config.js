/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Environment variables
  env: {
    CLOUDINARY_URL: process.env.CLOUDINARY_URL,
  },

  // External images (Cloudinary)
  images: {
    domains: ["res.cloudinary.com", "collection.cloudinary.com"],
  },

  // เพิ่ม options อื่น ๆ ที่ production-ready ได้ เช่น compress images
  compress: true,
};

module.exports = nextConfig;