import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import TextIconComponent from "./TextIconComponent";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com",
      color: "text-secondary-celeste",
      icon: FaFacebook,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com",
      color: "text-primary-purple",
      icon: FaInstagram,
    },
    {
      name: "XTwitter",
      url: "https://www.x.com",
      color: "text-primary-blue",
      icon: FaXTwitter,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com",
      color: "text-primary-pink",
      icon: FaYoutube,
    },
  ];

  return (
    <footer className="container flex flex-col items-center px-5 py-8 mx-auto sm:flex-row">
      <a href="/" className="flex items-center justify-center md:justify-start">
        <TextIconComponent />
      </a>
      <p className="mt-2 text-xs text-primary-celeste sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-secondary-celeste sm:py-2 sm:mt-0 md:text-sm lg:text-lg">
        © {currentYear}
      </p>
      <p className="mt-2 text-xs text-primary-celeste sm:ml-2 sm:border-secondary-celeste sm:py-2 sm:mt-0 md:text-sm lg:text-lg">
        {t("footer.copyright")}
      </p>
      <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
        {socialLinks.map((link) => {
          const IconComponent = link.icon;
          return (
            <a
              key={link.name}
              href={link.url}
              aria-label={`Enlace a ${link.name}`}
              className={`mx-3 ${link.color} transition-transform duration-300 ease-in-out transform hover:scale-125`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconComponent className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
            </a>
          );
        })}
      </span>
    </footer>
  );
};

export default Footer;
