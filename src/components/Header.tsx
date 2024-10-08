import { CiSettings } from "react-icons/ci"
import { FaRegBell } from "react-icons/fa"
import ProfilePicture from '@/assets/images/excursionCard.webp'
import { Link } from "react-router-dom"
import { useUserProfile } from "@/hooks/useUserProfile"


const Header = () => {
    const { profile } = useUserProfile();
    
  return (
    <div className="flex justify-between px-8 pt-4 pb-3">
        <div className="flex items-center gap-1">
            <Link to="/profile">
                <img src={ProfilePicture} alt="profile picture" className="w-12 h-12 rounded-full cursor-pointer"/>
            </Link>
            {profile ? (

                <div className="leading-tight">
                <p className="text-[--secondary-celeste]">Hola, bienvenido de nuevo</p>
                <p className="text-[--primary-celeste] font-bold">{profile.name}</p>
            </div>
            ) : (
                <p></p>
            )}
        </div>
        <div className="flex items-center gap-1">
            <Link to="/settings">
                <CiSettings size={35} className="bg-[--inactive-button-bg] rounded-full p-1 text-[--primary-celeste] "/>
            </Link>
            <FaRegBell size={32} className="bg-[--inactive-button-bg] rounded-full p-1.5 text-[--primary-celeste]"/>
        </div>
    </div>
  )
}

export default Header
