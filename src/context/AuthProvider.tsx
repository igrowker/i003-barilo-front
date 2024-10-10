import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { loginUser } from '../services/authService'; 
import { jwtDecode } from 'jwt-decode';

interface AuthContextType {
  token: string | null;
  login: (mail: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface DecodedToken {
  exp: number;
}

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

  const login = async (mail: string, password: string) => {
    try {
      const response = await loginUser({ mail, password });
      setToken(response.token);
      localStorage.setItem('token', response.token);
      console.log('Token saved to localStorage');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
    console.log('Logged out and token removed from localStorage');
  };

  const isTokenExpired = (token: string | null): boolean => {
    if (!token) return true;

    const decodedToken: DecodedToken = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000);

    return decodedToken.exp < currentTime;
  };

  useEffect(() => {
    if (token && isTokenExpired(token)) {
      logout();
    }
  }, [token]);

  const isAuthenticated = !!token && !isTokenExpired(token);

  return (
    <AuthContext.Provider value={{ token, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
