import WebApp from "@twa-dev/sdk";
import { useEffect } from 'react';
import { loginWithTelegram } from './misc/AuthService.ts';
import { useTonConnectUI, useTonWallet } from '@tonconnect/ui-react';

export default function App(){

    const [tonConnectUI] = useTonConnectUI();
    const wallet = useTonWallet();
    //const [connected, setConnected] = useState(false);

    useEffect(()=> {

        WebApp.expand();

        loginWithTelegram().catch(console.error);
        }, );


        return (
              <div className="flex min-h-screen items-center justify-center w-full">
                    <button className=' bg-blue-400' onClick={()=>tonConnectUI.openModal()}>
                        connect!
                    </button>
                {wallet &&
                  <button className='bg-amber-400'>
                    connected!
                  </button>}
              </div>
        );

}