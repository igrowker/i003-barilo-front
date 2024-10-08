import axios, { AxiosResponse } from 'axios'

interface RegisterUserForm {
	name: string
	mail: string
	role: 'COORDINADOR' | 'ESTUDIANTE'
	password: string
	passwordConfirmation: string
}

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
interface LoginUserForm {
	mail: string
	password: string
}

interface LoginUserResponse {
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

export interface UserProfile {
	id: string
	name: string
	email: string
	role: 'COORDINADOR' | 'ESTUDIANTE'
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

// Función para obtener el perfil del usuario
export const getProfile = async (): Promise<UserProfile | null> => {
	try {
	  // Obtén el token del localStorage
	  const token = localStorage.getItem('token')
  
	  if (!token) {
		console.error('Token no disponible')
		return null
	  }
  
	  const response: AxiosResponse<{ data: UserProfile }> = await axios.get(
		'https://barilo.onrender.com/barilo/api/auth/profile',
		{
		  headers: {
			Authorization: `Bearer ${token}`, // Incluye el token en el encabezado
			'Content-Type': 'application/json',
		  },
		},
	  )
  
	  if (response.status === 200) {
		console.log('Perfil de usuario obtenido exitosamente:', response.data)
		return response.data.data
	  } else {
		console.error('No se pudo obtener el perfil del usuario:', response.status)
		return null
	  }
	} catch (error) {
	  console.error('Error al obtener el perfil del usuario:', error)
	  return null
	}
}