module.exports = {
  extends: [
    'airbnb',
    'plugin:jest/recommended',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react'
  ],
  installedESLint: true,
  plugins: [
    'react',
    'jsx-a11y',
    'import',
    'react-native',
    'flowtype',
    'lodash-fp',
    'promise',
    'jest',
    'json',
    'prettier'
  ],
  ecmaFeatures: {
    jsx: true
  },
  rules: {
    'class-methods-use-this': 0,
    'global-require': 0,
    'lodash-fp/use-fp': 2,
    'no-confusing-arrow': 0,
    'no-nested-ternary': 0,
    'no-return-assign': 0,
    'no-unused-expressions': 0,
    'one-var': 0,
    'prettier/prettier': 0,
    'promise/catch-or-return': 2,
    'promise/no-native': 2,
    'react-native/no-color-literals': 0,
    'react-native/no-inline-styles': 0,
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 0,
    'react/sort-comp': 0,
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true }
    ]
  },
  env: {
    'jest/globals': true
  },
  globals: {
    fetch: true,
    __DEV__: true,
    __OFFLINE__: true,
    window: true
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    }
  }
};
