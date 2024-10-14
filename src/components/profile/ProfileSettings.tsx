"use client";

import {
  IoNotificationsOutline,
  IoKeyOutline,
  IoPersonOutline,
  IoChevronForwardSharp,
} from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
import IconComponent from "../IconComponent";
import { SlArrowLeft } from "react-icons/sl";
import { useTranslation } from "react-i18next";

const link = [
  {
    name: "profile_user.settings.link.name_notification_settings",
    href: "#",
    icon: <IoNotificationsOutline />,
  },
  {
    name: "profile_user.settings.link.name_password_management",
    href: "#",
    icon: <IoKeyOutline />,
  },
  {
    name: "profile_user.settings.link.name_delete_account",
    href: "#",
    icon: <IoPersonOutline />,
  },
  {
    name: "profile_user.settings.link.name_language",
    href: "/language",
    icon: <MdLanguage />,
  },
];

export default function ProfileSettings() {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col items-stretch justify-between w-screen h-screen">
        <div className="flex flex-col w-screen gap-2 mt-5">
          <div className="flex flex-row items-center justify-start w-screen py-2 my-5 text-2xl text-customBlue">
            <a
              className="flex items-center justify-center w-1/3"
              href="./profile"
            >
              <SlArrowLeft />
            </a>
            <h3 className="flex items-center justify-center w-1/3 h-1/3">
              {t("profile_user.settings.title_h3")}
            </h3>
          </div>
          <div className="p-4">
            {link.map((item) => (
              <div
                key={item.name}
                className="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50"
              >
                <div className="flex items-start justify-start text-3xl text-customBlue">
                  {item.icon}
                </div>
                <div className="flex flex-row items-center justify-between w-4/5 text-customBlue">
                  <a
                    href={item.href}
                    className="flex text-xl font-semibold cursor-pointer"
                  >
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
          <IconComponent />
        </div>
      </div>
    </>
  );
}
