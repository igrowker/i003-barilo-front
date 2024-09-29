import { t } from "i18next";
import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);

  return (
    <footer className="py-4 text-slate-100 bg-customBlue font-secondary">
      <div className="flex flex-col items-start pl-3 sm:flex-row sm:pr-3 sm:items-center sm:justify-around">
        <Link to="/home">
          <img
            className="w-auto h-16 md:h-25 md:w-auto"
            src="/isotipo_w.png"
            alt="Logo de la Página"
          />
        </Link>

        <p className="text-base h-9 md:text-lg text-slate-100 sm:mt-0">
          © {year} {t("footer.copyright")}
        </p>

        <span className="inline-flex h-10 text-base sm:mt-0 md:text-xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="ml-0 text-slate-100"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="ml-3 text-slate-100"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="ml-3 text-slate-100"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.tiktok.com/es/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="ml-3 text-slate-100"
          >
            <FaTiktok />
          </a>
          <a
            href="https://x.com/?lang=es"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="ml-3 text-slate-100"
          >
            <FaTwitter />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
