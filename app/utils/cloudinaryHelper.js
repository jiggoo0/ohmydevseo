// app/utils/cloudinaryHelper.js
export function getCloudinaryUrl(publicId, options = {}) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  if (!cloudName || !publicId) {
    // Fallback: รูป default หรือ placeholder
    return "/placeholder.png";
  }

  // ตัวอย่าง transformation (width, height, quality)
  const { width = 800, height = 600, quality = "auto", format = "auto" } = options;

  return `https://res.cloudinary.com/${cloudName}/image/upload/w_${width},h_${height},q_${quality},f_${format}/${publicId}`;
}