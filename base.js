module.exports = {
  extends: [
    'airbnb-base',
    'eslint:recommended',
  ],
  ignorePatterns: ['**/*.generated.*', 'node_modules', '.expo', 'build', '**/__generated__/*', 'dist', '!/.github', 'web-build'],
  overrides: [
    {
      extends: ['./typescript'],
      files: ['*.ts', '*.js', '*.tsx', '*.jsx'],
    },
    {
      extends: ['./jest.js'],
      files: ['**/test/**', '**/tests/**', '**/__tests__/**', 'test/**', '**/*.test.ts', '**/*.test.tsx', '**/*.test.js', '**/*.test.jsx', '**/jest.setup.ts', '**/jest.setup.js'],
    },
    {
      // disable some rules for common config and script files
      files: ['scripts/*', '*.config.js', '*.config.ts', 'jest.setup.ts', 'jest.setup.js'],
      extends: ['./scripts-and-configs.js'],
    },
    {
      extends: ['./graphql.js'],
      files: ['*.graphql'],
    },
    {
      extends: ['./yml.js'],
      files: ['*.yaml', '*.yml'],
    },
    {
      extends: ['./json.js'],
      files: ['*.json', '*.json5', '*.jsonc'],
    },
  ],
  plugins: ['import', 'functional'],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'functional/immutable-data': ['error', { ignoreAccessorPattern: '**.current' }],
    'functional/prefer-readonly-type': 'error',
    'functional/prefer-tacit': 'error',
    'global-require': 0,
    'import/extensions': [2, { graphql: 'always' }],
    'import/no-cycle': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'import/order': ['error', {
      'alphabetize': { caseInsensitive: true, order: 'asc' },
      'groups': [['builtin', 'external'], ['parent', 'sibling', 'index'], ['type']],
      'newlines-between': 'always',
    }],
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
    'quotes': ['error', 'single', { allowTemplateLiterals: true, avoidEscape: true }],
    'semi': ['error', 'never'],
  },
}
