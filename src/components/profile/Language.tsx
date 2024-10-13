import { useTranslation } from "react-i18next";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { FaFlagUsa } from "react-icons/fa";
import { SlArrowLeft } from "react-icons/sl";


const Language = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div className="h-screen w-screen flex flex-col items-stretch justify-between">
        <div className="flex flex-col mt-5 w-screen gap-5">
          <div className="flex flex-row w-screen py-2 my-5 text-2xl text-customBlue items-center justify-start">
            <a className="w-1/3 flex items-center justify-center" href="./profileSettings">
              <SlArrowLeft />
            </a>
            <h3 className="h-1/3 w-1/3 flex items-center justify-center">{t('profile_user.language.title')}</h3>
          </div>
          <div className="flex flex-col items-center gap-y-5">
            <div className="flex flex-row text-customBlue w-3/4 items-center justify-between">
              <button
                className="flex flex-row w-screen items-center justify-start gap-x-10 transition-transform duration-200 transform hover:scale-105"
                onClick={() => changeLanguage("en")}
              >
                <FaFlagUsa className="text-xl" />
                <h2 className="flex text-xl font-semibold cursor-pointer ">{t('profile_user.language.inglés_english')}</h2>
              </button>
            </div>
            <div className="flex flex-row text-customBlue w-3/4 items-center justify-between">
              <button
                className="flex flex-row w-screen items-center justify-start gap-x-10 transition-transform duration-200 transform hover:scale-105"
                onClick={() => changeLanguage("es")}
              >
                <FaFontAwesomeFlag className="text-xl" />
                <h2 className="flex text-xl font-semibold cursor-pointer ">{t('profile_user.language.español_spanish')}</h2>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Language;


