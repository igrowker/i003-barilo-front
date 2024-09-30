import { ChevronLeft, Search } from "lucide-react";
import FAQList from "./FAQList";
import ButtonBlue from "../ui/buttonBlue";

const HelpCenterContact: React.FC = () => {
  return (
    <div>
      <div className="bg-customBlue text-white p-4 flex flex-col">
        <section>
          <button className="mr-4">
            <ChevronLeft size={24} />
          </button>
          <div className="flex justify-center w-full">
            <h1 className="text-xl font-bold">Centro De Ayuda</h1>
          </div>
        </section>

        <section className="p-6 flex flex-col items-center w-full">
          <h3 className="text-base mb-4 text-white/65 font-semibold">
            ¿Cómo Podemos Ayudarte?
          </h3>
          <div className="bg-white rounded-full flex items-center p-2 mb-4">
            <Search className="text-customBlue/60 mx-2" size={20} />
            <input
              type="search"
              placeholder="Buscar..."
              className="w-full bg-transparent text-customBlue outline-none"
            />
          </div>
        </section>
      </div>

      <section className="flex flex-col items-center  mt-4 px-6">
        <div className="max-w-[500px]">
          <article className="flex flex-row mb-4 justify-center space-x-4">
            <ButtonBlue text="Preguntas" isActive={true} className="" />
            <ButtonBlue text="Contáctenos" isActive={false} className="" />
          </article>

          <article className="flex mb-4 justify-center space-x-2">
            <ButtonBlue
              text="Tema popular"
              isActive={true}
              className="text-base h-7 py-1 text-nowrap"
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
        </div>
        <div className="flex justify-center w-full">
          <FAQList />
        </div>
      </section>
    </div>
  );
};

export default HelpCenterContact;
