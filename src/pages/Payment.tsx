import PaymentCard from "@/components/PaymentCard"
import { useTranslation } from 'react-i18next'
import axios from 'axios';
import { useUserProfile } from "@/hooks/useUserProfile";

function Payment() {
  const { t } = useTranslation()

  const activity = {
    name: t("views_payment.activity.name"),
    info: t("views_payment.activity.info"),
    price: t("views_payment.activity.price"),
    destinationName: t("views_payment.activity.destination_name"),
    date: t("views_payment.activity.date"),
    duration: t("views_payment.activity.duration")
  }
  const { profile } = useUserProfile();

  const paymentData = {
    amount: 100000,
    paymentType: "Tarjeta",
    date: "2024-10-08T14:38:45.949Z",
    userId: 28,
  };


  const handlePayment = async () => {
    try {
      const response = await axios.post('https://tu-backend.com/api/payments', paymentData);
      console.log('Pago exitoso:', response.data);
    } catch (error) {
      console.error('Error al realizar el pago:', error);
    }
  };

  
  return (
    <div>
      <div className="bg-[--secondary-celeste] h-48 items-center flex flex-col justify-between">
        <h2 className="text-2xl pt-8 text-[--active-button-text] font-[--font-primary]">{t('views_payment.h2_pay')}</h2>
        <h1 className="pb-8 text-4xl text-[--active-button-text] font-['League_Spartan'] font-bold">{activity.price}</h1>
      </div>
      <div>
        <PaymentCard name={activity.name} info={activity.info}></PaymentCard>
      </div>
      <div className="">
        <div className="flex flex-col px-4">
          <hr className="bg-[--secondary-celeste] h-px border-none mb-2" />
            <div className="flex items-center justify-between px-4 py-2">
              <h1 className="text-sm font-[--font-primary] text-[--secondary-celeste]">{t('views_payment.keyInfo.date')}</h1>
              <p className="text-xs font-[--font-primary]">{activity.date}</p>
            </div>
            <div className="flex items-center justify-between px-4 py-2">
              <h1 className="text-sm font-[--font-primary] text-[--secondary-celeste]">{t('views_payment.keyInfo.duration')}</h1>
              <p className="text-xs font-[--font-primary]">{activity.duration}</p>
            </div>
            <div className="flex items-center justify-between px-4 py-2">
              <h1 className="text-sm font-[--font-primary] text-[--secondary-celeste]">{t('views_payment.keyInfo.reservation.key')}</h1>
              <p className="text-xs font-[--font-primary]">{t('views_payment.keyInfo.reservation.value')}</p>
            </div>
            <hr className="bg-[--secondary-celeste] h-px border-none my-2" />
            <div className="flex items-center justify-between px-4 py-2">
              <h1 className="text-sm font-[--font-primary] text-[--secondary-celeste]">{t('views_payment.keyInfo.amount')}</h1>
              <p className="text-xs font-[--font-primary]">${activity.price}</p>
            </div>
            <div className="flex items-center justify-between px-4 py-2">
              <h1 className="text-sm font-[--font-primary] text-[--secondary-celeste]">{t('views_payment.keyInfo.duration')}</h1>
              <p className="text-xs font-[--font-primary]">{activity.duration}</p>
            </div>
            <div className="flex items-center justify-between px-4 py-2">
              <h1 className="text-sm font-[--font-primary] text-[--secondary-celeste]">{t('views_payment.keyInfo.total')}</h1>
              <p className="text-xl font-[--font-primary]">${activity.price}</p>
            </div>
            <hr className="bg-[--secondary-celeste] h-px border-none my-2" />
            <div className="flex items-center justify-between px-4 py-2">
              <h1 className="text-sm font-[--font-primary] text-[--secondary-celeste]">{t('views_payment.keyInfo.payment_method.h1')}</h1>
              <div className="flex">
                <p className="text-xs font-[--font-primary] mr-2">{t('views_payment.keyInfo.payment_method.p')}</p>
                <a href="/payment-method" className="text-xs font-[--font-primary] text-[--secondary-celeste]">{t('views_payment.keyInfo.payment_method.a')}</a>
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