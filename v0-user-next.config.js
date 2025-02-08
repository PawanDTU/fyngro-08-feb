/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["example.com"], // Add any image domains you're using
  },
}

module.exports = nextConfig

