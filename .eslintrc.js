module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'plugin:vue/essential',
		// 'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'@vue/typescript/recommended',
		'plugin:nuxt/recommended',
	],
	parserOptions: {
		ecmaVersion: 13,
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
	},
	plugins: ['vue', '@typescript-eslint'],
	rules: {
		'vue/script-setup-uses-vars': 0,
		'no-unused-expressions': 'off',
		'vue/no-v-html': 'off',
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
	},
	// overrides: [
	// 	{
	// 		files: ['*.vue'],
	// 		rules: require('@typescript-eslint/eslint-plugin').configs['eslint-recommended'].overrides[0]
	// 			.rules,
	// 	},
	// ],
}
