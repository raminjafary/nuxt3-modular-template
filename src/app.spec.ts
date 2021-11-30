///<reference types="../node_modules/@types/jest" />

import { shallowMount } from '@vue/test-utils'
import App from '@/app.vue'
describe('App.vue', () => {
	it('renders App', () => {
		const wrapper = shallowMount(App, {
			global: {
				stubs: {
					NuxtPage: {
						template: '<slot />',
					},
				},
			},
		})
		expect(wrapper).toBeTruthy()
	})
})
