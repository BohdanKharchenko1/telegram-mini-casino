import WebApp from "@twa-dev/sdk";
import { useEffect } from "react";
import useTelegramAuth from "./hooks/useTelegramAuth.ts";
import { useRawInitData } from '@telegram-apps/sdk-react';

export default function App() {
    const { response, error } = useTelegramAuth();

    useEffect(() => {
        WebApp.ready();
        WebApp.expand();
    }, []);
    const check = useRawInitData()

    const handleClick = () => {
        console.log("check:", check);

    };

    return (
      <button
        className="w-64 h-64 bg-blue-500 text-white rounded-lg"
        onClick={handleClick}
      >
          Check Telegram Auth Data
      </button>
    );
}
