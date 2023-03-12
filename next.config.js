/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "localhost:3000"],
  },
};

module.exports = nextConfig;
