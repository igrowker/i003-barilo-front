// LoginFormComponent.tsx
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CustomInput } from '@/components/CustomInput'
import { CustomButton } from '@/components/CustomButton'
import { IconButton } from '@/components//IconButton'
import { Separator } from '@/components/ui/separator'
import { FaGoogle } from 'react-icons/fa'
import { ImAppleinc } from 'react-icons/im'
import { Form, FormMessage } from '@/components/ui/form'

const formSchema = z.object({
	email: z.string().email({ message: 'Email inválido' }).min(2, {
		message: 'El nombre de usuario debe tener al menos 2 caracteres.',
	}),
	password: z.string().min(8, {
		message: 'La contraseña debe tener al menos 8 caracteres.',
	}),
})

export const LoginFormComponent: React.FC = () => {
	const [showPassword, setShowPassword] = useState(false)

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		// Login with email and password
		console.log(values)
	}

	const handleGoogleLogin = () => (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		// Login with Google
		console.log(`Google login`)
	}

	const handleAppleLogin = () => (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		// Login with Apple
		console.log(`Apple login`)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col'>
				<div className='space-y-6'>
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
				</div>
				<a
					href='/forgot-password'
					className='mt-3 text-sm font-normal leading-none text-right text-white font-secondary'
				>
					¿Has olvidado tu contraseña?
				</a>
				<FormMessage>{form.formState.errors.password?.message}</FormMessage>
				<div className='mt-20 space-y-3'>
					<CustomButton type='submit'>Iniciar sesión</CustomButton>
					<Separator />
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
					/>
				</div>
				<p className='mt-3 text-sm font-normal leading-none text-center text-white font-secondary'>
					¿Aún no tienes una cuenta?{' '}
					<a href='/register' className='antialiased font-bold'>
						{' '}
						Registrate
					</a>
				</p>
			</form>
		</Form>
	)
}
