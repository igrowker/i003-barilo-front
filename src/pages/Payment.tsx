import PaymentCard from "@/components/PaymentCard"
import { useTranslation } from 'react-i18next'
import axios from 'axios';
import { useUserProfile } from "@/hooks/useUserProfile";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthProvider";

const API_URL = import.meta.env.VITE_API_URL;

function Payment() {
  const { t } = useTranslation()
  const location = useLocation();
  const { token } = useAuth();
  const { stepOneData, stepTwoData, stepThreeData, stepFourData } = location.state || {};
  const { method } = location.state || null;
  const navigate = useNavigate();

  console.log(stepOneData, stepTwoData, stepThreeData, stepFourData, method);

  const activity = {
    name: t("views_payment.activity.name"),
    info: t("views_payment.activity.info"),
    price: t("views_payment.activity.price"),
    destinationName: t("views_payment.activity.destination_name"),
    date: t("views_payment.activity.date"),
    duration: t("views_payment.activity.duration")
  }
  const { profile } = useUserProfile();

  let price : number;

  price = stepFourData.activities[0].price + stepFourData.restaurants[0].price + stepTwoData.selectedOutbound.price;

  const paymentData = {
    amount: price,
    paymentType: "card",
    date: new Date(Date.now()).toISOString(),
  };

  const handleChangeMethod = async () => {
    navigate("/payment-method", {
      state: { stepOneData, stepTwoData, stepThreeData, stepFourData },
    });
  };

  const handlePayment = async () => {
    try {
      const response = await axios.post(`${API_URL}/payments`, paymentData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('Pago exitoso:', response);
    } catch (error) {
      console.error('Error al realizar el pago:', error.response ? error.response.data : error.message);
    } finally {
    }
  };

  
  return (
    <div className="pb-16">
      <div className="bg-[--secondary-celeste] h-48 items-center flex flex-col justify-between">
        <h2 className="text-2xl pt-8 text-[--active-button-text] font-[--font-primary]">{t('views_payment.h2_pay')}</h2>
        <h1 className="pb-8 text-4xl text-[--active-button-text] font-['League_Spartan'] font-bold">{paymentData.amount}</h1>
      </div>
      <div>
        <PaymentCard name={stepFourData.restaurants[0].name} info={"Restaurante cinco estrellas"}></PaymentCard>
      </div>
      <div>
        <PaymentCard name={stepFourData.activities[0].name} info={stepFourData.activities[0].description}></PaymentCard>
      </div>
      <div className="">
        <div className="flex flex-col px-4">
          <hr className="bg-[--secondary-celeste] h-px border-none mb-2" />
          {/*
            <div className="flex items-center justify-between px-4 py-2">
              <h1 className="text-sm font-[--font-primary] text-[--secondary-celeste]">{t('views_payment.keyInfo.date')}</h1>
              <p className="text-xs font-[--font-primary]">{activity.date}</p>
            </div>
            <div className="flex items-center justify-between px-4 py-2">
              <h1 className="text-sm font-[--font-primary] text-[--secondary-celeste]">{t('views_payment.keyInfo.duration')}</h1>
              <p className="text-xs font-[--font-primary]">{activity.duration}</p>
            </div>
           */}
            <div className="flex items-center justify-between px-4 py-2">
              <h1 className="text-sm font-[--font-primary] text-[--secondary-celeste]">{t('views_payment.keyInfo.reservation.key')}</h1>
              <p className="text-xs font-[--font-primary]">{stepOneData.groupName}</p>
            </div>
            {/*
            <div className="flex items-center justify-between px-4 py-2">
            <h1 className="text-sm font-[--font-primary] text-[--secondary-celeste]">{t('views_payment.keyInfo.duration')}</h1>
            <p className="text-xs font-[--font-primary]">{activity.duration}</p>
            </div>
            */}
            <hr className="bg-[--secondary-celeste] h-px border-none my-2" />
            <div className="flex items-center justify-between px-4 py-2">
              <h1 className="text-sm font-[--font-primary] text-[--secondary-celeste]">{stepFourData.restaurants[0].name}</h1>
              <p className="text-xs font-[--font-primary]">${stepFourData.restaurants[0].price}</p>
            </div>
            <div className="flex items-center justify-between px-4 py-2">
              <h1 className="text-sm font-[--font-primary] text-[--secondary-celeste]">{stepFourData.activities[0].name}</h1>
              <p className="text-xs font-[--font-primary]">${stepFourData.activities[0].price}</p>
            </div>
            <div className="flex items-center justify-between px-4 py-2">
              <h1 className="text-sm font-[--font-primary] text-[--secondary-celeste]">{stepTwoData.selectedOutbound.companyName}</h1>
              <p className="text-xs font-[--font-primary]">${stepTwoData.selectedOutbound.price}</p>
            </div>
            <div className="flex items-center justify-between px-4 py-2">
              <h1 className="text-sm font-[--font-primary] text-[--secondary-celeste]">{t('views_payment.keyInfo.total')}</h1>
              <p className="text-xl font-[--font-primary]">${paymentData.amount}</p>
            </div>
            <hr className="bg-[--secondary-celeste] h-px border-none my-2" />
            <div className="flex items-center justify-between px-4 py-2">
              <h1 className="text-sm font-[--font-primary] text-[--secondary-celeste]">{t('views_payment.keyInfo.payment_method.h1')}</h1>
              <div className="flex">
                <p className="text-xs font-[--font-primary] mr-2">{method.slice(0, 4)}</p>
                <button onClick={handleChangeMethod} className="text-xs font-[--font-primary] text-[--secondary-celeste]">{t('views_payment.keyInfo.payment_method.a')}</button>
              </div>
            </div>
        </div>
      </div>
      <div className="flex justify-center py-10">
        <button  onClick={handlePayment} className="w-64 h-11 bg-[--secondary-celeste] text-[--active-button-text] rounded-3xl">{t('views_payment.button')}</button>
      </div>
    </div>
  )
}

export default Payment