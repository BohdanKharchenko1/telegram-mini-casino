import Paper from '@mui/material/Paper';
import { Avatar, Box, Stack } from '@mui/material';
import NavBar from '../components/NavBar.tsx';
import { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';
import { loginWithTelegram } from '../misc/AuthService.ts';
import useAuth from '../hooks/useAuth.ts';

export default function UserPage() {
    const {user} = useAuth();
    useEffect(() => {
    WebApp.expand();
    loginWithTelegram().catch(console.error);

  }, []);  return (
    <Box sx={{background: '#2b1436', height: '100vh', width: '100%'}}>
    <Paper sx={{
          position: 'absolute',
          top: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          height: 150,
          maxWidth:500,
          borderRadius:6,
          background:
            'linear-gradient(27deg,rgba(255, 79, 160, 1) 0%, rgba(182, 66, 154, 1) 50%, rgba(115, 46, 145, 1) 100%)',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          pl: 3,
          pt: 3,
      }}
         elevation={2}
    >
        <Stack direction='column' spacing={2}>
          <Stack direction='row' spacing={2} sx = {{
            left:0,
          }}
          >
            <Avatar src={user?.photoUrl || undefined}/>
            <h2 >Hello, {user?.username}</h2>
          </Stack>
        </Stack>
      </Paper>

      <Paper sx={{
        position: 'absolute',
        top: 190,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80%',
        height: 150,
        maxWidth:500,
        borderRadius:6,
        background:
          'linear-gradient(27deg,rgba(255, 79, 160, 1) 0%, rgba(182, 66, 154, 1) 50%, rgba(115, 46, 145, 1) 100%)',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        pl: 3,
        pt: 3,
      }}
             elevation={2}
      >
        <Stack direction='column' spacing={2}>
          <Stack direction='row' spacing={2} sx = {{
            left:0,
          }}
          >
            <Avatar src={user?.photoUrl || undefined}/>
            <h2 >Hello, {user?.username}</h2>
          </Stack>
        </Stack>


      </Paper>
      <NavBar />
    </Box>
  )
}