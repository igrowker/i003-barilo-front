import { useEffect, useState } from "react";
import { getAllActivities } from "../services/tripService";
import HomeCardComponent from "@/components/HomeCardComponent";
import { Activity } from "@/types/Activity";
import { t } from "i18next";

const Activities = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivities = async () => {
      const activitiesData = await getAllActivities();
      if (activitiesData) {
        setActivities(activitiesData);
      }
      setLoading(false);
    };

    fetchActivities();
  }, []);

  if (loading) {
    return (
      <div className="max-h-screen pr-2 mt-10 overflow-hidden text-xl font-bold text-center md:text-2xl lg:text-3xl loader-text whitespace-nowrap text-primary-blue">
        {t("loading")}
      </div>
    );
  }

  return (
    <div className="container px-5 py-12 mx-auto">
      <div className="flex justify-between w-full px-2 pb-3">
        <h2 className="justify-center text-xl font-bold text-center text-[#006BA8]">
          Actividades
        </h2>
      </div>
      <div className="flex flex-wrap mb-10 -m-2">
        {activities.map((activity) => (
          <HomeCardComponent
            key={activity.id}
            imageUrl={activity.image.url}
            text={activity.name}
            link={`/activity/${activity.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Activities;
