import React from 'react';
import { CiHeart } from "react-icons/ci";
import img1 from '../assets/images/excursionCard.webp';
import img2 from '../assets/images/restaurantCard.webp';
import img3 from '../assets/images/destinationCard.webp';
import img4 from '../assets/images/destinationCard.webp';

interface HijoProps {
    nombreImagen: string;
    text: string;
  }

const HomeCardComponent: React.FC<HijoProps> = ({nombreImagen, text }) => {
    const imagenes: Record<string, string> = {
        img1,
        img2,
        img3,
        img4
      };
    return (

        <div className="flex flex-col items-center w-1/2 px-1 py-1">
          <div className="relative flex flex-wrap w-full pb-2 sm:px-10">
            <img className='object-cover w-full h-72 rounded-3xl' src={imagenes[nombreImagen]}/>
            <button className='absolute flex items-center justify-center w-10 h-10 rounded-full bottom-5 right-3 bg-[#C6C6C6]'>
                <CiHeart className='text-2xl' />
            </button>
          </div>
          <a href="" className="text-[#006BA8] font-['Lato'] font-bold text-sm">{text}</a>
        </div>
    )
  }
  
  export default HomeCardComponent