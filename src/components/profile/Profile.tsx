'use client'

import { 
  IoPersonOutline,
  IoHeartOutline,
  IoLockClosedOutline,
  IoSettingsOutline,
  IoHelp,
  IoWalletOutline,
  IoLogOutOutline,
  IoChevronForwardSharp
} from "react-icons/io5";
import IconComponent from "../IconComponent";
import { SlArrowLeft } from "react-icons/sl";

const link = [
  { name: 'Perfil', href: './editProfile', icon: <IoPersonOutline /> },
  { name: 'Favoritos', href: '#', icon: <IoHeartOutline /> },
  { name: 'Crowfounding', href: '#', icon: <IoWalletOutline /> },
  { name: 'Políticas de Privasidad', href: '#', icon: <IoLockClosedOutline /> },
  { name: 'Ajustes', href: './profileSettings', icon: <IoSettingsOutline /> },
  { name: 'Ayuda', href: '#', icon: <IoHelp /> },
]

export default function Profile() {

  return (
    <>
      <div className="h-screen w-screen flex flex-col items-stretch justify-between">
      <div className="flex flex-col mt-5 w-screen gap-2">
          <div className="flex flex-row w-screen py-2 text-2xl text-customBlue items-center justify-start">
            <SlArrowLeft className="w-1/3 flex items-center justify-start" />
            <h3 className="w-1/3 flex items-center justify-center">Perfil</h3>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <img src="../../../public/Group 62.png" alt="foto perfil" />
            <h4 className="font-primary font-bold text-2xl">Nombre Usuario</h4>
          </div>
        </div>
        <div>
          <div className="p-4">
            {link.map((item) => (
              <div
                key={item.name}
                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
              >
                <div className="rounded-full text-customBlue  text-xl p-2 bg-sky-300">{item.icon}</div>
                <div className="flex flex-row w-4/5 items-center justify-between">
                  <a href={item.href} className="flex font-semibold  text-xl cursor-pointer text-gray-900">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <div className="flex text-xl">
                  <IoChevronForwardSharp />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-row items-center  hover:bg-gray-50 p-4 ml-5 gap-x-6 font-semibold text-gray-900">
          <div className="rounded-full text-customBlue text-xl p-2 bg-sky-300">
          <IoLogOutOutline />
          </div>
          <button className="text-xl leading-6">Cerrar Sesión</button>
          </div>
        </div>
        <div className="flex items-center justify-center pb-5 ">
          <IconComponent  />
        </div>
      </div>
    </>
  )
}
