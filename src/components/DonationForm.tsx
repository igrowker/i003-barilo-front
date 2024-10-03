import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { useState } from "react"

const DonationForm = () => {
    const [amount, setAmount] = useState(1)
    const [preferenceId, setPreferenceId] = useState(null)

    initMercadoPago('APP_USR-43b5f444-ef02-4e1e-b9af-4ef60cd3be5e')

    const handleInputChange = (e) => {
        setAmount(e.target.value);
    }

    const createPreference = async () => {
        try{
            const response = await axios.post("http://localhost:3000/create_preference", {
                description: "Gracias por ayudarnos!",
                price: amount,
                quantity: 1,
            });

            const {id} = response.data;
            return id;
        }catch(error){
            console.log(error)
        }
    }

    const handleBuy = async ()=>{
        const id = await createPreference();
        if(id){
            setPreferenceId(id)
        }
    }

  return (
    <div  className="flex flex-col mt-5 bg-[--inactive-button-bg] p-8 rounded-2xl">
        <h1>Ayudanos a cumplir este sueño✈</h1>
        <div className="flex flex-col mt-1">
          <input type="number" min="1" value={amount} onChange={handleInputChange}/>
        </div>
        <div className="flex flex-col items-center">
            <button onClick={handleBuy} className="bg-[--secondary-celeste] px-4 py-2 rounded-full mt-3">Donar!</button>
            {preferenceId && <Wallet initialization={{preferenceId, redirectMode: "modal"}} />}
        </div>
    </div>
  )
}

export default DonationForm
