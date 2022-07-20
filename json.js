module.exports = {
  extends: ['plugin:jsonc/recommended-with-json'],
  parser: 'jsonc-eslint-parser',
  rules: {
    'max-len': 0,
    'jsonc/array-bracket-newline': [
      'error',
      {
        minItems: 3,
        multiline: true,
      },
    ],
    'jsonc/array-bracket-spacing': [
      'error',
      'always',
    ],
    'jsonc/array-element-newline': ['error', 'always'],
    'jsonc/indent': ['error', 2],
    'jsonc/object-curly-newline': [
      'error',
      {
        consistent: true,
        multiline: true,
      },
    ],
    'jsonc/object-curly-spacing': ['error', 'always'],
    'jsonc/object-property-newline': [
      'error', {
        allowAllPropertiesOnSameLine: false,
      },
    ],
  },
}
