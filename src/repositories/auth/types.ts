export interface LoginPayload {
	username: string
	password: string
}

export interface RegisterPayload {
	first_name: string
	last_name: string
	email: string
	national_code: string
	mobile: string
	password: string
	password_confirmation?: string
}

export interface AuthResponse {
	access_token: string
}

export interface RAuth {
	register(payload: RegisterPayload): Promise<AuthResponse>
	login(payload: LoginPayload): Promise<AuthResponse>
}
