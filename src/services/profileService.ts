import axios from "axios";

interface ProfileResponse {
  id: string;
  name: string;
  email: string;
  role: string;
  pendingBalance: number;
}

const API_URL = import.meta.env.VITE_API_URL;

export const getUserProfile = async (
  token: string
): Promise<ProfileResponse | null> => {
  try {
    const response = await axios.get(`${API_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error al obtener el perfil del usuario:", error);
    return null;
  }
};

export const getUserIsMember = async (
  token: string
) => {
  try {
    const response = await axios.get(`${API_URL}/profile/group-membership`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error al obtener el perfil del usuario:", error);
    return null;
  }
};
