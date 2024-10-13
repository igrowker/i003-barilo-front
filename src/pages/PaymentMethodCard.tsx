import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom';

const PaymentMethodCard = () => {

    const { t } = useTranslation()

    const navigate = useNavigate();

    const location = useLocation();
    const { stepOneData, stepTwoData, stepThreeData, stepFourData } = location.state || {};
    const [method, setCardNumber] = useState('');

    console.log(stepOneData, stepTwoData, stepThreeData, stepFourData);

    const handlePaymentMethodClick = () => {
        navigate(`/payment`, {
            state: { stepOneData, stepTwoData, stepThreeData, stepFourData, method },
          });
      };

    type Focused = 'number' | 'expiry' | 'cvc' | 'name' | undefined;

    const [state, setState] = useState({
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        focus: undefined as Focused
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target; // Desestructuración para obtener el nombre y el valor
        setState((prevState) => ({
            ...prevState,
            [name]: value
        }));

        // Si el nombre del input es "number", actualiza cardNumber
        if (name === 'number') {
            setCardNumber(value);
        }
    }

    const handleFocusChange = (e) => {
        setState({
            ...state,
            focus : e.target.name
        })
    }


    return (
        <div className="card md:mx-36 lg:mx-44 flex flex-col justify-center items-center">
            <div className="flex justify-center items-center my-8">
                <button className="absolute left-6 pb-1 text-[--secondary-celeste] text-2xl" onClick={() => navigate(-1)}><IoIosArrowBack /></button>
                <h1 className="text-2xl text-[--secondary-celeste] font-['League_Spartan'] font-semibold">{t('views_payment.payment_method_card.title')}</h1>
            </div>
            <div className="card-body w-full justify-center flex flex-col">

                <Cards
                    number={state.number}
                    name={state.name}
                    expiry={state.expiry}
                    cvc={state.cvc}
                    focused={state.focus}
                />
                <form className='mt-6 mx-6  2xl:max-w-5xl 2xl:mx-96'>
                    <div className="form-group flex flex-col">
                        <label htmlFor="name">{t('views_payment.payment_method_card.cardholder_name')}</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            maxLength={30}
                            className="form-control h-11 mt-2 mb-6 rounded-3xl bg-[#ECF1FF] pl-6 text-xl font-['League_Spartan'] text-[--secondary-celeste]"
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                    </div>
                    <div className="form-group flex flex-col">
                        <label htmlFor="number">{t('views_payment.payment_method_card.number_card')}</label>
                        <input
                            type="text"
                            name="number"
                            id="number"
                            maxLength={16}
                            className="form-control h-11 mt-2 mb-6 rounded-3xl bg-[#ECF1FF] pl-6 text-xl font-['League_Spartan'] text-[--secondary-celeste]"
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                    </div>
                    <div className="form-row flex justify-between">
                        <div className="form-group col-md-6 flex flex-col">
                            <label htmlFor="expiry">{t('views_payment.payment_method_card.expiration_date')}</label>
                            <input
                                type="text"
                                name="expiry"
                                id="expiry"
                                maxLength={4}
                                className="form-control w-36 h-11 mt-2 mb-6 rounded-3xl bg-[#ECF1FF] pl-6 text-xl font-['League_Spartan'] text-[--secondary-celeste]"
                                onChange={handleInputChange}
                                onFocus={handleFocusChange}
                            />
                        </div>
                        <div className="form-group col-md-6 flex flex-col">
                            <label htmlFor="cvc">{t('views_payment.payment_method_card.cvc')}</label>
                            <input
                                type="text"
                                name="cvc"
                                id="cvc"
                                maxLength={4}
                                className="form-control w-28 h-11 mt-2 mb-6 rounded-3xl bg-[#ECF1FF] pl-6 text-xl font-['League_Spartan'] text-[--secondary-celeste]"
                                onChange={handleInputChange}
                                onFocus={handleFocusChange}
                            />
                        </div>
                    </div>
                    
                    <div className="flex justify-center py-10">
                        <button onClick={() => handlePaymentMethodClick()} className="w-64 h-11 bg-[--secondary-celeste] text-[--active-button-text] rounded-3xl">{t('views_payment.payment_method_card.save_card')}</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default PaymentMethodCard;