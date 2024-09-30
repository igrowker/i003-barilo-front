import { useState } from "react";
import { useTranslation } from "react-i18next";
import InputField from "./ui/InputField";
import ButtonBlue from "./ui/buttonBlue";
import { useNavigate } from "react-router-dom";

interface StepOneProps {
  onNext: (formData: StepOneFormData) => void;
}

export interface StepOneFormData {
  groupName: string;
  numberOfPeople: string;
}

const StepOne: React.FC<StepOneProps> = ({ onNext }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<StepOneFormData>({
    groupName: "",
    numberOfPeople: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto space-y-5 w-80">
      <InputField
        label={t("stepOne.groupName")}
        name="groupName"
        value={formData.groupName}
        onChange={handleChange}
        required
        placeholder={t("stepOne.groupName")}
      />
      <InputField
        label={t("stepOne.numberOfPeople")}
        name="numberOfPeople"
        value={formData.numberOfPeople}
        onChange={handleChange}
        required
        type="number"
        placeholder={t("stepOne.numberOfPeople")}
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
          onClick={handleCancel}
          isActive={false}
        />
      </div>
    </form>
  );
};

export default StepOne;
