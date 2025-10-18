import WebApp from "@twa-dev/sdk";
import {useEffect} from "react";
import { useRawInitData } from '@telegram-apps/sdk-react';

export default function App(){
    console.log("App is rendering!");

    const info = useRawInitData();

    const handleClick = () => {
        console.log(info);
    }

    useEffect(()=> {
        WebApp.expand();

        }, []);

        return (
          <div className="min-h-screen flex items-center justify-center bg-gray-200">
            <button className="h-12 w-32 bg-blue-500 text-white rounded" onClick={handleClick}>
                Click me!
            </button>
        </div>
        );

}