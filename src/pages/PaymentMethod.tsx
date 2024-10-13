import { IoIosArrowBack } from "react-icons/io";
import { CiCreditCard1 } from "react-icons/ci";
import { FaRegCircle } from "react-icons/fa";
import { SiMercadopago } from "react-icons/si";
import { RiPaypalLine } from "react-icons/ri";
import { Bitcoin } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom';

function PaymentMethod() {
    const { t } = useTranslation()
    const navigate = useNavigate();
    const location = useLocation();
    const { stepOneData, stepTwoData, stepThreeData, stepFourData } = location.state || {};

    console.log(stepOneData, stepTwoData, stepThreeData, stepFourData);

    const handlePaymentMethodClick = (method: string) => {
        navigate(`/payment-method/${method}`, {
            state: { stepOneData, stepTwoData, stepThreeData, stepFourData },
          });
      };
  return (
    <div className="md:mx-28 lg:mx-44 2xl:mx-72">
        <div className="flex justify-center items-center my-8">
            <button className="absolute left-6 pb-1 text-[--secondary-celeste] text-2xl" onClick={() => navigate(-1)}><IoIosArrowBack /></button>
            <h1 className="text-2xl text-[--secondary-celeste] font-['League_Spartan'] font-semibold">{t('views_payment.payment_method.title')}</h1>
        </div>
        <div>
            <h2 className="mx-8 text-xl font-['League_Spartan'] my-1">{t('views_payment.payment_method.caption_1')}</h2>
            <div onClick={() => handlePaymentMethodClick('card')} className="flex items-center justify-between mx-8 bg-[#ECF1FF] rounded-2xl h-11 text-[--secondary-celeste] mb-8">
                <div className="flex pl-2 items-center">
                    <CiCreditCard1 className="text-2xl"/>
                    <h2 className="text-xl text-center pl-2 font-['League_Spartan']">{t('views_payment.payment_method.option_1')}</h2>
                </div>
                <FaRegCircle className="mr-2"/>
            </div>
            <h2 className="mx-8 text-xl font-['League_Spartan'] my-1">{t('views_payment.payment_method.caption_2')}</h2>
            <div onClick={() => handlePaymentMethodClick('mercado-pago')} className="flex items-center justify-between mx-8 bg-[#ECF1FF] rounded-2xl h-11 text-[--secondary-celeste] my-2">
                <div className="flex pl-2 items-center">
                    <SiMercadopago  className="text-2xl"/>
                    <h2 className="text-xl text-center pl-2 font-['League_Spartan']">{t('views_payment.payment_method.option_2')}</h2>
                </div>
                <FaRegCircle className="mr-2"/>
            </div>
            <div onClick={() => handlePaymentMethodClick('paypal')} className="flex items-center justify-between mx-8 bg-[#ECF1FF] rounded-2xl h-11 text-[--secondary-celeste] my-2">
                <div className="flex pl-2 items-center">
                    <RiPaypalLine className="text-2xl"/>
                    <h2 className="text-xl text-center pl-2 font-['League_Spartan']">{t('views_payment.payment_method.option_3')}</h2>
                </div>
                <FaRegCircle className="mr-2"/>
            </div>
            <div onClick={() => handlePaymentMethodClick('personal-pay')} className="flex items-center justify-between mx-8 bg-[#ECF1FF] rounded-2xl h-11 text-[--secondary-celeste] my-2">
                <div className="flex pl-2 items-center">
                    <Bitcoin className="text-2xl"/>
                    <h2 className="text-xl text-center pl-2 font-['League_Spartan']">{t('views_payment.payment_method.option_4')}</h2>
                </div>
                <FaRegCircle className="mr-2"/>
            </div>
        </div>
    </div>
  )
}

export default PaymentMethod