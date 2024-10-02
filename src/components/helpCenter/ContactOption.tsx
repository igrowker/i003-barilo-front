import { ContactProps } from "@/types/HelpCenter";
import { ChevronRight } from "lucide-react";

const ContactOption: React.FC<ContactProps> = ({ icon, url, text }) => (
  <li>
    <a
      href={url}
      target="_blank"
      className="flex items-center justify-between w-full p-4 bg-white"
    >
      <div className="flex items-center">
        <span className="bg-cyan-500/15 p-2 rounded-full">{icon}</span>
        <span className="ml-3 text-lg font-medium">{text}</span>
      </div>
      <ChevronRight className="text-customBlue flex-shrink-0" />
    </a>
  </li>
);

export default ContactOption;
