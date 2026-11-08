import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/head-of-ai", destination: "/", permanent: true },
      { source: "/head-of-ai/executive-summary", destination: "/executive-summary", permanent: true },
      { source: "/es/head-of-ai", destination: "/es", permanent: true },
      { source: "/es/head-of-ai/executive-summary", destination: "/es/executive-summary", permanent: true },
    ];
  },
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
