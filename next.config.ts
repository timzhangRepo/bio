import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/bio",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
