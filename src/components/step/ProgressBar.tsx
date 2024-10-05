import { useTranslation } from "react-i18next";

interface ProgressBarProps {
  currentStep: number;
  onStepChange: (step: number) => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  onStepChange,
}) => {
  const { t } = useTranslation();

  const steps = t("progressBar.steps", { returnObjects: true }) as string[];
  const totalSteps = steps.length;

  const handleClick = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const clickPosition = event.clientX - rect.left;
    const stepWidth = rect.width / totalSteps;
    const newStep = Math.floor(clickPosition / stepWidth) + 1;
    if (newStep >= 1 && newStep <= totalSteps) {
      onStepChange(newStep);
    }
  };

  return (
    <div className="relative mx-auto mb-8 cursor-pointer w-96 md:w-full">
      <div
        className="w-full h-16 rounded-full bg-primary-blue md:h-20 lg:h-24"
        onClick={handleClick}
      >
        <div
          className="h-16 transition-all rounded-full bg-primary-celeste md:h-20 lg:h-24"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
        <div className="absolute inset-0 flex items-center justify-between">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`text-sm font-semibold font-primary md:text-lg ${
                index + 1 <= currentStep
                  ? "text-white"
                  : "text-secondary-celeste"
              }`}
              style={{ width: `${100 / totalSteps}%`, textAlign: "center" }}
            >
              {step}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
