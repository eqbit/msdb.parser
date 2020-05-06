module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'typescript/no-unused-vars': 'warn',
    'no-trailing-spaces': 'off',
    'comma-dangle': 'off',
    'no-console': 'off',
    'array-bracket-spacing': 'off',
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'object-curly-newline': 'off',
    'import/extensions': 'off',
    'implicit-arrow-linebreak': 'off',
    'padded-blocks': 'off',
    'camelcase': 'off'
  },
};
