import type { NextConfig } from "next";

const nextConfig = {
  images: {
    unoptimized: true,

  } ,
  experimental: {
    appDir: true,
    pageExtensions: ['_page.tsx', 'page.tsx', 'tsx', 'ts', 'jsx', 'js'],
  }
};


export default nextConfig;
