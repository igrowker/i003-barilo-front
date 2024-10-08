import { useState } from "react";
import { StepFourFormData } from "../../types/step/StepFourFormData";
import { activitiesData, Activity } from "./Activities";
import { restaurantsData, Restaurant } from "./Restaurants";
import { FaHiking, FaUtensils } from "react-icons/fa";
import ButtonBlue from "../ui/buttonBlue";
import { AiOutlineDollar } from "react-icons/ai";
import { t } from "i18next";

interface StepFourProps {
  onNext: (data: StepFourFormData) => void;
  stepFourData: StepFourFormData | null; // Agregando la propiedad aquí
}

const StepFour: React.FC<StepFourProps> = ({ onNext }) => {
  const [selectedActivities, setSelectedActivities] = useState<Activity[]>([]);
  const [selectedRestaurants, setSelectedRestaurants] = useState<Restaurant[]>([]);

  const handleActivitySelect = (activity: Activity) => {
    const isSelected = selectedActivities.some(item => item.id === activity.id);
    if (!isSelected) {
      setSelectedActivities(prev => {
        if (prev.length < 7) {
          return [...prev, activity];
        }
        return prev;
      });
    }
  };

  const handleRestaurantSelect = (restaurant: Restaurant) => {
    const isSelected = selectedRestaurants.some(item => item.id === restaurant.id);
    if (!isSelected) {
      setSelectedRestaurants(prev => {
        if (prev.length < 7) {
          return [...prev, restaurant];
        }
        return prev;
      });
    }
  };

  const handleNext = () => {
    onNext({
      activities: selectedActivities,
      restaurants: selectedRestaurants,
    });
  };

  return (
    <div className="font-primary">
      <div className="mx-auto mb-5 text-sm text-justify font-regular text-secondary-celeste md:text-base lg:text-lg w-80 md:w-96 lg:w-full">
        ¡Descubre las experiencias perfectas para tu grupo! Sumérgete en una
        amplia variedad de actividades emocionantes y deliciosos restaurantes
        que se adaptan a todos los gustos. Desde aventuras al aire libre hasta
        recorridos culturales, hay algo para cada miembro del grupo. Después de
        un día lleno de diversión, elijan un restaurante acogedor donde
        disfrutar de platillos exquisitos y crear momentos memorables juntos.
        ¡La oportunidad de vivir una experiencia única y sabrosa les está
        esperando para que hagan recuerdos inolvidables!
      </div>
      <div className="grid grid-cols-1 gap-4 mb-36">
        <h3 className="text-xl font-bold text-center text-primary-blue">
          Actividades
        </h3>
        {activitiesData.map((activity) => (
          <div
            key={activity.id}
            className={`transition-all duration-300 border border-transparent rounded-lg shadow-lg cursor-pointer hover:shadow-2xl hover:scale-105 mb-6 mx-8 ${
              selectedActivities.some(item => item.id === activity.id)
                ? "bg-blue-500"
                : "bg-background-light"
            }`}
            onClick={() => handleActivitySelect(activity)}
          >
            <div className="flex flex-col h-full p-4 text-white rounded-lg bg-primary-blue bg-opacity-60">
              <img
                src={activity.image}
                alt={activity.name}
                className="object-cover w-full h-48 mb-4 rounded-md"
              />
              <h3 className="flex items-center text-xl font-bold text-primary-celeste">
                <FaHiking className="mr-2 text-white align-middle" />
                {activity.name}
              </h3>
              <h4 className="flex items-center text-lg text-white">
                <AiOutlineDollar className="mr-2 align-middle" />
                {activity.price}
              </h4>

              <p className="mt-2 text-base text-gray-300">
                {activity.description}
              </p>
            </div>
          </div>
        ))}

        <h3 className="text-xl font-bold text-center text-primary-blue">
          Restaurantes
        </h3>
        {restaurantsData.map((restaurant) => (
          <div
            key={restaurant.id}
            className={`transition-all duration-300 border border-transparent rounded-lg shadow-lg cursor-pointer hover:shadow-2xl hover:scale-105 mb-6 mx-8 ${
              selectedRestaurants.some(item => item.id === restaurant.id)
                ? "bg-blue-500"
                : "bg-background-light"
            }`}
            onClick={() => handleRestaurantSelect(restaurant)}
          >
            <div className="flex flex-col h-full p-4 text-white rounded-lg bg-primary-blue bg-opacity-60">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="object-cover w-full h-48 mb-4 rounded-md"
              />
              <h3 className="flex items-center text-xl font-bold text-primary-celeste">
                <FaUtensils className="mr-2 text-white align-middle" />
                {restaurant.name}
              </h3>
              <h4 className="flex items-center text-lg text-gray-200">
                <AiOutlineDollar className="mr-2 align-middle" />
                {restaurant.price}
              </h4>

              <p className="text-base text-gray-300">
                {restaurant.description}
              </p>
            </div>
          </div>
        ))}

        <div className="mx-5">
          <ButtonBlue
            text={t("buttons.nextButton")}
            onClick={handleNext}
            isActive={
              selectedActivities.length > 0 || selectedRestaurants.length > 0
            }
          />
        </div>
      </div>
    </div>
  );
};

export default StepFour;
