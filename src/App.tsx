import WebApp from "@twa-dev/sdk";
import { useEffect } from 'react';
import { loginWithTelegram } from './misc/AuthService.ts';
import { useTonConnectUI} from '@tonconnect/ui-react';
import { TonConnectButton } from './components/TonConnectButton.tsx';
import type { User } from './types/User.ts';

export default function App(){

    const [tonConnectUI] = useTonConnectUI();
    const user:User = JSON.parse(localStorage.getItem('user') || '{}');

    useEffect(()=> {

        WebApp.expand();

        loginWithTelegram().catch(console.error);
        }, );


        return (
              <TonConnectButton tonConnect={tonConnectUI} userId={user?.id}/>



        );

}