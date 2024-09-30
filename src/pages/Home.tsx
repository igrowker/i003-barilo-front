// import HomeCardComponent from '@/components/HomeCardComponent'
// import HomeEventComponent from '@/components/HomeEventComponent'
// import { useTranslation } from 'react-i18next'
// import { useAuthStore } from '@/store/useAuthStore'
import Landing from '@/components/Landing'
const Home: React.FC = () => {
	// const { t, i18n } = useTranslation()
	// const changeLanguage = (lng: string) => {
	// 	i18n.changeLanguage(lng)
	// }

	return (
		<section>
			{/* <div className='font-bold text-black'>
				<h1>{t('welcome')}</h1>
				<p>{t('description')}</p>
				<button onClick={() => changeLanguage('es')}>Español</button>
				<button onClick={() => changeLanguage('en')}>English</button>
			</div>

			<div className='w-full px-4 pt-10'>
				<HomeEventComponent></HomeEventComponent>
			</div>
			<div className='container flex flex-wrap px-3 py-10 mx-auto'>
				<div className='flex justify-between w-full px-2 pb-3'>
					<h2 className='text-xl text-[#006BA8] font-bold'>{t('home.cardTrip.title')}</h2>
					<a href='' className='text-sm font-bold text-[#37B6FF] flex justify-center items-center'>
						{t('home.cardTrip.link')}
					</a>
				</div>
				<div className='flex flex-wrap w-full'>
					<HomeCardComponent
						nombreImagen={'img1'}
						text={t('home.cardTrip.titleCard1')}
					></HomeCardComponent>
					<HomeCardComponent
						nombreImagen={'img2'}
						text={t('home.cardTrip.titleCard2')}
					></HomeCardComponent>
					<HomeCardComponent
						nombreImagen={'img3'}
						text={t('home.cardTrip.titleCard3')}
					></HomeCardComponent>
					<HomeCardComponent
						nombreImagen={'img4'}
						text={t('home.cardTrip.titleCard4')}
					></HomeCardComponent>
				</div>
			</div> */}
			<Landing />
		</section>
	)
}

export default Home
