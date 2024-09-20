import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='text-black'>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
      <button onClick={() => changeLanguage('es')}>Español</button>
      <button onClick={() => changeLanguage('en')}>English</button>
    </div>
  );
};

export default Home;
