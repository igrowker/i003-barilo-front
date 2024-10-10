import axios, { AxiosResponse } from "axios";
import { z } from "zod";
import { loginSchema } from "../validation/loginSchema";
import { registerSchema } from "../validation/registerSchema";

const API_URL = import.meta.env.VITE_API_URL;

type RegisterUserForm = z.infer<typeof registerSchema>;

interface RegisterUserResponse {
  data: {
    message: string;
    userId: string;
  };
}

interface RegisterUserError {
  response?: {
    data: {
      message: string;
    };
    status: number;
  };
}

type LoginUserForm = z.infer<typeof loginSchema>;

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: "COORDINADOR" | "ESTUDIANTE";
  pendingBalance: number | null;
}

export const loginUser = async (
  values: LoginUserForm
): Promise<{ token: string }> => {
  try {
    const response: AxiosResponse<{ token: string }> = await axios.post(
      `${API_URL}/auth/login`,
      {
        mail: values.mail,
        password: values.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const token = response.data.token;
    localStorage.setItem("token", token);
    console.log("Login successful, token:", token);

    return { token };
  } catch (error) {
    const typedError = error as RegisterUserError;
    console.error(
      "Error during login:",
      typedError.response?.data.message || error
    );
    throw new Error(
      typedError.response?.data.message || "Error durante el inicio de sesión"
    );
  }
};

export const registerUser = async (
  values: RegisterUserForm
): Promise<RegisterUserResponse | null> => {
  try {
    const response: AxiosResponse<RegisterUserResponse> = await axios.post(
      `${API_URL}/auth/register`,
      {
        name: values.name,
        mail: values.mail,
        role: values.role,
        password: values.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Registration successful:", response.data);
    return response.data;
  } catch (error) {
    const typedError = error as RegisterUserError;
    console.error(
      "Error during registration:",
      typedError.response?.data.message || error
    );
    return null;
  }
};

const getToken = (): string | null => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.error("Token no disponible");
  }
  return token;
};

export const getProfile = async (): Promise<UserProfile | null> => {
  const token = getToken();
  if (!token) return null;

  try {
    const response: AxiosResponse<{ data: UserProfile }> = await axios.get(
      `${API_URL}/profile`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Perfil de usuario obtenido exitosamente:", response.data);
    return response.data.data;
  } catch (error) {
    console.error(
      "Error al obtener el perfil del usuario:",
      error.response?.data.message || error
    );
    return null;
  }
};

export const sendPasswordResetEmail = async (email: string): Promise<void> => {
  try {
    const response = await axios.post(
      `${API_URL}/auth/forgot-password`,
      { email },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Solicitud de restablecimiento de contraseña enviada:", response.data);
  } catch (error) {
    console.error("Error al enviar el restablecimiento de contraseña:", error.response?.data.message || error);
    throw new Error(error.response?.data.message || "Error al enviar el correo de restablecimiento de contraseña");
  }
};
