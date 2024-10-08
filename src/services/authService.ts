import axios, { AxiosResponse } from 'axios'
import { z } from 'zod'
import { loginSchema } from '../validation/loginSchema'
import { registerSchema } from '../validation/registerSchema'

type RegisterUserForm = z.infer<typeof registerSchema>

interface RegisterUserResponse {
	data: {
		message: string
		userId: string
	}
	status: number
}

interface RegisterUserError {
	response?: {
		data: {
			message: string
		}
		status: number
	}
}

// Interface para login
type LoginUserForm = z.infer<typeof loginSchema>

interface LoginUserResponse {
  token: any
	data: {
		message: string
		token: string
	}
	status: number
}

interface LoginUserError {
	response?: {
		data: {
			message: string
		}
		status: number
	}
}

export const registerUser = async (
	values: RegisterUserForm,
): Promise<RegisterUserResponse | null> => {
	try {
		const response: AxiosResponse<RegisterUserResponse> = await axios.post(
			'https://barilo.onrender.com/barilo/api/auth/register',
			{
				name: values.name,
				mail: values.mail,
				role: values.role,
				password: values.password,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			},
		)

		if (response.status === 200 || response.status === 201) {
			console.log('Registration successful:', response.data)
			return response.data
		} else {
			console.error('Registration failed:', response.data)
			return null
		}
	} catch (error) {
		const typedError = error as RegisterUserError
		console.error('Error during registration:', typedError.response?.data.message || error)
		return null
	}
}

export const loginUser = async (values: LoginUserForm): Promise<LoginUserResponse | null> => {
	try {
		const response: AxiosResponse<LoginUserResponse> = await axios.post(
			'https://barilo.onrender.com/barilo/api/auth/login',
			{
				mail: values.mail,
				password: values.password,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			},
		)

		if (response.status === 200) {
			console.log('Login successful:', response.data)
			return response.data
		} else {
			console.error('Login failed:', response.data)
			return null
		}
	} catch (error) {
		const typedError = error as LoginUserError
		console.error('Error during login:', typedError.response?.data.message || error)
		return null
	}
}
