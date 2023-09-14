import type { AxiosInstance } from 'axios'
import type { RAuth } from './auth/types'
import auth from './auth'

export interface RepositoryServices {
	auth: RAuth
}

function lazyBind<T>(repoFactory: any, repoInterface: any, axios: AxiosInstance) {
	return {
		...Object.keys(repoInterface).reduce((acc, method: any) => {
			const resolvedMethod = async (...args: any[]) => {
				const repo: any = await repoFactory()
				return repo.default(axios)[method](...args)
			}
			return {
				...acc,
				[method]: resolvedMethod,
			}
		}, {}),
	} as T
}

export default function repositories(axios: AxiosInstance) {
	return {
		get auth() {
			return lazyBind<RAuth>(() => import('./auth'), auth(axios), axios)
		},
	}
}
