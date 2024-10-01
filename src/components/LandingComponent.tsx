import { CustomButton } from "@/components/CustomButton";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { RiGroupLine } from "react-icons/ri";
import { Input } from "@/components/ui/input";
import snowImage from "@/assets/images/snow.webp";
import snowImage2 from "@/assets/images/snow2.webp";
import snowImage3 from "@/assets/images/snow3.webp";
import { Link } from "react-router-dom";
import ScrollToTopButton from "./ScrollToTopButton";

export default function LandingComponent() {
  return (
    <>
      <div className="">
        <main className="flex-1">
        <section className="w-full py-12 text-white md:py-24 lg:py-32 xl:py-36 bg-secondary-pink">
  <div className="container px-4 mx-auto md:px-6">
    <div className="flex flex-col items-center space-y-4 text-center">
      <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl font-primary">
        ¡Bienvenidos, tu aventura de egresados está por comenzar!
      </h1>
      <p className="mx-auto max-w-[900px] text-md md:text-2xl lg:text-base xl:text-xl font-secondary text-white">
        En Barilo, entendemos que tu viaje de egresados es mucho más que una simple escapada; es un momento significativo que marca el cierre de una etapa y el inicio de nuevas aventuras. Nuestra misión es hacer que esta experiencia única sea accesible, inclusiva y, sobre todo, inolvidable para todos.
      </p>
      <p className="mx-auto max-w-[900px] text-md md:text-2xl lg:text-base xl:text-xl font-secondary text-white">
        Imagina explorar destinos impresionantes con tus amigos más cercanos, creando recuerdos que durarán toda la vida. En Barilo, nos comprometemos a ofrecerte una amplia gama de destinos variados que se adaptan a todos los gustos y presupuestos.
      </p>
      <div className="flex space-x-4">
        <Link to="/login">
          <CustomButton className="w-full bg-white text-secondary-pink hover:bg-secondary-purple">
            Inicia sesión
          </CustomButton>
        </Link>
        <Link to="/register">
          <CustomButton className="text-white bg-transparent border border-white hover:bg-white hover:text-secondary-pink">
            Regístrate
          </CustomButton>
        </Link>
      </div>
    </div>
  </div>
</section>
          <section
            id="characteristic"
            className="w-full py-12 bg-white md:py-24 lg:py-32"
          >
            <div className="container px-4 mx-auto md:px-6">
              <h2 className="mb-12 text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl text-primary-celeste font-primary">
                Características
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <FaRegPaperPlane className="mb-5 text-3xl text-primary-blue md:text-7xl" />
                  <h3 className="mb-2 text-xl font-bold primary-celeste">
                    Destinos variados
                  </h3>
                  <p className="text-secondary-blue font-secondary">
                    Ofrecemos una amplia gama de destinos para adaptarnos a
                    todos los gustos y presupuestos.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <FaRegCreditCard className="mb-5 text-3xl text-primary-blue md:text-7xl" />
                  <h3 className="mb-2 text-xl font-bold text-primary-celeste">
                    Planes de pago flexibles
                  </h3>
                  <p className="text-secondary-blue font-secondary">
                    Opciones de pago adaptadas a diferentes situaciones
                    económicas.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <RiGroupLine className="mb-5 text-3xl text-primary-blue md:text-7xl" />
                  <h3 className="mb-2 text-xl font-bold text-primary-celeste">
                    Grupos inclusivos
                  </h3>
                  <p className="text-secondary-blue font-secondary">
                    Fomentamos la integración y la diversidad en nuestros grupos
                    de viaje.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section
            id="personalized"
            className="w-full py-12 md:py-24 lg:py-32 bg-secondary-celeste"
          >
            <div className="container px-4 mx-auto md:px-6">
              <h2 className="mb-12 text-3xl font-bold tracking-tighter text-center text-white sm:text-4xl md:text-5xl font-primary">
                Personaliza tu Viaje
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 text-2xl font-bold bg-white rounded-full text-primary-purple">
                    1
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    Crea tu grupo
                  </h3>
                  <p className="text-white font-secondary">
                    ¡Dale un nombre a tu aventura! Selecciona cuántos amigos te
                    acompañarán en esta emocionante travesía.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 text-2xl font-bold bg-white rounded-full text-primary-purple">
                    2
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    Elije el destino
                  </h3>
                  <p className="text-white font-secondary">
                    ¡Aventúrate! Escoge tu medio de transporte ideal, desde
                    cómodos buses hasta emocionantes vuelos en avión.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 text-2xl font-bold bg-white rounded-full text-primary-purple">
                    3
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    Selecciona tu hospedaje
                  </h3>
                  <p className="text-white font-secondary">
                    Descubre las opciones de alojamiento más increíbles que
                    tenemos para ti y tu grupo. ¡Te espera un lugar perfecto
                    para descansar!
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 text-2xl font-bold bg-white rounded-full text-primary-purple">
                    4
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    Crea tu plan
                  </h3>
                  <p className="text-white font-secondary">
                    Personaliza tu itinerario con actividades emocionantes y
                    deliciosas comidas que se adapten a tus gustos.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 text-2xl font-bold bg-white rounded-full text-primary-purple">
                    5
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    Confirma tu compra
                  </h3>
                  <p className="text-white font-secondary">
                    Revisa todos los detalles de tu viaje para asegurarte de que
                    nada importante se quede fuera.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 text-2xl font-bold bg-white rounded-full text-primary-purple">
                    6
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    ¡Disfruta tu viaje!
                  </h3>
                  <p className="text-white font-secondary">
                    ¡Sumérgete en una experiencia inolvidable junto a tus
                    compañeros de colegio!
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section
            id="experience"
            className="w-full py-12 bg-white md:py-24 lg:py-32"
          >
            <div className="container px-4 mx-auto md:px-6">
              <h2 className="mb-12 text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl text-primary-celeste font-primary">
                Experiencias Barilo
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <img
                  src={snowImage}
                  alt="Grupo esquiando"
                  className="object-cover w-full transition-transform transform rounded-lg shadow-lg h-96 hover:scale-105 hover:shadow-xl"
                />
                <img
                  src={snowImage3}
                  alt="Amigos en la nieve"
                  className="object-cover w-full transition-transform transform rounded-lg shadow-lg h-96 hover:scale-105 hover:shadow-xl"
                />
                <img
                  src={snowImage2}
                  alt="Cartel de Bariloche"
                  className="object-cover w-full mx-auto transition-transform transform rounded-lg shadow-lg h-96 hover:scale-105 hover:shadow-xl md:col-span-2 lg:col-span-1"
                />
              </div>
            </div>
          </section>
          <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary-pink">
  <div className="container px-4 mx-auto md:px-6">
    <div className="flex flex-col items-center space-y-4 text-center">
      <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl font-primary">
        ¿Necesitas contactarte con nosotros?
      </h2>
      <div className="w-full max-w-sm space-y-2">
        <form className="flex flex-col gap-2 text-left">
          <label htmlFor="email" className="text-white visually-hidden">Déjanos tu correo electrónico</label>
          <Input
            id="email"
            type="email"
            placeholder="Tu correo electrónico"
            className="bg-white font-secondary focus:bg-white"
          />
          <CustomButton
            type="submit"
            className="w-full mt-3 bg-white text-secondary-pink hover:bg-secondary-purple"
          >
            Enviar
          </CustomButton>
        </form>
      </div>
    </div>
  </div>
</section>
        </main>
        <ScrollToTopButton />
      </div>
    </>
  );
}
