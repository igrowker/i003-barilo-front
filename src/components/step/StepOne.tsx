import { useTranslation } from "react-i18next";
import InputField from "../ui/InputField";
import ButtonBlue from "../ui/buttonBlue";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { StepOneFormData } from "../../types/step/StepOneFormData";
import { useEffect } from "react";

interface StepOneProps {
  onNext: (formData: StepOneFormData) => void;
  stepOneData: StepOneFormData | null;
}

const StepOne: React.FC<StepOneProps> = ({ onNext, stepOneData }) => {
  const { t } = useTranslation();
  const methods = useForm<StepOneFormData>();

  const { handleSubmit, reset } = methods;

  useEffect(() => {
    if (stepOneData) {
      reset(stepOneData);
    }
  }, [stepOneData, reset]);

  const onSubmit = (data: StepOneFormData) => {
    onNext(data);
  };

  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/");
  };

  return (
    <FormProvider {...methods}>
      <div className="mx-auto mb-5 text-sm text-justify font-regular text-secondary-celeste md:text-base lg:text-lg w-80 md:w-96 lg:w-full">
        ¡Dale un nombre único a tu grupo de viaje, y luego podrás compartir un
        enlace de invitación para compartir con tus amigos!
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto space-y-5 w-80 md:w-96"
      >
        <InputField
          label={t("stepOne.groupName")}
          name="groupName"
          required
          placeholder={t("stepOne.groupName")}
        />
        <InputField
          label={t("stepOne.numberOfPeople")}
          name="numberOfPeople"
          required
          type="number"
          placeholder={t("stepOne.numberOfPeople")}
        />
        <div className="flex items-center gap-x-4">
          <ButtonBlue
            text={t("buttons.nextButton")}
            type="submit"
            isActive={true}
          />
          <ButtonBlue
            text={t("buttons.cancelButton")}
            onClick={handleCancel}
            isActive={false}
          />
        </div>
      </form>
    </FormProvider>
  );
};

export default StepOne;
