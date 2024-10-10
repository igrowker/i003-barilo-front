import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CustomInput } from "@/components/CustomInput";
import { CustomButton } from "@/components/CustomButton";
import { Form, FormMessage } from "@/components/ui/form";
import { useNavigate } from "react-router-dom";
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
      showErrorModal("No se pudo enviar el correo de restablecimiento.");
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
              label="Correo electrónico"
              name="mail"
              placeholder="Introduce tu correo electrónico"
              field={form.register("mail")}
            />
            <FormMessage>{form.formState.errors.mail?.message}</FormMessage>
          </div>
          <div className="space-y-3 mt-14">
            <CustomButton type="submit" disabled={isLoading}>
              {isLoading ? "Enviando" : "Enviar enlace"}
            </CustomButton>
          </div>
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
