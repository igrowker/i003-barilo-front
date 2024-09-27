import { useState } from "react";
import { useTranslation } from "react-i18next";
import InputField from "./ui/InputField";
import ButtonBlue from "./ui/buttonBlue";

interface StepTwoProps {
  onNext: (formData: StepTwoFormData) => void;
}

export interface StepTwoFormData {
  origin: string;
  destination: string;
  departureDate: string;
  returnDate: string;
}

const StepTwo: React.FC<StepTwoProps> = ({ onNext }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<StepTwoFormData>({
    origin: "",
    destination: "",
    departureDate: "",
    returnDate: "",
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

  return (
    <form onSubmit={handleSubmit} className="mx-auto space-y-5 w-80">
      <InputField
        label={t("stepTwo.origin")}
        name="origin"
        value={formData.origin}
        onChange={handleChange}
        required
        placeholder={t("stepTwo.origin")}
      />
      <InputField
        label={t("stepTwo.destination")}
        name="destination"
        value={formData.destination}
        onChange={handleChange}
        required
        placeholder={t("stepTwo.destination")}
      />
      <div>
        <label className="text-lg font-bold font-primary text-primary-celeste">
          {t("stepTwo.date")}
        </label>
        <div className="flex justify-between">
          <div className="flex-1 mr-2">
            <InputField
              label={t("stepTwo.departureDate")}
              type="date"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex-1 ml-2">
            <InputField
              label={t("stepTwo.returnDate")}
              type="date"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <ButtonBlue
          text={t("buttons.searchButton")}
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
      <div className="flex items-center gap-x-4">
        <ButtonBlue
          text={t("buttons.nextButton")}
          type="submit"
          onClick={handleSubmit}
          isActive={true}
        />
      </div>
    </form>
  );
};

export default StepTwo;
