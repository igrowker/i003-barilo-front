import axios from 'axios';

interface PaymentResponse {
    id: number;
    amount: number;
    paymentType: string;
    date: Date;
    userId: number;
}

type PaymentForm = {
    amount: number;
    paymentType: string;
    date: Date;
    userId: number;
}

export const postPaymentUser = async (token: string , values: PaymentForm,): Promise<PaymentResponse | null> => {
  try {
    console.log("aaaaaa")
    const response = await axios.post('https://barilo.onrender.com/barilo/api/payments',
        {
            amount: values.amount,
            paymentType: values.paymentType,
            date: values.date,
            userId: values.userId,
        }, {
      headers: {
        Authorization: `Bearer ${token}`, // Pasar el token en el header
      },
    });

    return response.data; // Retorna la información del perfil
  } catch (error) {
    console.error('Error al obtener el perfil del usuario:', error);
    return null;
  }
};