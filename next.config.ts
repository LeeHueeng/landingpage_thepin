// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_KAKAO_APP_KEY: '24b0b230764c5057e1856fa17685ce62', // ← 일단 직접 넣기 (테스트)
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
