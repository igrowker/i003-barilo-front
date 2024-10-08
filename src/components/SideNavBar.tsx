import  { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";
import FlagSpain from "../assets/Flags/es.svg";
import FlagUsa from "../assets/Flags/us.svg";

// icons
import { MdMenuOpen } from "react-icons/md";
import { TbSettingsSearch } from "react-icons/tb";

import { LuPlane } from "react-icons/lu";
import { GrContact } from "react-icons/gr";
import { IoEarthSharp } from "react-icons/io5";
import TextIconComponent from './TextIconComponent';
import Footer from './Footer';
import SocialNetworks from './SocialNetworks';

const menuItems = [
  {
    icons: <TbSettingsSearch size={30} />,
    label: 'navbar.items.characteristic',
    href: "#characteristic"
  },
  {
    icons: <LuPlane size={30} />,
    label: 'navbar.items.personalized',
    href: '#personalized'
  },
  {
    icons: <IoEarthSharp size={30} />,
    label: 'navbar.items.experience',
    href: '#experience'
  },
  {
    icons: <GrContact size={30} />,
    label: 'navbar.items.contact',
    href: '#contact'
  }
]

export default function SideNavBar() {
  const { i18n, t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
    document.querySelector(`#${lng}`).scrollIntoView({ behavior: "smooth" });
  };


  const [open, setOpen] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={`shadow-md h-screen  bg-white {/*bg-opacity-0 backdrop-blur-md*/} z-50 flex flex-col items-center justify-between fixed top-0 duration-100 text-primary-pink ${open ? 'w-60' : 'w-14'} md:container md:relative md:flex-row md:h-14 md:w-auto md:px-5 py-8 md:mx-auto md:shadow-none`}>

      {/* Header */}
      <div className=' h-20 flex flex-row items-center justify-between md:p-0 md:items-start md:h-14 '>
        <div className={`${!open && 'hidden'} h-16 w-3/5 md:flex md:items-center md:pl-5`}>
          <TextIconComponent />
        </div>
        <div className='h-16 w-8'><MdMenuOpen size={34} className={` duration-500 cursor-pointer ${!open && ' rotate-180 '} md:hidden`} onClick={() => setOpen(!open)} /></div>
      </div>

      {/* Body */}

      <ul className={`${!open && 'items-center'} ${open && ' w-11/12 md:w-auto'} flex flex-col h-2/4 sm:flex-row sm:items-center md:h-auto`}>
        {
          menuItems.map((item, index) => {
            return (
              <li key={index} className='flex items-center p-2 my-2 hover:bg-primary-purple rounded-md duration-300 cursor-pointer gap-2 relative group md:hover:bg-white md:pr-10'>
                <a href={item.href} className={`${open && 'gap-x-3'} flex items-center `}>
                  <div className='flex items-center justify-center md:hidden'>
                    {item.icons}
                  </div>
                  <div className='hidden md:flex md:w-10/12 tracking-wide'>
                    {t(item.label)}
                  </div>
                  <p className={`${!open && 'w-0 translate-x-24'}  text-lg font-bold tracking-wider h-2/3 duration-500 overflow-hidden md:overflow-visible md:translate-x-0 md:hidden`}>{t(item.label)}</p>
                  <p className={`${open && 'hidden'} absolute left-32 shadow-md rounded-md
                  w-0 p-0 text-primary-pink bg-primary-purple duration-300 overflow-hidden
                  md:hidden
                `}>{t(item.label)}</p>
                </a>
              </li>
            )
          })
        }
        <div className="text-lg flex font-bold tracking-wider items-center ml-2 md:pr-10">
          {currentLanguage === "es" ? (
            <button
              className={`${open && 'gap-x-2'} flex items-center transition-transform duration-200 transform hover:scale-105`}
              onClick={() => changeLanguage("en")}
            >
              <img
                src={FlagUsa}
                alt="English"
                className="mt-3 w-7 h-7 rounded-full md:mt-0"
              />
              <p className={`${!open && 'w-0 translate-x-24'} ml-2 mt-3 h-2/3 duration-500 overflow-hidden md:overflow-visible md:translate-x-0 md:hidden`}>Language</p>
              <p className={`${open && 'hidden'} mt-3 absolute left-32 shadow-md rounded-md
                  w-0 p-0 text-primary-pink bg-primary-purple duration-100 overflow-hidden
                  group-hover:w-fit group-hover:p-2 group-hover:left-16 md:inline hidden
                `}>Language</p>
            </button>
          ) : (
            <button
            className={`${open && 'gap-x-2'} flex items-center transition-transform duration-200 transform hover:scale-105`}
              onClick={() => changeLanguage("es")}
            >
              <img
                src={FlagSpain}
                alt="Español"
                className="mt-3 w-7 h-7 rounded-full md:mt-0"
              />
              <p className={`${!open && 'w-0 translate-x-24'} ml-2 mt-3 h-2/3 duration-500 overflow-hidden md:overflow-visible md:translate-x-0 md:hidden`}>Idioma</p>
              <p className={`${open && 'hidden'} mt-3 absolute left-32 shadow-md rounded-md
                  w-0 p-0 text-primary-pink bg-primary-purple duration-100 overflow-hidden
                  group-hover:w-fit group-hover:p-2 group-hover:left-16 md:inline hidden
                `}>Idioma</p>
            </button>
          )}
        </div>
      </ul>
      {/* footer */}
      <div className={`${open && 'hidden'} sm:hidden`} >
        <SocialNetworks className={"flex flex-col gap-4 mb-4"} />
      </div>
      <div className={`${!open && 'hidden'} md:hidden md:h-0`}>
        <Footer />
      </div>
    </nav>
  )
}
