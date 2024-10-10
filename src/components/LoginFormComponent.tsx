import { useEffect, useState } from 'react'
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
import { useNavigate } from 'react-router-dom'
import { loginUser } from '@/services/authService'
import { loginSchema } from '../validation/loginSchema'
import { useAuth } from '../context/AuthProvider';
import { useTranslation } from 'react-i18next'
import ModalComponent from './ModalComponent'

type LoginUserForm = z.infer<typeof loginSchema>

export const LoginFormComponent: React.FC = () => {
	const { t } = useTranslation();
	const [showPassword, setShowPassword] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const navigate = useNavigate()
	const { login, isAuthenticated  } = useAuth();
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [modalContent, setModalContent] = useState(null);

	useEffect(() => {
		if (isAuthenticated) {
		  // Redirige al usuario a la página de inicio si está autenticado
		  navigate('/home'); // Cambia '/home' a la ruta deseada
		}
	  }, [isAuthenticated, navigate]);

	const form = useForm<LoginUserForm>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			mail: '',
			password: '',
		},
	})

	const showSuccessModal = () => {
		setModalContent({
		  title: t("modals.register.success.title"),
		  message: t("modals.register.success.message"),
		  buttons: [
			{
			  label: t("modals.register.success.btn"),
			  action: () => {
				setIsModalVisible(false);
				navigate("/login");
			  },
			  isPrimary: true,
			},
		  ],
		});
		setIsModalVisible(true);
	  };
	

	const showErrorModal = () => {
		setModalContent({
		  title: t("modals.login.error.title"),
		  message: t("modals.login.error.message"),
		  buttons: [
			{
			  label: t("modals.login.error.btn"),
			  action: () => {setIsModalVisible(false),
			  navigate("/register");
			},
			  isPrimary: true,
			},
			{
			  label: t("modals.login.error.btn2"),
			  action: () => {
				setIsModalVisible(false);
			  },
			  isPrimary: false,
			},
		  ],
		});
		setIsModalVisible(true);
	  };

	const onSubmit = async (values: LoginUserForm) => {
		setIsLoading(true)
		try {
			const response = await login(values.mail, values.password)
			console.log('Inicio de sesión exitoso:', response)
			const timeoutId = setTimeout(() => {
				if(isAuthenticated){
					navigate('/home')
				}else{
					showErrorModal();
				}
			  }, 2000);
		} catch (error) {
			console.error('Error en el inicio de sesión:', error);
		} finally {
			setIsLoading(false);
		}
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
		<div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col max-w-md'>
					<div className='space-y-6'>
						<CustomInput
							type='email'
							label='Correo electrónico'
							name='mail'
							placeholder='Intorduce tu correo electrónico'
							field={form.register('mail')}
							/>
						<FormMessage>{form.formState.errors.mail?.message}</FormMessage>
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
						className='mt-3 text-sm font-normal leading-none text-right text-primary-celeste font-secondary'
						>
						¿Has olvidado tu contraseña?
					</a>
					<FormMessage>{form.formState.errors.password?.message}</FormMessage>
					<div className='space-y-3 mt-14'>
						<CustomButton type='submit' disabled={isLoading}>
							{isLoading ? 'Iniciando sesión' : 'Iniciar sesión'}
						</CustomButton>
						<Separator className='' />
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
					<p className='mt-4 text-sm font-normal leading-none text-center text-primary-celeste font-secondary'>
						¿Aún no tienes una cuenta?{' '}
						<a href='/register' className='antialiased font-bold'>
							{' '}
							Registrate
						</a>
					</p>
				</form>
			</Form>
				{isModalVisible && (
					<ModalComponent
					title={modalContent.title}
					message={modalContent.message}
					buttons={modalContent.buttons}
					onClose={() => setIsModalVisible(false)}
					/>
				)}
		</div>
	)
}
