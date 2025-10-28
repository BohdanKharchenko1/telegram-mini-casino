import Paper from '@mui/material/Paper';
import { Avatar, Box, Stack } from '@mui/material';
import NavBar from '../components/NavBar.tsx';
import type { User } from '../types/User.ts';
import { useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk';

export default function UserPage() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    WebApp.expand();
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Invalid user data in localStorage:', error);
      }
    }
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
          justifyContent: 'center',
          alignItems: 'center',
      }}
         elevation={2}
    >
        <Stack direction='row' spacing={2}>
          <Avatar src={user?.photoUrl || undefined}/>

        </Stack>


      </Paper>
      <NavBar />
    </Box>
  )
}