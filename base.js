module.exports = {
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:comment-length/recommended',
  ],
  ignorePatterns: [
    '!/.github',
    '.expo',
    '**/__generated__/*',
    '**/*.generated.*',
    'build',
    'dist',
    'node_modules',
    'pnpm-lock.yaml',
    'Procfile',
    'web-build',
    'package-lock.json',
  ],
  overrides: [
    {
      extends: ['./typescript'],
      files: [
        '*.ts', '*.js', '*.tsx', '*.jsx',
      ],
    },
    {
      extends: ['./jest.js'],
      files: [
        '**/test/**', '**/tests/**', '**/__tests__/**', 'test/**', '**/*.test.ts', '**/*.test.tsx', '**/*.test.js', '**/*.test.jsx', '**/jest.setup.ts', '**/jest.setup.js',
      ],
    },
    {
      // disable some rules for common config and script files
      files: [
        'scripts/*', '*.config.js', '*.config.ts', 'jest.setup.ts', 'jest.setup.js',
      ],
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
      files: [
        '*.json', '*.json5', '*.jsonc', '.eslintrc',
      ],
    },
    {
      files: 'app.json',
      rules: {
        'jsonc/array-bracket-newline': 0,
      },
    },
  ],
  plugins: ['import', 'functional', 'unicorn'],
  rules: {
    'array-element-newline': [
      'error', {
        ArrayExpression: 'consistent',
        ArrayPattern: { minItems: 4, multiline: true },
      },
    ],
    'array-bracket-newline': ['error', { multiline: true, minItems: 4 }],
    'comma-dangle': ['error', 'always-multiline'],
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': ['error', 'consistent'],
    'functional/immutable-data': ['error', { ignoreAccessorPattern: '**.current' }],
    'functional/prefer-readonly-type': 'error',
    'functional/prefer-tacit': 'error',
    'global-require': 0,
    'import/extensions': [2, { graphql: 'always' }],
    'import/no-cycle': 0,
    'import/no-named-as-default-member': 0,
    'import/no-named-as-default': 0,
    'no-nested-ternary': 2,
    'unicorn/expiring-todo-comments': [
      'error',
      {
        allowWarningComments: false,
        ignoreDatesOnPullRequests: true,
      },
    ],
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/prefer-array-find': 'error',
    'unicorn/prefer-array-index-of': 'error',
    'unicorn/prefer-array-some': 'error',
    'unicorn/prefer-at': 'error',
    'unicorn/prefer-date-now': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-set-has': 'error',
    'unicorn/prefer-ternary': 'error',
    'unicorn/no-nested-ternary': 'error',
    'unicorn/consistent-function-scoping': 'error',
    'object-curly-newline': [
      'error', {
        ObjectExpression: { multiline: true, minProperties: 4, consistent: true },
        ObjectPattern: { multiline: true, minProperties: 4, consistent: true },
        ImportDeclaration: { multiline: true, minProperties: 4, consistent: true },
        ExportDeclaration: { multiline: true, minProperties: 4, consistent: true },
      },
    ],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'import/order': [
      'error', {
        'alphabetize': { caseInsensitive: true, order: 'asc' },
        'groups': [['builtin', 'external'], ['parent', 'sibling', 'index'], ['type']],
        'newlines-between': 'always',
      },
    ],
    'import/prefer-default-export': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'linebreak-style': ['error', 'unix'],
    'max-len': [
      1, {
        code: 200,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
        ignoreTrailingComments: true,
        ignoreComments: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
      },
    ],
    'comment-length/limit-single-line-comments': [
      'warn',
      {
        maxLength: 120,
        ignoreUrls: true,
      },
    ],
    'comment-length/limit-multi-line-comments': [
      'warn',
      {
        maxLength: 120,
        ignoreUrls: true,
      },
    ],
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
