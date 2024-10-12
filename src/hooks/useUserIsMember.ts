import { useEffect, useState } from 'react';
import { getUserIsMember } from '../services/profileService';
import { useAuth } from '@/context/AuthProvider';

export const useUserGroup = () => {
  const [isInGroup, setIsInGroup] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { token } = useAuth();

  useEffect(() => {
    const fetchUserGroup = async () => {
      try {
        setLoading(true);
        const result = await getUserIsMember(token);
        setIsInGroup(result);
      } catch (err) {
        setError('Error fetching user group');
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchUserGroup();
    }
  }, [token]);

  return { isInGroup, loading, error };
};