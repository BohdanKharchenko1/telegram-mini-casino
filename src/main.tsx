import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App.tsx";
import WebApp from "@twa-dev/sdk";
import { TonConnectUIProvider } from '@tonconnect/ui-react';


WebApp.ready();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TonConnectUIProvider
      manifestUrl="https://telegram-mini-casino.vercel.app/tonconnect-manifest.json"
      walletsListConfiguration={{
        includeWallets: [
          {
            appName: 'tonkeeper',
            name: 'Tonkeeper',
            imageUrl: 'https://tonkeeper.com/assets/tonconnect-icon.png',
            aboutUrl: 'https://tonkeeper.com',
            bridgeUrl: 'https://bridge.tonapi.io/bridge',
            universalLink: 'https://app.tonkeeper.com/ton-connect',
            platforms: ['ios', 'android'] // ✅ REQUIRED FIELD
          },
        ],
      }}
    >
      <App />
    </TonConnectUIProvider>
  </StrictMode>,
)
