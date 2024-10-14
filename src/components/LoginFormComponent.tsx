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
      title: t('login_form_component.show_success_modal.title'),
      message: t('login_form_component.show_success_modal.message'),
      buttons: [
        {
          label: t('login_form_component.show_success_modal.button_label'),
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
      throw new Error(t('login_form_component.return.handleLogin.new_error'));
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

  const handleGoogleLogin = () => {
    console.log(`Google login simulado`);
  };
  
  const handleAppleLogin = () => {
    console.log(`Apple login simulado`);
  };  

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col max-w-md">
          <div className="space-y-6">
            <CustomInput
              type="email"
              label={t('login_form_component.return.custom_input1.label')}
              name="mail"
              placeholder={t('login_form_component.return.custom_input1.placeholder')}
              field={form.register("mail")}
            />
            <FormMessage>{form.formState.errors.mail?.message}</FormMessage>
            <CustomInput
              label={t('login_form_component.return.custom_input2.label')}
              name="password"
              type="password"
              placeholder={t('login_form_component.return.custom_input2.placeholder')}
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
            {t('login_form_component.return.forget_password')}
          </a>
          <FormMessage>{form.formState.errors.password?.message}</FormMessage>
          <div className="space-y-3 mt-14">
            <CustomButton type="submit" disabled={isLoading}>
              {isLoading ? t('login_form_component.return.custom_button.text1') : t('login_form_component.return.custom_button.text2')}
            </CustomButton>
            <Separator className="" />
            <IconButton
              className="bg-[#08121f]"
              icon={FaGoogle}
              label={t('login_form_component.return.icon_button1')}
              onClick={handleGoogleLogin}
            />
            <IconButton
              icon={ImAppleinc}
              label={t('login_form_component.return.icon_button2')}
              className="bg-[#2d3e50]"
              onClick={handleAppleLogin}
            />
          </div>
          <p className="mt-4 text-sm font-normal leading-none text-center text-primary-celeste font-secondary">
          {t('login_form_component.return.p')}{" "}
            <a href="/register" className="antialiased font-bold"> {t('login_form_component.return.a')}</a>
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
