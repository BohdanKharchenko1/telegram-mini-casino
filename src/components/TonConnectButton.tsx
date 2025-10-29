import { type TonConnectUI, useTonWallet } from '@tonconnect/ui-react';
import { useEffect } from 'react';
import { updateWallet } from '../api/wallet.ts';
import {  Stack } from '@mui/material';
import { ConnectButton, TopUpButton, WithdrawButton } from '../misc/theme.ts';

interface TonConnectButtonProps {
  tonConnect: TonConnectUI,
  userId: string,
}

export function TonConnectButton({ tonConnect, userId }: TonConnectButtonProps) {
  const wallet = useTonWallet();
  useEffect(()=>{
    if(wallet){
      const walletAddress = wallet?.account?.address;
      updateWallet(walletAddress, userId);
    }
    }, [wallet, userId]
  )




  return(
    /*<div className='flex items-center justify-center min-h-screen'>
      <button className='p-2 bg-blue-400 ' onClick={() => tonConnect.openModal()}>
          Connect Wallet
      </button>
      <button className='p-2 bg-blue-400 ' onClick={() => tonConnect.disconnect()}>
        Close Wallet
      </button>
      {isConnected && (
        <button className='p-2 accent-red-600 '>
          hello
        </button>
      )
      }
    </div>
     */
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{
        width: '100%',
        mt: 2,
      }}
    >
      {!wallet ? (
        <ConnectButton onClick={() => tonConnect.openModal()}>
          Connect
        </ConnectButton>
      ) : (
        <>
          <TopUpButton sx={{ flex: '1 1 45%', width: '45%' }}>Top up</TopUpButton>
          <WithdrawButton sx={{ flex: '1 1 45%', width: '45%' }}>
            Withdraw
          </WithdrawButton>
        </>
      )}
    </Stack>

  );
}