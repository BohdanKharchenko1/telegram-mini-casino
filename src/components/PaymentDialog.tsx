import {  Slide, Typography } from '@mui/material';
import type { TonConnectUI } from '@tonconnect/ui-react';
import {
  PaymentAmountBox, PaymentAmountInput,
  PaymentButton,
  PaymentContent,
  PaymentDialoge,
  PaymentTitle, TonLabel,
} from '../misc/theme.ts';
import type { TransitionProps } from '@mui/material/transitions';
import * as React from 'react';
import { useState } from 'react';

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
  const [amount, setAmount] = useState<string>();
  return (
    <PaymentDialoge open={open} onClose={onClose} slots={{
      transition: Transition,
    }}

    >
      <PaymentTitle>Пополнить баланс Bubble</PaymentTitle>
      <PaymentContent>
        <PaymentAmountBox>
          <PaymentAmountInput
            placeholder={'0'}
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <TonLabel>TON</TonLabel>
        </PaymentAmountBox>
        <Typography variant="body2" color="#bbb">
          Недостаточно TON для пополнения
        </Typography>
        <PaymentButton sx={{
          marginTop: '15px',
        }}>Пополнить TON</PaymentButton>
      </PaymentContent>
    </PaymentDialoge>
  )
}