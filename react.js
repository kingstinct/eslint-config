/* eslint-disable import/no-unused-modules */
module.exports = {
  extends: [
    'airbnb',
    'plugin:react/recommended',
    './base.js',
  ],
  plugins: [
    'react',
    'jsx-a11y',
    'react-native',
    'react-hooks',
  ],
  rules: {
    'react-native/no-color-literals': 0,
    'react-native/no-inline-styles': 1,
    'react-native/no-unused-styles': 2,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-native/split-platform-components': 1,
    'react/boolean-prop-naming': ['error', { rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+', propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'] }],
    'react/jsx-closing-tag-location': 0,
    'react/jsx-filename-extension': 0,
    'react/no-multi-comp': [1, { ignoreStateless: true }],
    'react/no-unused-state': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prefer-stateless-function': [1, { ignorePureComponents: true }],
    'react/prop-types': [2, { skipUndeclared: true }],
    'react/sort-comp': 0,
  },
  globals: {
    fetch: true,
    __DEV__: true,
    __OFFLINE__: true,
    window: true,
  },
  settings: {
    'import/resolver': { // to allow for libraries with only .ios.js and .android.js exports without plain .js export
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ios.js',
          '.android.js',
        ],
      },
    },
  },
};
/* eslint-enable import/no-unused-modules */
