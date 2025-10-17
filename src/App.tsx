import WebApp from "@twa-dev/sdk";
import {useEffect} from "react";
import useTelegramAuth from './hooks/useTelegramAuth.ts';

export default function App(){
    let result:any = useTelegramAuth();
    useEffect(()=> {
        WebApp.expand();

        }, []);
        return <h1 className='text-white'>{result.username}</h1>;

}