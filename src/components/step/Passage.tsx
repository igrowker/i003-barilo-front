import TicketCard from "./TicketCard";
import { PassageData as PassageType } from "../../types/step/StepTwoFormData";
import { useState, useMemo } from "react";

export interface PassageProps {
  isFlight: boolean;
  onSelect: (ticket: PassageType) => void;
  onSelectReturn: (ticket: PassageType) => void;
  tickets: PassageType[];
  originInput: string;
  destinationInput: string;
}
const Passage: React.FC<PassageProps> = ({
  isFlight,
  onSelect,
  tickets,
  originInput,
  destinationInput,
}) => {
  const [selectedDeparture, setSelectedDeparture] =
    useState<PassageType | null>(null);

  const departureTickets = useMemo(() => {
    return tickets.filter((ticket) => {
      const type = ticket.type === null ? "BUS" : ticket.type;
      return type === (isFlight ? "FLIGHT" : "BUS");
    });
  }, [tickets, isFlight]);

  const handleSelect = (ticket: PassageType) => {
    setSelectedDeparture(ticket);
    onSelect(ticket);
  };

  return (
    <div>
      <h3 className="mt-4 font-semibold text-md">Paquetes de viaje</h3>
      {departureTickets.length === 0 ? (
        <p>
          No hay pasajes de ida disponibles de {originInput} a{" "}
          {destinationInput}
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {departureTickets.map((passage) => {
            const isSelected =
              selectedDeparture?.companyName === passage.companyName &&
              selectedDeparture.departureDate === passage.departureDate;
            return (
              <TicketCard
                origin={originInput}
                isFlight={isFlight}
                key={`${passage.companyName}-${passage.departureDate}`}
                price={passage.price}
                departure={passage.companyName}
                arrival={passage.destination.name}
                onSelect={() => handleSelect(passage)}
                company={passage.companyName}
                isSelected={isSelected}
                departureDate={new Date(
                  passage.departureDate
                ).toLocaleDateString()}
                departureTime={new Date(
                  passage.departureDate
                ).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Passage;
