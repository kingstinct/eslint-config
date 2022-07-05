/* eslint-disable import/no-unused-modules, functional/immutable-data  */
module.exports = {
  extends: [
    './base.js',
    'plugin:react-native-a11y/all',
  ],
  plugins: [
    'react-native',
  ],
  rules: {
    'react-native/no-color-literals': 0,
    'react-native/no-inline-styles': 1,
    'react-native/no-unused-styles': 1,
    'react-native/split-platform-components': 1,
  },
  globals: {
    fetch: true,
    __DEV__: true,
    __OFFLINE__: true,
    window: true,
  },
  env: {
    'react-native/react-native': true,
  },
  settings: {
    'import/resolver': { // to allow for libraries with only .ios.js and .android.js exports without plain .js export
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ios.js',
          '.android.js',
          '.native.js',
          '.web.js',
        ],
      },
    },
  },
}
/* eslint-enable import/no-unused-modules */
