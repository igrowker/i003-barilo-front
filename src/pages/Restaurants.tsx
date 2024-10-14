import { useEffect, useState } from "react";
import { getAllRestaurants } from "../services/tripService";
import HomeCardComponent from "@/components/HomeCardComponent";
import { Restaurant } from "@/types/Restaurant";
import { t } from "i18next";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const restaurantsData = await getAllRestaurants();
      if (restaurantsData) {
        setRestaurants(restaurantsData);
      }
      setLoading(false);
    };

    fetchRestaurants();
  }, []);

  if (loading) {
    return (
      <div className="max-h-screen pr-2 overflow-hidden text-xl font-bold text-center md:text-2xl lg:text-3xl loader-text whitespace-nowrap text-primary-blue">
        {t("loading")}
      </div>
    );
  }

  return (
    <div className="container px-5 py-12 mx-auto">
      <div className="flex justify-between w-full px-2 pb-3">
        <h2 className="justify-center text-xl font-bold text-center text-[#006BA8]">
          Restaurantes
        </h2>
      </div>
      <div className="flex flex-wrap mb-10 -m-2">
        {restaurants.map((restaurant) => (
          <HomeCardComponent
            key={restaurant.id}
            imageUrl={restaurant.image.url}
            text={restaurant.name}
            link={`/restaurant/${restaurant.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
