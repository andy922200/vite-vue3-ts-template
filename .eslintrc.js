module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2021
    },
    rules: {
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        indent: 'off',
        quotes: [2, 'single'],
        semi: [2, 'never'],
        'no-use-before-define': [2, 'nofunc'],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'comma-spacing': [2, {
            before: false,
            after: true
        }],
        'key-spacing': [1, {
            beforeColon: false,
            afterColon: true
        }],
        'import/first': [0],
        'object-property-newline': [2, {
            allowAllPropertiesOnSameLine: false
        }],
        'object-curly-newline': [1, {
            ObjectExpression: 'always',
            ImportDeclaration: 'always',
            ExportDeclaration: 'never'
        }],
        'vue/html-indent': [1, 4, {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: []
        }],
        'vue/html-closing-bracket-newline': [2, {
            singleline: 'never',
            multiline: 'always'
        }],
        'vue/html-closing-bracket-spacing': [2, {
            selfClosingTag: 'always'
        }]
    }
}