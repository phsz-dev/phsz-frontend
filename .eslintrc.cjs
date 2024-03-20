module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'prettier'
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    'vue/multi-word-component-names': 'off'
  }
}
