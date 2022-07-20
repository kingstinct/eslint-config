module.exports = {
  extends: ['plugin:yml/standard'],
  parser: 'yaml-eslint-parser',
  rules: {
    'yml/flow-sequence-bracket-spacing': [2, 'always'],
    'yml/no-empty-mapping-value': 0,
    'yml/no-multiple-empty-lines': 2,
    'yml/require-string-key': 2,
  },
}
