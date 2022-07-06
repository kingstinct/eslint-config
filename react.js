/* eslint-disable import/no-unused-modules, functional/immutable-data */
module.exports = {
  extends: [
    './base.js',
    'plugin:react/recommended',
  ],
  plugins: [
    'react',
    'jsx-a11y',
    'react-hooks',
  ],
  rules: {
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/boolean-prop-naming': [1, { rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+', propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'] }],
    'react/display-name': 0,
    'react/function-component-definition': 0,
    'react/jsx-closing-tag-location': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.tsx'] }],
    'react/jsx-props-no-spreading': 0,
    'react/no-multi-comp': [1, { ignoreStateless: true }],
    'react/no-unstable-nested-components': 1,
    'react/no-unused-prop-types': 1,
    'react/no-unused-state': 0,
    'react/prefer-stateless-function': [1, { ignorePureComponents: true }],
    'react/prop-types': [2, { skipUndeclared: true }],
    'react/react-in-jsx-scope': 'off', // suppress errors for missing 'import React' in files
    'react/require-default-props': 0,
    'react/sort-comp': 0,
  },
  globals: {
    fetch: true,
    window: true,
  },
  settings: {
    'react': {
      version: 'detect',
    },
    'import/resolver': { // to allow for libraries with only .ios.js and .android.js exports without plain .js export
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      },
    },
  },
}
/* eslint-enable import/no-unused-modules */
