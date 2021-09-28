module.exports = {
  plugins:
    process.env.APP === 'storybook'
      ? [require('tailwindcss'), require('postcss-preset-env')]
      : ['tailwindcss', 'postcss-preset-env'],
};
