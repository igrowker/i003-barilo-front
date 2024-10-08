import React, { createContext, useState, useContext, ReactNode } from 'react';
import { loginUser } from '../services/authService'; // Usa el loginUser que ya tienes definido
interface AuthContextType {
  token: string | null;
  login: (mail: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

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

  // Verifica si el usuario está autenticado
  const isAuthenticated = !!token;

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