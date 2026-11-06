import type { NextConfig } from "next";
const config: NextConfig = {
  poweredByHeader: false,
  devIndicators: false,
  images: {
    formats: ["image/webp"],
    qualities: [75, 85],
    deviceSizes: [360, 480, 640, 768, 960, 1200, 1440, 1800],
    imageSizes: [96, 160, 240, 320],
    minimumCacheTTL: 86400,
  },
};
export default config;
