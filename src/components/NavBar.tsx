import { useState } from "react";
import TextIconComponent from "./TextIconComponent";
import { useTranslation } from "react-i18next";
import FlagSpain from "../assets/Flags/es.svg";
import FlagUsa from "../assets/Flags/us.svg";

const NavBar = () => {
  const { i18n, t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
    document.querySelector(`#${lng}`).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="bg-white text-primary-celeste body-font">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <a
          href="/"
          className="flex items-center order-first mb-4 font-medium text-white lg:order-none lg:w-1/5 title-font lg:items-center lg:justify-center md:mb-0"
        >
          <TextIconComponent />
        </a>
        <nav className="flex flex-wrap items-center mt-2 text-base font-bold lg:w-2/5 md:ml-auto text-primary-purple sm:ml-2 sm:border-secondary-celeste sm:py-2 sm:mt-0 md:text-lg lg:text-xl">
          <a
            className="mr-5 transition-transform duration-200 transform hover:text-primary-pink hover:scale-105"
            href="#characteristic"
          >
            {t("navbar.items.characteristic")}
          </a>
          <a
            className="mr-5 transition-transform duration-200 transform hover:text-primary-pink hover:scale-105"
            href="#personalized"
          >
            {t("navbar.items.personalized")}
          </a>
          <a
            className="mr-5 transition-transform duration-200 transform hover:text-primary-pink hover:scale-105"
            href="#experience"
          >
            {t("navbar.items.experience")}
          </a>
          <a
            className="mr-5 transition-transform duration-200 transform hover:text-primary-pink hover:scale-105"
            href="#contact"
          >
            {t("navbar.items.contact")}
          </a>
          <div className="flex items-center ml-2 ">
            {currentLanguage === "es" ? (
              <button
                className="flex items-center transition-transform duration-200 transform hover:scale-105"
                onClick={() => changeLanguage("en")}
              >
                <img
                  src={FlagUsa}
                  alt="English"
                  className="w-5 h-5 rounded-full"
                />
              </button>
            ) : (
              <button
                className="flex items-center transition-transform duration-200 transform hover:scale-105"
                onClick={() => changeLanguage("es")}
              >
                <img
                  src={FlagSpain}
                  alt="Español"
                  className="w-5 h-5 rounded-full"
                />
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;

