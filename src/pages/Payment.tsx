import PaymentCard from "@/components/PaymentCard"

const activity = {
  name: "Sesión de sky",
  info: "Jornada de sky - Pack Bariló",
  price: "100",
  destinationName: "Jornada de sky - Pack Bariló",
  date: "Lun 24, Nov, 2024 / 10:00 a.m.",
  duration:"30 Minutos"
  }
;



function Payment() {
  return (
    <div>
      <div className="bg-[--secondary-celeste] h-48 items-center flex flex-col justify-between">
        <h2 className="text-2xl pt-8 text-[--active-button-text] font-[--font-primary]">Pago</h2>
        <h1 className="pb-8 text-4xl text-[--active-button-text] font-['League_Spartan'] font-bold">${activity.price}</h1>
      </div>
      <div>
        <PaymentCard name={activity.name} info={activity.info}></PaymentCard>
      </div>
      <div className="">
        <div className="flex flex-col px-4">
          <hr className="bg-[--secondary-celeste] h-px border-none mb-2" />
            <div className="flex justify-between px-4 py-2 items-center">
              <h1 className="text-sm font-[--font-primary] text-[--secondary-celeste]">Fecha / Hora</h1>
              <p className="text-xs font-[--font-primary]">{activity.date}</p>
            </div>
            <div className="flex justify-between px-4 py-2 items-center">
              <h1 className="text-sm font-[--font-primary] text-[--secondary-celeste]">Duracion</h1>
              <p className="text-xs font-[--font-primary]">{activity.duration}</p>
            </div>
            <div className="flex justify-between px-4 py-2 items-center">
              <h1 className="text-sm font-[--font-primary] text-[--secondary-celeste]">Reserva para</h1>
              <p className="text-xs font-[--font-primary]">Grupo A</p>
            </div>
            <hr className="bg-[--secondary-celeste] h-px border-none my-2" />
            <div className="flex justify-between px-4 py-2 items-center">
              <h1 className="text-sm font-[--font-primary] text-[--secondary-celeste]">Cantidad</h1>
              <p className="text-xs font-[--font-primary]">${activity.price}</p>
            </div>
            <div className="flex justify-between px-4 py-2 items-center">
              <h1 className="text-sm font-[--font-primary] text-[--secondary-celeste]">Duracion</h1>
              <p className="text-xs font-[--font-primary]">{activity.duration}</p>
            </div>
            <div className="flex justify-between px-4 py-2 items-center">
              <h1 className="text-sm font-[--font-primary] text-[--secondary-celeste]">Total</h1>
              <p className="text-xl font-[--font-primary]">${activity.price}</p>
            </div>
            <hr className="bg-[--secondary-celeste] h-px border-none my-2" />
            <div className="flex justify-between px-4 py-2 items-center">
              <h1 className="text-sm font-[--font-primary] text-[--secondary-celeste]">Metodo de pago</h1>
              <div className="flex">
                <p className="text-xs font-[--font-primary] mr-2">Tarjeta</p>
                <a href="/payment-method" className="text-xs font-[--font-primary] text-[--secondary-celeste]">Cambiar</a>
              </div>
            </div>
        </div>
      </div>
      <div className="flex justify-center py-10">
        <button className="w-64 h-11 bg-[--secondary-celeste] text-[--active-button-text] rounded-3xl">Pagar ahora</button>
      </div>
    </div>
  )
}

export default Payment