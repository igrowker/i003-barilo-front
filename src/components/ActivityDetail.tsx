import React from "react";
import Detail from "./ui/Detail";
import { activitiesData } from "./step/Activities";

const ActivityDetail: React.FC<{ id: number }> = ({ id }) => {
  const activity = activitiesData.find((activity) => activity.id === id);

  if (!activity) return <p>Actividad no encontrada.</p>;

  return (
    <Detail
      name={activity.name}
      duration="Duración de la Actividad"
      location="Ubicación de la Actividad"
      price={`$${activity.price}`}
      description={activity.description}
      imageUrl={activity.image}
    />
  );
};

export default ActivityDetail;
