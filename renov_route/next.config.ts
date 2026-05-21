import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Derive build id from GIT_HASH injected by CI so that each deploy produces a unique
  // identifier. This lets clients with a stale HTML in cache detect a server-side build
  // change and is what enables the chunk-reload guard in ChunkErrorReloader.
  generateBuildId: async () => process.env.GIT_HASH || "dev",
};

export default nextConfig;
