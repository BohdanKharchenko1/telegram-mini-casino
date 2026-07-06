import { Chip } from '@mui/material';
import type { GameStatus } from '../../../types/game.ts';

type GameStatusBadgeProps = {
  status?: GameStatus;
};

const statusLabels: Record<GameStatus, string> = {
  waiting_for_players: 'Waiting for players',
  betting_waiting: 'Betting countdown',
  in_progress: 'In progress',
  ended: 'Crashed',
};

export default function GameStatusBadge({ status }: GameStatusBadgeProps) {
  return (
    <Chip
      label={status ? statusLabels[status] : 'Connecting'}
      variant="outlined"
      sx={{
        height: 28,
        color: '#fff',
        borderColor: 'rgba(255,255,255,0.82)',
        borderRadius: 999,
        fontWeight: 800,
        fontSize: 14,
        background:
          status === 'in_progress'
            ? 'rgba(41, 202, 118, 0.22)'
            : 'rgba(255,255,255,0.08)',
        '& .MuiChip-label': {
          px: 2,
        },
      }}
    />
  );
}
