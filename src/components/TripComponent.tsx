import { useTranslation } from "react-i18next";
import BotonBlue from "@/components/ui/buttonBlue";
import { useNavigate } from "react-router-dom";

const TripComponent: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-center mt-12 mb-6 overflow-hidden text-justify text-secondary-celeste font-primary">
      <div className="container flex flex-col items-center px-5 pb-12 mx-auto">
        <div className="w-full">
          <h1 className="mb-2 text-3xl font-bold text-secondary-blue md:text-4xl lg:text-5xl">
            ¡Elige tu Camino!
          </h1>
          <div className="text-xl md:text-2xl lg:text-3xl">
            <p className="mt-4 leading-tight">
              Estás a un paso de vivir una experiencia inolvidable. Tienes dos
              opciones: puedes crear tu propio grupo de viaje y liderar la
              aventura, o unirte a un grupo existente para compartir momentos
              increíbles con otros exploradores.
            </p>
            <p className="mt-4 leading-tight">
              Si decides crear un grupo, tendrás la oportunidad de invitar a tus
              amigos y organizar cada detalle. Si ya tienes un código de
              invitación, ingrésalo para unirte a un grupo y comenzar a
              planificar juntos.
            </p>
            <p className="mt-4 leading-tight">
              ¡Toma la decisión que mejor se adapte a ti y prepárate para
              explorar nuevas posibilidades!
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full mt-10 bg-opacity-50 rounded-md">
          <div className="relative mb-4">
            <div className="flex flex-col items-center md:flex-row gap-x-4 gap-y-4">
              <BotonBlue
                text="Crear grupo"
                isActive={true}
                onClick={() => navigate("/create-trip")}
              />
              <BotonBlue
                text="Unirte a un grupo"
                isActive={true}
                onClick={() => navigate("/access-group")}
              />
              <BotonBlue
                text={t("buttons.cancelButton")}
                isActive={false}
                onClick={() => navigate("/home")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripComponent;
