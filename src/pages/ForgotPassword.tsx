import { Link } from "react-router-dom";
import { ForgotPasswordComponent } from "@/components/ForgotPasswordComponent";
import logo from "@/assets/images/imago.webp";

export default function ForgotPassword() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen px-4 bg-white py-14 md:flex md:justify-center md:items-center">
        <Link to="/">
          <img src={logo} alt="Barilo" className="w-[250px] h-auto cursor-pointer" />
        </Link>
        <section className="flex flex-col justify-center w-full h-auto max-w-[366px] px-4">
          <div className="space-y-4">
            <span className="self-stretch text-[#006BA8] text-[14.92px] font-normal font-secondary leading-[17.91px]">
              Ingresa tu correo para que enviemos un enlace para recuperar tu
              contraseña
            </span>
            <ForgotPasswordComponent />
          </div>
        </section>
      </div>
    </>
  );
}
