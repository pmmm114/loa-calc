/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  webpack5: true,
  reactStrictMode: true,
  i18n,
  swcMinify: true,
};

module.exports = nextConfig;
