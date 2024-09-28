import { Link } from "react-router-dom"
import { t } from "i18next";

const links = [
  { id: 2, nameKey: 'header.link.home', href: '/home', current: true },
  { id: 3, nameKey: 'header.link.login', href:'/login', current: false },
  { id: 4, nameKey: 'header.link.register', href: '/register', current: false },
  { id: 5, nameKey: 'header.link.dashboard', href: '/dashboard', current: false },
]

const NavBar = () => {
  return (
        <div className=" text-white flex flex-col items-center justify-center px-2 pb-3 pt-5 sm:flex sm:flex-row sm:gap-7 sm:text-lg">
          {links.map((item) => (
            <Link className="mt-3 sm:mt-0" key={item.id} to={item.href}>{t(item.nameKey)}</Link>
          ))}
        </div>
  )
}

export default NavBar