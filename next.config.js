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
  },
  async rewrites() {
    return [
      {
        source: '/products',
        destination: '/products/lending',
      },
      {
        source: '/crypto-savings-account',
        destination: '/products/lending',
      },
      {
        source: '/stablecoin-structured-savings-account',
        destination: '/products/stablecoin',
      },
      {
        source: '/crypto-structured-savings-account',
        destination: '/products/token',
      },
      {
        source: '/blog',
        destination: '/blognews/blog',
      },
      {
        source: '/daily-crypto-news',
        destination: '/blognews/daily-news',
      },
      {
        source: '/updates-and-news',
        destination: '/blognews/update',
      },
      {
        source: '/blognews/pokket-in-the-media',
        destination: '/about-us',
      },
      {
        source: '/earn-crypto-bonus',
        destination: '/support/affiliate',
      },
      {
        source: '/terms',
        destination: '/support/termsofservice',
      },
      {
        source: '/privacy',
        destination: '/support/privacy-policy',
      },
      {
        source: '/contact',
        destination: '/contact',
      },
      {
        source: '/register',
        destination: '/user/register',
      },
      {
        source: '/login',
        destination: '/user/login',
      },
      {
        source: '/forgot-password',
        destination: '/user/forgot',
      },
      {
        source: '/faq',
        destination: '/support',
      },
      {
        source: '/faq/:articleId',
        destination: '/support/:articleId',
      }
    ]
  },
};

module.exports = withPlugins(plugins, nextConfig);
