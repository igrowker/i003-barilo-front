import ButtonBlue from "../ui/buttonBlue";
import FAQList from "./FAQList";

const HelpCenterQuestions: React.FC = () => {
  return (
    <main className="flex flex-col items-center mt-4 px-6">
      <div className="max-w-[500px]">
        <section aria-label="Filtros de temas de ayuda">
          <article className="flex mb-4 justify-center space-x-2">
            <ButtonBlue
              text="Tema popular"
              isActive={true}
              className="text-base h-7 py-1"
            />
            <ButtonBlue
              text="General"
              isActive={false}
              className="text-base h-7 py-1"
            />
            <ButtonBlue
              text="Servicios"
              isActive={false}
              className="text-base h-7 py-1"
            />
          </article>
        </section>
      </div>

      <section
        aria-label="Preguntas frecuentes"
        className="flex justify-center w-full"
      >
        <FAQList />
      </section>
    </main>
  );
};

export default HelpCenterQuestions;
