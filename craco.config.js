const { whenProd } = require('@craco/craco');
const CracoAliasPlugin = require('craco-alias');
const CracoAntDesignPlugin = require('craco-antd');
const CracoLessPlugin = require('craco-less');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

const resolve = (dir) => path.join(__dirname, '..', dir);
const isProduction = process.env.NODE_ENV === 'production';

process.env.GENERATE_SOURCEMAP = isProduction ? 'true' : 'false';

module.exports = {
  eslint: {
    enable: !isProduction,
  },
  webpack: {
    configure: {
      resolve: {
        modules: [
          resolve('src'),
          resolve('node_modules'),
        ],
        alias: {
          '@': resolve('src/'),
        },
        extensions: ['.js', '.ts', '.tsx', '.less'],
      },
      optimization: {
        minimize: isProduction,
        splitChunks: {
          chunks: 'all',
          minSize: 30000,
          maxAsyncRequests: 5,
          maxInitialRequests: 3,
          automaticNameDelimiter: '~',
          name: true,
          cacheGroups: {
            vendors: {
              chunks: 'all',
              test: /(react|react-dom|react-dom-router|babel-polyfill)/,
              priority: 100,
              name: 'vendors',
            },
            'async-commons': {
              chunks: 'async',
              minChunks: 2,
              name: 'async-commons',
              priority: 90,
            },
            commons: {
              chunks: 'all',
              minChunks: 2,
              name: 'commons',
              priority: 80,
            },
          },
        },
      },
    },
    plugins: [
      ...whenProd(() => [
        new TerserPlugin({
          parallel: false,
          terserOptions: {
            ie8: true,
            output: {
              comments: false,
            },
            compress: {
              drop_debugger: true,
              drop_console: true,
            },
          },
        }),
        new CompressionWebpackPlugin({
          deleteOriginalAssets: false,
        }),
      ], []),
    ],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        modifyLessRule(lessRule) {
          const rule = lessRule;
          rule.test = /\.(module)\.(less)$/;
          rule.exclude = /node_modules/;
          return rule;
        },
        cssLoaderOptions: {
          modules: {
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
          },
        },
      },
    },
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeThemeLessPath: path.join(__dirname, 'src/assets/styles/global.less'),
      },
    },
    {
      plugin: CracoAliasPlugin,
      options: {
        source: 'tsconfig',
        tsConfigPath: 'tsconfig.paths.json',
      },
      cssLoaderOptions: {
        modules: {
          modules: true,
          localIdentName: '[path][name]__[local]--[hash:base64:5]',
        },
      },
    },
  ],
};
