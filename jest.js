module.exports = {
  extends: ['plugin:jest/recommended'],
  plugins: ['jest'],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'jest/expect-expect': 2,
  },
}
