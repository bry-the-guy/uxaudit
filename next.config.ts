import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // ✅ Skip ESLint errors during production builds (both local + Netlify)
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ Optional: enable future-proof Next.js optimizations
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },

  // ✅ Optional: ensure static assets (SVGs, etc.) can be imported
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
