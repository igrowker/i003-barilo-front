import { IoIosArrowBack } from "react-icons/io";
import { CiCreditCard1 } from "react-icons/ci";
import { FaRegCircle } from "react-icons/fa";
import { SiMercadopago } from "react-icons/si";
import { RiPaypalLine } from "react-icons/ri";
import { Bitcoin } from "lucide-react";
import { useNavigate } from 'react-router-dom';


function PaymentMethod() {
    const navigate = useNavigate();

    const handlePaymentMethodClick = (method: string) => {
        navigate(`/payment-method/${method}`);
      };
  return (
    <div>
        <div className="flex justify-center items-center my-8">
            <button className="absolute left-6 pb-1 text-[--secondary-celeste] text-2xl"><IoIosArrowBack /></button>
            <h1 className="text-2xl text-[--secondary-celeste] font-['League_Spartan'] font-semibold">Método De Pago</h1>
        </div>
        <div>
            <h2 className="mx-8 text-xl font-['League_Spartan'] my-1">Tarjeta De Crédito Y Débito</h2>
            <div onClick={() => handlePaymentMethodClick('card')} className="flex items-center justify-between mx-8 bg-[#ECF1FF] rounded-2xl h-11 text-[--secondary-celeste] mb-8">
                <div className="flex pl-2 items-center">
                    <CiCreditCard1 className="text-2xl"/>
                    <h2 className="text-xl text-center pl-2 font-['League_Spartan']">Agregar Nueva Tarjeta</h2>
                </div>
                <FaRegCircle className="mr-2"/>
            </div>
            <h2 className="mx-8 text-xl font-['League_Spartan'] my-1">Más Opciones De Pago</h2>
            <div onClick={() => handlePaymentMethodClick('mercado-pago')} className="flex items-center justify-between mx-8 bg-[#ECF1FF] rounded-2xl h-11 text-[--secondary-celeste] my-2">
                <div className="flex pl-2 items-center">
                    <SiMercadopago  className="text-2xl"/>
                    <h2 className="text-xl text-center pl-2 font-['League_Spartan']">MercadoPago</h2>
                </div>
                <FaRegCircle className="mr-2"/>
            </div>
            <div onClick={() => handlePaymentMethodClick('paypal')} className="flex items-center justify-between mx-8 bg-[#ECF1FF] rounded-2xl h-11 text-[--secondary-celeste] my-2">
                <div className="flex pl-2 items-center">
                    <RiPaypalLine className="text-2xl"/>
                    <h2 className="text-xl text-center pl-2 font-['League_Spartan']">Paypal</h2>
                </div>
                <FaRegCircle className="mr-2"/>
            </div>
            <div onClick={() => handlePaymentMethodClick('personal-pay')} className="flex items-center justify-between mx-8 bg-[#ECF1FF] rounded-2xl h-11 text-[--secondary-celeste] my-2">
                <div className="flex pl-2 items-center">
                    <Bitcoin className="text-2xl"/>
                    <h2 className="text-xl text-center pl-2 font-['League_Spartan']">Personal Pay</h2>
                </div>
                <FaRegCircle className="mr-2"/>
            </div>
        </div>
    </div>
  )
}

export default PaymentMethod