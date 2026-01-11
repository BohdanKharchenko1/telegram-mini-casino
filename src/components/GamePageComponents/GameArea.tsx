import Paper from '@mui/material/Paper';

export default function GameArea() {
  return (
    <Paper
      sx={{
        position: 'absolute',
        top: '9%',
        left: '50%',
        height: '35vh',
        transform: 'translateX(-50%)',
        width: '80%',
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
  )
}