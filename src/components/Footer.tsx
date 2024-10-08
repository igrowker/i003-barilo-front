import TextIconComponent from "./TextIconComponent";
import { useTranslation } from "react-i18next";
import SocialNetworks from "./SocialNetworks";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="container flex flex-col items-center px-5 py-8 mx-auto bg-white sm:flex-row">
      <a href="/" className="flex items-center justify-center md:justify-start">
        <TextIconComponent />
      </a>
      <p className="mt-2 text-xs text-primary-celeste sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-secondary-celeste sm:py-2 sm:mt-0 md:text-sm lg:text-lg">
        © {currentYear}
      </p>
      <p className="mt-2 text-xs text-primary-celeste sm:ml-2 sm:border-secondary-celeste sm:py-2 sm:mt-0 md:text-sm lg:text-lg">
        {t("footer.copyright")}
      </p>
      <SocialNetworks className={"flex flex-row justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start"}/>
    </footer>
  );
};

export default Footer;
