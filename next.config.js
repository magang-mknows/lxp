/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.ytimg.com", "res.cloudinary.com"],
    // formats: ["image/jpg"],
  },
};

module.exports = nextConfig;
