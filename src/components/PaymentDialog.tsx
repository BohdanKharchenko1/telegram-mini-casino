import {  Slide, Typography } from '@mui/material';
import type { TonConnectUI } from '@tonconnect/ui-react';
import { PaymentAmount, PaymentButton, PaymentContent, PaymentDialoge, PaymentTitle } from '../misc/theme.ts';
import type { TransitionProps } from '@mui/material/transitions';
import * as React from 'react';

interface PaymentDialogProps {
  open: boolean;
  tonConnect?: TonConnectUI;
  onClose?: () => void;
}
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown, string>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PaymentDialog({ open, onClose }:PaymentDialogProps) {

  return (
    <PaymentDialoge open={open} onClose={onClose} slots={{
      transition: Transition,
    }}

    >
      <PaymentTitle>Пополнить баланс Bubble</PaymentTitle>
      <PaymentContent>
        <PaymentAmount>0 TON</PaymentAmount>
        <Typography variant="body2" color="#bbb">
          Недостаточно TON для пополнения
        </Typography>
        <PaymentButton sx={{
          marginTop: '20px',
        }}>Пополнить TON</PaymentButton>
      </PaymentContent>
    </PaymentDialoge>
  )
}