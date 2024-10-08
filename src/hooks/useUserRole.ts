import { useAuth } from '../context/AuthProvider';
import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
    roles: string;
}

export const useUserRole = () => {
  const { token } = useAuth();
  let userRole = '';

  if (token) {
    try {
      const decodedToken: DecodedToken = jwtDecode(token);
      userRole = decodedToken.roles;
    } catch (error) {
      console.error('Error al decodificar el token:', error);
    }
  }

  return userRole;
};