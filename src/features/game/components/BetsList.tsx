import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material';
import type { Bet } from '../../../types/game.ts';

type BetsListProps = {
  bets: Bet[];
};

export default function BetsList({ bets }: BetsListProps) {
  return (
    <Paper
      sx={{
        width: '90%',
        maxWidth: 500,
        borderRadius: 5,
        background: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.1)',
        color: '#fff',
        overflow: 'hidden',
      }}
      elevation={0}
    >
      <Typography sx={{ px: 2, pt: 2, fontWeight: 800 }}>
        Bets
      </Typography>
      <List dense>
        {bets.length === 0 && (
          <ListItem>
            <ListItemText primary="No bets yet" />
          </ListItem>
        )}

        {bets.map((bet) => (
          <ListItem key={bet.user.id}>
            <ListItemAvatar>
              <Avatar src={bet.user.photoUrl ?? undefined}>
                {(bet.user.username ?? '?').slice(0, 1).toUpperCase()}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={bet.user.username ?? 'Anonymous'}
              secondary={
                bet.cashedOutAt
                  ? `Cashed out at ${bet.cashedOutAt.toFixed(2)}x`
                  : `Bet ${bet.betAmount}`
              }
              secondaryTypographyProps={{ color: 'rgba(255,255,255,0.7)' }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
