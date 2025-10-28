import WebApp from "@twa-dev/sdk";
import { useEffect } from 'react';
import { loginWithTelegram } from './misc/AuthService.ts';
import { useTonConnectUI} from '@tonconnect/ui-react';
import { TonConnectButton } from './components/TonConnectButton.tsx';
import type { User } from './types/User.ts';
import { Box } from '@mui/material';
import NavBar from './components/NavBar.tsx';

export default function App(){

    const [tonConnectUI] = useTonConnectUI();
    const user:User = JSON.parse(localStorage.getItem('user') || '{}');

    useEffect(()=> {

        WebApp.expand();

        loginWithTelegram().catch(console.error);
        }, );


        return (
          <Box sx={{background: '#2b1436', height: '100%', width: '100%'}}>
              <TonConnectButton tonConnect={tonConnectUI} userId={user?.id}/>
              <NavBar/>
          </Box>


        );

}