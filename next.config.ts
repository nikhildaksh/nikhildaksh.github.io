import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // ✅ Static export
  images: {
    unoptimized: true, // ✅ Required for GitHub Pages
  },
  // No basePath needed for username.github.io repos
};

export default nextConfig;
