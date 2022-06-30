module.exports = {
	mode: 'jit',
	important: true,
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	content: [
		'./public/**/*.html',
		'./index.html',
		'./src/**/*.{vue,js,ts,jsx,tsx}',
		// options: {
		// 	defaultExtractor: (content) => {
		// 		const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')
		// 		return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
		// 	},
		// },
		// Regular expressions do not work on mode `jit`
		// safelist: [
		// 	/-(leave|enter|appear)(|-(to|from|active))$/,
		// 	/^(?!(|.*?:)cursor-move).+-move$/,
		// 	/^router-link(|-exact)-active$/,
		// 	/data-v-.*/,
		// ],
		// whitelist: [],
		// whitelistPatterns: [
		// 	/-(leave|enter|appear)(|-(to|from|active))$/,
		// 	/^(?!(|.*?:)cursor-move).+-move$/,
		// 	/^router-link(|-exact)-active$/,
		// ],
	],
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
