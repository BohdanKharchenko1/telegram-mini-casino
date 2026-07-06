export type GameStatus =
  | 'waiting_for_players'
  | 'betting_waiting'
  | 'in_progress'
  | 'ended';

export type Bet = {
  user: {
    id: string;
    username: string | null;
    photoUrl: string | null;
  };
  joinedAt: string;
  betAmount: string;
  cashedOutAt: number | null;
  cashedOutAmount: string | null;
};

export type GameState = {
  id: string;
  status: GameStatus;
  createdAt: string;
  coefficient: number;
  startedAt: string | null;
  finishedAt: string | null;
  bets: Bet[];
};
