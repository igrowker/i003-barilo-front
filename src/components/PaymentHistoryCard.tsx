import img1 from '../assets/images/excursionCard.webp';

interface PaymentProps {
    amount: number;
    type: string;
    date: string;
  }

function PaymentHistoryCard({amount, type, date}: PaymentProps){   

    return (
      <div className='flex py-1 w-60'>
        <div className="flex flex-col justify-between w-full p-2 bg-[#0098EF] shadow-md rounded-sm">
          <div className='flex justify-between w-full pb-1'>
            <p className='text-base text-[#E4E4E4] font-[--font-primary]'>Pago</p>
            <h1 className='text-base text-[#E4E4E4] font-[--font-primary]'>${amount}</h1>
          </div>
          <div className='flex justify-between w-full'>
            <h2 className='text-xs text-[#E4E4E4] font-[--font-primary]'>{type}</h2>
            <h2 className='text-xs text-text-[#E4E4E4] font-[--font-primary]'>{date}</h2>
          </div>
        </div>
      </div>
    )
  }
  
  export default PaymentHistoryCard