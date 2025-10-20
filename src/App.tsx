import WebApp from "@twa-dev/sdk";
import {useEffect} from "react";
import { loginWithTelegram } from './misc/AuthService.ts';
import {  useTonConnectUI } from '@tonconnect/ui-react';

export default function App(){

    const [tonConnectUI] = useTonConnectUI();
    useEffect(()=> {

        WebApp.expand();

        loginWithTelegram().catch(console.error);
        }, );


        return (
              <div className="flex min-h-screen items-center justify-center w-full">
                    <button className=' bg-blue-400' onClick={()=>tonConnectUI.openModal()}>
                        connect!
                    </button>
              </div>
        );

}