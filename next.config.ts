import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enforce trailing slash consistency (removes trailing slashes)
  trailingSlash: false,

  // Redirect non-www to www for canonical URL consistency
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "imakuscleaning.com",
          },
        ],
        destination: "https://www.imakuscleaning.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
