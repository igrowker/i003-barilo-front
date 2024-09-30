import Error404 from "../assets/images/Error.svg";
import "tailwindcss/tailwind.css";
import { Link } from "react-router-dom";
import ButtonBlue from "./ui/buttonBlue";
import { useTranslation } from "react-i18next";

const ErrorComponent = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-5 py-10 font-primary text-secondary-celeste">
        <div className="text-center">
          <h1 className="mb-2 text-4xl font-bold text-primary-pink md:text-5xl lg:text-6xl">
            {t("error.title")}
          </h1>
          <h2 className="text-3xl tracking-tight md:text-4xl lg:text-5xl ">
            {t("error.subtitle")}
          </h2>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <p className="text-2xl tracking-tight text-center md:text-2xl lg:text-3xl leading-1">
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
          <p className="text-2xl tracking-tight text-center md:text-2xl lg:text-3xl leading-1 text-primary-purple">
            {t("error.help")}
          </p>
        </div>
        <div className="flex justify-center mt-4">
          <Link to="/">
            <ButtonBlue text={t("buttons.homeButton")} isActive={true} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorComponent;
