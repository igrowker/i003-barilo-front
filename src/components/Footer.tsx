import { t } from "i18next";
import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {

  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear); // Actualiza el estado con el año actual
  }, []);

  return (
    <footer className="py-4  text-slate-100 bg-customBlue font-secondary">
      <div className=" flex flex-col pl-3 items-start sm:flex-row sm:pr-3 sm:items-center sm:justify-around">
        <Link to='/home'>
        <img className="h-16 w-auto md:h-25 md:w-auto" src="/isotipo_w.png" alt="Logo de la Página" />
        </Link>
        
        <p className="h-9 text-base md:text-lg text-slate-100 sm:mt-0">© {year} {t('footer.copyright')}</p>

        <span className="h-10 inline-flex text-base sm:mt-0 md:text-xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer nofollow" className="text-slate-100 ml-0">
          <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-slate-100 ml-3">
          <FaInstagram />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-slate-100 ml-3">
          <FaYoutube />
          </a>
          <a href="https://www.tiktok.com/es/" target="_blank" rel="noopener noreferrer nofollow" className="text-slate-100 ml-3">
          <FaTiktok />
          </a>
          <a href="https://x.com/?lang=es" target="_blank" rel="noopener noreferrer nofollow" className="text-slate-100 ml-3">
          <FaTwitter />
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer