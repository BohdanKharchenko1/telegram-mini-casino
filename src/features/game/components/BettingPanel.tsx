import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Avatar, Box, Button, Paper, Stack, Typography } from '@mui/material';

type BettingPanelProps = {
  balance: number;
  canPlaceBet: boolean;
  canCashout: boolean;
  onPlaceBet: (betAmount: string) => void;
  onCashout: () => void;
};

const formatBetAmount = (value: number) => {
  if (!Number.isFinite(value) || value <= 0) return '1';

  return Number.isInteger(value) ? String(value) : value.toFixed(2);
};

export default function BettingPanel({
  balance,
  canPlaceBet,
  canCashout,
  onPlaceBet,
  onCashout,
}: BettingPanelProps) {
  const [betAmount, setBetAmount] = useState('100');

  const numericBetAmount = Number(betAmount);

  const handleHalfBet = () => {
    setBetAmount(formatBetAmount(numericBetAmount / 2));
  };

  const handleDoubleBet = () => {
    setBetAmount(formatBetAmount(numericBetAmount * 2));
  };

  const handlePlaceBet = () => {
    onPlaceBet(betAmount);
  };

  return (
    <Box
      sx={{
        width: '90%',
        maxWidth: 500,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}
    >
      <Box
        sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#fff' }}
      >
        <Avatar src="toncoin-ton-logo.png" sx={{ width: 30, height: 30 }} />
        <Typography component="p" sx={{ fontSize: 22, fontWeight: 900 }}>
          {balance.toFixed(2)}
        </Typography>
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            display: 'grid',
            placeItems: 'center',
            background: 'linear-gradient(145deg, #ffcc24, #ff7b54)',
            boxShadow: '0 10px 24px rgba(255, 178, 38, 0.28)',
          }}
        >
          <AddIcon sx={{ color: '#fff', fontSize: 25 }} />
        </Box>
      </Box>

      <Paper
        sx={{
          borderRadius: '20px',
          background:
            'linear-gradient(180deg, rgba(166,58,126,0.96), rgba(91,32,101,0.98))',
          border: '1px solid rgba(255,255,255,0.18)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.16)',
          p: { xs: 1.8, sm: 2.1 },
        }}
        elevation={0}
      >
        <Typography
          component="label"
          htmlFor="bet-amount"
          sx={{
            display: 'block',
            color: '#fff',
            fontSize: { xs: 21, sm: 23 },
            fontWeight: 800,
            mb: 1.7,
          }}
        >
          Bet
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 68px 68px', sm: '1fr 84px 84px' },
            gap: { xs: 0.9, sm: 1.1 },
            mb: { xs: 1.9, sm: 2.2 },
          }}
        >
          <Box
            component="input"
            id="bet-amount"
            inputMode="decimal"
            value={betAmount}
            onChange={(event) => setBetAmount(event.target.value)}
            sx={{
              minWidth: 0,
              height: { xs: 50, sm: 54 },
              borderRadius: '13px',
              border: '1px solid rgba(255,255,255,0.82)',
              background: '#4b1f4f',
              color: '#ffe100',
              px: 2,
              fontSize: { xs: 28, sm: 32 },
              fontWeight: 900,
              outline: 'none',
              fontFamily: 'inherit',
            }}
          />

          <Button
            type="button"
            onClick={handleHalfBet}
            sx={{
              borderRadius: '13px',
              background: '#8240d2',
              color: '#fff',
              fontSize: { xs: 25, sm: 29 },
              fontWeight: 900,
              textTransform: 'none',
              '&:hover': { background: '#8d46e2' },
            }}
          >
            1/2
          </Button>

          <Button
            type="button"
            onClick={handleDoubleBet}
            sx={{
              borderRadius: '13px',
              background: '#8240d2',
              color: '#fff',
              fontSize: { xs: 25, sm: 29 },
              fontWeight: 900,
              textTransform: 'none',
              '&:hover': { background: '#8d46e2' },
            }}
          >
            x2
          </Button>
        </Box>

        <Stack direction="row" spacing={{ xs: 1.2, sm: 1.5 }}>
          <Button
            variant="contained"
            fullWidth
            disabled={!canPlaceBet}
            onClick={handlePlaceBet}
            sx={{
              height: { xs: 56, sm: 62 },
              borderRadius: '13px',
              background: 'linear-gradient(135deg, #ffd31d, #ff6c7f, #ffbd13)',
              color: '#fff',
              fontSize: { xs: 24, sm: 28 },
              fontWeight: 800,
              textTransform: 'none',
              boxShadow: 'none',
              '&:hover': {
                boxShadow: 'none',
                background:
                  'linear-gradient(135deg, #ffdc3e, #ff7890, #ffc633)',
              },
              '&.Mui-disabled': {
                color: 'rgba(255,255,255,0.45)',
                background: 'rgba(255,255,255,0.12)',
              },
            }}
          >
            Start
          </Button>

          <Button
            variant="contained"
            fullWidth
            disabled={!canCashout}
            onClick={onCashout}
            sx={{
              height: { xs: 56, sm: 62 },
              borderRadius: '13px',
              background: 'linear-gradient(135deg, #c254a2, #81319e)',
              color: '#fff',
              fontSize: { xs: 24, sm: 28 },
              fontWeight: 800,
              textTransform: 'none',
              boxShadow: 'none',
              '&:hover': {
                boxShadow: 'none',
                background: 'linear-gradient(135deg, #cf5caf, #8d3aad)',
              },
              '&.Mui-disabled': {
                color: 'rgba(255,255,255,0.45)',
                background: 'rgba(255,255,255,0.12)',
              },
            }}
          >
            Cashout
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
