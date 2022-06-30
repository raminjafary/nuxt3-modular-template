import { defineNuxtConfig } from 'nuxt'
import { loadEnv } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'

process.env = { ...process.env, ...loadEnv(process.env.NODE_ENV, process.cwd()) }

export default defineNuxtConfig({
	srcDir: 'src',
	vite: {
		mode: process.env.NODE_ENV,
		plugins: [eslintPlugin()],
		server: {
			host: true,
		},
	},
	css: ['~/assets/css/tailwind.css', '~/assets/css/main.css'],
	modules: ['~/modules/auth/index.ts'],
	build: {
		postcss: {
			postcssOptions: {
				plugins: {
					tailwindcss: {},
					autoprefixer: {},
				},
			},
		},
	},
})
