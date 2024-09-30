import { FAQItemProps } from "@/types/HelpCenter";
import { ChevronDown } from "lucide-react";

const FAQItem: React.FC<FAQItemProps> = ({ index, question, answer }) => {
  return (
    <li key={index} className="mb-2">
      <div>
        <details className="w-full">
          <summary className="bg-purple-200/70 rounded-full p-2 flex justify-between items-center cursor-pointer text-customBlue">
            <span className="text-sm font-bold px-3">{question}</span>
            <ChevronDown size={20} className="text-customBlue" />
          </summary>
          <div className="bg-white p-4 text-sm text-customBlue text-balance">
            <p>{answer}</p>
          </div>
        </details>
      </div>
    </li>
  );
};

export default FAQItem;
