import { CiSettings } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import ProfilePicture from "@/assets/images/excursionCard.webp";
import { Link } from "react-router-dom";
import { useUserProfile } from "@/hooks/useUserProfile";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import PaymentHistoryComponent from "./PaymentHistoryComponent";

const Header = () => {
  const { t } = useTranslation();
  const { profile } = useUserProfile();
  const [isNotificationOpen, setNotificationOpen] = useState(false);

  const handleBellClick = () => {
    setNotificationOpen(!isNotificationOpen);
    console.log(isNotificationOpen)
  };

  return (
    <div className="sticky top-0 left-0 z-10 w-full bg-white shadow-md">
      <div className="flex justify-between px-8 pt-4 pb-3">
        <div className="flex items-center gap-1">
          <Link to="/profile">
            <img
              src={ProfilePicture}
              alt="profile picture"
              className="w-12 h-12 rounded-full cursor-pointer"
            />
          </Link>
          <div className="leading-tight">
            <p className="text-[--secondary-celeste]">{t("home.header")}</p>
            <p className="text-[--primary-celeste] font-bold">
              {profile ? profile.name : t("loading")}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Link to="/profileSettings">
            <CiSettings
              size={35}
              className="bg-[--inactive-button-bg] rounded-full p-1 text-[--primary-celeste]"
            />
          </Link>
          <FaRegBell
            onClick={handleBellClick}
            size={32}
            className="bg-[--inactive-button-bg] rounded-full p-1.5 text-[--primary-celeste]"
          />
          {isNotificationOpen && (
            <PaymentHistoryComponent/> // Renderiza el componente si el estado es true
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;


