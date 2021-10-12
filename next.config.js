const path = require('path');

const withPlugins = require('next-compose-plugins');

const { i18n } = require('./next-i18next.config');

const plugins = [];

if (process.env.ANALYZE === 'true') {
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: true,
  });
  plugins.push(withBundleAnalyzer);
}

const nextConfig = {
  i18n,
  webpack(config) {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  }
};

module.exports = withPlugins(plugins, nextConfig);
