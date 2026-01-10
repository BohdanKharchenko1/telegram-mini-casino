import * as React from 'react';
import { useEffect, useRef } from 'react';
import { loginWithTelegram } from '../misc/AuthService.ts';
import { useStore } from '../misc/store.ts';

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const isAttemptedAuth = useRef(false);
  useEffect(() => {
       const {setUser} = useStore.getState()
       const login = async () => {
        if(!isAttemptedAuth.current) {
            await loginWithTelegram().then((user) => {setUser(user)});
            isAttemptedAuth.current = true;
        }
    }
    login();
  }, [])
  return <>{children}</>
}