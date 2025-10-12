import WebApp from "@twa-dev/sdk";
import {useEffect} from "react";

export default function App(){
    useEffect(()=> {
        WebApp.expand();

        }, []);
        return <h1 className='text-white'>Hello World!</h1>;

}