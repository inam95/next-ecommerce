/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  }
  // images: {
  //   formats: ["image/avif", "image/webp"],
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "cdn.shopify.com",
  //       pathname: "s/files/**",
  //     },
  //   ],
  // },
  // async redirects() {
  //   return [
  //     {
  //       source: "/password",
  //       destination: "/",
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default nextConfig;
