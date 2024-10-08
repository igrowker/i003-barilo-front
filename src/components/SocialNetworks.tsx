import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialNetworks = ({ className }) => {

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com",
      color: "text-secondary-celeste",
      icon: FaFacebook,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com",
      color: "text-primary-purple",
      icon: FaInstagram,
    },
    {
      name: "XTwitter",
      url: "https://www.x.com",
      color: "text-primary-blue",
      icon: FaXTwitter,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com",
      color: "text-primary-pink",
      icon: FaYoutube,
    },
  ];
  return (
    <span className={`inline-flex ${className}`}>
        {socialLinks.map((link) => {
          const IconComponent = link.icon;
          return (
            <a
              key={link.name}
              href={link.url}
              aria-label={`Enlace a ${link.name}`}
              className={`mx-3 ${link.color} transition-transform duration-300 ease-in-out transform hover:scale-125`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconComponent className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
            </a>
          );
        })}
      </span>
  )
}

export default SocialNetworks