import HomeCardComponent from '@/components/HomeCardComponent'
import HomeEventComponent from '@/components/HomeEventComponent'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../context/AuthProvider';
import { useState } from 'react';
import { useUserRole } from '@/hooks/useUserRole';


const Home: React.FC = () => {
	const { t } = useTranslation()

	const userRole = useUserRole();



	return (
		<>
			<section className='pb-16'>
				{userRole=="COORDINADOR" ? (
					<p>Te logueaste Correctamente</p>
				) : (
					<p>No te logueaste correctamente</p>
				)}
				<div className='w-full px-4 pt-10'>
					<HomeEventComponent></HomeEventComponent>
				</div>
				<div className='container flex flex-wrap px-3 py-10 mx-auto '>
					<div className='flex justify-between w-full px-2 pb-3'>
						<h2 className='text-xl text-[#006BA8] font-bold'>{t('home.cardTrip.title')}</h2>
						<a
							href=''
							className='text-sm font-bold text-[#37B6FF] flex justify-center items-center'
						>
							{t('home.cardTrip.link')}
						</a>
					</div>
					<div className='flex flex-wrap w-full'>
						<HomeCardComponent
							nombreImagen={'img1'}
							text={t('home.cardTrip.titleCard1')}
							link="/excursions"
						></HomeCardComponent>
						<HomeCardComponent
							nombreImagen={'img2'}
							text={t('home.cardTrip.titleCard2')}
							link="/restaurants"
						></HomeCardComponent>
						
						<HomeCardComponent
							nombreImagen={'img3'}
							text={t('home.cardTrip.titleCard3')}
							link="/destinations"
						></HomeCardComponent>
						<HomeCardComponent
							nombreImagen={'img4'}
							text={t('home.cardTrip.titleCard4')}
							link="/destiantions"
						></HomeCardComponent>
					</div>
				</div>
				
			</section>
		</>
	)
}

export default Home