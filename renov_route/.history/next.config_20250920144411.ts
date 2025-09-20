import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  // Génération automatique du .htaccess avec redirections
  async rewrites() {
    return {
      beforeFiles: [
        // Redirections 301 spécifiques
        {
          source: '/marquage-routier-lyon-69',
          destination: '/competences/tracage-retracage-parking',
          permanent: true,
        },
        {
          source: '/contact',
          destination: '/qui-sommes-nous',
          permanent: true,
        },
        {
          source: '/blank-1',
          destination: '/competences/resine-sol-marquage-interieur',
          permanent: true,
        },
        {
          source: '/peinture-marquage-sol-parking-lyon',
          destination: '/competences/resine-sol-marquage-interieur',
          permanent: true,
        },
      ],
    };
  },
};

export default nextConfig;