import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CustomInput } from "@/components/CustomInput";
import { CustomButton } from "@/components/CustomButton";
import { IconButton } from "@/components/IconButton";
import { Separator } from "@/components/ui/separator";
import { FaGoogle } from "react-icons/fa";
import { ImAppleinc } from "react-icons/im";
import { Form, FormMessage } from "@/components/ui/form";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../validation/loginSchema";
import { useAuth } from "../context/AuthProvider";
import { useTranslation } from "react-i18next";
import ModalComponent from "./ModalComponent";
import { loginUser } from "../services/authService";

type LoginUserForm = z.infer<typeof loginSchema>;

interface ModalContent {
  title: string;
  message: string;
  buttons: {
    label: string;
    action: () => void;
    isPrimary: boolean;
  }[];
}

export const LoginFormComponent: React.FC = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login: authLogin, isAuthenticated } = useAuth();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  const form = useForm<LoginUserForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      mail: "",
      password: "",
    },
  });

  const showSuccessModal = () => {
    setModalContent({
      title: "Felicidades",
      message: "Te has logueado con éxito",
      buttons: [
        {
          label: "Aceptar",
          action: () => {
            setIsModalVisible(false);
            navigate("/home");
          },
          isPrimary: true,
        },
      ],
    });
    setIsModalVisible(true);
  };

  const showErrorModal = (errorMessage: string) => {
    setModalContent({
      title: t("modals.login.error.title"),
      message: errorMessage,
      buttons: [
        {
          label: t("modals.login.error.btn"),
          action: () => {
            setIsModalVisible(false);
            navigate("/register");
          },
          isPrimary: true,
        },
        {
          label: "Volver",
          action: () => {
            setIsModalVisible(false);
          },
          isPrimary: false,
        },
      ],
    });
    setIsModalVisible(true);
  };

  const handleLogin = async (email: string, password: string): Promise<string> => {
    try {
      const response = await loginUser({ mail: email, password });
      return response.token;
    } catch (error) {
      console.error("Error durante el inicio de sesión:", error);
      throw new Error("Error durante el inicio de sesión");
    }
  };

  const onSubmit = async (values: LoginUserForm) => {
    setIsLoading(true);
    try {
      const token = await handleLogin(values.mail, values.password);
      if (token) {
        await authLogin(values.mail, values.password);
        showSuccessModal();
      }
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      showErrorModal(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(`Google login`);
  };

  const handleAppleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(`Apple login`);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col max-w-md">
          <div className="space-y-6">
            <CustomInput
              type="email"
              label="Correo electrónico"
              name="mail"
              placeholder="Introduce tu correo electrónico"
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
          </div>
          <a
            href="/forgot-password"
            className="mt-3 text-sm font-normal leading-none text-right text-primary-celeste font-secondary"
          >
            ¿Has olvidado tu contraseña?
          </a>
          <FormMessage>{form.formState.errors.password?.message}</FormMessage>
          <div className="space-y-3 mt-14">
            <CustomButton type="submit" disabled={isLoading}>
              {isLoading ? "Iniciando sesión" : "Iniciar sesión"}
            </CustomButton>
            <Separator className="" />
            <IconButton
              className="bg-[#08121f]"
              icon={FaGoogle}
              label="Google / Proximante"
              onClick={handleGoogleLogin}
            />
            <IconButton
              icon={ImAppleinc}
              label="Apple / Proximante"
              className="bg-[#2d3e50]"
              onClick={handleAppleLogin}
            />
          </div>
          <p className="mt-4 text-sm font-normal leading-none text-center text-primary-celeste font-secondary">
            ¿Aún no tienes una cuenta?{" "}
            <a href="/register" className="antialiased font-bold"> Registrate</a>
          </p>
        </form>
      </Form>
      {isModalVisible && modalContent && (
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
