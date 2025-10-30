
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import WebApp from "@twa-dev/sdk";
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import UserPage from './pages/UserPage.tsx';
import { ThemeProvider } from '@mui/material';
import { theme } from './misc/theme.ts';

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
            deepLink: 'https://app.tonkeeper.com/ton-connect',
            platforms: ['ios', 'android'],
          },
        ],
      }}
    >
      <ThemeProvider theme={theme}>
        <UserPage/>
      </ThemeProvider>
    </TonConnectUIProvider>
  </StrictMode>,
)
