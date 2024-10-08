import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { loginUser } from '../services/authService'; 
import { jwtDecode } from 'jwt-decode';
interface AuthContextType {
  token: string | null;
  login: (mail: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  role?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface DecodedToken {
  sub: string;
  exp: number;
  iat: number;
  role?: string; 
}

// Componente AuthProvider
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

  // Función de login
  const login = async (mail: string, password: string) => {
    const response = await loginUser({ mail, password });
    if (response?.token) {
      setToken(response.token);
      localStorage.setItem('token', response.token); // Guardar token en localStorage
      console.log('Token saved to localStorage');
    }
  };

  // Función de logout
  const logout = () => {
    setToken(null);
    localStorage.removeItem('token'); // Eliminar token de localStorage
    console.log('Logged out and token removed from localStorage');
  };

    // Función para verificar si el token ha expirado
    const isTokenExpired = (token: string | null): boolean => {
      if (!token) return true;
      
      const decodedToken: DecodedToken = jwtDecode(token);
      const currentTime = Math.floor((Date.now() / 1000)-200); // Tiempo actual en segundos
  
      return decodedToken.iat > currentTime; // Compara la expiración con el tiempo actual - 100
    };
    

    useEffect(() => {
      if (isTokenExpired(token)) {
        logout(); // Si el token ha expirado, cerrar sesión automáticamente
      }
    }, [token]);
  // Verifica si el usuario está autenticado
  const isAuthenticated = !!token && !isTokenExpired(token);
  
  

  return (
    <AuthContext.Provider value={{ token, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar el AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};