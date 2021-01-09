module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['plugin:vue/vue3-recommended', '@vue/prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
  },
}
