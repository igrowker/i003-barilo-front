import * as z from 'zod'

export const loginSchema = z.object({
	mail: z.string().email({ message: 'El correo debe ser válido' }),
	password: z.string().min(8, { message: 'La contraseña debe tener al menos 8 caracteres' }),
})
