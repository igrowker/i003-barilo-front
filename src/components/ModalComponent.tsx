import IconComponent from "@/components/IconComponent";
import BotonBlue from "@/components/ui/buttonBlue";

interface ModalComponentProps {
  title: string;
  message: string;
  buttons: {
    label: string;
    action: () => void;
    isPrimary?: boolean;
  }[];
  onClose: () => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  title,
  message,
  buttons,
  // onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-tertiary-purple bg-opacity-80"></div>
      <div className="relative max-w-lg p-5 bg-white shadow-lg w-80 md:w-96 lg:w-full font-primary rounded-3xl">
        <div className="flex justify-center">
          <IconComponent />
        </div>
        <h2 className="mb-2 text-2xl font-bold text-center text-secondary-blue md:text-3xl lg:text-4xl">
          {title}
        </h2>
        <p className="mb-5 text-lg text-center text-primary-celeste md:text-xl lg:text-2xl">
          {message}
        </p>
        <div className="flex justify-center gap-4">
          {buttons.map((button, index) => (
            <BotonBlue
              key={index}
              text={button.label}
              isActive={button.isPrimary}
              onClick={button.action}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
