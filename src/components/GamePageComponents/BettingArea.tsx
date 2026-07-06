import Paper from '@mui/material/Paper';
import { Avatar, Box } from '@mui/material';
import { useStore } from '../../misc/store.ts';
import AddIcon from '@mui/icons-material/Add';
export default function BettingArea() {
  const user = useStore((state) => state.user);

  return (
    <Box
      sx={{
        width: '90%',
        maxWidth: 500,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Avatar src="toncoin-ton-logo.png" sx={{ width: 24, height: 24 }} />
        <h2 className="text-white">{Number(user?.balance ?? 0).toFixed(2)}</h2>
        <AddIcon fontSize="medium" color="warning" />
      </Box>

      <Paper
        sx={{
          height: '15vh',
          borderRadius: 6,
          background:
            'linear-gradient(27deg, rgba(255,79,160,0.6) 0%, rgba(182,66,154,0.6) 50%, rgba(115,46,145,0.6) 100%)',
          p: 3,
        }}
        elevation={2}
      />
    </Box>
  );
}
