import { IoPencil } from "react-icons/io5";
import { SlArrowLeft } from "react-icons/sl";
import InputField from "../ui/InputField";
import ButtonBlue from "../ui/buttonBlue";
import { useForm, FormProvider } from "react-hook-form"; 
import profileImage from "../../../public/Group 62.png";

// Define la interfaz para los datos del formulario
interface ProfileForm {
  nombreCompleto: string;
  telefono: string;
  email: string;
  fechaNacimiento: string;
}

const EditProfile = () => {
  const methods = useForm<ProfileForm>(); // Inicializa el formulario con el tipo
  const { handleSubmit } = methods;

  // Utiliza el tipo ProfileForm en la función onSubmit
  const onSubmit = (data: ProfileForm) => {
    console.log(data); // Aquí puedes manejar el envío de datos
  };

  const enableEditing = () => {
    // Habilitar la edición
  };

  return (
    <div className="h-screen w-screen flex flex-col items-stretch justify-between">
      <div className="flex flex-col w-screen mt-5 gap-2">
        <div className="flex flex-row w-screen py-2 text-2xl text-customBlue items-center justify-start">
          <a className="w-1/3 flex items-center justify-center" href="./profile">
            <SlArrowLeft />
          </a>
          <h3 className="w-1/3 flex items-center justify-center">Perfil</h3>
          <button
            type="button"
            className="w-1/3 flex items-center justify-center"
            onClick={enableEditing}
          >
            <IoPencil className="" />
          </button>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <img src={profileImage} alt="foto perfil" />
        </div>
      </div>
      <div className="h-5/6 w-screen flex item-center justify-center">
        <FormProvider {...methods}>
          <form
            className="flex flex-col text-2xl h-5/6 w-10/12 items-center justify-around"
            onSubmit={handleSubmit(onSubmit)} // Usa handleSubmit
          >
            <div className="flex flex-col gap-4">
              <InputField
                type="text"
                label="Nombre Completo"
                name="nombreCompleto" // Solo nombre
                required
              />
              <InputField
                type="number"
                label="Número de telefono"
                name="telefono"
                required
              />
              <InputField
                type="email"
                label="Correo Electrónico"
                name="email"
                required
              />
              <InputField
                type="date"
                label="Fecha de Nacimiento"
                name="fechaNacimiento"
                required
              />
            </div>
            <div>
              <ButtonBlue
                type="submit"
                text="Actualizar Perfil"
              />
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default EditProfile;
