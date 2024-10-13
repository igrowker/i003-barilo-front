import { useTranslation } from "react-i18next";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { FaFlagUsa } from "react-icons/fa";

import { IoChevronForwardSharp } from "react-icons/io5";
import { SlArrowLeft } from "react-icons/sl";


const Language = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
      <div className="p-4">
        <div className="flex flex-row items-center justify-start w-screen py-2 text-2xl text-customBlue">
            <a  className="flex items-center justify-center w-1/3" href="./profileSettings">
            <SlArrowLeft />
            </a>
            <h3 className="flex items-center justify-center w-1/3">{t('profile_user.language.title')}</h3>  
          </div>
        <div className="group relative flex flex-col items-center gap-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
          <div className="flex text-customBlue w-4/5 items-center justify-between">
            <button
              className="flex flex-row w-screen items-center justify-between transition-transform duration-200 transform hover:scale-105"
              onClick={() => changeLanguage("en")}
            >
              <FaFlagUsa className="text-xl" />
              <h2 className="flex text-xl font-semibold cursor-pointer ml-3">{t('profile_user.language.español_spanish')}</h2>
              <IoChevronForwardSharp className="flex text-xl" />
            </button>
          </div>
          <div className="flex text-customBlue w-4/5 items-center justify-between">
            <button
              className="flex flex-row w-screen items-center justify-between transition-transform duration-200 transform hover:scale-105"
              onClick={() => changeLanguage("es")}
            >
              <FaFontAwesomeFlag className="text-xl" />
              <h2 className="flex text-xl font-semibold cursor-pointer ml-3">{t('profile_user.language.inglés_english')}</h2>
              <IoChevronForwardSharp className="flex text-xl" />
            </button>
          </div>
        </div>
      </div>
  );
};

export default Language;


