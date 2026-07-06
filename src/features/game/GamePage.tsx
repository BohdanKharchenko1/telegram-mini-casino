import { Avatar, Box, Stack, Typography } from '@mui/material';
import { socket } from '../../shared/socket.ts';
import { useGameStore } from '../../store/useGameStore.ts';
import BettingPanel from './components/BettingPanel.tsx';
import BetsList from './components/BetsList.tsx';
import CoefficientDisplay from './components/CoefficientDisplay.tsx';

export default function GamePage() {
  const user = useGameStore((state) => state.user);
  const gameState = useGameStore((state) => state.gameState);
  const coefficient = useGameStore((state) => state.coefficient);
  const balance = user?.balance ?? 0;
  const status = gameState?.status;
  const currentUserBet = gameState?.bets.find(
    (bet) => bet.user.id === user?.id,
  );
  const canPlaceBet =
    (status === 'waiting_for_players' || status === 'betting_waiting') &&
    !currentUserBet;
  const canCashout =
    status === 'in_progress' &&
    Boolean(currentUserBet) &&
    !currentUserBet?.cashedOutAt;

  console.log('cashout debug', {
    status,
    userId: user?.id,
    username: user?.username,
    bets: gameState?.bets.map((bet) => ({
      betUserId: bet.user.id,
      username: bet.user.username,
      betAmount: bet.betAmount,
      cashedOutAt: bet.cashedOutAt,
    })),
    currentUserBet,
    canCashout,
  });

  const handlePlaceBet = (betAmount: string) => {
    socket.emit('place_bet', { betAmount });
  };

  const handleCashout = () => {
    socket.emit('cashout');
  };

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
        pb: 16,
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: '90%', maxWidth: 500, color: '#fff' }}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar src={user?.photoUrl ?? undefined} />
          <Box>
            <Typography sx={{ fontWeight: 800 }}>
              @{user?.username ?? 'guest'}
            </Typography>
          </Box>
        </Stack>
      </Stack>

      <CoefficientDisplay coefficient={coefficient} status={status} />

      <BettingPanel
        balance={balance}
        canPlaceBet={canPlaceBet}
        canCashout={canCashout}
        onPlaceBet={handlePlaceBet}
        onCashout={handleCashout}
      />

      <BetsList bets={gameState?.bets ?? []} />
    </Box>
  );
}
