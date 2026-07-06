import { Box, Paper, Typography } from '@mui/material';
import GameStatusBadge from './GameStatusBadge.tsx';
import type { GameStatus } from '../../../types/game.ts';

type CoefficientDisplayProps = {
  coefficient: number;
  status?: GameStatus;
};

export default function CoefficientDisplay({
  coefficient,
  status,
}: CoefficientDisplayProps) {
  return (
    <Paper
      sx={{
        width: '90%',
        maxWidth: 500,
        minHeight: { xs: 300, sm: 360 },
        borderRadius: '22px',
        background:
          'linear-gradient(145deg, rgba(171,61,128,0.96), rgba(84,32,103,0.98))',
        border: '1px solid rgba(255,255,255,0.16)',
        p: { xs: 2, sm: 2.6 },
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.14)',
        '@keyframes bubbleFloat': {
          '0%': {
            transform: 'translateY(0) rotate(-1.2deg) scale(1)',
          },
          '50%': {
            transform: 'translateY(-8px) rotate(1.2deg) scale(1.035)',
          },
          '100%': {
            transform: 'translateY(0) rotate(-1.2deg) scale(1)',
          },
        },
      }}
      elevation={0}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            border: '1px solid rgba(255,255,255,0.82)',
            borderRadius: 999,
            px: 2,
            py: 0.35,
            fontSize: 14,
            fontWeight: 800,
            color: '#fff',
            background: 'rgba(255,255,255,0.08)',
          }}
        >
          Round #1
        </Box>

        <GameStatusBadge status={status} />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          display: 'grid',
          placeItems: 'center',
          pt: 4,
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: { xs: 230, sm: 280 },
            height: { xs: 230, sm: 280 },
            display: 'grid',
            placeItems: 'center',
            animation: 'bubbleFloat 4.2s ease-in-out infinite',
            filter: 'drop-shadow(0 28px 32px rgba(28, 8, 42, 0.28))',
          }}
        >
          <Box
            component="img"
            src="/Game/pink_glossy_bubble.svg"
            alt=""
            aria-hidden="true"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block',
            }}
          />

          <Typography
            component="p"
            sx={{
              position: 'absolute',
              color: '#ffd000',
              fontSize: { xs: 60, sm: 76 },
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: '-0.07em',
              textShadow: '0 10px 26px rgba(255, 197, 0, 0.22)',
            }}
          >
            x{coefficient.toFixed(2)}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}
