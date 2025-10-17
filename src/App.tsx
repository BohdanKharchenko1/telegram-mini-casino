import WebApp from "@twa-dev/sdk";
import { useEffect } from "react";
import useTelegramAuth from "./hooks/useTelegramAuth.ts";

export default function App() {
    const { response, error } = useTelegramAuth();

    useEffect(() => {
        WebApp.ready();
        WebApp.expand();
    }, []);

    const handleClick = () => {
        console.log("Response:", response);
        console.log("Error:", error);
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
