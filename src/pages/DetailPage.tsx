import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "../components/ui/Detail";
import {
  getHotelById,
  getRestaurantById,
  getActivityById,
} from "../services/tripService";
import { DetailData } from "../types/Detail";

const DetailPage: React.FC = () => {
  const { id, type } = useParams<{ id: string; type: string }>();
  const [data, setData] = useState<DetailData>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result;

        if (type === "hotel") {
          result = await getHotelById(id);
        } else if (type === "restaurant") {
          result = await getRestaurantById(id);
        } else if (type === "activity") {
          result = await getActivityById(id);
        } else {
          throw new Error("Invalid type");
        }

        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, type]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data found</div>;
  }

  const { name, duration, location, price, description, imageUrl } = data;

  return (
    <Detail
      name={name}
      duration={duration}
      location={location}
      price={price}
      description={description}
      imageUrl={imageUrl}
    />
  );
};

export default DetailPage;
