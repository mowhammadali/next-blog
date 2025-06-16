import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['localhost'],
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  }
};

export default nextConfig;
