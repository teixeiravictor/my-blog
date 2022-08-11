/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "pt",
    localeDetection: false,
  },
};

module.exports = nextConfig;
