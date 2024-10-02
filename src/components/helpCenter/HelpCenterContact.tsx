import { ContactProps } from "@/types/HelpCenter";
import { Headphones, Globe2 } from "lucide-react";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitterSquare,
  FaWhatsapp,
} from "react-icons/fa";
import ContactOption from "./ContactOption";

const contactItem: ContactProps[] = [
  {
    icon: <Headphones size={25} />,
    url: "https://barilo.vercel.app/",
    text: "Servicio Al Cliente",
  },
  {
    icon: <Globe2 size={25} />,
    url: "https://barilo.vercel.app/",
    text: "Sitio Web",
  },
  {
    icon: <FaWhatsapp size={25} />,
    url: "https://web.whatsapp.com/",
    text: "Whatsapp",
  },
  {
    icon: <FaFacebook size={25} />,
    url: "https://www.facebook.com/",
    text: "Facebook",
  },
  {
    icon: <FaInstagram size={25} />,
    url: "https://www.instagram.com/",
    text: "Instagram",
  },
  {
    icon: <FaTwitterSquare size={25} />,
    url: "https://x.com/",
    text: "Twitter",
  },
];

const HelpCenterContact: React.FC = () => {
  return (
    <main className="p-4 text-customBlue w-full max-w-[550px] m-auto">
      <ul>
        {contactItem.map((con, index) => (
          <ContactOption
            key={index}
            icon={con.icon}
            url={con.url}
            text={con.text}
          ></ContactOption>
        ))} 
      </ul>
    </main>
  );
};

export default HelpCenterContact;
