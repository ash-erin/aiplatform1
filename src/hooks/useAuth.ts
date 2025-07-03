import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

interface User {
  id: string;
  username: string;
  email: string;
  fullName: string;
  joinDate: string;
}

export const useAuth = () => {
  const [user, setUser] = useLocalStorage<User | null>('ska-user', null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!user);
  }, [user]);

  const login = (userData?: Partial<User>) => {
    const defaultUser: User = {
      id: '1',
      username: 'alex_developer',
      email: 'alex@example.com',
      fullName: 'Alex Johnson',
      joinDate: new Date().toISOString().split('T')[0]
    };

    const newUser = { ...defaultUser, ...userData };
    setUser(newUser);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const updateUser = (updates: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...updates });
    }
  };

  return {
    user,
    isLoggedIn,
    login,
    logout,
    updateUser
  };
};