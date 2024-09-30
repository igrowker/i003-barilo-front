import logo from '@/assets/images/logotipo.svg'

const NavBar = () => {
	return (
		<header className='flex items-center h-16 px-4 bg-white lg:px-6'>
			<a href='#' className='flex items-center justify-center'>
				<img src={logo} alt='Barilo Logo' width={120} height={40} />
			</a>
			<nav className='flex gap-4 ml-auto sm:gap-6'>
				<a className='text-sm font-medium hover:text-[#FF74CF] transition-colors' href='#features'>
					Características
				</a>
				<a
					className='text-sm font-medium hover:text-[#FF74CF] transition-colors'
					href='#how-it-works'
				>
					Cómo funciona
				</a>
				<a className='text-sm font-medium hover:text-[#FF74CF] transition-colors' href='#contact'>
					Contacto
				</a>
			</nav>
		</header>
	)
}

export default NavBar
