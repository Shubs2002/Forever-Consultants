import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Generate output suitable for static/Vercel hosting
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  // Enable powered by header removal for security
  poweredByHeader: false,
  // Compress responses
  compress: true,
};

export default nextConfig;
