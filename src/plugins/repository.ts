import { defineNuxtPlugin } from '#app'
import repositories from '@/repositories'
import type { RepositoryServices } from '@/repositories'
import axios from '@/api'

export default defineNuxtPlugin(() => {
	return {
		provide: {
			repositories: repositories(axios),
		},
	}
})

declare module '#app' {
	interface NuxtApp {
		$repositories: RepositoryServices
	}
}

declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$repositories: RepositoryServices
	}
}
