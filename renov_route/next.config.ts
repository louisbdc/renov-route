import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: false,
  images: {
    unoptimized: true
  },
  // Désactiver les fonctionnalités qui ne fonctionnent pas avec l'export statique
  experimental: {
    // Désactiver les optimisations qui nécessitent un serveur
  }
};

export default nextConfig;
