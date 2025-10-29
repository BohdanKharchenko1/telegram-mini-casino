import { useEffect, useState } from 'react';
import type { User } from '../types/User.ts';

export default function useAuth() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    console.log(userData + 'USER DATA');
    if (userData) setUser(JSON.parse(userData));


  }, []);
  return {user, setUser};
}