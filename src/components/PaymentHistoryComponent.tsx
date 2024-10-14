import { useEffect, useState } from 'react';
import img1 from '../assets/images/excursionCard.webp';
import PaymentHistoryCard from './PaymentHistoryCard';
import { getPaymentHistoryUser } from '@/services/paymentService';
import { useAuth } from '@/context/AuthProvider';


interface PaymentHistoryResponse {
    id: number;
    amount: number;
    paymentType: string;
    date: Date;
  }

function PaymentHistoryComponent(){   

    const [payments, setPayments] = useState<PaymentHistoryResponse[] | null>(null);
    const [loading, setLoading] = useState(true);
    const { token } = useAuth();
  
    useEffect(() => {
        const fetchActivity = async () => {
            setLoading(true);
            try {
              const allPayments = await getPaymentHistoryUser(token); // Llama a la API
              if (allPayments) {
                setPayments(allPayments && Array.isArray(allPayments) ? allPayments : []);
                console.log("asdasd")
                console.log(payments)
              } else {
                setPayments([]); // Si es null, se asegura de que payments sea un array vacío
              }
            } catch (error) {
              console.error("Error fetching activity:", error);
              setPayments(null); // Maneja errores estableciendo null
            } finally {
              setLoading(false); // Detén el estado de carga al finalizar
            }
          };
          if (token) { // Asegúrate de que el token esté disponible
            fetchActivity();
          }
    }, [token]);
  


    return (
        <div className='absolute px-2 w-64 right-5 top-20 rounded-lg bg-white shadow-2xl h-96 overflow-y-auto'>
            {Array.isArray(payments) ? (
                payments.length > 0 ? (
                    payments.map((payment) => (
                        <div key={payment.id}>
                            <PaymentHistoryCard 
                                amount={payment.amount} 
                                type={payment.paymentType} 
                                date={new Date(payment.date).toLocaleString()} 
                            />
                        </div>
                    ))
                ) : (
                    <div className='flex justify-center items-center h-full'>No hay pagos realizados.</div> // Mensaje cuando payments está vacío
                )
            ) : (
                <div className='flex justify-center items-center h-full'>Cargando...</div> // Mensaje en caso de que payments no sea un array
            )}
        </div>
     
    )
  }
  
  export default PaymentHistoryComponent