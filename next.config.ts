import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "standalone",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.builder.io",
        port: "",
        pathname: "/api/v1/image/assets/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Performance optimizations (without experimental features that might cause issues)
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
