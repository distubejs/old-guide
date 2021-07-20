module.exports = {
	'extends': 'sora/vue',
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
