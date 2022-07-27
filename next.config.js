/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ["en", "pt-br"],
    defaultLocale: "pt-br",
  },
};

module.exports = nextConfig;
