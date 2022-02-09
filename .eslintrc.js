module.exports = {
    extends: 'plugin:markdown/recommended',
    parserOptions: {
        sourceType: 'module',
        allowImportExportEverywhere: true,
    },
    env: {
        node: true,
        es2021: true,
    },
    plugins: ['markdown'],
    overrides: [
        {
            files: ['**/*.md'],
            processor: 'markdown/markdown',
        },
    ],
    rules: {
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'no-useless-return': 'off',
    },
}
