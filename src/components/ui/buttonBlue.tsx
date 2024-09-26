interface ButtonBlueProps {
  text: string;
  onClick: () => void;
  isActive?: boolean;
  className?: string;
}

const ButtonBlue: React.FC<ButtonBlueProps> = ({
  text,
  onClick,
  isActive = true,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full px-4 py-2 font-primary font-medium rounded-3xl transition-colors duration-300 text-xl ${
        isActive
          ? "bg-active-button-bg text-active-button-text hover:bg-active-button-hover-bg"
          : "bg-inactive-button-bg text-inactive-button-text hover:bg-active-button-hover-bg hover:text-active-button-text"
      } ${className}`}
    >
      {text}
    </button>
  );
};

export default ButtonBlue;
