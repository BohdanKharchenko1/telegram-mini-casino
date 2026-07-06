import { create } from 'zustand';
import type { GameState } from '../types/game.ts';
import type { User } from '../types/user.ts';

export type SocketStatus =
  | 'idle'
  | 'connecting'
  | 'connected'
  | 'disconnected'
  | 'error';

interface GameStoreState {
  user: User | null;
  gameState: GameState | null;
  coefficient: number;
  socketStatus: SocketStatus;
  socketError: string | null;
  balance: number;
  demoBalance: number;
  setUser: (user: User) => void;
  setGameState: (gameState: GameState) => void;
  setCoefficient: (coefficient: number) => void;
  setSocketStatus: (socketStatus: SocketStatus) => void;
  setSocketError: (socketError: string | null) => void;
  setBalance: (balance: number) => void;
  setDemoBalance: (demoBalance: number) => void;
  adjustBalance: (amount: number) => void;
  adjustDemoBalance: (amount: number) => void;
}

export const useGameStore = create<GameStoreState>((set) => ({
  user: null,
  gameState: null,
  coefficient: 1,
  socketStatus: 'idle',
  socketError: null,
  balance: 0,
  demoBalance: 500,
  setUser: (user) => set({ user, balance: user.balance }),
  setGameState: (gameState) =>
    set({ gameState, coefficient: gameState.coefficient }),
  setCoefficient: (coefficient) => set({ coefficient }),
  setSocketStatus: (socketStatus) => set({ socketStatus }),
  setSocketError: (socketError) => set({ socketError }),
  setBalance: (balance) => set({ balance }),
  setDemoBalance: (demoBalance) => set({ demoBalance }),
  adjustBalance: (amount) =>
    set((state) => ({ balance: state.balance + amount })),
  adjustDemoBalance: (amount) =>
    set((state) => ({ demoBalance: state.demoBalance + amount })),
}));

export const useStore = useGameStore;
