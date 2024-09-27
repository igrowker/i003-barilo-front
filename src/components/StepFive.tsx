import React from "react";
import { StepOneFormData } from "./StepOne";
import { StepTwoFormData } from "./StepTwo";
import { StepThreeFormData } from "./StepThree";
import { StepFourFormData } from "./StepFour";
import { useTranslation } from "react-i18next"; // Suponiendo que estás usando i18next

interface StepFiveProps {
  stepOneData: StepOneFormData | null;
  stepTwoData: StepTwoFormData | null;
  stepThreeData: StepThreeFormData | null;
  stepFourData: StepFourFormData | null;
}

const StepFive: React.FC<StepFiveProps> = ({
  stepOneData,
  stepTwoData,
  stepThreeData,
  stepFourData,
}) => {
  const { t } = useTranslation(); // Hook de i18next para traducciones

  const formatDate = (dateString: string | undefined): string => {
    if (!dateString) return "No especificado";

    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <div className="p-4">
      <h3 className="mb-4 text-xl font-semibold text-center text-primary-celeste">{t("stepFive.title")}</h3>{" "}
      <table className="min-w-full border-gray-300 rounded-lg shadow-md text-primary-celeste border-xl bg-secondary-purple">
        <tbody>
          <tr>
            <td className="px-4 py-2 border-b">
              <strong>{t("stepOne.groupName")}:</strong>{" "}
              {stepOneData?.groupName} <br />
              <strong>{t("stepOne.numberOfPeople")}:</strong>{" "}
              {stepOneData?.numberOfPeople}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">
              <strong>{t("stepTwo.origin")}:</strong> {stepTwoData?.origin}{" "}
              <br />
              <strong>{t("stepTwo.destination")}:</strong>{" "}
              {stepTwoData?.destination} <br />
              <strong>{t("stepTwo.departureDate")}:</strong>{" "}
              {formatDate(stepTwoData?.departureDate)} <br />
              <strong>{t("stepTwo.returnDate")}:</strong>{" "}
              {formatDate(stepTwoData?.returnDate)}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">
              <strong>{t("stepThree.confirmation")}:</strong>{" "}
              {stepThreeData?.confirmation || "No especificado"}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">
              <strong>{t("stepFour.confirmation")}:</strong>{" "}
              {stepFourData?.confirmation || "No especificado"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StepFive;
