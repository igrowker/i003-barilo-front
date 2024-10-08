// services/userService.ts
import axios from 'axios';

interface ProfileResponse {
    id: string;
    name: string;
    email: string;
    role: string;
    pendingBalance: number;
}

export const getUserProfile = async (token: string): Promise<ProfileResponse | null> => {
  try {
    const response = await axios.get('https://barilo.onrender.com/barilo/api/profile', {
      headers: {
        Authorization: `Bearer ${token}`, // Pasar el token en el header
      },
    });

    return response.data; // Retorna la información del perfil
  } catch (error) {
    console.error('Error al obtener el perfil del usuario:', error);
    return null;
  }
};