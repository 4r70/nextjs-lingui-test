const path = require('path');
const linguiConfig = require("./lingui.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [
      [
        "@lingui/swc-plugin", {}
      ],
    ],
    nextScriptWorkers: true,
  },
  reactStrictMode: false,
  i18n: {
    locales: linguiConfig.locales,
    defaultLocale: linguiConfig.sourceLocale,
    localeDetection: false,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.po$/,
      use: {
        loader: "@lingui/loader", // https://github.com/lingui/js-lingui/issues/1782
      },
    });

    config.resolve.alias['@styles'] = path.join(__dirname, 'styles'); 
    config.resolve.alias['@components'] = path.join(__dirname, 'components');

    return config;
  },
}
module.exports = nextConfig

