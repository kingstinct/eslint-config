module.exports = {
  plugins: ['@typescript-eslint', 'import', 'json', 'functional'],
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
    'plugin:json/recommended',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/indent': ['error', 2, { VariableDeclarator: { var: 2, let: 2, const: 3 }, ignoredNodes: ['JSXAttribute', 'JSXSpreadAttribute'] }],
    '@typescript-eslint/no-empty-function': [1, { allow: ['arrowFunctions'] }],
    '@typescript-eslint/no-implied-eval': 0,
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
    '@typescript-eslint/no-shadow': 1,
    '@typescript-eslint/no-unnecessary-type-assertion': 0,
    '@typescript-eslint/no-unsafe-argument': 1,
    '@typescript-eslint/no-unsafe-assignment': 0, // would like to have these but they don't work well..
    '@typescript-eslint/no-unsafe-call': 0,
    '@typescript-eslint/no-unsafe-member-access': 0,
    '@typescript-eslint/no-unsafe-return': 0,
    '@typescript-eslint/consistent-type-imports': 2,
    '@typescript-eslint/no-use-before-define': ['error', { functions: true, classes: true, variables: false }],
    '@typescript-eslint/restrict-template-expressions': 0,
    '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
    'comma-dangle': ['error', 'always-multiline'],
    'functional/immutable-data': ['error', { ignoreAccessorPattern: '**.current' }],
    'functional/prefer-readonly-type': 'error',
    'functional/prefer-tacit': 'error',
    'global-require': 0,
    'import/extensions': [2, { graphql: 'always' }],
    'import/no-cycle': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['src/**/*.test.ts', 'src/**/*.test.tsx'] }],
    'import/no-named-as-default-member': 0,
    'import/no-named-as-default': 0,
    'import/order': ['error', { 'newlines-between': 'always', 'groups': [['builtin', 'external'], ['parent', 'sibling', 'index'], ['type']] }],
    'import/prefer-default-export': 0,
    'indent': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'linebreak-style': ['error', 'unix'],
    'max-len': ['warn', { code: 200 }],
    'no-nested-ternary': 0,
    'no-shadow': 0,
    'no-underscore-dangle': ['error', { allow: ['_id', '__typename'] }],
    'no-unreachable': 2,
    'no-use-before-define': 'off',
    'no-void': ['error', { allowAsStatement: true }],
    'one-var': 0,
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'semi': ['error', 'never'],
  },
  overrides: [
    {
      files: ['**/test/**', '**/tests/**', '**/__tests__/**', 'test/**', '**/*.test.ts', '**/*.test.tsx', '**/*.test.js', '**/*.test.jsx'],
      extends: ['./jest.js'],
    },
    {
      files: ['babel.config.js', 'metro.config.js', 'jest.config.js'],
      rules: {
        'functional/immutable-data': 0,
      },
    },
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
}
