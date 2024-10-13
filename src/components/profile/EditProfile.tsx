import { IoPencil } from "react-icons/io5";
import { SlArrowLeft } from "react-icons/sl";
import InputField from "../ui/InputField";
import ButtonBlue from "../ui/buttonBlue";
import { useForm, FormProvider } from "react-hook-form"; 
import profileImage from "../../../public/Group 62.png";
import { useTranslation } from "react-i18next";
import IconComponent from "../IconComponent";

// Define la interfaz para los datos del formulario
interface ProfileForm {
  nombreCompleto: string;
  telefono: string;
  email: string;
  fechaNacimiento: string;
}

const EditProfile = () => {
  const { t } = useTranslation();

  const methods = useForm<ProfileForm>();
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
            <SlArrowLeft/>
          </a>
          <h3 className="w-1/3 flex items-center justify-center">{t('profile_user.edit_profile.title_h3')}</h3>
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
                label={t('profile_user.edit_profile.form.input_field_name.label')}
                name="nombreCompleto"
                placeholder={t('profile_user.edit_profile.form.input_field_name.placeholder')}
                required
              />
              <InputField
                type="number"
                label={t('profile_user.edit_profile.form.input_field_phone.label')}
                name="telefono"
                placeholder={t('profile_user.edit_profile.form.input_field_phone.placeholder')}
                required
              />
              <InputField
                type="email"
                label={t('profile_user.edit_profile.form.input_field_email.label')}
                name="email"
                placeholder={t('profile_user.edit_profile.form.input_field_email.placeholder')}
                required
              />
              <InputField
                type="date"
                label={t('profile_user.edit_profile.form.input_field_date.label')}
                name="fechaNacimiento"
                required
              />
            </div>
            <div>
              <ButtonBlue
                type="submit"
                text={t('profile_user.edit_profile.form.button_submit')}
              />
            </div>
          </form>
        </FormProvider>
      </div>
      <div className="flex items-center justify-center pb-5 ">
          <IconComponent />
        </div>
    </div>
  );
};

export default EditProfile;
