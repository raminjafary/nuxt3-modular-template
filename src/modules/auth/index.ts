import { resolve } from 'pathe'
import { defineNuxtModule, extendPages } from '@nuxt/kit'

export default defineNuxtModule({
	setup(_options, nuxt) {
		nuxt.hook('components:dirs', (dirs) => {
			dirs.push({
				path: resolve(__dirname, './components'),
			})
		})

		extendPages((pages) => {
			pages.push({
				name: 'Auth',
				path: '/auth',
				file: resolve(__dirname, './pages/index.vue'),
			})
		})
	},
})
