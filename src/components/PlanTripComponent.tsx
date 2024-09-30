import { useState } from "react";
import ProgressBar from "./ProgressBar";
import StepOne, { StepOneFormData } from "./StepOne";
import StepTwo, { StepTwoFormData } from "./StepTwo";
import StepThree, { StepThreeFormData } from "./StepThree";
import StepFour, { StepFourFormData } from "./StepFour";
import StepFive from "./StepFive";

const PlanTripComponent: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [stepOneData, setStepOneData] = useState<StepOneFormData | null>(null);
  const [stepTwoData, setStepTwoData] = useState<StepTwoFormData | null>(null);
  const [stepThreeData, setStepThreeData] = useState<StepThreeFormData | null>(null);
  const [stepFourData, setStepFourData] = useState<StepFourFormData | null>(null);

  const handleStepChange = (step: number) => {
    if (step <= currentStep) {
      setCurrentStep(step);
    }
  };

  const handleNextStepOne = (data: StepOneFormData) => {
    setStepOneData(data);
    setCurrentStep(2);
  };

  const handleNextStepTwo = (data: StepTwoFormData) => {
    setStepTwoData(data);
    setCurrentStep(3);
  };

  const handleNextStepThree = (data: StepThreeFormData) => {
    setStepThreeData(data);
    setCurrentStep(4);
  };

  const handleNextStepFour = (data: StepFourFormData) => {
    setStepFourData(data);
    setCurrentStep(5);
  };

  return (
    <div className="max-w-lg mx-auto">
      <ProgressBar currentStep={currentStep} onStepChange={handleStepChange} />

      {currentStep === 1 && <StepOne onNext={handleNextStepOne} />}
      {currentStep === 2 && <StepTwo onNext={handleNextStepTwo} />}
      {currentStep === 3 && <StepThree onNext={handleNextStepThree} />}
      {currentStep === 4 && <StepFour onNext={handleNextStepFour} />}

      {currentStep === 5 && (
        <StepFive
          stepOneData={stepOneData}
          stepTwoData={stepTwoData}
          stepThreeData={stepThreeData}
          stepFourData={stepFourData}
        />
      )}
    </div>
  );
};

export default PlanTripComponent;
