import { useState } from "react";
import { useTranslation } from "react-i18next";
import BotonBlue from "@/components/ui/buttonBlue";
import IconComponent from "@/components/IconComponent";
import ModalComponent from "@/components/ModalComponent";
import { useNavigate } from "react-router-dom";

const AccessSection: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const showErrorModal = () => {
    setModalContent({
      title: t("modals.error.title"),
      message: t("modals.error.message"),
      buttons: [
        {
          label: t("buttons.backButton"),
          action: () => setIsModalVisible(false),
          isPrimary: true,
        },
        {
          label: t("buttons.cancelButton"),
          action: () => {
            setIsModalVisible(false);
            navigate("/home");
          },
          isPrimary: false,
        },
      ],
    });
    setIsModalVisible(true);
  };

  const showSuccessModal = () => {
    setModalContent({
      title: t("modals.confirm.title"),
      message: t("modals.confirm.message"),
      buttons: [
        {
          label: t("buttons.acceptButton"),
          action: () => setIsModalVisible(false),
          isPrimary: true,
        },
      ],
    });
    setIsModalVisible(true);
  };

  return (
    <section className="flex flex-col items-center justify-center mt-16 text-justify overflfirst-letter:ow-hidden text-secondary-celeste font-primary">
      <div className="container flex flex-wrap items-center px-5 pb-12 mx-auto">
        <div className="pr-0 lg:w-3/5 lg:pr-0">
          <h1 className="mb-2 text-3xl font-bold text-secondary-blue md:text-4xl lg:text-5xl">
            {t("accessSection.title")}
          </h1>
          <div className="text-xl md:text-2xl lg:text-3xl">
            <p className="mt-4 leading-tight">
              {t("accessSection.description1")}
            </p>
            <p className="mt-4 leading-tight">
              {t("accessSection.description2")}
            </p>
            <p className="mt-4 leading-tight">
              {t("accessSection.description3")}
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full mt-10 bg-opacity-50 rounded-md lg:w-2/6 md:ml-auto md:mt-10 lg:mt-0">
          <div className="relative mb-4">
            <label
              htmlFor="invite-code"
              className="block mb-2 text-lg font-medium text-secondary-celeste"
            >
              <h2 className="mb-5 text-2xl font-semibold md:text-3xl lg:text-4xl text-primary-pink">
                {t("accessSection.inputLabel")}
              </h2>
            </label>
            <input
              type="text"
              id="invite-code"
              name="invite-code"
              className="w-full px-3 py-1 text-xl leading-8 transition-colors duration-200 ease-in-out outline-none text-primary-celeste rounded-xl focus:bg-transparent focus:ring-2 focus:ring-primary-blue focus:border-primary-celeste"
            />
            <div className="flex items-center mt-8 gap-x-4">
              <BotonBlue
                text={t("buttons.acceptButton")}
                isActive={true}
                onClick={showErrorModal}
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
      <IconComponent />
      {isModalVisible && (
        <ModalComponent
          title={modalContent.title}
          message={modalContent.message}
          buttons={modalContent.buttons}
          onClose={() => setIsModalVisible(false)}
        />
      )}
    </section>
  );
};

export default AccessSection;
