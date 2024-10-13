import { ChevronLeft, Search } from "lucide-react";
import HelpCenterContact from "./HelpCenterContact";
import HelpCenterQuestions from "./HelpCenterQuestions";
import ButtonBlue from "../ui/buttonBlue";

import { useTranslation } from "react-i18next";
import { useHelpCenter } from "@/hooks/useHelpCenter";
import { HelpCenterView } from "@/types/HelpCenter";
import { useNavigate } from "react-router-dom";

const HelpCenterContent: React.FC = () => {
  const { t } = useTranslation();
  const { activeView, setActiveViewHelper } = useHelpCenter();
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen">
      <div className="font-bold text-black"></div>
      <header className="bg-customBlue text-white p-4">
        <div>
          <button onClick={() => navigate("/profile")} className="ml-2">
            <ChevronLeft size={24} />
          </button>

          <h1 className="text-2xl font-bold text-center w-full">
            {t("help.title")}
          </h1>
        </div>

        <div className="p-6 flex flex-col items-center w-full">
          <h2 className="text-base mb-4 text-white/65 font-semibold">
            {t("help.subtitle")}
          </h2>
          <div className="bg-white rounded-full flex items-center p-2 mb-4 w-[340px]">
            <Search className="text-customBlue/60 mx-2" size={20} />
            <input
              type="search"
              placeholder={t("help.placeholder")}
              className="w-full bg-transparent text-customBlue outline-none"
              aria-label="Buscar en Centro de Ayuda"
            />
          </div>
        </div>
      </header>
      <nav
        className="max-w-[312px] mx-auto my-4"
        aria-label="Secciones de ayuda"
      >
        <article className="flex flex-row mb-4 justify-center w-full space-x-4">
          <ButtonBlue
            text={t("buttons.questionButton")}
            isActive={activeView === HelpCenterView.FAQ}
            onClick={() => setActiveViewHelper(HelpCenterView.FAQ)}
          />
          <ButtonBlue
            text={t("buttons.contactButton")}
            isActive={activeView === HelpCenterView.Contact}
            onClick={() => setActiveViewHelper(HelpCenterView.Contact)}
          />
        </article>
      </nav>

      {activeView === HelpCenterView.FAQ ? (
        <HelpCenterQuestions />
      ) : (
        <HelpCenterContact />
      )}
    </div>
  );
};

export default HelpCenterContent;
