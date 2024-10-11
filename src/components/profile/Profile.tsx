"use client";

import {
  IoPersonOutline,
  IoHeartOutline,
  IoLockClosedOutline,
  IoSettingsOutline,
  IoHelp,
  IoWalletOutline,
  IoLogOutOutline,
  IoChevronForwardSharp,
} from "react-icons/io5";
import IconComponent from "../IconComponent";
import { SlArrowLeft } from "react-icons/sl";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const link = [
  { name: "Perfil", href: "./editProfile", icon: <IoPersonOutline /> },
  { name: "Favoritos", href: "#", icon: <IoHeartOutline /> },
  { name: "Crowfounding", href: "#", icon: <IoWalletOutline /> },
  { name: "Políticas de Privasidad", href: "#", icon: <IoLockClosedOutline /> },
  { name: "Ajustes", href: "./profileSettings", icon: <IoSettingsOutline /> },
  { name: "Ayuda", href: "#", icon: <IoHelp /> },
];

export default function Profile() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <>
      <div className="flex flex-col items-stretch justify-between w-screen h-screen">
        <div className="flex flex-col w-screen gap-2 mt-5">
          <div className="flex flex-row items-center justify-start w-screen py-2 text-2xl text-customBlue">
            <SlArrowLeft className="flex items-center justify-start w-1/3" onClick={()=>navigate('/home')}/>
            <h3 className="flex items-center justify-center w-1/3">Perfil</h3>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <img src="../../../public/Group 62.png" alt="foto perfil" />
            <h4 className="text-2xl font-bold font-primary">Nombre Usuario</h4>
          </div>
        </div>
        <div>
          <div className="p-4">
            {link.map((item) => (
              <div
                key={item.name}
                className="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50"
              >
                <div className="p-2 text-xl rounded-full text-customBlue bg-sky-300">
                  {item.icon}
                </div>
                <div className="flex flex-row items-center justify-between w-4/5">
                  <a
                    href={item.href}
                    className="flex text-xl font-semibold text-gray-900 cursor-pointer"
                  >
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
          <div className="flex flex-row items-center p-4 ml-5 font-semibold text-gray-900 hover:bg-gray-50 gap-x-6">
            <div className="p-2 text-xl rounded-full text-customBlue bg-sky-300">
              <IoLogOutOutline />
            </div>
            <button className="text-xl leading-6" onClick={handleLogout}>
              Cerrar Sesión
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center pb-5 ">
          <IconComponent />
        </div>
      </div>
    </>
  );
}
