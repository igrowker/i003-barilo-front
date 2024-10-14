import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllActivities } from "../services/tripService";
import ActivityDetail from "@/components/ActivityDetail";
import { Activity } from "@/types/Activity";
import { t } from "i18next";

const ActivityDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [activity, setActivity] = useState<Activity | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivity = async () => {
      setLoading(true);

      try {
        const allActivities = await getAllActivities();
        const activityId = Number(id);
        const selectedActivity = allActivities.find(
          (act) => act.id === activityId
        );
        setActivity(selectedActivity || null);
      } catch (error) {
        console.error("Error fetching activity:", error);
        setActivity(null);
      } finally {
        setLoading(false);
      }
    };

    fetchActivity();
  }, [id]);

  if (loading) {
    return (
      <div className="max-h-screen pr-2 mt-10 overflow-hidden text-xl font-bold text-center md:text-2xl lg:text-3xl loader-text whitespace-nowrap text-primary-blue">
        {t("loading")}
      </div>
    );
  }

  return activity ? <ActivityDetail activity={activity} /> : null;
};

export default ActivityDetailPage;
