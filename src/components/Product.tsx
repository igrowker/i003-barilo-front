import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from "axios"
import { useState } from 'react';
import paqueteImg from "@/assets/images/destinationCard.webp"



const Product = () => {
    const [preferenceId, setPreferenceId] = useState(null)
    initMercadoPago('APP_USR-43b5f444-ef02-4e1e-b9af-4ef60cd3be5e');

    const paquete = {
        title: "Viaje economico",
        quantity: 1,
        price: 1000000,
    }

    const createPreference = async() => {
        try{
            const response = await axios.post("http://localhost:3000/create_preference", 
            paquete    
            );
    
            const {id} = response.data;
            return id;
            // const { redirectUrl } = response.data;
            // return redirectUrl;
        } catch(error){
            console.log(error);
        }
    };

    const handleBuy = async () => {
        const id = await createPreference();
        if(id){
            setPreferenceId(id);
        }
        // const url = await createPreference();
        // if (url) window.open(url, '_blank');
    }

    return (
        <article className="p-8 bg-slate-800 rounded-xl text-white border border-slate-600">
            <div className="w-56 rounded-xl overflow-hidden">
              <img src={paqueteImg} alt="imagen del paquete" />
            </div>
            <div className="space-y-2 mt-2">
              <h3 className="text-3xl font-bold">{paquete.title}</h3>
              <p className="text-xl font-semibold mb-2">${paquete.price}</p>

            </div>
            <div className='flex flex-col'>
                <p>Metodos de Pago:</p>
                
                <button onClick={handleBuy} className="bg-[--inactive-button-bg] text-black px-3 py-1 rounded-full mb-2">Mercadopago</button>
                {preferenceId && <Wallet initialization={{ preferenceId, redirectMode: "modal" }}  />}
                {/* <button
                className="py-2 w-full bg-emerald-600 rounded-xl"
                onClick={handleBuy}
                >
                Comprar con Mercado Pago
                </button> */}
                <button className="bg-[--inactive-button-bg] text-black px-3 py-1 rounded-full">Crowdfunding</button>
            </div>
        </article>
      );
}

export default Product
