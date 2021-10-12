const config = require('@nicepack/eslint-ts/react/next');

config.rules = {
  ...config.rules,
  'react/react-in-jsx-scope': 'off',
  'jsx-a11y/accessible-emoji': 'off',
  'jsx-a11y/click-events-have-key-events': 'off',
  'jsx-a11y/no-static-element-interactions': 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@next/next/no-img-element': 'off',
  "@next/next/no-document-import-in-page": "off",
  "react/jsx-curly-brace-presence": 'off',
  'prettier/prettier': [
    'error',
    {
      'endOfLine': 'auto',
    }
  ]
};
config.extends = [...config.extends, 'plugin:@next/next/recommended'];

module.exports = config;
