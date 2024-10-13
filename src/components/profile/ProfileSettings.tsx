'use client'

import { 
  IoNotificationsOutline ,
  IoKeyOutline ,
  IoPersonOutline ,
  IoChevronForwardSharp
} from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
import IconComponent from "../IconComponent";
import { SlArrowLeft } from "react-icons/sl";
import { useTranslation } from "react-i18next";

const link = [
  { name: 'profile_user.settings.link.name_notification_settings', href: './editProfile', icon: <IoNotificationsOutline  /> },
  { name: 'profile_user.settings.link.name_password_management', href: '#', icon: <IoKeyOutline  /> },
  { name: 'profile_user.settings.link.name_delete_account', href: '#', icon: <IoPersonOutline  /> },
  { name: 'profile_user.settings.link.name_language', href: '/language', icon: <MdLanguage /> },
]

export default function ProfileSettings() {
  const { t } = useTranslation();

  return (
    <>
      <div className="h-screen w-screen flex flex-col items-stretch justify-between">
      <div className="flex flex-col mt-5 w-screen gap-2">
          <div className="flex flex-row w-screen py-2 my-5 text-2xl text-customBlue items-center justify-start">
          <a className="w-1/3 flex items-center justify-center" href="./profile">
            <SlArrowLeft />
          </a>
            <h3 className="h-1/3 w-1/3 flex items-center justify-center">{t('profile_user.settings.title_h3')}</h3>
          </div>
          <div className="p-4">
            {link.map((item) => (
              <div
                key={item.name}
                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
              >
                <div className="flex items-start justify-start text-customBlue text-3xl">{item.icon}</div>
                <div className="flex flex-row text-customBlue w-4/5 items-center justify-between">
                  <a href={item.href} className="flex text-xl font-semibold cursor-pointer">
                    {t(item.name)}
                    <span className="absolute inset-0" />
                  </a>
                  <div className="flex text-xl">
                  <IoChevronForwardSharp className="flex text-2x1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center pb-5 ">
          <IconComponent  />
        </div>
      </div>
    </>
  )
}
