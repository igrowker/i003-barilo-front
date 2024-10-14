import { IoPencil } from "react-icons/io5";
import { SlArrowLeft } from "react-icons/sl";
import InputField from "../ui/InputField";
import ButtonBlue from "../ui/buttonBlue";
import { useForm, FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import IconComponent from "../IconComponent";
import ProfilePicture from "@/assets/images/2810502.png";
import { useUserProfile } from "@/hooks/useUserProfile";
import { useEffect } from "react";

// Define la interfaz para los datos del formulario
interface ProfileForm {
  nombreCompleto: string;
  telefono: number;
  email: string;
  fechaNacimiento: number;
}

const EditProfile = () => {
  const { t } = useTranslation();
  const { profile } = useUserProfile();

  const methods = useForm<ProfileForm>();
  const { handleSubmit, setValue } = methods;

  //Rellena los campos del form con los datos del perfil
  useEffect(() => {
    if (profile) {
      setValue("nombreCompleto", profile.name);
      setValue("email", profile.email);
    }
  }, [profile, setValue]);

  // Utiliza el tipo ProfileForm en la función onSubmit
  const onSubmit = (data: ProfileForm) => {
    console.log(data); // Aquí puedes manejar el envío de datos
  };

  const enableEditing = () => {
    // Habilitar la edición
  };

  return (
    <div className="flex flex-col items-stretch justify-between w-screen h-screen">
      <div className="flex flex-col w-screen gap-2 mt-5">
        <div className="flex flex-row items-center justify-start w-screen py-2 my-5 text-2xl text-customBlue">
          <a
            className="flex items-center justify-center w-1/3"
            href="./profile"
          >
            <SlArrowLeft />
          </a>
          <h3 className="flex items-center justify-center w-1/3">
            {t("profile_user.edit_profile.title_h3")}
          </h3>
          <button
            type="button"
            className="flex items-center justify-center w-1/3"
            onClick={enableEditing}
          >
            <IoPencil className="" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <img
            src={ProfilePicture}
            alt="profile picture"
            className="w-32 h-32 rounded-full cursor-pointer"
          />
        </div>
      </div>
      <div className="flex justify-center w-screen h-5/6 item-center">
        <FormProvider {...methods}>
          <form
            className="flex flex-col items-center justify-around w-10/12 text-2xl h-5/6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-4">
              <InputField
                type="text"
                label={t(
                  "profile_user.edit_profile.form.input_field_name.label"
                )}
                name="nombreCompleto"
                placeholder={t(
                  "profile_user.edit_profile.form.input_field_name.placeholder"
                )}
                required
              />
              <InputField
                type="number"
                label={t(
                  "profile_user.edit_profile.form.input_field_phone.label"
                )}
                name="telefono"
                placeholder={t(
                  "profile_user.edit_profile.form.input_field_phone.placeholder"
                )}
                required
              />
              <InputField
                type="email"
                label={t(
                  "profile_user.edit_profile.form.input_field_email.label"
                )}
                name="email"
                placeholder={t(
                  "profile_user.edit_profile.form.input_field_email.placeholder"
                )}
                required
              />
              <InputField
                type="date"
                label={t(
                  "profile_user.edit_profile.form.input_field_date.label"
                )}
                name="fechaNacimiento"
                required
              />
            </div>
            <div>
              <ButtonBlue
                type="submit"
                text={t("profile_user.edit_profile.form.button_submit")}
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
