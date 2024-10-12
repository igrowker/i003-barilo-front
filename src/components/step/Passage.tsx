// import TicketCard from "./TicketCard";
// import { PassageData as PassageType } from "../../types/step/StepTwoFormData";
// import { useState } from "react";

// export interface PassageProps {
//   isFlight: boolean;
//   onSelect: (ticket: PassageType) => void;
//   onSelectReturn: (ticket: PassageType) => void;
//   departureDate: string;
//   returnDate: string;
//   originInput: string;
//   destinationInput: string;
// }

// const Passage: React.FC<PassageProps> = ({
//   isFlight,
//   onSelect,
//   onSelectReturn,
//   departureDate,
//   returnDate,
//   originInput,
//   destinationInput,
// }) => {
//   const [selectedDeparture, setSelectedDeparture] = useState<PassageType | null>(null);
//   const [selectedReturn, setSelectedReturn] = useState<PassageType | null>(null);
//   const passages: PassageType[] = [
//     {
//       company: "Aerolíneas Argentinas",
//       flightDate: "2024-10-10",
//       origin: "Buenos Aires",
//       destination: "Bariloche",
//       time: "10:00 AM",
//       price: 200,
//       type: "flight",
//     },
//     {
//       company: "LATAM Airlines",
//       flightDate: "2024-10-11",
//       origin: "Buenos Aires",
//       destination: "Bariloche",
//       time: "1:30 PM",
//       price: 210,
//       type: "flight",
//     },
//     {
//       company: "Aerolíneas Argentinas",
//       flightDate: "2024-10-12",
//       origin: "Buenos Aires",
//       destination: "Bariloche",
//       time: "3:00 PM",
//       price: 220,
//       type: "flight",
//     },
//     {
//       company: "Flybondi",
//       flightDate: "2024-10-13",
//       origin: "Buenos Aires",
//       destination: "Bariloche",
//       time: "5:30 PM",
//       price: 230,
//       type: "flight",
//     },
//     {
//       company: "JetSMART",
//       flightDate: "2024-10-14",
//       origin: "Buenos Aires",
//       destination: "Bariloche",
//       time: "8:45 AM",
//       price: 240,
//       type: "flight",
//     },
//     {
//       company: "Aerolíneas Argentinas",
//       flightDate: "2024-10-20",
//       origin: "Bariloche",
//       destination: "Buenos Aires",
//       time: "10:30 AM",
//       price: 250,
//       type: "flight",
//     },
//     {
//       company: "LATAM Airlines",
//       flightDate: "2024-10-21",
//       origin: "Bariloche",
//       destination: "Buenos Aires",
//       time: "1:30 PM",
//       price: 260,
//       type: "flight",
//     },
//     {
//       company: "Aerolíneas Argentinas",
//       flightDate: "2024-10-22",
//       origin: "Bariloche",
//       destination: "Buenos Aires",
//       time: "3:00 PM",
//       price: 270,
//       type: "flight",
//     },
//     {
//       company: "Flybondi",
//       flightDate: "2024-10-23",
//       origin: "Bariloche",
//       destination: "Buenos Aires",
//       time: "5:30 PM",
//       price: 280,
//       type: "flight",
//     },
//     {
//       company: "JetSMART",
//       flightDate: "2024-10-24",
//       origin: "Bariloche",
//       destination: "Buenos Aires",
//       time: "8:45 AM",
//       price: 290,
//       type: "flight",
//     },
//     {
//       company: "Empresa de Bus 1",
//       flightDate: "2024-10-10",
//       origin: "Buenos Aires",
//       destination: "Bariloche",
//       time: "9:00 AM",
//       price: 100,
//       type: "bus",
//     },
//     {
//       company: "Empresa de Bus 2",
//       flightDate: "2024-10-13",
//       origin: "Buenos Aires",
//       destination: "Bariloche",
//       time: "2:00 PM",
//       price: 110,
//       type: "bus",
//     },
//     {
//       company: "Empresa de Bus 3",
//       flightDate: "2024-10-15",
//       origin: "Bariloche",
//       destination: "Buenos Aires",
//       time: "8:00 AM",
//       price: 220,
//       type: "bus",
//     },
//     {
//       company: "Empresa de Bus 4",
//       flightDate: "2024-10-17",
//       origin: "Bariloche",
//       destination: "Buenos Aires",
//       time: "11:00 AM",
//       price: 130,
//       type: "bus",
//     },
//     {
//       company: "Empresa de Bus 5",
//       flightDate: "2024-10-19",
//       origin: "Buenos Aires",
//       destination: "Bariloche",
//       time: "4:00 PM",
//       price: 140,
//       type: "bus",
//     },
//     {
//       company: "Empresa de Bus 6",
//       flightDate: "2024-10-21",
//       origin: "Bariloche",
//       destination: "Buenos Aires",
//       time: "6:30 PM",
//       price: 150,
//       type: "bus",
//     },
//     {
//       company: "Empresa de Bus 7",
//       flightDate: "2024-10-23",
//       origin: "Buenos Aires",
//       destination: "Bariloche",
//       time: "9:30 AM",
//       price: 160,
//       type: "bus",
//     },
//     {
//       company: "Empresa de Bus 8",
//       flightDate: "2024-10-25",
//       origin: "Bariloche",
//       destination: "Buenos Aires",
//       time: "3:30 PM",
//       price: 170,
//       type: "bus",
//     },
//     {
//       company: "Empresa de Bus 9",
//       flightDate: "2024-10-27",
//       origin: "Buenos Aires",
//       destination: "Bariloche",
//       time: "12:00 PM",
//       price: 180,
//       type: "bus",
//     },
//     {
//       company: "Empresa de Bus 10",
//       flightDate: "2024-10-20",
//       origin: "Bariloche",
//       destination: "Buenos Aires",
//       time: "5:00 PM",
//       price: 190,
//       type: "bus",
//     },
//   ];

//   const handleSelect = (ticket: PassageType) => {
//     setSelectedDeparture(ticket);
//     onSelect(ticket);
//   };

//   const handleSelectReturn = (ticket: PassageType) => {
//     setSelectedReturn(ticket);
//     onSelectReturn(ticket);
//   };

//   const departureTickets = passages.filter((p) => {
//     const ticketDate = new Date(p.flightDate);
//     const departure = new Date(departureDate);
//     const isMatchingType = p.type === (isFlight ? "flight" : "bus");

//     return (
//       ticketDate.toISOString().split("T")[0] ===
//         departure.toISOString().split("T")[0] &&
//       p.destination.toLowerCase() === destinationInput.toLowerCase() &&
//       isMatchingType
//     );
//   });

//   const returnTickets = passages.filter((p) => {
//     const ticketDate = new Date(p.flightDate);
//     const returnTicketDate = new Date(returnDate);
//     const isMatchingType = p.type === (isFlight ? "flight" : "bus");

//     return (
//       returnDate &&
//       ticketDate.toISOString().split("T")[0] ===
//         returnTicketDate.toISOString().split("T")[0] &&
//       p.destination.toLowerCase() === originInput.toLowerCase() &&
//       isMatchingType
//     );
//   });

//   return (
//     <>
//       <div>
//         <h3 className="mt-4 font-semibold text-md">Pasajes de ida</h3>
//         {departureTickets.length === 0 ? (
//           <p>No hay pasajes de ida disponibles de {originInput} a {destinationInput} el {departureDate}.</p>
//         ) : (
//           <div className="grid grid-cols-1 gap-4">
//             {departureTickets.map((passage) => (
//               <TicketCard
//                 isFlight={isFlight}
//                 key={`${passage.company}-${passage.flightDate}-${passage.time}`}
//                 price={passage.price}
//                 departure={passage.origin}
//                 arrival={passage.destination}
//                 onSelect={() => handleSelect(passage)}
//                 company={passage.company}
//                 isSelected={selectedDeparture?.company === passage.company && selectedDeparture.flightDate === passage.flightDate}
//                 departureDate={passage.flightDate}
//                 departureTime={passage.time}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//       <div>
//         <h3 className="mt-4 font-semibold text-md">Pasajes de vuelta</h3>
//         {returnTickets.length === 0 ? (
//           <p>No hay pasajes de vuelta disponibles de {destinationInput} a {originInput} el {returnDate}.</p>
//         ) : (
//           <div className="grid grid-cols-1 gap-4">
//             {returnTickets.map((passage) => (
//               <TicketCard
//                 isFlight={isFlight}
//                 key={`${passage.company}-${passage.flightDate}-${passage.time}`}
//                 price={passage.price}
//                 departure={passage.origin}
//                 arrival={passage.destination}
//                 onSelect={() => handleSelectReturn(passage)}
//                 company={passage.company}
//                 isSelected={selectedReturn?.company === passage.company && selectedReturn.flightDate === passage.flightDate}
//                 departureDate={passage.flightDate}
//                 departureTime={passage.time}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Passage;

import TicketCard from "./TicketCard";
import { PassageData as PassageType } from "../../types/step/StepTwoFormData";
import { useState } from "react";

export interface PassageProps {
  isFlight: boolean;
  onSelect: (ticket: PassageType) => void;
  onSelectReturn: (ticket: PassageType) => void;
  tickets: PassageType[]; // Add this line
  departureDate: string;
  returnDate: string;
  originInput: string;
  destinationInput: string;
}

const Passage: React.FC<PassageProps> = ({
  isFlight,
  onSelect,
  onSelectReturn,
  tickets, // Use tickets here
  departureDate,
  returnDate,
  originInput,
  destinationInput,
}) => {
  const [selectedDeparture, setSelectedDeparture] = useState<PassageType | null>(null);
  const [selectedReturn, setSelectedReturn] = useState<PassageType | null>(null);

  const departureTickets = tickets.filter((ticket) => {
    const ticketDate = new Date("2024-10-11T20:55:19");
    const departure = new Date(ticket.departureDate);
    console.log(departure.toISOString().split("T")[0] )
    return (
      departure.toISOString().split("T")[0] 
    );
  });

  const returnTickets = tickets.filter((ticket) => {
    const ticketDate = new Date(ticket.departureDate);
    const returnTicketDate = new Date(returnDate);
    const isMatchingType = ticket.type === (isFlight ? "flight" : "bus");

    return (
      returnDate &&
      ticketDate.toISOString().split("T")[0] ===
        returnTicketDate.toISOString().split("T")[0] &&
      ticket.destination.name.toLowerCase() === originInput.toLowerCase() &&
      isMatchingType
    );
  });

  const handleSelect = (ticket: PassageType) => {
    setSelectedDeparture(ticket);
    onSelect(ticket);
  };

  const handleSelectReturn = (ticket: PassageType) => {
    setSelectedReturn(ticket);
    onSelectReturn(ticket);
  };

  return (
    <>
      <div>
        <h3 className="mt-4 font-semibold text-md">Pasajes de ida</h3>
        {departureTickets.length === 0 ? (
          <p>No hay pasajes de ida disponibles de {originInput} a {destinationInput} el {departureDate}.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {departureTickets.map((passage) => (
              <TicketCard
                isFlight={isFlight}
                key={`${passage.companyName}-${passage.departureDate.toString().split("T")[0] }-${passage.departureDate.toString().split("T")[0]}`}
                price={passage.price}
                departure={passage.companyName}
                arrival={passage.destination.name}
                onSelect={() => handleSelect(passage)}
                company={passage.companyName}
                isSelected={selectedDeparture?.companyName === passage.companyName && selectedDeparture.departureDate === passage.departureDate}
                departureDate={passage.departureDate.toString().split("T")[0]}
                departureTime={passage.departureDate.toString().split("T")[0]}
              />
            ))}
          </div>
        )}
      </div>
      <div>
        <h3 className="mt-4 font-semibold text-md">Pasajes de vuelta</h3>
        {returnTickets.length === 0 ? (
          <p>No hay pasajes de vuelta disponibles de {destinationInput} a {originInput} el {returnDate}.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {returnTickets.map((passage) => (
              <TicketCard
              isFlight={isFlight}
              key={`${passage.companyName}-${passage.departureDate}-${passage.departureDate}`}
              price={passage.price}
              departure={passage.companyName}
              arrival={passage.destination.name}
              onSelect={() => handleSelect(passage)}
              company={passage.companyName}
              isSelected={selectedDeparture?.companyName === passage.companyName && selectedDeparture.departureDate === passage.departureDate}
              departureDate={passage.departureDate}
              departureTime={passage.departureDate}
            />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Passage;

