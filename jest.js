module.exports = {
  extends: ['plugin:jest/recommended'],
  plugins: ['jest'],
  rules: {
    '@typescript-eslint/consistent-type-imports': 0,
    'import/no-extraneous-dependencies': 0,
    'jest/expect-expect': 2,
    '@typescript-eslint/no-non-null-assertion': 0,
  },
}
