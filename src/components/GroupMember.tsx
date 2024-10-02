import userImg from '@/assets/images/excursionCard.webp'

import { BsCheckCircle, BsXCircle } from 'react-icons/bs'

interface GroupMemberProps {
  name: string;
  info: string;
}

function GroupMember({name, info}: GroupMemberProps) {
  
    return (
      <div className="flex border bg-[--inactive-button-bg] rounded-2xl p-1.5 mb-2 gap-2">
        <img src={userImg} alt="User image" className="w-20 rounded-2xl"/>
        <div className='flex justify-between bg-white rounded-2xl w-full p-2 ml-2'>
          <div className='flex flex-col justify-center h-16 pl-2 gap-1'>
            <p className="text-[--secondary-celeste] font-bold leading-none">{name}</p>
            <p className="text-[--primary-celeste] leading-1 text-sm">{info}</p>
          </div>
          <div className='flex flex-col justify-between py-1 pr-2'>
            <BsCheckCircle className='text-[--primary-blue]'/>
            <BsXCircle className='text-[--primary-blue]'/>
          </div>
        </div>   
      </div>
    )
  }
  
  export default GroupMember