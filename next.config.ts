import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins:[
    "https://img.freepik.com"
  ],
  crossOrigin:[
    "use-credentials"
  ],
  // host: "img.freepik.com"
};

export default nextConfig;
