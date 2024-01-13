export default {
	extends: ['stylelint-config-standard'],
	rules: {
		indentation: 2,
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [
					'tailwind',
					'apply',
					'variants',
					'responsive',
					'screen',
					'mixin',
					'extend',
					'include',
				],
			},
		],
		'declaration-block-trailing-semicolon': null,
		'selector-id-pattern': null,
		'selector-class-pattern': null,
		'no-descending-specificity': null,
		'selector-pseudo-element-no-unknown': [
			true,
			{
				ignorePseudoElements: ['v-deep'],
			},
		],
		'selector-pseudo-class-no-unknown': [
			true,
			{
				ignorePseudoClasses: ['global', 'deep'],
			},
		],
	},
	overrides: [
		{
			files: ['**/*.(scss|css|html|vue)'],
			customSyntax: 'postcss-scss',
		},
		{
			files: ['**/*.(html|vue)'],
			customSyntax: 'postcss-html',
		},
	],
}
