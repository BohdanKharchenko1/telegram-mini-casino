import Paper from '@mui/material/Paper';

export default function GameArea() {
  return (
    <Paper
      sx={{
        width: '90%',
        maxWidth: 500,
        height: '35vh',
        borderRadius: 6,
        background:
          'linear-gradient(27deg, rgba(255,79,160,0.6) 0%, rgba(182,66,154,0.6) 50%, rgba(115,46,145,0.6) 100%)',
        p: 3,
      }}
      elevation={2}
    />
  );
}
