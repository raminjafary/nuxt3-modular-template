import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const axiosInstance = axios.create({
	baseURL: import.meta.env?.VITE_BASE_URL as string,
})

function handleRequest(config: AxiosRequestConfig) {
	const token = localStorage.getItem('token')
	if (token) {
		config.headers['Authorization'] = token
	}
	return config
}

function handleResponse(response: AxiosResponse) {
	return response.data
}

axiosInstance.interceptors.request.use(handleRequest)
axiosInstance.interceptors.response.use(handleResponse)

export default axiosInstance
