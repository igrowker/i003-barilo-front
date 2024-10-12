import { FaRegBuilding } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import { TbPlaneArrival, TbPlaneDeparture } from "react-icons/tb";
// import { IoMdTime } from "react-icons/io";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaBusAlt } from "react-icons/fa";

interface TicketCardProps {
  origin: string;
  price: number;
  departure: string;
  arrival: string;
  company: string;
  departureDate: string;
  returnDate?: string;
  departureTime: string;
  returnTime?: string;
  onSelect: () => void;
  isSelected: boolean;
  isFlight: boolean;
}

const TicketCard: React.FC<TicketCardProps> = ({
  origin,
  price,
  departure,
  arrival,
  company,
  onSelect,
  isSelected,
  departureDate,
  returnDate,
  // departureTime,
  // returnTime,
  isFlight,
}) => {
  return (
    <div
      onClick={onSelect}
      role="button"
      aria-pressed={isSelected}
      className={`transition-all duration-300 cursor-pointer mt-4 rounded-lg shadow-lg
      ${
        isSelected
          ? "bg-primary-pink border-secondary-pink"
          : "bg-background-light"
      }
      hover:shadow-2xl hover:scale-105 border-transparent`}
    >
      <div className="flex flex-col h-full p-4 text-white rounded-lg bg-primary-blue bg-opacity-60">
        <div className="flex-grow">
          <h3 className="flex items-center text-base font-bold text-primary-celeste md:text-lg">
            {isFlight ? (
              <TbPlaneDeparture className="mr-2 text-white" />
            ) : (
              <FaBusAlt className="mr-2 text-white" />
            )}
            <span>Origen: {origin}</span>
          </h3>
          <h3 className="flex items-center text-base font-bold text-primary-celeste md:text-lg">
            {isFlight ? (
              <TbPlaneArrival className="mr-2 text-white" />
            ) : (
              <FaBusAlt className="mr-2 text-white" />
            )}
            <span>Destino: {arrival}</span>
          </h3>
          <h3 className="flex items-center text-base font-bold text-primary-celeste md:text-lg">
            <FaRegCalendarCheck className="mr-2 text-white" />
            <span>{departureDate}</span>
            {/* <IoMdTime className="mx-2 text-white" />
            <span>{departureTime}</span> */}
          </h3>
          
            <h3 className="flex items-center text-base font-bold text-primary-celeste md:text-lg">
              <FaRegCalendarCheck className="mr-2 text-white" />
              <span>{returnDate}</span>
              {/* <IoMdTime className="mr-2 text-white" />
              <span>{returnTime}</span> */}
            </h3>
          
          <h3 className="flex items-center text-lg font-semibold">
            <AiOutlineDollar className="mr-2" />
            <span>{price}</span>
          </h3>
          <h3 className="flex items-center text-sm font-medium">
            <FaRegBuilding className="mr-2" />
            <span>{company}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
