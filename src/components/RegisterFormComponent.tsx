import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { registerUser } from "@/services/authService";
import { registerSchema } from "../validation/registerSchema";
import { z } from "zod";
import { CustomInput } from "@/components/CustomInput";
import { CustomButton } from "@/components/CustomButton";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import ModalComponent from "./ModalComponent";
import { useTranslation } from "react-i18next";

type RegisterUserForm = z.infer<typeof registerSchema>;

export const RegisterFormComponent: React.FC = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const form = useForm<RegisterUserForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      mail: "",
      role: "COORDINADOR",
      password: "",
      passwordConfirmation: "",
    },
  });

  const showSuccessModal = () => {
    setModalContent({
      title: t("modals.register.success.title"),
      message: t("modals.register.success.message"),
      buttons: [
        {
          label: t("modals.register.success.btn"),
          action: () => {
            setIsModalVisible(false);
            navigate("/login");
          },
          isPrimary: true,
        },
      ],
    });
    setIsModalVisible(true);
  };

  const showErrorModal = () => {
    setModalContent({
      title: t("modals.register.error.title"),
      message: t("modals.register.error.message"),
      buttons: [
        {
          label: t("modals.register.error.btn"),
          action: () => {
            setIsModalVisible(false), navigate("/login");
          },
          isPrimary: true,
        },
        {
          label: t("modals.register.error.btn2"),
          action: () => {
            setIsModalVisible(false);
          },
          isPrimary: false,
        },
      ],
    });
    setIsModalVisible(true);
  };

  const onSubmit = async (values: RegisterUserForm) => {
    setIsLoading(true);
    try {
      const response = await registerUser(values);

      if (response) {
        showSuccessModal();
      } else {
        showErrorModal();
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col max-w-md"
        >
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className="mb-3">
                <FormLabel className="text-lg font-bold font-primary text-primary-celeste">
                  Tipo de usuario
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex"
                    aria-labelledby="tipo-usuario"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="COORDINADOR" />
                      </FormControl>
                      <FormLabel className="text-base text-primary-celeste ">
                        Coordinador
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="ESTUDIANTE" />
                      </FormControl>
                      <FormLabel className="text-base text-primary-celeste ">
                        Estudiante
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="space-y-6">
            <CustomInput
              type="text"
              label="Nombre completo"
              name="name"
              placeholder="Intorduce tu nombre completo"
              field={form.register("name")}
            />
            <FormMessage>{form.formState.errors.name?.message}</FormMessage>
            <CustomInput
              type="email"
              label="Correo electrónico"
              name="mail"
              placeholder="Intorduce tu correo electrónico"
              field={form.register("mail")}
            />
            <FormMessage>{form.formState.errors.mail?.message}</FormMessage>
            <CustomInput
              label="Contraseña"
              name="password"
              type="password"
              placeholder="Introduce tu contraseña"
              field={form.register("password")}
              showPasswordToggle
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
            <FormMessage>{form.formState.errors.password?.message}</FormMessage>
            <CustomInput
              label="Contraseña"
              name="passwordConfirmation"
              type="password"
              placeholder="Repite tu contraseña"
              field={form.register("passwordConfirmation")}
              showPasswordToggle
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
            <FormMessage>
              {form.formState.errors.passwordConfirmation?.message}
            </FormMessage>
          </div>
          <div className="mt-8 space-y-3">
            <CustomButton type="submit" disabled={isLoading}>
              {isLoading ? "Registrando..." : "Registrarse"}
            </CustomButton>
          </div>
          <p className="mt-4 text-sm font-normal leading-none text-center text-primary-celeste font-secondary">
            ¿Ya tienes una cuenta?{" "}
            <Link to="/login" className="antialiased font-bold">
              {" "}
              Inicia sesión
            </Link>
          </p>
        </form>
      </Form>
      {isModalVisible && (
        <ModalComponent
          title={modalContent.title}
          message={modalContent.message}
          buttons={modalContent.buttons}
          onClose={() => setIsModalVisible(false)}
        />
      )}
    </div>
  );
};
