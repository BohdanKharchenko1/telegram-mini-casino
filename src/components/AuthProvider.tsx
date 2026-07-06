import * as React from 'react';
import { useEffect, useRef } from 'react';
import { loginWithTelegram } from '../misc/AuthService.ts';
import { useStore } from '../misc/store.ts';

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);
  const isAttemptedAuth = useRef(false);
  useEffect(() => {
    if (user) return;
    if (isAttemptedAuth.current) return;
    isAttemptedAuth.current = true;

    const login = async () => {
      const user = await loginWithTelegram();
      setUser(user);
    };
    login();
  }, [user, setUser]);
  return <>{children}</>;
}
