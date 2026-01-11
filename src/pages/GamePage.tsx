import { Avatar, Box } from '@mui/material';
import { useStore } from '../misc/store.ts';
import GameArea from '../components/GamePageComponents/GameArea.tsx';
import BettingArea from '../components/GamePageComponents/BettingArea.tsx';

export default function GamePage() {
  const user = useStore((state) => state.user)

  return (
    <Box
      sx={{
        background: '#2b1436',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        pt: 3,
      }}
    >
      <Box
        sx={{
          width: '90%',
          maxWidth: 500,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Avatar src={user?.photoUrl || undefined} />
        <h2 className="text-white">@{user?.username}</h2>
      </Box>

      <GameArea />

      <BettingArea />
    </Box>
  )
}
