import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Optimize compilation speed
  experimental: {
    optimizePackageImports: ['@aws-amplify/auth', 'lucide-react'],
  },
  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  webpack(config, { dev, isServer }) {
    // SVG handling
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Optimize for development - disable problematic caching
    if (dev) {
      config.cache = false;
    }

    return config;
  },
};

export default nextConfig;
