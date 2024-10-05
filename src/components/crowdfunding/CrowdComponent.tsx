import { CrowdfundingData } from "@/types/Crowdfunding";
import { useTranslation } from "react-i18next";
import ButtonBlue from "../ui/buttonBlue";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import i18next from "i18next";

const profileTexts = {
  organizer: "createCrowd",
  donor: "donate",
  approvedDonation: "approvedDonation",
};

const CrowdComponent: React.FC<CrowdfundingData> = (data) => {
  const { t } = useTranslation();
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-5 py-10 font-primary text-secondary-celeste">
      <div className="w-full max-w-md">
        {i18next.exists(`crowd.${data.profile}.title`) ? (
          <h1 className="mb-2 text-4xl font-bold text-primary-pink md:text-5xl lg:text-6xl">
            <ReactMarkdown children={data.title}></ReactMarkdown>
          </h1>
        ) : (
          data.title && (
            <h1 className="mb-2 text-4xl font-bold text-primary-pink md:text-5xl lg:text-6xl">
              <ReactMarkdown children={data.title}></ReactMarkdown>
            </h1>
          )
        )}

        {i18next.exists(`crowd.${data.profile}.subtitle`) ? (
          <h2 className="text-4xl text-center tracking-tight  lg:text-5xl ">
            <ReactMarkdown
              children={t(`crowd.${data.profile}.subtitle`)}
            ></ReactMarkdown>
          </h2>
        ) : (
          data.subtitle && (
            <h2 className="text-3xl text-center tracking-tight md:text-4xl lg:text-5xl ">
              <ReactMarkdown children={data.subtitle}></ReactMarkdown>
            </h2>
          )
        )}

        {i18next.exists(`crowd.${data.profile}.text`) ? (
          <div className="px-10 mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <p className="text-2xl md:text-2xl lg:text-3xl leading-1">
              <ReactMarkdown
                children={t(`crowd.${data.profile}.text`)}
              ></ReactMarkdown>
            </p>
          </div>
        ) : (
          data.text && (
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <p className="text-2xl tracking-tight md:text-2xl lg:text-3xl leading-1">
                <ReactMarkdown children={data.text}></ReactMarkdown>
              </p>
            </div>
          )
        )}
      </div>

      <div className="flex justify-center my-20 w-full max-w-sm">
        {data.image && (
          <img
            className="w-full h-auto rounded-lg"
            src={data.image}
            alt={t("crowd.imageAlt")}
          />
        )}
      </div>

      <div className="flex justify-center space-x-4">
        <Link to="/">
          <ButtonBlue text={t("buttons.homeButton")} isActive={false} />
        </Link>
        <Link to="/crowdfundingForm">
          <ButtonBlue
            text={t(
              `buttons.${
                profileTexts[data.profile as keyof typeof profileTexts]
              }`
            )}
            isActive={true}
          />
        </Link>
      </div>
    </main>
  );
};

export default CrowdComponent;
