module.exports = {
  extends: [
    './react.js',
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
  env: {
    'react-native/react-native': true,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': { // to allow for libraries with only .ios.js and .android.js exports without plain .js export
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.ios.ts',
          '.android.ts',
          '.native.ts',
          '.web.js',
          '.ios.js',
          '.android.js',
          '.native.js',
          '.web.js',
        ],
      },
    },
  },
}
