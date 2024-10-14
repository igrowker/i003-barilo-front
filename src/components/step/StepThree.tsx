import { useState } from "react";
import { StepThreeFormData } from "../../types/step/StepThreeFormData";
import { hotelsData, Hotel } from "./Hotels";
import { FaHotel } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import ButtonBlue from "../ui/buttonBlue";
import { t } from "i18next";

interface StepThreeProps {
  onNext: (data: StepThreeFormData) => void;
  stepThreeData: StepThreeFormData | null;
}

const StepThree: React.FC<StepThreeProps> = ({ onNext }) => {
  const [hotels] = useState<Hotel[]>(hotelsData);
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);

  const handleNext = () => {
    if (selectedHotel) {
      onNext({ hotels: [selectedHotel] });
    }
  };

  return (
    <div className="font-primary">
      <div className="mx-auto mb-5 text-sm text-justify font-regular text-secondary-celeste md:text-base lg:text-lg w-80 md:w-96 lg:w-full">
        {t('stepThree.return_information_message')}
      </div>
      <div className="grid grid-cols-1 gap-4 mb-36">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className={`transition-all duration-300 border border-transparent rounded-lg shadow-lg cursor-pointer hover:shadow-2xl hover:scale-105 bg-background-light mb-6 mx-8 ${
              selectedHotel?.id === hotel.id ? "border-blue-500" : ""
            }`}
            onClick={() => setSelectedHotel(hotel)}
          >
            <div className="flex flex-col h-full p-4 text-white rounded-lg bg-primary-blue bg-opacity-60">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="object-cover w-full h-48 mb-4 rounded-md"
              />
              <h3 className="text-lg font-bold text-primary-celeste">{hotel.name}</h3>
              <p className="flex items-center text-sm font-medium">
                <FaHotel className="mr-2" />
                {hotel.location}
              </p>
              <p className="flex items-center text-lg font-semibold">
                <AiOutlineDollar className="mr-2" />
                {hotel.price} {t('stepThree.hotel_price')}
              </p>
            </div>
          </div>
        ))}
        <div className="mx-5">
      {selectedHotel && ( 
        <ButtonBlue
        text={t("buttons.nextButton")}
          onClick={handleNext}
        />
      )}</div>
      </div>
    </div>
  );
};

export default StepThree;
