import { useState } from "react";
import ProgressBar from "./step/ProgressBar";
import StepOne from "./step/StepOne";
import StepTwo from "./step/StepTwo";
import StepThree from "./step/StepThree";
import StepFour from "./step/StepFour";
import StepFive from "./step/StepFive";
import { StepOneFormData } from "../types/step/StepOneFormData";
import { StepTwoFormData } from "../types/step/StepTwoFormData";
import { StepThreeFormData } from "../types/step/StepThreeFormData";
import { StepFourFormData } from "../types/step/StepFourFormData";

const PlanTripComponent: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [stepOneData, setStepOneData] = useState<StepOneFormData | null>(null);
  const [stepTwoData, setStepTwoData] = useState<StepTwoFormData | null>(null);
  const [stepThreeData, setStepThreeData] = useState<StepThreeFormData | null>(
    null
  );
  const [stepFourData, setStepFourData] = useState<StepFourFormData | null>(
    null
  );
  const [destination, setDestinationId] = useState<number | undefined>(null);

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
    console.log(data);
    setStepTwoData(data);
    setDestinationId(data.destinationId);
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

      {currentStep === 1 && (
        <StepOne onNext={handleNextStepOne} stepOneData={stepOneData} />
      )}
      {currentStep === 2 && (
        <StepTwo onNext={handleNextStepTwo} stepTwoData={stepTwoData} />
      )}
      {currentStep === 3 && (
        <StepThree
          onNext={handleNextStepThree}
          stepThreeData={stepThreeData}
          destinationId={destination}
        />
      )}
      {currentStep === 4 && (
        <StepFour 
          onNext={handleNextStepFour} 
          stepFourData={stepFourData} 
          destinationId={destination}
        />
      )}
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
