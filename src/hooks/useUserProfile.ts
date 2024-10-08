import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthProvider';
import { getUserProfile } from '../services/profileService';

interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: string;
  pendingBalance: number;
}

export const useUserProfile = () => {
  const { token } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (token) {
        const userProfile = await getUserProfile(token);
        if (userProfile) {
          setProfile(userProfile);
        } else {
          setError('No se pudo obtener el perfil del usuario.');
        }
      }
      setLoading(false);
    };

    fetchProfile();
  }, [token]);

  return { profile, loading, error };
};