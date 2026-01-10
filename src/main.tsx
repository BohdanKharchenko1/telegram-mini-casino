
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import WebApp from "@twa-dev/sdk";
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { ThemeProvider } from '@mui/material';
import { theme } from './misc/theme.ts';
import AuthProvider from './components/AuthProvider.tsx';
import App from './App.tsx';

WebApp.ready();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TonConnectUIProvider
      manifestUrl="https://telegram-mini-casino.vercel.app/tonconnect-manifest.json">
      <ThemeProvider theme={theme}>
        <AuthProvider>
            <App/>
        </AuthProvider>
      </ThemeProvider>
    </TonConnectUIProvider>
  </StrictMode>,
)
