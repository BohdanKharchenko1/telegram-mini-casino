import Paper from '@mui/material/Paper';
import { Avatar, Box, Stack, Typography } from '@mui/material';
import NavBar from '../components/NavBar.tsx';

import { TonConnectButton } from '../components/TonConnectButton.tsx';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { useStore } from '../misc/store.ts';

export default function UserPage() {
    const {user} = useStore.getState();

    const [tonConnectUI] = useTonConnectUI();


  return (
    <Box sx={{background: '#2b1436', height: '100vh', width: '100%'}}>
      <Paper
        sx={{
          position: 'absolute',
          top: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '85%',
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
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar src={user?.photoUrl || undefined} />
          <h2>Hello, {user?.username}</h2>
        </Stack>

      </Paper>


      <Paper
        sx={{
          position: 'absolute',
          top: 170,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '85%',
          maxWidth: 500,
          borderRadius: '24px',
          background:
            'linear-gradient(27deg, rgba(255,79,160,0.2) 0%, rgba(182,66,154,0.2) 50%, rgba(115,46,145,0.2) 100%)',
          boxShadow: '0 0 25px rgba(255, 100, 200, 0.2)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
          p: 3,
          gap: 2,
          color: '#fff',
        }}
        elevation={0}
      >
        <Typography
          sx={{
            fontSize: '18px',
            color: '#d5baff',
            fontWeight: 500,
          }}
        >
          Balance
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'baseline',
            justifyContent: 'left',
            gap: 1,
            width: '100%',
          }}
        >
          <Typography
            sx={{
              fontSize: '36px',
              fontWeight: 700,
              color: '#FFD84D',
              textShadow: '0 0 18px rgba(255, 216, 77, 0.6)',
            }}
          >
            {Number(user?.balance ?? 0).toFixed(2)}
          </Typography>

          <Typography
            sx={{
              fontSize: '22px',
              fontWeight: 600,
              color: '#FFD84D',
              textShadow: '0 0 12px rgba(255, 216, 77, 0.6)',
            }}
          >
            TON
          </Typography>
        </Box>

        <TonConnectButton tonConnect={tonConnectUI} userId={`${user?.id}`} />
      </Paper>




      <NavBar />
    </Box>
  )
}