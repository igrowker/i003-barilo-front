import * as z from 'zod'

export const registerSchema = z
	.object({
		name: z.string().min(1, { message: 'El nombre es requerido' }),
		mail: z.string().email({ message: 'Debe ser un correo válido' }),
		role: z.enum(['COORDINADOR', 'ESTUDIANTE']),
		password: z.string().min(8, { message: 'La contraseña debe tener al menos 8 caracteres' }),
		passwordConfirmation: z.string().min(8, { message: 'Debes confirmar tu contraseña' }),
	})
	.refine(data => data.password === data.passwordConfirmation, {
		message: 'Las contraseñas no coinciden',
		path: ['passwordConfirmation'],
	})
