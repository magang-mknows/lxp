/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["i.ytimg.com"],
    // formats: ["image/jpg"],
  },
};

module.exports = nextConfig
