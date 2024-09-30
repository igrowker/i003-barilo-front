import { CustomButton } from '@/components/CustomButton'
import { FaRegPaperPlane } from 'react-icons/fa'
import { FaRegCreditCard } from 'react-icons/fa'
import { RiGroupLine } from 'react-icons/ri'
import { Input } from '@/components/ui/input'
import snowImage from '@/assets/images/snow.webp'
import snowImage2 from '@/assets/images/snow2.webp'
import snowImage3 from '@/assets/images/snow3.webp'

export default function LandingComponent() {
	return (
		<>
			<div className=''>
				<main className='flex-1'>
					<section className='w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#FF74CF] text-white '>
						<div className='container px-4 mx-auto md:px-6'>
							<div className='flex flex-col items-center space-y-4 text-center'>
								<div className='space-y-2 '>
									<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
										Viajes de egresados accesibles para todos
									</h1>
									<p className="mx-auto max-w-[700px] text-md md:text-2xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-['Lato']">
										Barilo hace que los viajes de egresados sean más accesibles y flexibles,
										reduciendo la desigualdad y permitiendo que más jóvenes disfruten de esta
										experiencia única.
									</p>
								</div>
								<div className='flex space-x-4'>
									<CustomButton className='bg-white text-[#FF74CF] hover:bg-gray-100'>
										Conoce más
									</CustomButton>
									<CustomButton className='bg-transparent border border-white text-white hover:bg-white hover:text-[#FF74CF]'>
										Registrate
									</CustomButton>
								</div>
							</div>
						</div>
					</section>
					<section id='features' className='w-full py-12 bg-white md:py-24 lg:py-32'>
						<div className='container px-4 mx-auto md:px-6'>
							<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#08BDFF]'>
								Características
							</h2>
							<div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
								<div className='flex flex-col items-center text-center'>
									<FaRegPaperPlane className='mb-5 text-3xl text-slate-500 md:text-7xl' />
									<h3 className='mb-2 text-xl font-bold'>Destinos variados</h3>
									<p className="text-gray-600 font-['Lato']">
										Ofrecemos una amplia gama de destinos para adaptarnos a todos los gustos y
										presupuestos.
									</p>
								</div>
								<div className='flex flex-col items-center text-center'>
									<FaRegCreditCard className='mb-5 text-3xl text-slate-500 md:text-7xl' />
									<h3 className='mb-2 text-xl font-bold'>Planes de pago flexibles</h3>
									<p className="text-gray-600 font-['Lato']">
										Opciones de pago adaptadas a diferentes situaciones económicas.
									</p>
								</div>
								<div className='flex flex-col items-center text-center'>
									<RiGroupLine className='mb-5 text-3xl text-slate-500 md:text-7xl' />
									<h3 className='mb-2 text-xl font-bold'>Grupos inclusivos</h3>
									<p className="text-gray-600 font-['Lato']">
										Fomentamos la integración y la diversidad en nuestros grupos de viaje.
									</p>
								</div>
							</div>
						</div>
					</section>
					<section id='how-it-works' className='w-full py-12 md:py-24 lg:py-32 bg-[#8C52FF]'>
						<div className='container px-4 mx-auto md:px-6'>
							<h2 className='mb-12 text-3xl font-bold tracking-tighter text-center text-white sm:text-4xl md:text-5xl'>
								Cómo funciona
							</h2>
							<div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
								<div className='flex flex-col items-center text-center'>
									<div className='w-12 h-12 rounded-full bg-white text-[#8C52FF] flex items-center justify-center text-2xl font-bold mb-4'>
										1
									</div>
									<h3 className='mb-2 text-xl font-bold text-white'>Elige tu destino</h3>
									<p className="text-gray-200 font-['Lato']">
										Selecciona entre nuestras opciones de viaje adaptadas a diferentes presupuestos.
									</p>
								</div>
								<div className='flex flex-col items-center text-center'>
									<div className='w-12 h-12 rounded-full bg-white text-[#8C52FF] flex items-center justify-center text-2xl font-bold mb-4'>
										2
									</div>
									<h3 className='mb-2 text-xl font-bold text-white'>Personaliza tu plan</h3>
									<p className="text-gray-200 font-['Lato']">
										Ajusta las opciones de alojamiento, actividades y transporte según tus
										necesidades.
									</p>
								</div>
								<div className='flex flex-col items-center text-center'>
									<div className='w-12 h-12 rounded-full bg-white text-[#8C52FF] flex items-center justify-center text-2xl font-bold mb-4'>
										3
									</div>
									<h3 className='mb-2 text-xl font-bold text-white'>¡Disfruta tu viaje!</h3>
									<p className="text-gray-200 font-['Lato']">
										Vive una experiencia inolvidable con tus compañeros de clase.
									</p>
								</div>
							</div>
						</div>
					</section>
					<section className='w-full py-12 bg-white md:py-24 lg:py-32'>
						<div className='container px-4 mx-auto md:px-6'>
							<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#08BDFF]'>
								Experiencias Barilo
							</h2>
							<div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
								<img
									src={snowImage}
									alt='Grupo esquiando'
									className='w-full rounded-lg shadow-lg h-96'
								/>
								<img
									src={snowImage3}
									alt='Amigos en la nieve'
									className='w-full rounded-lg shadow-lg h-96'
								/>
								<img
									src={snowImage2}
									alt='Cartel de Bariloche'
									className='w-full rounded-lg shadow-lg h-96'
								/>
							</div>
						</div>
					</section>
					<section id='contact' className='w-full py-12 md:py-24 lg:py-32 bg-[#FF74CF]'>
						<div className='container px-4 mx-auto md:px-6'>
							<div className='flex flex-col items-center space-y-4 text-center'>
								<div className='space-y-2'>
									<h2 className='text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl'>
										Contacta con nosotros
									</h2>
									<p className="mx-auto max-w-[700px] text-xl text-gray-200 md:text-2xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-['Lato']">
										¿Tienes preguntas o necesitas más información? Estamos aquí para ayudarte.
									</p>
								</div>
								<div className='w-full max-w-sm space-y-2'>
									<form className='flex flex-col gap-2'>
										<Input
											type='email'
											placeholder='Tu correo electrónico'
											className="bg-white font-['Lato']"
										/>
										<CustomButton
											type='submit'
											className='w-full bg-[#8C52FF] text-white hover:bg-[#7B3FEE]'
										>
											Enviar
										</CustomButton>
									</form>
								</div>
							</div>
						</div>
					</section>
				</main>
			</div>
		</>
	)
}
