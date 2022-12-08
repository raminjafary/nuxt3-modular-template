import path from 'path'
import fs from 'fs'
import * as dotenv from 'dotenv'
import eslintPlugin from 'vite-plugin-eslint'
// import { loadEnv } from 'vite'

// process.env = { ...process.env, ...loadEnv(process.env.NODE_ENV as string, process.cwd()) }

const env = process.env.NODE_ENV

const envPath = path.resolve(process.cwd(), `.env.${env}`)
const defaultEnvPath = path.resolve(process.cwd(), '.env.development')

dotenv.config({
	path: fs.existsSync(envPath) ? envPath : defaultEnvPath,
})

export default defineNuxtConfig({
	srcDir: 'src',
	imports: {
		autoImport: true,
	},
	runtimeConfig: {
		public: {
			apiBaseURL: process.env?.VITE_BASE_URL,
		},
	},
	vite: {
		mode: process.env.NODE_ENV,
		plugins: [eslintPlugin()],
	},
	css: ['~/assets/css/tailwind.css', '~/assets/css/main.css'],
	modules: ['~/modules/auth/index.ts'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
})
