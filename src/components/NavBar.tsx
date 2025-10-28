import { useState } from 'react';
import Paper from '@mui/material/Paper';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';

export default function NavBar() {
  const [value, setValue] = useState<number>(0);

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 30,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80%',
        maxWidth: 500,
        height: 90,
        borderRadius: 6,
        overflow: 'hidden',
        background:
          'radial-gradient(circle, rgba(255,79,160,1) 0%, rgba(182,66,154,1) 50%, rgba(115,46,145,1) 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      elevation={6}
    >
      <BottomNavigation
        sx={{
          background: 'transparent',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          transform: 'translateY(5%)',
        }}
        showLabels
        value={value}
        onChange={(_, newValue: number) => setValue(newValue)}
      >
        <BottomNavigationAction
          label="PVP"
          icon={<img src="/NavBarIcons/icons-03.svg" alt="PVP" width={45} height={45} style={{
            border: '1px solid white',
            borderRadius: '15%',
            padding: '5px',
            backgroundColor: '#732e91',
          }}/>}
          sx={{
            '&.Mui-selected': {
              color: 'inherit',
            },
          }}

        />
        <BottomNavigationAction
          label="Solo"
          icon={<img src="/NavBarIcons/icons-04.svg" alt="Solo" width={45} height={45} style={{
            border: '1px solid white',
            borderRadius: '15%',
            padding: '5px',
            backgroundColor: '#732e91'
          }}/>}
          sx={{
            '&.Mui-selected': {
              color: 'inherit',
            },
          }}
        />
        <BottomNavigationAction
          label="Profile"
          icon={<img src="/NavBarIcons/icons-05.svg" alt="Profile" width={45} height={45} style={{
            border: '1px solid white',
            borderRadius: '15%',
            padding: '5px',
            backgroundColor: '#732e91'
          }}/>}
          sx={{
            '&.Mui-selected': {
              color: 'inherit',
            },
          }}
        />
      </BottomNavigation>
    </Paper>
  );
}
