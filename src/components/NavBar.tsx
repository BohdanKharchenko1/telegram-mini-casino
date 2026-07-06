import Paper from '@mui/material/Paper';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';

type NavBarProps = {
  page: number;
  onChange: (nextPage: number) => void;
};

export default function NavBar({ page, onChange }: NavBarProps) {
  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 30,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90%',
        maxWidth: 500,
        height: 90,
        borderRadius: 6,
        overflow: 'hidden',
        background:
          'linear-gradient(-90deg,rgba(109, 52, 205, 1) 0%, rgba(115, 46, 145, 1) 100%)',
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
        value={page}
        onChange={(_, page: number) => onChange(page)}
      >
        <BottomNavigationAction
          label="PVP"
          value={0}
          icon={
            <img
              src="/NavBarIcons/icons-03.svg"
              alt="PVP"
              width={45}
              height={45}
              style={{
                border: '1px solid white',
                borderRadius: '15%',
                padding: '5px',
                backgroundColor: '#732e91',
              }}
            />
          }
        />

        <BottomNavigationAction
          label="Solo"
          value={1}
          icon={
            <img
              src="/NavBarIcons/icons-04.svg"
              alt="Solo"
              width={45}
              height={45}
              style={{
                border: '1px solid white',
                borderRadius: '15%',
                padding: '5px',
                backgroundColor: '#732e91',
              }}
            />
          }
        />

        <BottomNavigationAction
          label="Profile"
          value={2}
          icon={
            <img
              src="/NavBarIcons/icons-05.svg"
              alt="Profile"
              width={45}
              height={45}
              style={{
                border: '1px solid white',
                borderRadius: '15%',
                padding: '5px',
                backgroundColor: '#732e91',
              }}
            />
          }
          disableTouchRipple
        />
      </BottomNavigation>
    </Paper>
  );
}
