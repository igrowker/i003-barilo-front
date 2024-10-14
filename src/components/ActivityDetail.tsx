import { Activity } from "@/types/Activity";
import { AiOutlineDollar } from "react-icons/ai";
import { FaHiking } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import ButtonBlue from "./ui/buttonBlue";
import { useNavigate } from "react-router-dom";

interface ActivityDetailProps {
  activity: Activity;
}

const ActivityDetail: React.FC<ActivityDetailProps> = ({ activity }) => {
  const navigate = useNavigate();

  return (
    <section className="font-primary">
      <div className="container flex flex-col items-center px-8 py-24 mx-auto md:flex-row">
        <div className="mb-10 w-7/8 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
          <img
            className="object-cover object-center border-2 shadow-md rounded-3xl border-primary-blue shadow-primary-blue"
            alt={activity.name}
            src={activity.image.url}
          />
        </div>
        <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
          <h1 className="flex items-center mb-4 text-3xl font-semibold text-primary-pink title-font sm:text-4xl">
            <FaHiking className="mr-2" /> {activity.name}
          </h1>
          <p className="text-xl leading-relaxed text-justify text-primary-celeste">
            {activity.description}
          </p>
          <div className="flex items-center justify-between w-full mt-4">
            <div className="flex items-center text-lg md:text-xl lg:text-2xl">
              <AiOutlineDollar className="mr-2 text-xl cursor-pointer md:text-2xl lg:text-3xl text-primary-celeste" />
              <span>{activity.price}</span>
            </div>
            <FaShareAlt
              className="ml-4 text-xl transition-transform transform cursor-pointer md:text-2xl lg:text-3xl text-primary-celeste hover:scale-110"
              title="Compartir"
            />
          </div>
          <div className="flex justify-center mt-8">
            <ButtonBlue
              text="Volver al inicio"
              onClick={() => navigate("/home")}
              isActive={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityDetail;
