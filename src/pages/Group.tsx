import logo from "@/assets/images/logoLineaAzul.webp"
import logoGrupo from "@/assets/images/logoCelesteConFondo.webp"
import logoExcursiones from "@/assets/images/logoExcursiones.webp"
import GroupMember from "@/components/GroupMember"
import {useState} from 'react'
import InputGroup from "@/components/InputGroup"
import Product from "@/components/Product"
import Header from "@/components/Header"
import GroupActivity from "@/components/GroupActivity"
import { useTranslation } from "react-i18next" 

function Group() {
  const [selectedDay, setSelectedDay] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeTab, setActiveTab] = useState('grupo')
  const { t } = useTranslation()

  const dayNames = [
    "group.dayNames.sun", 
    "group.dayNames.mon", 
    "group.dayNames.tue", 
    "group.dayNames.wed", 
    "group.dayNames.thu", 
    "group.dayNames.fri", 
    "group.dayNames.sat"
  ];

  const members = [
    {name: "group.members.user1_name", info: 'group.members.user1_info'},
    {name: "group.members.user2_name", info: 'group.members.user2_info'},
    {name: "group.members.user3_name", info: 'group.members.user3_info'},
  ];

  const activities = [
    { date: "2024-10-10", name: "group.activities.name1", description: "group.activities.description1" },
    { date: "2024-10-11", name: "group.activities.name2", description: "group.activities.description2" },
    { date: "2024-10-12", name: "group.activities.name3", description: "group.activities.description3" },
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
  const filteredActivities = activities.filter(activity =>
    activity.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);  
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  }

  return (
    <div className="flex flex-col min-h-screen pb-16">
      <div className="p-3 px-7 flex items-center">
        <div className="flex">
          <button 
            className={`rounded-full px-4 py-1 ${activeTab === 'grupo' ? 'bg-[--primary-blue] text-white' : 'text-[--primary-blue]'}`}
            onClick={()=> handleTabChange('grupo')}
          >
            <img className=" w-14" src={logoGrupo} alt="icono de grupo" />
            <p className="font-bold">{t('group.group_p')}</p>
          </button>
          <button 
            className={`flex flex-col rounded-full px-4 py-1 justify-center items-center ${activeTab === 'excursiones' ? 'bg-[--primary-blue] text-white' : 'text-[--secondary-celeste]'}`}
            onClick={()=> handleTabChange('excursiones')}
          >
            <img className=" w-6" src={logoExcursiones} alt="icono de excursiones" />
            <p className=" font-bold">{t('group.excursions_p')}</p>
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
              <p className="font-thin tracking-tighter">{t(dayNames[day.day])}</p>
            </div>
          ))}
        </div>
        <div>
          {selectedActivity ? (
            <div className="bg-white p-4 rounded-3xl mt-4">
              <p className="text-[--secondary-celeste] text-center mb-2 ">{dayNames[new Date(selectedActivity.date).getDay()]} - {selectedDay ? 'seleccionado' : 'hoy'}</p>
              <div className="bg-[--secondary-purple] rounded-3xl p-3 pl-5">
                <p className="font-black text-[--primary-celeste]">{t(selectedActivity.name)}</p>
                <p className="text-[--secondary-celeste] font-thin">{t(selectedActivity.description)}</p>
              </div>
            </div>
          ):(
            <div className="bg-white p-4 rounded-3xl mt-4">
              <p>{t('group.no_activities_p')}</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex-grow px-7">
        {activeTab === 'grupo' ? (
          <div>
            <div className="flex items-center mb-1 mt-5 gap-1">
              <img src={logo} className='w-12' alt="Logo de Barilo" />
              <p className="text-[--secondary-celeste] font-bold">{t('group.group_members_p')}</p>
            </div>
            {members.length === 0 ? (
              <div className="text-center py-4">
                <p className="text-[--primary-celeste] font-bold">{t('group.group_members_no_p')}</p>
                <p>{t('group.invite_user_p')}</p>
              </div>
            ) : (
              filteredMembers.length === 0 ? (
                <div className="text-center py-4">
                  <p className="text-[--primary-celeste] font-bold">{t('group.no_members_p')}</p>
                  <p>{t('group.try_to_search')}</p>
                </div>
              ) : (
                <div className="flex flex-col gap-1">
                  {filteredMembers.map((member, index) => (
                    <GroupMember key={index} name={t(member.name)} info={t(member.info)} />
                  ))}
                </div>
              )
            )}
          </div>

        ) :(
          <div>
            <div className="flex items-center mb-1 mt-5 gap-1">
              <img className=" w-7" src={logoExcursiones} alt="icono de excursiones" />
              <p className="text-[--secondary-celeste] font-bold">{t('group.excursions_to_take')}</p>
            </div>
            {activities.length === 0 ? (
              <div className="text-center py-4">
                <p className="text-[--primary-celeste] font-bold">{t('group.no_activities_group')}</p>
                <p>{t('group.invite_user_p')}</p>
              </div>
            ) : (
                <div className="flex flex-col gap-1">
                  {filteredActivities.map((activity, index) => (
                    <GroupActivity key={index} name={t(activity.name)} date={activity.date} description={t(activity.description)} />
                  ))}
                </div>
            )}

          </div>
        )}
      </div>
    </div>
  )
}

export default Group