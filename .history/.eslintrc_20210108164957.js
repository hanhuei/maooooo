module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    // parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        useTabs: true,
        tabWidth: 2,
      },
    ],
  },
};