import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

const PrivateRoute: React.FC = () => {
  const { isAuthenticated } = useAuth();

  // Si el usuario está autenticado, renderiza el componente hijo (Outlet)
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;