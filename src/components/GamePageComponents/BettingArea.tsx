import { Avatar, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useStore } from '../../misc/store.ts';
import Paper from '@mui/material/Paper';

export default function BettingArea() {
  const user = useStore((state) => state.user);
  return (
    <Box sx={{
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%',
      display: 'flex',
      flexDirection: 'column',
      top: 380,
      p:3,
      gap:2
    }}>
      <Box sx={{
        justifyContent: 'start',
        flexDirection: 'row',
        display: 'flex',
        gap: 1
      }}>
      <Avatar
        src="toncoin-ton-logo.png"
        sx={{
          width: 24,
          height: 24,
        }}
      />
        <h2 className='text-white'>{user?.balance}</h2>
      <AddIcon fontSize="medium" color='warning'/>
      </Box>
      <Paper
        sx={{
          position: 'absolute',
          left: '50%',
          height: '15vh',
          top:55,
          transform: 'translateX(-50%)',
          width: '90%',
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

      </Paper>
    </Box>
  )
}