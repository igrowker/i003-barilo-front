import HomeCardComponent from '@/components/HomeCardComponent'
import HomeEventComponent from '@/components/HomeEventComponent'
import { useTranslation } from 'react-i18next'
import { useState } from 'react';
import { useUserRole } from '../hooks/useUserRole';
import { useUserGroup } from '@/hooks/useUserIsMember';

interface UserGroupStatusProps {
	token: string;
  }

const Home: React.FC<UserGroupStatusProps> = () => {
	const { t } = useTranslation()
	const userRole = useUserRole();
	const { isInGroup, loading, error } = useUserGroup();

	return (
		<>
			<section>
				{userRole=="ESTUDIANTE" ? (
					<div className='w-full px-4 pt-10'>
					{isInGroup ? (
						<HomeEventComponent title={t('home.cardEvent.student.title')} text={t('home.cardEvent.student.description')} button={"17h:13m:5s"} admin={false} member={true}></HomeEventComponent>
					) : (
						<HomeEventComponent title={t('home.cardEvent.student.noGroup.title')} text={t('home.cardEvent.student.noGroup.description')} button={t('home.cardEvent.student.noGroup.btn')} admin={false} member={false}></HomeEventComponent>
    				)}
						</div>
					) : (
						<div className='w-full px-4 pt-10'>
						<HomeEventComponent title={t('home.cardEvent.admin.title')} text={''} button={t('home.cardEvent.admin.btn')} admin={true} member={true}></HomeEventComponent>
					</div>
				)}
				<div className='container px-5 py-24 mx-auto'>
					{userRole=="ESTUDIANTE" ? (
						<div className='w-full px-4 pt-10'>
					{isInGroup ? (
						<div>
							<div className='flex justify-between w-full px-2 pb-3'>
								<h2 className='text-xl text-[#006BA8] font-bold'>{t('home.cardTrip.title')}</h2>
								<a
									href=''
									className='text-sm font-bold text-[#37B6FF] flex justify-center items-center'
									>
									{t('home.cardTrip.link')}
								</a>
								</div>
									<div className='flex flex-wrap -m-2'>
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

										</div>
										<div className='flex justify-between w-full px-2 mt-4 pb-3'>
											<h2 className='text-xl text-[#006BA8] font-bold'>{t('home.cardTrip.titleNoGroup')}</h2>
											<a
												href=''
												className='text-sm font-bold text-[#37B6FF] flex justify-center items-center'
												>
												{t('home.cardTrip.link')}
											</a>
										</div>
										<div className='flex flex-wrap -m-4'>
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
				
							</div>
						</div>
					) : (
						<div>
							<div className='flex justify-between w-full px-2 pb-3'>
								<h2 className='text-xl text-[#006BA8] font-bold'>{t('home.cardTrip.title')}</h2>
								<a
									href=''
									className='text-sm font-bold text-[#37B6FF] flex justify-center items-center'
									>
									{t('home.cardTrip.link')}
								</a>
							</div>
							<div className='flex flex-wrap -m-4'>
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

						</div>
					</div>

    				)}

						</div>
					) : (
						<div>
							<div className='flex justify-between w-full px-2 pb-3'>
								<h2 className='text-xl text-[#006BA8] font-bold'>{t('home.cardTrip.title')}</h2>
								<a
									href=''
									className='text-sm font-bold text-[#37B6FF] flex justify-center items-center'
									>
									{t('home.cardTrip.link')}
								</a>
							</div>
							<div className='flex flex-wrap -m-2'>
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

							</div>
					</div>
				)}

				</div>
				
			</section>
		</>
	)
}

export default Home