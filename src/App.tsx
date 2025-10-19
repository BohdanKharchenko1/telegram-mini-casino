import WebApp from "@twa-dev/sdk";
import {useEffect} from "react";
import { useRawInitData } from '@telegram-apps/sdk-react';
import { loginWithTelegram } from './misc/AuthService.ts';
import { TonConnectButton, TonConnectUIProvider } from '@tonconnect/ui-react';

export default function App(){
    console.log("App is rendering!");
    const info = useRawInitData();

    const handleClick = () => {
        if (info) {
            const params = new URLSearchParams(info);
            const userJson = params.get("user");
            if (userJson) {
                const user = JSON.parse(decodeURIComponent(userJson));
                console.log("Decoded user:", user);
            }
        }
    }

    useEffect(()=> {

        WebApp.expand();

        loginWithTelegram().catch(console.error);
        }, );


        return (
          <TonConnectUIProvider manifestUrl='https://telegram-mini-casino.vercel.app/tonconnect-manifest.json'>
          <div className="min-h-screen flex items-center justify-center bg-gray-200">
            <button className="h-12 w-32 bg-blue-500 text-white rounded" onClick={handleClick}>
                Click me!
            </button>


              <TonConnectButton />

        </div>
          </TonConnectUIProvider>
        );

}