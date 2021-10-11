module.exports = {
  plugins:
    process.env.APP === 'storybook'
      ? [ require('postcss-preset-env')]
      : ['postcss-preset-env'],
};
