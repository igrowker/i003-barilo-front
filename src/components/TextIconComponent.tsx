import Logo from "../assets/images/logotipo.svg";
export default function TextIconComponent() {
  return (
    <div className="flex justify-center">
      <img src={Logo} alt="Logo Bariló" className="w-48 md:w-52 lg:w-60" />
    </div>
  );
}
