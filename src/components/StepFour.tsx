import React, { useState } from "react";
import { t } from "i18next";
import ButtonBlue from "./ui/buttonBlue";

export interface StepFourFormData {
  confirmation: string;
}

interface StepFourProps {
  onNext: (formData: StepFourFormData) => void;
}

const StepFour: React.FC<StepFourProps> = ({ onNext }) => {
  const [formData] = useState<StepFourFormData>({
    confirmation: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto space-y-5 w-80">
      <div>
        StepFour
        <div className="flex items-center gap-x-4">
          <ButtonBlue
            text={t("buttons.confirmButton")}
            type="submit"
            onClick={handleSubmit}
            isActive={true}
          />
          <ButtonBlue
            text={t("buttons.cancelButton")}
            onClick={() => console.log("Cancelled")}
            isActive={false}
          />
        </div>
      </div>
    </form>
  );
};

export default StepFour;
