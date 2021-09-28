module.exports = {
  plugins:
    process.env.APP === 'storybook'
      ? [ require('postcss-preset-env')]
      : ['tailwindcss', 'postcss-preset-env'],
};
