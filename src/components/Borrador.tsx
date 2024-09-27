import { Link } from "react-router-dom";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsCalendarCheck } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FaRegClock } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";

function Borrador() {
  return (
    <>
      <Swiper
        className="mySwiper"
        slidesPerView={1}
        spaceBetween={1}
        centeredSlides={false}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={lodging.length > 4}
        speed={200}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            loop: lodging.length > 2,
          },
          1024: {
            slidesPerView: 3,
            loop: lodging.length > 3,
          },
          1920: {
            slidesPerView: 4,
            loop: lodging.length > 4,
          },
        }}
      >
        {lodging.map((evento) => (
          <SwiperSlide key={evento.id} className="w-full px-6 pb-4">
            <div
              className="relative p-3 bg-gray-50 rounded-3xl"
              style={{ boxShadow: "0px 4px 10px 0px #00000040" }}
            >
              {evento.estado === "finalizado" && (
                <div
                  className="absolute font-bold text-white uppercase rounded-lg top-5 left-5 bg-gradient-red"
                  style={{ padding: "1px 10px", fontSize: "9px" }}
                >
                  <p>Finalizado</p>
                </div>
              )}
              <Link to={`/event-detail/${evento.id}`}>
                <img
                  className="object-cover object-center w-full mb-3 max-h-72 rounded-2xl"
                  src={evento.imagen}
                  alt="content"
                  loading="lazy"
                />
                <h2 className="mb-4 text-sm font-bold text-justify md:text-base gradient-red capitalize-first hover:text-orange-600">
                  {evento.titulo}
                </h2>
              </Link>
              <div className="flex justify-between pb-3 text-gray-500 font-lato">
                <div className="flex gap-1">
                  <BsCalendarCheck className="text-orangeprimary" />
                  <p className="flex text-xs">{evento.fecha}</p>
                </div>
                <div className="flex gap-1">
                  <FaRegClock className="text-orangeprimary" />
                  <p className="flex text-xs">{evento.hora}</p>
                </div>
              </div>
              <div className="flex justify-between text-gray-500 font-lato">
                <div className="flex gap-1">
                  <GoLocation className="text-orangeprimary" />
                  <p className="flex text-xs">{evento.ubicacion}</p>
                </div>
                <div className="flex gap-1">
                  <BiDollar className="text-orangeprimary" />
                  <p className="flex text-xs">{evento.precio}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Borrador;
