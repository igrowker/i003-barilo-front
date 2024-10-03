import logo from "@/assets/images/logoLineaAzul.webp"
import logoGrupo from "@/assets/images/logoCelesteConFondo.webp"
import logoExcursiones from "@/assets/images/logoExcursiones.webp"
import GroupMember from "@/components/GroupMember"
import {useState} from 'react'
import InputGroup from "@/components/InputGroup"
import Product from "@/components/Product"
import Header from "@/components/Header"



const dayNames = ["DOM", "LUN", "MAR", "MIE", "JUE", "VIE", "SAB"];

function Group() {
  const [selectedDay, setSelectedDay] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState<string>("");

  const members = [
    {name: "Ana Gallinado", info: 'Alumna 6to B'},
    {name: "Juan Pérez", info: 'Alumno 6to A'},
    {name: "Lucía Fernández", info: 'Alumna 6to B'},
  ];

  const activities = [
    { date: "2024-09-30", name: "Parrilla", description: "Asado, traer lo que quieran beber" },
    { date: "2024-10-01", name: "Reunión de equipo", description: "Revisar el proyecto de clase" },
    { date: "2024-10-02", name: "Día de deportes", description: "Jugar fútbol en el parque" },
  ];

  const today = new Date();
  

  const nextDays = Array.from({length: 6}, (_, i)=>{
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    return{
      day: date.getDay(),
      date: date.getDate(),
      fullDate: date.toISOString().split('T')[0]
    }
  });

  
  const selectedActivity = selectedDay
  ? activities.find((activity) => activity.date === selectedDay)
  : activities.find((activity) => activity.date === today.toISOString().split("T")[0])
  
  const handleDayClick = (day: string) => {
    setSelectedDay(selectedDay === day ? null : day);
  };

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);  
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-3 px-7 flex items-center">
        <div className="flex">
          <button className="bg-[--primary-blue] rounded-full px-4 py-1">
            <img className=" w-14" src={logoGrupo} alt="icono de grupo" />
            <p className="text-white font-bold">Grupo</p>
          </button>
          <button className="flex flex-col rounded-full px-4 py-1 justify-center items-center">
            <img className=" w-6" src={logoExcursiones} alt="icono de excursiones" />
            <p className="text-[--secondary-celeste] font-thin">Excursiones</p>
          </button>
        </div>
        <div>
          <InputGroup
            onSearch={handleSearch}
          />
        </div>
      </div>
      <div className="bg-[--inactive-button-bg] px-7 py-5">
        <div className="flex gap-2 mb-2 justify-center">
          {nextDays.map((day, index) => (
            <div
              key={index}
              className={`${
                day.fullDate === selectedDay
                ? "bg-[--secondary-celeste] border-[2px]  text-white" 
                : day.fullDate === today.toISOString().split("T")[0]
                ? "bg-[--primary-purple] border-[2px] border-[#5d38a7] text-white"
                : "bg-white text-[--primary-celeste] border-[2px] border-white"
              } flex-col text-center w-full  py-3 rounded-3xl  font-black cursor-pointer `}
              onClick={()=> handleDayClick(day.fullDate)}
            >
              <p className="text-2xl">{day.date}</p>
              <p className="font-thin tracking-tighter">{dayNames[day.day]}</p>
            </div>
          ))}
        </div>
        <div>
          {selectedActivity ? (
            <div className="bg-white p-4 rounded-3xl mt-4">
              <p className="text-[--secondary-celeste] text-center mb-2 ">{dayNames[new Date(selectedActivity.date).getDay()]} - {selectedDay ? 'seleccionado' : 'hoy'}</p>
              <div className="bg-[--secondary-purple] rounded-3xl p-3 pl-5">
                <p className="font-black text-[--primary-celeste]">{selectedActivity.name}</p>
                <p className="text-[--secondary-celeste] font-thin">{selectedActivity.description}</p>
              </div>
            </div>
          ):(
            <div className="bg-white p-4 rounded-3xl mt-4">
              <p>No hay actividades programadas para hoy</p>
            </div>
          )}
        </div>
        
      </div>
      <div className="flex-grow px-7">
        <div className="flex items-center mb-1 mt-5 gap-1">
          <img src={logo} className='w-12' alt="Logo de Barilo" />
          <p className="text-[--secondary-celeste] font-bold">Integrantes del grupo</p>
        </div>
        {members.length === 0 ? (
          <div className="text-center py-4">
            <p className="text-[--primary-celeste] font-bold">Aún no hay integrantes en el grupo.</p>
            <p>Invita a gente a unirse al grupo para empezar la planificación.</p>
          </div>
        ) : (
          filteredMembers.length === 0 ? (
            <div className="text-center py-4">
              <p className="text-[--primary-celeste] font-bold">No se encontraron miembros.</p>
              <p>Intenta buscar por otro nombre.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-1">
              {filteredMembers.map((member, index) => (
                <GroupMember key={index} name={member.name} info={member.info} />
              ))}
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default Group