import { useTranslation } from "react-i18next";
import ButtonBlue from "../ui/buttonBlue";
import FAQList from "./FAQList";
import { useFilteredQuestions } from "@/hooks/useHelpCenter";

const HelpCenterQuestions: React.FC = () => {
  const { t } = useTranslation();
  const { questions, activeTheme, setFilteredQuestionsByTheme } =
    useFilteredQuestions();

  return (
    <main className="flex flex-col items-center mt-4 px-6">
      <div className="max-w-[500px]">
        <section aria-label="Filtros de temas de ayuda">
          <article className="flex mb-4 justify-center space-x-2">
            <ButtonBlue
              text={t("buttons.helpButtons.theme")}
              isActive={activeTheme === "popular_topic"}
              onClick={() => setFilteredQuestionsByTheme("popular_topic")}
              className="text-base h-7 py-1"
            />
            <ButtonBlue
              text={t("buttons.helpButtons.general")}
              isActive={activeTheme === "general_topic"}
              onClick={() => setFilteredQuestionsByTheme("general_topic")}
              className="text-base h-7 py-1"
            />
            <ButtonBlue
              text={t("buttons.helpButtons.services")}
              isActive={activeTheme === "service_topic"}
              onClick={() => setFilteredQuestionsByTheme("service_topic")}
              className="text-base h-7 py-1"
            />
          </article>
        </section>
      </div>

      <section
        aria-label="Preguntas frecuentes"
        className="flex justify-center w-full"
      >
        <FAQList faqs={questions} />
      </section>
    </main>
  );
};

export default HelpCenterQuestions;
