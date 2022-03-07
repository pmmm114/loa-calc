/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  webpack5: true,
  reactStrictMode: true,
  experimental: {
    runtime: "nodejs",
    serverComponents: true,
  },
  i18n,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
    removeConsole: {
      exclude: ["error"],
    },
  },
  swcMinify: true,
};

module.exports = nextConfig;
