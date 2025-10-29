import {  DialogActions, Typography } from '@mui/material';
import type { TonConnectUI } from '@tonconnect/ui-react';
import { PaymentAmount, PaymentButton, PaymentContent, PaymentDialoge, PaymentTitle } from '../misc/theme.ts';

interface PaymentDialogProps {
  open: boolean;
  tonConnect?: TonConnectUI;
  onClose?: () => void;
}
export default function PaymentDialog({ open, onClose }:PaymentDialogProps) {

  return (
    <PaymentDialoge open={open} onClose={onClose} >
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
    </PaymentDialoge>
  )
}