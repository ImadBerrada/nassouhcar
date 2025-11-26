import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pasteboard.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
    cssChunking: 'strict',
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  eslint: {
    // Skip ESLint during production builds to prevent build failures on lint errors
    ignoreDuringBuilds: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups.styles = {
        name: 'styles',
        test: /\.(css|scss|sass)$/,
        chunks: 'all',
        enforce: true,
      };
    }
    return config;
  },
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{member}}',
    },
  },
  async redirects() {
    return [
      {
        source: '/economy-cars',
        destination: '/location-voiture-tanger-pas-cher',
        permanent: true,
      },
      {
        source: '/airport-car-rental',
        destination: '/location-voiture-tanger-aeroport',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'nassohcar.com',
          },
        ],
        destination: 'https://www.nassohcar.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
