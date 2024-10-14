import React from "react";
import { useNavigate } from "react-router-dom";
import { StepOneFormData } from "../../types/step/StepOneFormData";
import { StepTwoFormData } from "../../types/step/StepTwoFormData";
import { StepThreeFormData } from "../../types/step/StepThreeFormData";
import { StepFourFormData } from "../../types/step/StepFourFormData";
import { useTranslation } from "react-i18next";
import ButtonBlue from "../ui/buttonBlue";

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
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleProceedToPayment = () => {
    navigate("/payment", {
      state: { stepOneData, stepTwoData, stepThreeData, stepFourData },
    });
  };

  return (
    <div className="p-4">
      <h3 className="mb-4 text-xl font-semibold text-center text-primary-celeste">
        {t("stepFive.title")}
      </h3>
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
              {stepTwoData?.destination} <br />
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">
              <strong>{t("stepThree.confirmation")}:</strong>{" "}
              {stepThreeData?.confirmation || t('stepFive.not_specified')}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">
              <strong>{t("stepFour.confirmation")}:</strong>{" "}
              {stepFourData?.confirmation || t('stepFive.not_specified')}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-between mt-4 gap-x-4">
        <ButtonBlue
          text={t('stepFive.go_pay')}
          onClick={handleProceedToPayment}
          isActive={true}
        />
      </div>
    </div>
  );
};

export default StepFive;
