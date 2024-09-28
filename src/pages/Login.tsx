import { LoginFormComponent } from '@/components/LoginFormComponent'
import logo from '@/assets/images/imago.webp'

export default function Login() {
	return (
		<>
			<div className='flex flex-col items-center justify-center h-screen px-4 bg-white py-14 md:flex md:justify-center md:items-center'>
				{/* <div className='absolute h-full inset-0 bg-gradient-to-t from-black from-10%  to-transparent'></div> */}
				<img src={logo} alt='Barilo' className='w-[250px] h-auto' />
				<section className='flex flex-col justify-center w-full h-auto max-w-[366px] px-4'>
					{/* <h1 className='self-stretch h-[111.92px]'>
						<span className='text-white text-[44.77px] font-bold font-primary leading-[53.72px]'>
							Bariló
						</span>
						<span className='text-white text-[41.04px] font-normal font-primary leading-[49.24px]'>
							{' '}
							te da la
							<br />
							bienvenida
						</span>
					</h1> */}
					<div className='space-y-4'>
						<span className='self-stretch text-[#006BA8] text-[14.92px] font-normal font-secondary leading-[17.91px]'>
							Inicia sesión para acceder a tu cuenta
						</span>
						<LoginFormComponent />
					</div>
				</section>
			</div>
		</>
	)
}
