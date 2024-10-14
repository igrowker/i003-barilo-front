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
import { useTranslation } from "react-i18next";
import ProfilePicture from "@/assets/images/excursionCard.webp";
import { useUserProfile } from "@/hooks/useUserProfile";

export default function Profile() {
  const { t } = useTranslation();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { profile } = useUserProfile();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const link = [
    {
      name: "profile_user.component_profile.link.name_profile",
      href: "./editProfile",
      icon: <IoPersonOutline />,
    },
    {
      name: "profile_user.component_profile.link.name_favorites",
      href: "#",
      icon: <IoHeartOutline />,
    },
    {
      name: "profile_user.component_profile.link.name_crowfounding",
      href: "#",
      icon: <IoWalletOutline />,
    },
    {
      name: "profile_user.component_profile.link.name_privacy_policies",
      href: "#",
      icon: <IoLockClosedOutline />,
    },
    {
      name: "profile_user.component_profile.link.name_settings",
      href: "./profileSettings",
      icon: <IoSettingsOutline />,
    },
    {
      name: "profile_user.component_profile.link.name_help",
      href: "/help-center",
      icon: <IoHelp />,
    },
  ];

  return (
    <>
      <div className="flex flex-col items-stretch justify-between w-screen h-screen">
        <div className="flex flex-col w-screen gap-2 mt-5">
          <div className="flex flex-row items-center justify-start w-screen py-2 my-5 text-2xl text-customBlue">
            <a className="flex items-center justify-center w-1/3" href="./home">
              <SlArrowLeft />
            </a>
            <h3 className="flex items-center justify-center w-1/3 h-1/3">
              {t("profile_user.component_profile.title_h3")}
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <img
              src={ProfilePicture}
              alt="profile picture"
              className="w-32 h-32 rounded-full cursor-pointer"
            />
            <h4 className="text-2xl font-bold font-primary text-customBlue">
              {profile ? profile.name : t("loading")}
            </h4>
          </div>
        </div>
        <div>
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
          <div className="flex flex-row items-center p-4 ml-4 font-semibold text-customBlue hover:bg-gray-50 gap-x-6">
            <div className="flex items-start justify-start text-3xl text-customBlue">
              <IoLogOutOutline className="flex text-2x1" />
            </div>
            <button
              className="flex text-xl font-semibold cursor-pointer"
              onClick={handleLogout}
            >
              {t("profile_user.component_profile.button_sign_ut")}
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
