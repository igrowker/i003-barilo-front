import { useTranslation } from "react-i18next";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { FaFlagUsa } from "react-icons/fa";
import { SlArrowLeft } from "react-icons/sl";
import IconComponent from "../IconComponent";


const Language = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div className="flex flex-col items-stretch justify-between w-screen h-screen">
        <div className="flex flex-col w-screen gap-5 mt-5">
          <div className="flex flex-row items-center justify-start w-screen py-2 my-5 text-2xl text-customBlue">
            <a className="flex items-center justify-center w-1/3" href="./profileSettings">
              <SlArrowLeft />
            </a>
            <h3 className="flex items-center justify-center w-1/3 h-1/3">{t('profile_user.language.title')}</h3>
          </div>
          <div className="flex flex-col items-center gap-y-5">
            <div className="flex flex-row items-center justify-between w-3/4 text-customBlue">
              <button
                className="flex flex-row items-center justify-start w-screen transition-transform duration-200 transform gap-x-10"
                onClick={() => changeLanguage("en")}
              >
                <FaFlagUsa className="text-xl" />
                <h2 className="flex text-xl font-semibold cursor-pointer ">{t('profile_user.language.inglés_english')}</h2>
              </button>
            </div>
            <div className="flex flex-row items-center justify-between w-3/4 text-customBlue">
              <button
                className="flex flex-row items-center justify-start w-screen transition-transform duration-200 transform gap-x-10"
                onClick={() => changeLanguage("es")}
              >
                <FaFontAwesomeFlag className="text-xl" />
                <h2 className="flex text-xl font-semibold cursor-pointer ">{t('profile_user.language.español_spanish')}</h2>
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pb-5 ">
          <IconComponent />
        </div>
      </div>
    </>
  );
};

export default Language;


