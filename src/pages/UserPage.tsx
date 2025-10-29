import Paper from '@mui/material/Paper';
import { Avatar, Box, Stack } from '@mui/material';
import NavBar from '../components/NavBar.tsx';
import { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';
import { loginWithTelegram } from '../misc/AuthService.ts';
import useAuth from '../hooks/useAuth.ts';
import { TonConnectButton } from '../components/TonConnectButton.tsx';
import { useTonConnectUI } from '@tonconnect/ui-react';

export default function UserPage() {
    const {user} = useAuth();
    const [tonConnectUI] = useTonConnectUI();

  useEffect(() => {
    WebApp.expand();
    loginWithTelegram().catch(console.error);

  }, []);  return (
    <Box sx={{background: '#2b1436', height: '100vh', width: '100%'}}>
      <Paper
        sx={{
          position: 'absolute',
          top: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          maxWidth: 500,
          borderRadius: 6,
          background:
            'linear-gradient(27deg, rgba(255,79,160,0.6) 0%, rgba(182,66,154,0.6) 50%, rgba(115,46,145,0.6) 100%)',
          display: 'flex',
          flexDirection: 'column',
          p: 3,
          gap: 2,
        }}
        elevation={2}
      >
        {/* User info row */}
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar src={user?.photoUrl || undefined} />
          <h2>Hello, {user?.username}</h2>
        </Stack>

        {/* Buttons row */}
        <TonConnectButton tonConnect={tonConnectUI} userId={`${user?.id}`} />
      </Paper>

      <NavBar />
    </Box>
  )
}