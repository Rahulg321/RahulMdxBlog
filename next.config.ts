// next.config.ts
import type { NextConfig } from "next";

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "github.com",
            port: "",
            pathname: "/**",
          },
          {
            protocol: "https",
            hostname: "assets.aceternity.com",
            port: "",
            pathname: "/**",
          },
          {
            protocol: "https",
            hostname: "lh3.googleusercontent.com",
            port: "",
            pathname: "/**",
          },
          {
            protocol: "https",
            hostname: "res.cloudinary.com",
            port: "",
            pathname: "/**",
          },
          {
            protocol: "https",
            hostname: "images.unsplash.com",
            port: "",
            pathname: "/**",
          },
        ],
      },
};

module.exports = withPWA(nextConfig);
