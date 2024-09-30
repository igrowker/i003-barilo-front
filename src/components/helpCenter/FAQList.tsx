import { FAQItemProps } from "@/types/HelpCenter";
import FAQItem from "./FAQItem";

const faqs: FAQItemProps[] = [
  {
    index: 1,
    question: "¿Cómo puedo crear un viaje de egresados en este sitio?",
    answer:
      "Para crear un viaje de egresados, debes registrarte en nuestro sitio y completar el formulario de creación de viaje. Nuestro equipo se encargará de ayudarte a planificar y organizar tu viaje.",
  },
  {
    index: 2,
    question: "¿Cuánto cuesta crear un viaje de egresados en este sitio?",
    answer:
      "El costo de crear un viaje de egresados en nuestro sitio varía dependiendo del tipo de viaje y los servicios que desees incluir. Nuestro equipo se encargará de proporcionarte un presupuesto personalizado para tu viaje.",
  },
  {
    index: 3,
    question: "¿Qué tipo de viajes de egresados puedo crear en este sitio?",
    answer:
      "Puedes crear viajes de egresados de todo tipo, desde viajes de aventura hasta viajes de relax en la playa. Nuestro sitio te permite personalizar tu viaje según tus intereses y preferencias.",
  },
  {
    index: 4,
    question: "¿Cómo puedo pagar por mi viaje de egresados?",
    answer:
      "Puedes pagar por tu viaje de egresados mediante tarjeta de crédito o débito, o mediante transferencia bancaria. Nuestro sitio utiliza un sistema de pago seguro para proteger tus datos.",
  },
  {
    index: 5,
    question:
      "¿Qué pasa si necesito cancelar o modificar mi viaje de egresados?",
    answer:
      "Si necesitas cancelar o modificar tu viaje de egresados, debes notificarnos con anticipación para que podamos ayudarte a hacer los cambios necesarios. Es posible que se apliquen ciertas restricciones o cargos por cancelación o modificación.",
  },
  {
    index: 6,
    question:
      "¿Cómo puedo contactar con el equipo de soporte si tengo alguna pregunta o problema?",
    answer:
      "Puedes contactar con nuestro equipo de soporte mediante correo electrónico o teléfono. Estamos disponibles para ayudarte a resolver cualquier pregunta o problema que tengas.",
  },
  {
    index: 7,
    question:
      "¿Qué tipo de documentación necesito para crear un viaje de egresados?",
    answer:
      "Necesitarás proporcionar cierta documentación, como tu pasaporte y un comprobante de pago, para crear un viaje de egresados. Nuestro equipo se encargará de guiarte a través del proceso de documentación.",
  },
  {
    index: 8,
    question:
      "¿Cómo puedo compartir mi viaje de egresados con mis amigos y familiares?",
    answer:
      "Puedes compartir tu viaje de egresados con tus amigos y familiares mediante redes sociales o correo electrónico. Nuestro sitio te permite compartir un enlace a tu viaje para que otros puedan unirse.",
  },
];

const FAQList: React.FC = () => {
  return (
    <ul className="space-y-5 mt-4 mb-14 min-w-[330px] max-w-[500px]">
      {faqs.map((faq) => (
        <FAQItem key={faq.index} {...faq} />
      ))}
    </ul>
  );
};

export default FAQList;
