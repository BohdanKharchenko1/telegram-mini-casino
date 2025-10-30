import { useEffect } from 'react';
import { io, Socket } from 'socket.io-client';

// ✅ Define what your backend sends
interface BalanceUpdate {
  userId: string;
  newBalance: number;
}

export default function useWebSocket(
  userId?: string,
  onBalanceUpdate?: (data: BalanceUpdate) => void
) {
  useEffect(() => {
    if (!userId) return;

    const socket: Socket = io(import.meta.env.VITE_WEB_SOCKET_URL, {
      query: { userId: userId },
    });

    socket.on('connect', () => {
      console.log('WebSocket connected:', socket.id);
    });

    socket.on('balanceUpdate', (data: BalanceUpdate) => {
      console.log('Balance update received:', data);
      onBalanceUpdate?.(data);
    });

    socket.on('disconnect', () => {
      console.log('WebSocket disconnected');
    });

    return () => {
      socket.disconnect();
    };
  }, [userId, onBalanceUpdate]);
}
