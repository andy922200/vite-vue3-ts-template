module.exports = {
    extends: [
        'stylelint-config-standard-scss',
        'stylelint-config-recommended-vue'
    ],
    overrides: [
        {
            'files': ['**/*.(css|scss|vue)'],
            'customSyntax': 'postcss-scss'
        },
        {
            'files': ['**/*.(html|vue)'],
            'customSyntax': 'postcss-html'
        }
    ],
    rules: {
        'selector-class-pattern': null,
        'max-nesting-depth': 3,
        'selector-max-id': 2,
        'indentation': 4
    }
}