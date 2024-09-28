import { useState } from "react";
import ButtonBlue from "./ui/buttonBlue";
import { t } from "i18next";

interface StepThreeProps {
  onNext: (formData: StepThreeFormData) => void;
}

export interface StepThreeFormData {
  confirmation: string;
}

const StepThree: React.FC<StepThreeProps> = ({ onNext }) => {
  const [formData, setFormData] = useState<StepThreeFormData>({
    confirmation: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto space-y-5 w-80">
      <input
        type="text"
        value={formData.confirmation}
        className="w-full"
        onChange={(e) => setFormData({ confirmation: e.target.value })}
      />
      <div className="flex items-center gap-x-4">
        <ButtonBlue
          text={t("buttons.nextButton")}
          type="submit"
          onClick={handleSubmit}
          isActive={true}
        />
        <ButtonBlue
          text={t("buttons.cancelButton")}
          onClick={() => console.log("")}
          isActive={false}
        />
      </div>
    </form>
  );
};

export default StepThree;
