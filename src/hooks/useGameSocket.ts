import { useEffect } from 'react';
import { retrieveRawInitData } from '@telegram-apps/sdk';
import { socket } from '../shared/socket.ts';
import { useGameStore } from '../store/useGameStore.ts';
import type { GameState } from '../types/game.ts';
import type { User } from '../types/user.ts';

export default function useGameSocket() {
  const setUser = useGameStore((state) => state.setUser);
  const setGameState = useGameStore((state) => state.setGameState);
  const setCoefficient = useGameStore((state) => state.setCoefficient);
  const setSocketStatus = useGameStore((state) => state.setSocketStatus);
  const setSocketError = useGameStore((state) => state.setSocketError);

  useEffect(() => {
    let initData: string | undefined;

    try {
      initData = retrieveRawInitData();
    } catch {
      setSocketStatus('disconnected');
      setSocketError('Opened outside Telegram. Socket connection skipped.');
      return;
    }

    if (!initData) {
      setSocketStatus('error');
      setSocketError('Telegram init data is missing');
      return;
    }

    const handleConnect = () => {
      setSocketStatus('connected');
      setSocketError(null);
    };

    const handleDisconnect = () => {
      setSocketStatus('disconnected');
    };

    const handleConnectError = (error: Error) => {
      setSocketStatus('error');
      setSocketError(error.message);
    };

    const handleUserSnapshot = (user: User) => {
      setUser(user);
    };

    const handleGameState = (gameState: GameState) => {
      setGameState(gameState);
    };

    const handleCoefficient = (coefficient: number) => {
      setCoefficient(coefficient);
    };

    socket.auth = { initData };
    setSocketStatus('connecting');

    socket.on('connect', handleConnect);
    socket.on('disconnect', handleDisconnect);
    socket.on('connect_error', handleConnectError);
    socket.on('user_snapshot', handleUserSnapshot);
    socket.on('state_snapshot', handleGameState);
    socket.on('state_sync', handleGameState);
    socket.on('coefficient_sync', handleCoefficient);

    socket.connect();

    return () => {
      socket.off('connect', handleConnect);
      socket.off('disconnect', handleDisconnect);
      socket.off('connect_error', handleConnectError);
      socket.off('user_snapshot', handleUserSnapshot);
      socket.off('state_snapshot', handleGameState);
      socket.off('state_sync', handleGameState);
      socket.off('coefficient_sync', handleCoefficient);
      socket.disconnect();
    };
  }, [
    setCoefficient,
    setGameState,
    setSocketError,
    setSocketStatus,
    setUser,
  ]);
}
