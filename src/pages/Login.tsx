import { LoginFormComponent } from '@/components/LoginFormComponent'

export default function Login() {
	return (
		<>
			<div className="relative  h-screen  bg-cover bg-center py-14 bg-[url('src/assets/images/authbg.webp')]">
				<div className='absolute h-screen inset-0 bg-gradient-to-t from-black from-10%  to-transparent'></div>
				<section className='relative z-10 inline-flex flex-col justify-start w-full h-auto max-w-md px-4'>
					<h1 className='self-stretch h-[111.92px]'>
						<span className='text-white text-[44.77px] font-bold font-primary leading-[53.72px]'>
							Bariló
						</span>
						<span className='text-white text-[41.04px] font-normal font-primary leading-[49.24px]'>
							{' '}
							te da la
							<br />
							bienvenida
						</span>
					</h1>
					<span className='self-stretch text-white text-[14.92px] font-normal font-secondary leading-[17.91px]'>
						Inicia sesión para acceder a tu cuenta
					</span>
					<div className='mt-24'>
						<LoginFormComponent />
					</div>
				</section>
			</div>
		</>
	)
}
