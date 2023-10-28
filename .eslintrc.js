module.exports = {
  extends: ['next/core-web-vitals', 'eslint:recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 0,
    semi: [1, 'never'],
    quotes: [1, 'single'],
    'no-console': 1,
    'comma-dangle': [2, 'never'],
    'space-before-function-paren': 0,
    'no-unused-vars': 1,
    'no-unused-expressions': [
      0,
      {
        allowShortCircuit: true,
        allowTernary: true
      }
    ]
  }
}
