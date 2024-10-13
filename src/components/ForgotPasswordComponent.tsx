import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CustomInput } from "@/components/CustomInput";
import { CustomButton } from "@/components/CustomButton";
import { Form, FormMessage } from "@/components/ui/form";
import { Link, useNavigate } from "react-router-dom";
import { forgotPasswordSchema } from "../validation/forgotPasswordSchema";
import { useTranslation } from "react-i18next";
import ModalComponent from "./ModalComponent";
import { sendPasswordResetEmail } from "../services/authService";

type ForgotPasswordForm = z.infer<typeof forgotPasswordSchema>;

interface ModalContent {
  title: string;
  message: string;
  buttons: {
    label: string;
    action: () => void;
    isPrimary: boolean;
  }[];
}

export const ForgotPasswordComponent: React.FC = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);
  const navigate = useNavigate();

  const form = useForm<ForgotPasswordForm>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      mail: "",
    },
  });

  const showSuccessModal = () => {
    setModalContent({
      title: t("modals.passwordReset.success.title"),
      message: t("modals.passwordReset.success.message"),
      buttons: [
        {
          label: t("modals.passwordReset.success.btn"),
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

  const showErrorModal = (errorMessage: string) => {
    setModalContent({
      title: t("modals.passwordReset.error.title"),
      message: errorMessage,
      buttons: [
        {
          label: t("modals.passwordReset.error.btn"),
          action: () => {
            setIsModalVisible(false);
          },
          isPrimary: false,
        },
      ],
    });
    setIsModalVisible(true);
  };

  const handlePasswordReset = async (email: string) => {
    try {
      await sendPasswordResetEmail(email);
      showSuccessModal();
    } catch (error) {
      console.error("Error al enviar el correo de restablecimiento:", error);
      showErrorModal(t('forgot_password.h_p_reset'));
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (values: ForgotPasswordForm) => {
    setIsLoading(true);
    await handlePasswordReset(values.mail);
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col max-w-md"
        >
          <div className="space-y-6">
            <CustomInput
              type="email"
              label={t('forgot_password.f_p_component.custom_input.label')}
              name="mail"
              placeholder={t('forgot_password.f_p_component.custom_input.placeholder')}
              field={form.register("mail")}
            />
            <FormMessage>{form.formState.errors.mail?.message}</FormMessage>
          </div>
          <div className="space-y-3 mt-14">
            <CustomButton type="submit" disabled={isLoading}>
              {isLoading ? t('forgot_password.f_p_component.custom_button.text1') : t('forgot_password.f_p_component.custom_button.text2')}
            </CustomButton>
          </div>
          <p className="mt-4 text-sm font-normal leading-none text-center text-primary-celeste font-secondary">
          {t('forgot_password.f_p_component.p')}{" "}
            <Link to="/login" className="antialiased font-bold">
              {" "}
              {t('forgot_password.f_p_component.link')}
            </Link>
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
