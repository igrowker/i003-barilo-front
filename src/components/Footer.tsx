function Footer() {
	return (
		<footer className='flex flex-col items-center w-full gap-2 px-4 py-6 border-t sm:flex-row shrink-0 md:px-6'>
			<p className="text-xs text-gray-600 font-['Lato']">
				© 2024 Barilo. Todos los derechos reservados.
			</p>
			<nav className='flex gap-4 sm:ml-auto sm:gap-6'>
				<a className="text-xs hover:underline underline-offset-4 font-['Lato']" href='#'>
					Términos de servicio
				</a>
				<a className="text-xs hover:underline underline-offset-4 font-['Lato']" href='#'>
					Privacidad
				</a>
			</nav>
		</footer>
	)
}

export default Footer
