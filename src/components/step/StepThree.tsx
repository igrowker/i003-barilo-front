import { useState, useEffect } from "react";
import axios from "axios";
import { StepThreeFormData } from "@/types/step/StepThreeFormData";
import { AiOutlineDollar } from "react-icons/ai";
import ButtonBlue from "../ui/buttonBlue";
import { t } from "i18next";
import { Hotel } from "@/types/step/StepThreeFormData";
import { useAuth } from "@/context/AuthProvider";
import { useNavigate } from "react-router-dom";

interface StepThreeProps {
  onNext: (data: StepThreeFormData) => void;
  destinationId: number;
  stepThreeData?: StepThreeFormData;
}

const API_URL = import.meta.env.VITE_API_URL;

const StepThree: React.FC<StepThreeProps> = ({ onNext, destinationId }) => {
  const { token } = useAuth();
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHotels = async () => {
      setLoading(true);
      setError(null);
      console.log(destinationId);
      try {
        const response = await axios.get(`${API_URL}/accommodations`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            destinationId: destinationId,
          },
        });
        const {
          data: { content },
        } = response.data;
        const hotelsFromApi = content.map((hotel: Hotel) => ({
          id: hotel.id,
          name: hotel.name,
          image: {
            url: hotel.image?.url || "",
          },
          price: hotel.price,
        }));
        setHotels(hotelsFromApi);
      } catch (err) {
        console.error("Error en la API", err);
        setError(t('stepThree.error_lopading_hotel'));
      } finally {
        setLoading(false);
      }
    };
    fetchHotels();
  }, [destinationId, token]);

  const handleNext = () => {
    if (selectedHotel) {
      onNext({ hotels: [selectedHotel] });
    }
  };

  const handleCancel = () => {
    navigate("/home");
  };

  return (
    <>
      <div className="mx-auto mb-5 text-sm text-justify font-primary font-regular text-secondary-celeste md:text-base lg:text-lg w-80 md:w-96 lg:w-full">
      {t('stepThree.return_information_message')}
      </div>
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="pr-2 overflow-hidden text-lg font-bold loader-text whitespace-nowrap text-primary-blue">
            {t('stepThree.loading_hotel')}
          </div>
        </div>
      ) : error ? (
        <div className="flex items-center justify-center text-red-500">
          {error}
        </div>
      ) : (
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
                  src={hotel.image.url}
                  alt={hotel.name}
                  className="object-cover w-full h-48 mb-4 rounded-md"
                />
                <h3 className="text-lg font-bold text-primary-celeste">
                  {hotel.name}
                </h3>
                <p className="flex items-center text-lg font-semibold">
                  <AiOutlineDollar className="mr-2" />
                  {hotel.price} {t('stepThree.hotel_price')}
                </p>
              </div>
            </div>
          ))}
          {selectedHotel && (
            <div className="mx-5">
              <ButtonBlue
                text={t("buttons.nextButton")}
                onClick={handleNext}
                disabled={!selectedHotel}
              />
            </div>
          )}
          <div className="mx-5">
            <ButtonBlue
              text={t("buttons.cancelButton")}
              onClick={handleCancel}
              isActive={false}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default StepThree;
