import { execSync } from "node:child_process";
import type { NextConfig } from "next";

const getStableBuildId = () => {
  const envHash = process.env.GIT_HASH?.trim() || process.env.GITHUB_SHA?.trim();
  if (envHash) {
    return envHash.slice(0, 12);
  }

  try {
    return execSync("git rev-parse --short=12 HEAD", {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    return "local-build";
  }
};

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  generateBuildId: async () => getStableBuildId(),
};

export default nextConfig;
