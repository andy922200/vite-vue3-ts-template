export default {
  ignoreFiles: ['node_modules/*', 'src/assets/**', 'build/**'],
  extends: [
    'stylelint-config-standard-vue',
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue/scss',
  ],
  rules: {
    'selector-class-pattern': null,
  },
}
