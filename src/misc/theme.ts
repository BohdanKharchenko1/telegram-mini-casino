import { Button, createTheme, Dialog, DialogContent, DialogTitle, styled, Typography } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: 'Comfortaa, sans-serif',
  },
  components: {
    MuiBottomNavigationAction: {

      styleOverrides: {
        label: {
          fontFamily: 'Comfortaa, sans-serif',
          fontWeight: 700,
          paddingTop: '2px',
        },
        root: {
          '&.Mui-selected': {
            color: 'inherit',
          },
        },
      },
    },

  },
});

export const ConnectButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: 'linear-gradient(117deg,rgba(255, 79, 160, 1) 0%, rgba(216, 195, 219, 1) 100%)',
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

export const TopUpButton = styled(Button)({
  textTransform: 'none',
  fontSize: 18,
  fontWeight: 600,
  color: '#fff',
  padding: '10px 0', // 👈 normal vertical padding only
  width: '45%',
  borderRadius: '12px',
  background: 'linear-gradient(117deg, rgba(255,79,160,1) 0%, rgba(216,195,219,1) 100%)',
  boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
  '&:hover': {
    background: 'linear-gradient(117deg, rgba(255,79,160,0.9) 0%, rgba(216,195,219,0.9) 100%)',
    boxShadow: '0 3px 8px rgba(0,0,0,0.2)',
  },
});

// 💰 Transparent "Withdraw" button
export const WithdrawButton = styled(Button)({
  textTransform: 'none',
  fontSize: 18,
  fontWeight: 600,
  color: '#fff',
  padding: '10px 0', // 👈 normal vertical padding only
  width: '45%',
  borderRadius: '12px',
  border: '2px solid rgba(255,255,255,0.8)',
  background: 'transparent',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  '& svg, & img': {
    color: '#FFD700',
  },
  '&:hover': {
    background: 'rgba(255,255,255,0.08)',
    borderColor: '#fff',
  },
});

export const PaymentDialoge = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    background: 'linear-gradient(180deg, #2B0036 0%, #16001E 100%)',
    borderRadius: '25px 25px 0 0',
    padding: theme.spacing(4),
    color: '#fff',
    width: '100%',
    maxWidth: '500px',
    height: '410px',
    boxShadow: '0 0 40px rgba(255, 105, 180, 0.4)',
    bottom:0,
    position: 'fixed',
    margin:0,
  },

}));

export const PaymentTitle = styled(DialogTitle)({
  textAlign: 'center',
  fontWeight: 600,
  fontSize: '22px',
  color: '#fff',
});

export const PaymentContent = styled(DialogContent)({
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
  color: '#ddd',
});

export const PaymentAmount = styled(Typography)({
  fontSize: '48px',
  fontWeight: 700,
  color: '#fff',
  textShadow: '0 0 10px rgba(255,255,255,0.5)',
});

export const PaymentButton = styled(Button)({
  background: 'linear-gradient(90deg, #FF4E8A 0%, #FF84E8 100%)',
  borderRadius: '12px',
  color: '#fff',
  padding: '15px 0px',
  width: '90%',
  fontWeight: 700,

  fontSize: '16px',
  textTransform: 'none',
  '&:hover': {
    background: 'linear-gradient(90deg, #FF84E8 0%, #FF4E8A 100%)',
  },
});

