import type { AxiosInstance } from 'axios'
import type { RAuth } from './types'
import { LOGIN, REGISTER } from './endpoint'

export default (axios: AxiosInstance): RAuth => ({
	login(payload) {
		return axios.post(LOGIN, payload)
	},
	register(payload) {
		return axios.post(REGISTER, payload)
	},
})
