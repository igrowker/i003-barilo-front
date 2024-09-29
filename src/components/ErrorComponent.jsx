import Error404 from "../assets/images/Error.svg";
import "tailwindcss/tailwind.css";
import { Link } from "react-router-dom";
import ButtonBlue from "./ui/buttonBlue";
import { useTranslation } from "react-i18next";

const ErrorComponent = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen min-h-full font-primary text-secondary-blue">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight ">
            {t("error.title")}
          </h1>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <p className="text-2xl tracking-tight text-center leading-1">
              {t("error.message")}
            </p>
          </div>
        </div>

        <div className="flex justify-center w-full max-w-md">
          <img
            className="w-full h-auto rounded-lg"
            src={Error404}
            alt="Error 404 - Página no encontrada"
          />
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <p className="text-2xl tracking-tight text-center leading-1">
            {t("error.help")}
          </p>
        </div>

        <div className="flex justify-center mt-4">
          <Link to="/">
            <ButtonBlue text={t("error.button")} isActive={true} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorComponent;
