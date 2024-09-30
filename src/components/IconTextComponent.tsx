import Logo from "../assets/images/imago.webp";

const IconTextComponent: React.FC = () => {
  return (
    <div className="flex justify-center">
      <img src={Logo} alt="Logo Bariló" className="w-48 md:w-52 lg:w-60" />
    </div>
  );
};

export default IconTextComponent;
