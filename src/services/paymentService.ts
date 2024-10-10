import axios from "axios";

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

const API_URL = import.meta.env.VITE_API_URL;

export const postPaymentUser = async (
    token: string,
    values: PaymentForm
): Promise<PaymentResponse | null> => {
    try {
        const response = await axios.post(`${API_URL}/payments`,
            {
                amount: values.amount,
                paymentType: values.paymentType,
                date: values.date,
                userId: values.userId,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        return response.data;
    } catch (error) {
        console.error("Error al procesar el pago:", error);
        return null;
    }
};
