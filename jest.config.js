module.exports = {
	verbose: true,
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'\\.(css|less|sass|scss)$': '<rootDir>/test/__mocks__/style.js',
	},
	moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
	transform: {
		'^.+\\.ts$': 'ts-jest',
		'^.+\\.js$': 'babel-jest',
		'.*\\.(vue)$': 'vue3-jest',
	},
	collectCoverage: true,
	collectCoverageFrom: ['<rootDir>/src/**/*.{vue,ts,js}'],
	// changedSince: 'master',
	// onlyChanged: true,
	forceExit: !!process.env.CI,
}
