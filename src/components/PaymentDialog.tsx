import { Dialog, DialogActions, DialogTitle, Typography } from '@mui/material';
import type { TonConnectUI } from '@tonconnect/ui-react';
import { PaymentAmount, PaymentButton, PaymentContent, PaymentTitle } from '../misc/theme.ts';

interface PaymentDialogProps {
  open: boolean;
  tonConnect: TonConnectUI;
}
export default function PaymentDialog({ open, tonConnect }:PaymentDialogProps) {

  return (
    <PaymentDialog open={open}>
      <PaymentTitle>Пополнить баланс Bubble</PaymentTitle>
      <PaymentContent>
        <PaymentAmount>0 TON</PaymentAmount>
        <Typography variant="body2" color="#bbb">
          Недостаточно TON для пополнения
        </Typography>
      </PaymentContent>
      <DialogActions sx={{ justifyContent: 'center' }}>
        <PaymentButton>Пополнить TON</PaymentButton>
      </DialogActions>
    </PaymentDialog>
  )
}