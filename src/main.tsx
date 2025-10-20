import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App.tsx";
import WebApp from "@twa-dev/sdk";
import Footer from "./parts/Footer.tsx";
import { TonConnectUIProvider } from '@tonconnect/ui-react';


WebApp.ready();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TonConnectUIProvider
      manifestUrl="https://telegram-mini-casino.vercel.app/tonconnect-manifest.json"
    >
  <App/>
  <Footer/>
    </TonConnectUIProvider>
  </StrictMode>,
)
