import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CustomInput } from '@/components/CustomInput'
import { CustomButton } from '@/components/CustomButton'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'

// import { IconButton } from '@/components//IconButton'
// import { Separator } from '@/components/ui/separator'
// import { FaGoogle } from 'react-icons/fa'
// import { ImAppleinc } from 'react-icons/im'

import { Link } from 'react-router-dom'

const formSchema = z.object({
	name: z.string().min(4, { message: 'El nombre debe tener al menos 4 caracteres .' }),
	email: z.string().email({ message: 'Email inválido' }).min(2),
	role: z.enum(['COORDINADOR', 'ESTUDIANTE'], { message: 'Debes seleccionar un rol' }),
	password: z.string().min(8, {
		message: 'La contraseña debe tener al menos 8 caracteres.',
	}),
	passwordConfirmation: z.string().min(8, {
		message: 'La contraseña debe tener al menos 8 caracteres.',
	}),
})

export const RegisterFormComponent: React.FC = () => {
	const [showPassword, setShowPassword] = useState(false)

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			role: 'COORDINADOR',
			password: '',
			passwordConfirmation: '',
		},
	})

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		// Login with email and password
		console.log(values)
	}

	// const handleGoogleLogin = () => (e: React.MouseEvent<HTMLButtonElement>) => {
	// 	e.preventDefault()
	// 	// Login with Google
	// 	console.log(`Google login`)
	// }

	// const handleAppleLogin = () => (e: React.MouseEvent<HTMLButtonElement>) => {
	// 	e.preventDefault()
	// 	// Login with Apple
	// 	console.log(`Apple login`)
	// }

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col max-w-md'>
				<FormField
					control={form.control}
					name='role'
					render={({ field }) => (
						<FormItem className='mb-3'>
							<FormLabel className='text-base font-bold text-primary-celeste font-secondary'>
								Tipo de usuario
							</FormLabel>
							<FormControl>
								<RadioGroup
									onValueChange={field.onChange}
									defaultValue={field.value}
									className='flex'
								>
									<FormItem className='flex items-center space-x-3 space-y-0'>
										<FormControl>
											<RadioGroupItem value='COORDINADOR' />
										</FormControl>
										<FormLabel className='text-base text-primary-celeste font-secondary'>
											Coordinador
										</FormLabel>
									</FormItem>
									<FormItem className='flex items-center space-x-3 space-y-0'>
										<FormControl>
											<RadioGroupItem value='ESTUDIANTE' />
										</FormControl>
										<FormLabel className='text-base text-primary-celeste font-secondary'>
											Estudiante
										</FormLabel>
									</FormItem>
								</RadioGroup>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className='space-y-6'>
					<CustomInput
						type='text'
						label='Nombre completo'
						name='name'
						placeholder='Intorduce tu nombre completo'
						field={form.register('name')}
					/>
					<FormMessage>{form.formState.errors.name?.message}</FormMessage>
					<CustomInput
						type='email'
						label='Correo electrónico'
						name='email'
						placeholder='Intorduce tu correo electrónico'
						field={form.register('email')}
					/>
					<FormMessage>{form.formState.errors.email?.message}</FormMessage>
					<CustomInput
						label='Contraseña'
						name='password'
						type='password'
						placeholder='Introduce tu contraseña'
						field={form.register('password')}
						showPasswordToggle
						showPassword={showPassword}
						setShowPassword={setShowPassword}
					/>
					<FormMessage>{form.formState.errors.password?.message}</FormMessage>
					<CustomInput
						label='Contraseña'
						name='passwordConfirmation'
						type='password'
						placeholder='Repite tu contraseña'
						field={form.register('passwordConfirmation')}
						showPasswordToggle
						showPassword={showPassword}
						setShowPassword={setShowPassword}
					/>
					<FormMessage>{form.formState.errors.passwordConfirmation?.message}</FormMessage>
				</div>

				<div className='mt-8 space-y-3'>
					<CustomButton type='submit'>Registrarse</CustomButton>
					{/* <Separator className='' />
					<IconButton
						className='bg-[#08121f]'
						icon={FaGoogle}
						label='Inicia sesión con Google'
						onClick={handleGoogleLogin}
					/>
					<IconButton
						icon={ImAppleinc}
						label='Inicia sesión con Apple'
						className='bg-[#2d3e50] '
						onClick={handleAppleLogin}
					/> */}
				</div>
				<p className='mt-4 text-sm font-normal leading-none text-center text-primary-celeste font-secondary'>
					¿Ya tienes una cuenta?{' '}
					<Link to='/login' className='antialiased font-bold'>
						{' '}
						Inicia sesión
					</Link>
				</p>
			</form>
		</Form>
	)
}
